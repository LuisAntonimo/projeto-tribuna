import {
	ActionIcon,
	Group,
	useComputedColorScheme,
	useMantineColorScheme,
} from '@mantine/core';

import styles from './LightSwitch.module.css';

import { RiLightbulbFill, RiLightbulbLine } from '@remixicon/react';

export default function LightSwitch() {
	const { setColorScheme } = useMantineColorScheme();
	const computedColorScheme = useComputedColorScheme('light', {
		getInitialValueInEffect: true,
	});

	return (
		<Group justify="center">
			<ActionIcon
				onClick={() =>
					setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')
				}
				variant="default"
				size="lg"
				radius="xl"
				aria-label="Toggle color scheme"
				p={2}
			>
				<RiLightbulbFill className={styles.dark} />
				<RiLightbulbLine className={styles.light} size={30} />
			</ActionIcon>
		</Group>
	);
}
