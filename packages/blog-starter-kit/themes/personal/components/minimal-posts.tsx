import { getPublication } from '../utils/publication';
import { Post } from '../utils/post';
import { MinimalPostPreview } from './minimal-post-preview';

type Props = {
	posts: Post[];
	context: 'home' | 'series' | 'tag';
};

export const MinimalPosts = ({ posts }: Props) => {
	const publication = getPublication();

	return (
		<section className="flex w-full flex-col items-stretch gap-10">
			{posts.map((post) => (
				<MinimalPostPreview
					key={post.slug}
					title={post.title}
					date={post.datePublished}
					author={{
						name: publication.author,
					}}
					slug={post.slug}
				/>
			))}
		</section>
	);
};
