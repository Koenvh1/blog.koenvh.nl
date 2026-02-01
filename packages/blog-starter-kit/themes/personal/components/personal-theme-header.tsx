import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { resizeImage } from '@starter-kit/utils/image';
import Link from 'next/link';
import { PublicationNavbarItem, PublicationNavigationType } from '../generated/graphql';
import { useAppContext } from './contexts/appContext';
import { ToggleTheme } from './toggle-theme';

function hasUrl(
	navbarItem: PublicationNavbarItem,
): navbarItem is PublicationNavbarItem & { url: string } {
	return !!navbarItem.url && navbarItem.url.length > 0;
}

export const PersonalHeader = () => {
	const { publication } = useAppContext();

	let navbarItems = publication.preferences.navbarItems.filter(hasUrl);
	if (publication.links && publication.links.mastodon) {
		navbarItems.push({
			id: "mastodon",
			type: PublicationNavigationType.Link,
			label: "Mastodon",
			url: publication.links.mastodon
		});
	}
	if (publication.links && publication.links.bluesky) {
		navbarItems.push({
			id: "bsky",
			type: PublicationNavigationType.Link,
			label: "Bluesky",
			url: publication.links.bluesky
		});
	}
	if (publication.links && publication.links.linkedin) {
		navbarItems.push({
			id: "linkedin",
			type: PublicationNavigationType.Link,
			label: "LinkedIn",
			url: publication.links.linkedin
		});
	}
	const visibleItems = navbarItems.slice(0, 5);
	const hiddenItems = navbarItems.slice(5);

	const navList = (
		<ul className="flex list-none flex-row items-center gap-4 text-xs font-semibold uppercase tracking-tight text-neutral-600 dark:text-neutral-300">
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
							<button>☰</button>
						</DropdownMenu.Trigger>
						<DropdownMenu.Portal>
							<DropdownMenu.Content
								className="flex flex-col items-stretch gap-1 rounded-lg border bg-white text-xs font-semibold uppercase tracking-tight text-neutral-600 shadow-xl dark:border-neutral-800 dark:bg-black  dark:text-neutral-300"
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
							aria-label={`${publication.author.name}'s blog home page`}
						>
							{publication.preferences.logo && (
								<img
									className="block h-12"
									alt={publication.author.name}
									src={publication.preferences.logo}
								/>
							)}
							{/* {publication.title} */}
						</Link>
					</h1>
					<ToggleTheme className="md:hidden" />
				</div>
			</div>
			<div className="col-span-full flex flex-row items-center justify-between gap-4 md:col-span-1 md:justify-end">
				<nav>{navList}</nav>
				<ToggleTheme className="hidden md:block" />
				{/* <Button
          label=""
          type="outline"
          className="!p-2"
          icon={<NewsletterPlusSVG className="w-5 h-5 fill-current" />}
        /> */}
			</div>
		</header>
	);
};
