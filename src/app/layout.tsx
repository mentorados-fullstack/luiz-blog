import '~/styles/globals.css';

import type { Metadata } from 'next';
import { inter } from '~/assets/fonts/inter';
import { Header } from '~/components/Header';

export const metadata: Metadata = {
	title: 'Epictetus',
	description:
		'Epictetus is a versatile and user-friendly blog platform built with Sanity, enabling you to create engaging and informative content. With Epictetus, you can easily manage and publish posts, search for relevant content and actors, and a powerful image management system. Additionally, you can schedule posts for future publication, ensuring your content remains fresh and relevant.',
	icons: [{ rel: 'icon', url: '/favicon.svg' }]
};

export default function RootLayout({
	children
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" className={`${inter.variable}`}>
			<body className="min-h-screen bg-gradient-to-t from-gradient-200 to-gradient-100">
				<Header />
				{children}
			</body>
		</html>
	);
}
