import { Anchor, Text } from '@mantine/core';
import { NavLink } from 'react-router';

import styles from './HeaderTabs.module.css';
import type { TabLink } from './tabLayout';

interface HeaderTabsProps {
	tablinks: TabLink[];
}

export default function HeaderTabs({ tablinks }: HeaderTabsProps) {
	return (
		<>
			{tablinks.map(({ link, label }) => {
				return (
					<Anchor
						className={styles.headerTabs}
						key={label}
						component={NavLink}
						to={link}
						c="white"
						underline="never"
					>
						<Text size="lg" fw={700}>
							{label}
						</Text>
					</Anchor>
				);
			})}
		</>
	);
}
