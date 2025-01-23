import Link from 'next/link';
import Navigation from './components/Navigation';

export default function Home() {
	return (
		<div>
			<h1>The Wild oasis</h1>
			<Navigation />
			<Link href='/cabins'>GO to cabins</Link>
		</div>
	);
}
