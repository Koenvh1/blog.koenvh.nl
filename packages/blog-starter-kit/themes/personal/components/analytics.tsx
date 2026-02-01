import Cookies from 'js-cookie';
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { useAppContext } from './contexts/appContext';
const isProd = process.env.NEXT_PUBLIC_MODE === 'production';
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_URL || '';

export const Analytics = () => {
	const { publication, post, page } = useAppContext();

	useEffect(() => {
		return;
	}, []);

	return null;
};
