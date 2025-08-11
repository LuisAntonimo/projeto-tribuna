import {
	Button,
	Group,
	useComputedColorScheme,
	useMantineColorScheme,
} from '@mantine/core';

export default function ActionToggle() {
	const { setColorScheme } = useMantineColorScheme();
	const computedColorScheme = useComputedColorScheme('light', {
		getInitialValueInEffect: true,
	});

	return (
		<Group justify="center">
			<Button
				onClick={() =>
					setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')
				}
				variant="default"
				size="xs"
				radius="xl"
				aria-label="Toggle color scheme"
			/>
		</Group>
	);
}
