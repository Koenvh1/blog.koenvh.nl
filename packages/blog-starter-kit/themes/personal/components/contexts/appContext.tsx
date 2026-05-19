import React, { createContext, useContext } from 'react';
import { Post } from '../../utils/post';

type AppContext = {
	post: Post | null;
};

const AppContext = createContext<AppContext | null>(null);

const AppProvider = ({
	children,
	post,
}: {
	children: React.ReactNode;
	post?: Post;
}) => {
	return (
		<AppContext.Provider
			value={{
				post: post ?? null,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

const useAppContext = () => {
	const context = useContext(AppContext);

	if (!context) {
		throw new Error('useAppContext must be used within a <AppProvider />');
	}

	return context;
};
export { AppProvider, useAppContext };
