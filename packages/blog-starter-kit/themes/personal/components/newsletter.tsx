import { useRef, useState } from 'react';
import { useAppContext } from './contexts/appContext';
import request from 'graphql-request';
import { SubscribeToNewsletterDocument, SubscribeToNewsletterMutation, SubscribeToNewsletterMutationVariables, SubscribeToNewsletterPayload } from '../generated/graphql';

const GQL_ENDPOINT = process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT;

export const Newsletter = () => {
	const [status, setStatus] = useState<boolean>(false);
	const [requestInProgress, setRequestInProgress] = useState(false);
	const { publication } = useAppContext();

	const inputRef = useRef<HTMLInputElement>(null);

	const subscribe = async (event: React.SyntheticEvent<HTMLFormElement>) => {
		event.preventDefault();
		const email = inputRef.current?.value;
		if (!email) return;

		setRequestInProgress(true);
		try {
			let formData = new FormData();
			formData.set("fields[email]", email);
			const data = await (await fetch("https://assets.mailerlite.com/jsonp/2046517/forms/176944960107448186/subscribe", {
				method: "POST",
				body: formData
			})).json();
			setRequestInProgress(false);
			setStatus(data.success);
		} catch (error) {
			const message = (error as any).response?.errors?.[0]?.message;
			if (message) {
				window.alert(message);
			}
			setRequestInProgress(false);
		}
	};

	return (
		<>
			{!status && (
				<div>
					<h2 className="text-lg font-bold leading-tight tracking-tight text-black dark:text-white">
						Subscribe to the newsletter:
					</h2>
					<p>In case you want to receive my latest blog posts directly in your mailbox, you can subscribe to the newsletter. The email frequency is roughly once per month.</p>
					<form className="mt-2 relative w-full bg-white p-2 dark:bg-neutral-950" onSubmit={subscribe}>
						<input
							ref={inputRef}
							type="email"
							name="fields[email]"
							placeholder="john.doe@example.org"
							className="outline-none outline-black dark:outline-white left-3 top-3 w-full p-3 text-base text-black dark:bg-black dark:text-neutral-50"
						/>
						<button
							disabled={requestInProgress}
							type="submit"
							className="bg-black dark:bg-white hover:underline absolute right-3 top-3 px-3 py-2 text-white dark:text-black disabled:cursor-not-allowed disabled:opacity-80"
						>
							Subscribe
						</button>
					</form>
				</div>
			)}
			{status && (
				<div className="relative w-full p-2">
					<p className="font-bold">Subscription request received</p>
					<p className="font-medium">
						Check your inbox for a confirmation email and click{' '}
						<strong>&quot;Confirm your email&quot;</strong> to complete your subscription.
					</p>
				</div>
			)}
		</>
	);
};
