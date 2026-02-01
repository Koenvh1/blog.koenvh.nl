import { useEffect } from 'react';
import { useAppContext } from './contexts/appContext';

const PUBLICATION_URL = process.env.NEXT_PUBLICATION_URL;

export function Integrations() {
	const { publication } = useAppContext();
	
	const domainURL = new URL(PUBLICATION_URL || publication.url).hostname;

	useEffect(() => {
		// @ts-ignore
	}, []);

	return (
		<></>
	);
}
