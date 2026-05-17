import { getSitemap } from '@starter-kit/utils/seo/sitemap';
import request from 'graphql-request';
import { GetServerSideProps } from 'next';
import { getPublication } from '../utils/publication';
import { getPosts } from '../utils/posts';

const MAX_POSTS = 1000;
const Sitemap = () => null;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const { res } = ctx;

	const publication = getPublication();
	if (!publication) {
		return {
			notFound: true,
		};
	}
	const posts = getPosts();

	// Get more posts by pagination if exists

	const xml = getSitemap({
		...publication,
		posts,
	});

	res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');
	res.setHeader('content-type', 'text/xml');
	res.write(xml);
	res.end();

	return { props: {} };
};

export default Sitemap;
