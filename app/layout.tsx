import { type ReactNode } from 'react';
import Navigation from './components/Navigation';
import { type Metadata } from 'next';
import Logo from './components/Logo';

export const metadata: Metadata = { title: 'The Wild Oasis' };

export default function Root({ children }: { children: ReactNode }) {
	return (
		<html lang='en'>
			<body>
				<header>
					<Logo />
				</header>
				<Navigation />
				<main>{children}</main>
				<footer>Copyright by the Wild Oasis</footer>
			</body>
		</html>
	);
}
