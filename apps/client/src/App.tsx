import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { Router } from './Router';

import './global.css';

export function App() {
	return (
		<MantineProvider>
			<Router />
		</MantineProvider>
	);
}
