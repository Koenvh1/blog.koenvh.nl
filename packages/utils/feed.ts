import RSS from 'rss';

const PUBLICATION_URL = process.env.NEXT_PUBLICATION_URL;

export const constructRSSFeedFromPosts = (
	publication: any,
	posts: any[],
	currentCursor: string | null,
	nextCursor: string | null,
) => {
	const baseUrl = PUBLICATION_URL || publication.url;

	const customElements = [
		{
			'atom:link': {
				_attr: {
					rel: 'first',
					href: `${baseUrl}/rss.xml`,
				},
			},
		},
	];
	if (nextCursor) {
		customElements.push({
			'atom:link': {
				_attr: {
					rel: 'next',
					href: `${baseUrl}/rss.xml${nextCursor ? `?after=${nextCursor}` : ''}`,
				},
			},
		});
	}

	const feedConfig = {
		title: `${publication.title}`,
		description: publication.description,
		feed_url: `${baseUrl}/rss.xml`,
		site_url: baseUrl,
		image_url: publication.logo,
		language: 'en',
		ttl: 60,
		custom_elements: customElements,
	};

	const feed = new RSS(feedConfig);

	posts.forEach((post) => {
		feed.item({
			title: post.title,
			description: post.content,
			url: `${baseUrl}/${post.slug}`,
			author: publication.author,
			date: post.datePublished,
		});
	});

	const xml = feed.xml({indent: "\t"});
	return xml;
};
