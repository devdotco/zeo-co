import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ProductDisclaimer from "@/components/ui/ProductDisclaimer";
import { getBlogPost, getBlogSlugs, richTextToHtml } from "@/lib/storyblok";
import { buildMetadata } from "@/lib/metadata";

export const revalidate = 60;

// ── Static params ─────────────────────────────────────────────────────────────

export async function generateStaticParams() {
  const slugs = await getBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

// ── Metadata ──────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return { title: "Post Not Found | ZEO.co" };
  }

  return buildMetadata({
    title: `${post.title} | ZEO.co`,
    description: post.intro || `${post.title} — ZEO.co blog.`,
    path: `/blog/${slug}`,
  });
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function formatDate(iso: string): string {
  try {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) notFound();

  const bodyHtml = post.body
    ? typeof post.body === "string"
      ? post.body
      : richTextToHtml(post.body)
    : "";

  return (
    <div className="min-h-screen bg-[#ffffff]">
      {/* ── Article header ─────────────────────────────────────────── */}
      <div className="border-b border-[#e5e5e5]">
        <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
          <Breadcrumbs
            items={[
              { label: "Blog", href: "/blog" },
              { label: post.title },
            ]}
          />

          {/* Category pill */}
          {post.category && (
            <div className="mt-6">
              <span className="inline-flex items-center rounded-full border border-[#0f0f0f]/20 bg-[#0f0f0f]/8 px-2.5 py-0.5 text-xs font-medium text-white tracking-wide uppercase">
                {post.category}
              </span>
            </div>
          )}

          {/* Title */}
          <h1 className="mt-4 text-2xl font-semibold leading-tight text-[#0f0f0f] sm:text-3xl lg:text-4xl" style={{ textWrap: "balance" }}>
            {post.title}
          </h1>

          {/* Intro */}
          {post.intro && (
            <p className="mt-4 text-base leading-relaxed text-[#737373] sm:text-lg">
              {post.intro}
            </p>
          )}

          {/* Meta row */}
          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#a3a3a3]">
            {post.date && (
              <time dateTime={post.date}>
                {formatDate(post.date)}
              </time>
            )}
            {post.author && (
              <>
                <span aria-hidden className="text-[#e5e5e5]">·</span>
                <span>{post.author}</span>
              </>
            )}
            {post.readTime && (
              <>
                <span aria-hidden className="text-[#e5e5e5]">·</span>
                <span>{post.readTime} min read</span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* ── Body ────────────────────────────────────────────────────── */}
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
        {bodyHtml ? (
          <div
            className="prose-zeo"
            dangerouslySetInnerHTML={{ __html: bodyHtml }}
          />
        ) : (
          <p className="text-[#a3a3a3]">No content available.</p>
        )}

        {/* ── Disclaimer ───────────────────────────────────────────── */}
        <div className="mt-12 border-t border-[#e5e5e5] pt-8">
          <ProductDisclaimer type="general" />
        </div>
      </div>

      {/* Prose styles scoped to this page */}
      <style>{`
        .prose-zeo {
          color: #373737;
          font-size: 1rem;
          line-height: 1.75;
          max-width: 65ch;
        }
        .prose-zeo p {
          margin: 0 0 1.25em;
        }
        .prose-zeo p:last-child {
          margin-bottom: 0;
        }
        .prose-zeo h2 {
          color: #0f0f0f;
          font-size: 1.25rem;
          font-weight: 600;
          line-height: 1.35;
          margin: 2em 0 0.6em;
          text-wrap: balance;
        }
        .prose-zeo h2:first-child {
          margin-top: 0;
        }
        .prose-zeo ul,
        .prose-zeo ol {
          margin: 0 0 1.25em 1.25em;
          padding: 0;
        }
        .prose-zeo li {
          margin-bottom: 0.35em;
        }
        .prose-zeo blockquote {
          border-left: 2px solid #0f0f0f;
          margin: 1.5em 0;
          padding: 0.5em 0 0.5em 1.25em;
          color: #737373;
          font-style: italic;
        }
        .prose-zeo strong {
          color: #0f0f0f;
          font-weight: 600;
        }
        .prose-zeo em {
          color: #737373;
        }
        .prose-zeo code {
          font-family: var(--font-mono, "IBM Plex Mono", monospace);
          font-size: 0.875em;
          color: #0f0f0f;
          background: #f5f5f5;
          border: 1px solid #e5e5e5;
          border-radius: 3px;
          padding: 0.1em 0.35em;
        }
        .prose-zeo hr {
          border: none;
          border-top: 1px solid #e5e5e5;
          margin: 2em 0;
        }
        .prose-zeo a {
          color: #0f0f0f;
          text-decoration: underline;
          text-decoration-color: rgba(0, 0, 0, 0.25);
          text-underline-offset: 2px;
          transition: text-decoration-color 0.15s;
        }
        .prose-zeo a:hover {
          text-decoration-color: #0f0f0f;
        }
        .prose-zeo a:focus-visible {
          outline: 2px solid #0f0f0f;
          outline-offset: 2px;
          border-radius: 2px;
        }
      `}</style>
    </div>
  );
}
