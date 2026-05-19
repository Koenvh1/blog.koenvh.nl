const PUBLICATION_URL = process.env.NEXT_PUBLICATION_URL;

export const getSitemap = (publication: any) => {
	let xml =
		'<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';

	const domain = PUBLICATION_URL || publication.url;
	const posts = publication.posts;

	xml += '<url>';
	xml += `<loc>${domain}</loc>`;
	xml += '<changefreq>always</changefreq>';
	xml += '<priority>1</priority>';

	if (posts.length > 0) {
		xml += `<lastmod>${posts[0].datePublished}</lastmod>`;
	}
	xml += '</url>';

	for (let i: any = 0; i < posts.length; i += 1) {
		xml += '<url>';
		xml += `<loc>${domain}/${posts[i].slug}</loc>`;
		xml += '<changefreq>daily</changefreq>';
		xml += '<priority>0.8</priority>';
		if (posts[i].datePublished) {
			xml += `<lastmod>${posts[i].datePublished}</lastmod>`;
		}
		xml += '</url>';
	}

	const uniqueTags = new Set<string>();
	for (const post of posts) {
		if (Array.isArray(post.tags)) {
			for (const tag of post.tags) {
				uniqueTags.add(tag.slug);
			}
		}
	}

	uniqueTags.forEach((tag: any) => {
		xml += '<url>';
		xml += `<loc>${domain}/tag/${tag}</loc>`;
		xml += '<changefreq>always</changefreq>';
		xml += `<priority>1</priority>`;
		xml += '</url>';
	});

	xml += '</urlset>';
	return xml;
};
