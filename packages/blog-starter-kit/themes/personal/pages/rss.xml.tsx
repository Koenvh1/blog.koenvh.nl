import { constructRSSFeedFromPosts } from '@starter-kit/utils/feed';
import request from 'graphql-request';
import { GetServerSideProps } from 'next';
import { RssFeedDocument, RssFeedQuery, RssFeedQueryVariables } from '../generated/graphql';
import { getPublication } from '../utils/publication';
import { getPosts } from '../utils/posts';

const RSS = () => null;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const { res, query } = ctx;
	const after = query.after ? (query.after as string) : null;

	const publication = getPublication();
	const posts = getPosts();

	const xml = constructRSSFeedFromPosts(
		publication,
		posts,
		after,
		null,
	);

	res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');
	res.setHeader('content-type', 'text/xml');
	res.write(xml);
	res.end();

	return { props: {} };
};

export default RSS;
