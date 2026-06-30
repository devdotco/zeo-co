import StoryblokClient from "storyblok-js-client";

let _client: StoryblokClient | null = null;

function getClient(preview = false): StoryblokClient {
  if (_client) return _client;

  const token = preview
    ? process.env.STORYBLOK_PREVIEW_TOKEN
    : process.env.STORYBLOK_API_KEY;

  if (!token) {
    throw new Error(
      "Storyblok token not set. Add STORYBLOK_API_KEY to .env.local"
    );
  }

  _client = new StoryblokClient({
    accessToken: token,
    region: (process.env.STORYBLOK_REGION as "eu" | "us" | "ap" | "ca" | "cn") ?? "eu",
    cache: { clear: "auto", type: "memory" },
  });

  return _client;
}

const BLOG_FOLDER = "blog";

export interface BlogPost {
  slug: string;
  title: string;
  intro: string;
  date: string;
  category?: string;
  body?: unknown;
  author?: string;
  readTime?: number;
}

export async function getBlogPosts(options: {
  page?: number;
  perPage?: number;
  category?: string;
} = {}): Promise<{ posts: BlogPost[]; total: number }> {
  const { page = 1, perPage = 12, category } = options;
  const client = getClient();

  const params: Record<string, unknown> = {
    version: "published",
    starts_with: `${BLOG_FOLDER}/`,
    sort_by: "first_published_at:desc",
    per_page: perPage,
    page,
    filter_query: { component: { in: "blog_post" } },
    resolve_relations: "blog_post.author,blog_post.category",
  };

  if (category) {
    (params.filter_query as Record<string, unknown>).category = { in: category };
  }

  const response = await client.getStories(params);

  return {
    posts: response.data.stories.map((s) => {
      const c = ((s.content as Record<string, unknown>) ?? {}) as Record<string, unknown>;
      return {
        slug: s.slug as string,
        title: (c.title as string) ?? "",
        intro: (c.intro as string) ?? "",
        date: (s.first_published_at as string) ?? (s.created_at as string),
        category: resolveField(c.category),
        author: resolveField(c.author),
      };
    }),
    total: response.total,
  };
}

function resolveField(val: unknown): string | undefined {
  if (typeof val === "string") return val || undefined;
  if (val && typeof val === "object") {
    const r = (val as Record<string, unknown>)?.content as Record<string, unknown>;
    return (r?.name as string) || undefined;
  }
  return undefined;
}

export async function getBlogPost(slug: string, preview = false): Promise<BlogPost | null> {
  try {
    const client = getClient(preview);
    const response = await client.getStory(`${BLOG_FOLDER}/${slug}`, {
      version: preview ? "draft" : "published",
      resolve_relations: "blog_post.author,blog_post.category",
    });
    const s = response.data.story;
    const c = (s.content ?? {}) as Record<string, unknown>;
    return {
      slug: s.slug,
      title: (c.title as string) ?? "",
      intro: (c.intro as string) ?? "",
      date: s.first_published_at ?? s.created_at,
      body: c.body,
      category: resolveField(c.category),
      author: resolveField(c.author),
    };
  } catch {
    return null;
  }
}

export async function getBlogSlugs(): Promise<string[]> {
  const client = getClient();
  const response = await client.getStories({
    version: "published",
    starts_with: `${BLOG_FOLDER}/`,
    per_page: 100,
    filter_query: { component: { in: "blog_post" } },
  });
  return response.data.stories.map((s) => s.slug as string);
}

export function richTextToHtml(doc: unknown): string {
  if (!doc || typeof doc !== "object") return "";
  const node = doc as { type?: string; text?: string; content?: unknown[]; marks?: Array<{ type: string }> };
  if (node.type === "text") {
    let text = node.text ?? "";
    if (node.marks) {
      for (const mark of node.marks) {
        if (mark.type === "bold") text = `<strong>${text}</strong>`;
        if (mark.type === "italic") text = `<em>${text}</em>`;
        if (mark.type === "code") text = `<code>${text}</code>`;
      }
    }
    return text;
  }
  const inner = node.content?.map(richTextToHtml).join("") ?? "";
  switch (node.type) {
    case "paragraph": return `<p>${inner}</p>`;
    case "heading": return `<h2>${inner}</h2>`;
    case "bullet_list": return `<ul>${inner}</ul>`;
    case "ordered_list": return `<ol>${inner}</ol>`;
    case "list_item": return `<li>${inner}</li>`;
    case "blockquote": return `<blockquote>${inner}</blockquote>`;
    case "hard_break": return "<br>";
    case "horizontal_rule": return "<hr>";
    default: return inner;
  }
}
