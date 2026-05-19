import request from 'graphql-request';
import { type GetServerSideProps } from 'next';
import { RobotsDocument, RobotsQuery, RobotsQueryVariables } from '../generated/graphql';

const PUBLICATION_URL = process.env.NEXT_PUBLICATION_URL;
const RobotsTxt = () => null;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const { res } = ctx;


	const sitemapUrl = `${PUBLICATION_URL}/sitemap.xml`;
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
