import request from 'graphql-request';
import { type GetServerSideProps } from 'next';
import { RobotsDocument, RobotsQuery, RobotsQueryVariables } from '../generated/graphql';

const GQL_ENDPOINT = process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT;
const RobotsTxt = () => null;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const { res } = ctx;

	const initialData = await request<RobotsQuery, RobotsQueryVariables>(
		GQL_ENDPOINT,
		RobotsDocument,
		{
			host: process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST
		},
	);

	const publication = initialData.publication;
	if (!publication) {
		return {
			notFound: true,
		};
	}

	const sitemapUrl = `${publication.url}/sitemap.xml`;
	const robotsTxt = `
User-agent: *
Allow: /

# Google adsbot ignores robots.txt unless specifically named!
User-agent: AdsBot-Google
Allow: /

User-agent: GPTBot
Disallow: /

Sitemap: ${sitemapUrl}
  `.trim();

	res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate');
	res.setHeader('content-type', 'text/plain');
	res.write(robotsTxt);
	res.end();

	return { props: {} };
};

export default RobotsTxt;
