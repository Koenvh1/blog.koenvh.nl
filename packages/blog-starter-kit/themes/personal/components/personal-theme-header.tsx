import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { resizeImage } from '@starter-kit/utils/image';
import Link from 'next/link';
import { PublicationNavbarItem } from '../generated/graphql';
import { useAppContext } from './contexts/appContext';
import { ToggleTheme } from './toggle-theme';
import { getPublication } from '../utils/publication';

function hasUrl(
	navbarItem: PublicationNavbarItem,
): navbarItem is PublicationNavbarItem & { url: string } {
	return !!navbarItem.url && navbarItem.url.length > 0;
}

export const PersonalHeader = () => {
	const publication  = getPublication();

	let navbarItems = [];
	if (publication.website) {
		navbarItems.push({
			id: "website",
			type: "link",
			label: "Website",
			url: publication.website
		});
	}
	if (publication.cv) {
		navbarItems.push({
			id: "cv",
			type: "link",
			label: "CV",
			url: publication.cv
		});
	}
	if (publication.mastodon) {
		navbarItems.push({
			id: "mastodon",
			type: "link",
			label: "Mastodon",
			url: publication.mastodon
		});
	}
	if (publication.bluesky) {
		navbarItems.push({
			id: "bsky",
			type: "link",
			label: "Bluesky",
			url: publication.bluesky
		});
	}
	if (publication.linkedin) {
		navbarItems.push({
			id: "linkedin",
			type: "link",
			label: "LinkedIn",
			url: publication.linkedin
		});
	}
	const visibleItems = navbarItems.slice(0, 3);
	const hiddenItems = navbarItems.slice(3);

	const navList = (
		<ul className="flex list-none flex-row items-center gap-4 text-xs font-semibold uppercase tracking-tight text-neutral-600 dark:text-neutral-300">
			<li>
				<Link href="/" className="hover:underline">
					Posts
				</Link>
			</li>
			{visibleItems.map((item) => (
				<li key={item.url}>
					<a href={item.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
						{item.label}
					</a>
				</li>
			))}

			{hiddenItems.length > 0 && (
				<li>
					<DropdownMenu.Root>
						<DropdownMenu.Trigger asChild>
							<button>
								<svg xmlns="http://www.w3.org/2000/svg" width="0.75rem" height="0.75rem" viewBox="0 0 24 24" className="align-middle">
									<rect y="7" width="24" height="2" rx="1" fill="currentColor" />
									<rect y="14" width="24" height="2" rx="1" fill="currentColor" />
									<rect y="21" width="24" height="2" rx="1" fill="currentColor" />
								</svg>
							</button>
						</DropdownMenu.Trigger>
						<DropdownMenu.Portal>
							<DropdownMenu.Content
								className="flex flex-col items-stretch gap-1 border bg-white text-xs font-semibold uppercase tracking-tight text-neutral-600 shadow-xl dark:border-neutral-800 dark:bg-black  dark:text-neutral-300"
								sideOffset={5}
								align="end"
							>
								{hiddenItems.map((item) => (
									<DropdownMenu.Item asChild key={item.url}>
										<a
											href={item.url}
											target="_blank"
											rel="noopener noreferrer"
											className="block w-full p-2 hover:underline"
										>
											{item.label}
										</a>
									</DropdownMenu.Item>
								))}
							</DropdownMenu.Content>
						</DropdownMenu.Portal>
					</DropdownMenu.Root>
				</li>
			)}
		</ul>
	);

	return (
		<header className="grid grid-cols-2 items-center gap-5 ">
			<div className="col-span-full md:col-span-1">
				<div className="flex justify-between">
					<h1>
						<Link
							className="flex flex-row items-center gap-2 text-lg font-bold leading-tight tracking-tight text-black dark:text-white"
							href="/"
							aria-label={`${publication.author}'s blog home page`}
						>
							{publication.logo && (
								<img
									className="block h-12"
									alt={publication.author}
									src={publication.logo}
								/>
							)}
						</Link>
					</h1>
					<ToggleTheme className="md:hidden" />
				</div>
			</div>
			<div className="col-span-full flex flex-row items-center justify-between gap-4 md:col-span-1 md:justify-end">
				<nav>{navList}</nav>
				<ToggleTheme className="hidden md:block" />
			</div>
		</header>
	);
};
