import { Anchor, Button, Group, Title } from '@mantine/core';
import { NavLink } from 'react-router';
import HeaderTabs from '../HeaderTabs';
import { MAIN_ROUTE, TAB_LAYOUT } from '../HeaderTabs/tabLayout';
import LightSwitch from '../LightSwitch';
import styles from './Header.module.css';

export default function Header() {
	return (
		<header className={styles.header}>
			<Group justify="space-between" h="100%" p={15}>
				<Group>
					<Anchor component={NavLink} to={MAIN_ROUTE} underline="never">
						<Title order={1} c="white">
							Projeto Tribuna
						</Title>
					</Anchor>
				</Group>

				<Group justify="center">
					<HeaderTabs tablinks={TAB_LAYOUT} />
				</Group>

				<Group>
					<Group visibleFrom="sm">
						<Button variant="outline" color="red" radius="xl">
							Entrar
						</Button>
						<Button color="red" radius="xl">
							Inscrever-se
						</Button>
					</Group>

					<LightSwitch />
				</Group>
			</Group>
		</header>
	);
}
