import { Paper } from '@mantine/core';
import { Outlet } from 'react-router';
import Header from '../components/Header';

export function Default() {
	return (
		<>
			<Header />
			<Paper shadow="xs" radius="lg" p="xl" m="lg" h="40rem">
				<Outlet />
			</Paper>
		</>
	);
}
