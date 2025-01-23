import Counter from "../components/Counter";

type User = {
	id: string;
	name: string;
};

export default async function CabinsPage() {
	const res = await fetch('https://jsonplaceholder.typicode.com/users');
	const data: User[] = await res.json();

	return (
		<div>
			<h1>Cabins Page</h1>
			<ul>
				{data.map((user) => (
					<li key={user.id}>{user.name}</li>
				))}
			</ul>
			<Counter />
		</div>
	);
}
