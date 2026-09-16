import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ site }) => {
  if (!site) {
    return new Response('Site URL not configured', { status: 500 });
  }

  const baseUrl = site.toString().endsWith('/') ? site.toString() : `${site.toString()}/`;
  const posts = await getCollection('blog');

  const staticRoutes = [
    { path: '', changefreq: 'weekly', priority: '1.0' },
    { path: 'services', changefreq: 'monthly', priority: '0.9' },
    { path: 'work', changefreq: 'monthly', priority: '0.9' },
    { path: 'work/ai-marketing-workflow', changefreq: 'monthly', priority: '0.8' },
    { path: 'work/document-compliance-review', changefreq: 'monthly', priority: '0.8' },
    { path: 'work/shared-react-foundation', changefreq: 'monthly', priority: '0.8' },
    { path: 'work/pointpower', changefreq: 'monthly', priority: '0.8' },
    { path: 'about', changefreq: 'monthly', priority: '0.8' },
    { path: 'blog', changefreq: 'weekly', priority: '0.7' },
    { path: 'contact', changefreq: 'monthly', priority: '0.9' },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticRoutes
  .map(
    (route) => `  <url>
    <loc>${baseUrl}${route.path}</loc>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join('\n')}
${posts
  .map(
    (post) => `  <url>
    <loc>${baseUrl}blog/${post.slug}</loc>
    <lastmod>${new Date(post.data.publishDate).toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
