import Link from "next/link";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { getBlogPosts } from "@/lib/storyblok";
import type { BlogPost } from "@/lib/storyblok";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const revalidate = 60;

export const metadata: Metadata = buildMetadata({
  title: "Business Financing Blog | ZEO.co",
  description:
    "Practical guides, comparisons, and insights on business financing — term loans, lines of credit, SBA programs, equipment financing, and more.",
  path: "/blog",
  keywords: [
    "business financing",
    "small business loans",
    "SBA loans",
    "equipment financing",
    "business line of credit",
  ],
});

const PER_PAGE = 12;

function formatDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return "";
  }
}

function PostCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col gap-3 rounded-xl border border-[#1e2620] bg-[#111512] p-6 transition-colors hover:border-[#22c55e]/30 hover:bg-[#0f1410]"
    >
      {post.category && (
        <span className="self-start rounded-full border border-[#22c55e]/20 bg-[#22c55e]/10 px-2.5 py-0.5 text-xs font-medium text-[#22c55e]">
          {post.category}
        </span>
      )}

      <h2 className="text-base font-semibold leading-snug text-[#eef2ec] transition-colors group-hover:text-[#22c55e] line-clamp-2">
        {post.title}
      </h2>

      {post.intro && (
        <p className="text-sm leading-relaxed text-[#9aaa98] line-clamp-3">
          {post.intro}
        </p>
      )}

      <div className="mt-auto flex items-center justify-between pt-2">
        {post.date ? (
          <time
            dateTime={post.date}
            className="text-xs text-[#6b7e69] font-mono"
          >
            {formatDate(post.date)}
          </time>
        ) : (
          <span />
        )}
        <span className="text-xs font-medium text-[#22c55e] opacity-0 transition-opacity group-hover:opacity-100">
          Read more →
        </span>
      </div>
    </Link>
  );
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-[#1e2620] bg-[#111512] py-24 text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#1e2620] bg-[#0a0d0b]">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          className="text-[#6b7e69]"
        >
          <rect
            x="3"
            y="4"
            width="14"
            height="3"
            rx="1"
            fill="currentColor"
            opacity="0.4"
          />
          <rect
            x="3"
            y="9"
            width="10"
            height="2"
            rx="1"
            fill="currentColor"
            opacity="0.4"
          />
          <rect
            x="3"
            y="13"
            width="7"
            height="2"
            rx="1"
            fill="currentColor"
            opacity="0.4"
          />
        </svg>
      </div>
      <p className="text-base font-medium text-[#9aaa98]">No posts yet</p>
      <p className="text-sm text-[#6b7e69]">Check back soon for articles on business financing.</p>
    </div>
  );
}

function Pagination({
  page,
  total,
  perPage,
}: {
  page: number;
  total: number;
  perPage: number;
}) {
  const totalPages = Math.ceil(total / perPage);
  if (totalPages <= 1) return null;

  const prev = page > 1 ? page - 1 : null;
  const next = page < totalPages ? page + 1 : null;

  const pageUrl = (p: number) => (p === 1 ? "/blog" : `/blog?page=${p}`);

  const pages: (number | "ellipsis")[] = [];
  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) pages.push(i);
  } else {
    pages.push(1);
    if (page > 3) pages.push("ellipsis");
    for (
      let i = Math.max(2, page - 1);
      i <= Math.min(totalPages - 1, page + 1);
      i++
    ) {
      pages.push(i);
    }
    if (page < totalPages - 2) pages.push("ellipsis");
    pages.push(totalPages);
  }

  return (
    <nav
      aria-label="Pagination"
      className="mt-12 flex items-center justify-center gap-1"
    >
      {prev !== null ? (
        <Link
          href={pageUrl(prev)}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#1e2620] bg-[#111512] text-[#9aaa98] transition-colors hover:border-[#22c55e]/30 hover:text-[#eef2ec]"
          aria-label="Previous page"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M10 12L6 8L10 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      ) : (
        <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#1e2620] bg-[#0a0d0b] text-[#6b7e69] opacity-40 cursor-not-allowed">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M10 12L6 8L10 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      )}

      {pages.map((p, i) =>
        p === "ellipsis" ? (
          <span
            key={`ellipsis-${i}`}
            className="flex h-9 w-9 items-center justify-center text-[#6b7e69] text-sm"
          >
            …
          </span>
        ) : (
          <Link
            key={p}
            href={pageUrl(p)}
            aria-current={p === page ? "page" : undefined}
            className={
              p === page
                ? "flex h-9 w-9 items-center justify-center rounded-lg border border-[#22c55e]/40 bg-[#22c55e]/10 text-sm font-semibold text-[#22c55e]"
                : "flex h-9 w-9 items-center justify-center rounded-lg border border-[#1e2620] bg-[#111512] text-sm text-[#9aaa98] transition-colors hover:border-[#22c55e]/30 hover:text-[#eef2ec]"
            }
          >
            {p}
          </Link>
        )
      )}

      {next !== null ? (
        <Link
          href={pageUrl(next)}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#1e2620] bg-[#111512] text-[#9aaa98] transition-colors hover:border-[#22c55e]/30 hover:text-[#eef2ec]"
          aria-label="Next page"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M6 4L10 8L6 12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      ) : (
        <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#1e2620] bg-[#0a0d0b] text-[#6b7e69] opacity-40 cursor-not-allowed">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M6 4L10 8L6 12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      )}
    </nav>
  );
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const sp = await searchParams;
  const page = Math.max(1, parseInt(sp.page ?? "1", 10) || 1);

  let posts: BlogPost[] = [];
  let total = 0;
  let fetchError = false;

  try {
    const result = await getBlogPosts({ page, perPage: PER_PAGE });
    posts = result.posts;
    total = result.total;
  } catch {
    fetchError = true;
  }

  return (
    <main className="min-h-screen bg-[#0a0d0b]">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Blog", href: "/blog" }]} />

        <div className="mt-8 mb-10">
          <h1 className="text-3xl font-bold tracking-tight text-[#eef2ec] sm:text-4xl">
            Business Financing Blog
          </h1>
          <p className="mt-3 max-w-2xl text-base text-[#9aaa98]">
            Practical guides and insights on funding your business — from SBA
            loans and equipment financing to lines of credit and alternative
            lending.
          </p>
        </div>

        {fetchError ? (
          <div className="rounded-xl border border-red-900/30 bg-red-950/10 p-6 text-sm text-red-400">
            Unable to load posts at this time. Please try again shortly.
          </div>
        ) : posts.length === 0 ? (
          <EmptyState />
        ) : (
          <>
            {total > PER_PAGE && (
              <p className="mb-6 text-sm text-[#6b7e69]">
                {total} articles — page {page} of {Math.ceil(total / PER_PAGE)}
              </p>
            )}

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>

            <Pagination page={page} total={total} perPage={PER_PAGE} />
          </>
        )}
      </div>
    </main>
  );
}
