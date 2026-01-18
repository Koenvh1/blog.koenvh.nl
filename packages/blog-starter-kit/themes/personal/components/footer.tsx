import Link from 'next/link';
import { useAppContext } from './contexts/appContext';

export const Footer = () => {
	const { publication } = useAppContext();

	return (
		<footer className="border-t pt-10 text-sm text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">
			&copy; {new Date().getFullYear()} {publication.title} | <a href="/rss.xml">RSS feed</a> | <a href="/sitemap.xml">Sitemap</a>
		</footer>
	);
};
