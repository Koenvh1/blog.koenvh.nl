const PUBLICATION_URL = process.env.NEXT_PUBLICATION_URL;

export const addPublicationJsonLd = (publication: any) => {
	const schema = {
		'@context': 'https://schema.org/',
		'@type': 'Blog',
		'@id': PUBLICATION_URL || publication.url,
		mainEntityOfPage: PUBLICATION_URL || publication.url,
		name: publication.title,
		description: publication.descriptionSEO,
		publisher: {
			'@type': publication.isTeam ? 'Organization' : 'Person',
			'@id': PUBLICATION_URL || publication.url,
			name: publication.title,
			image: {
				'@type': 'ImageObject',
				url: publication.preferences?.logo,
			},
		},
	};
	return schema;
};
