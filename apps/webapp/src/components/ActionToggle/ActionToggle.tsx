// import cx from 'clsx';
import { Group, useComputedColorScheme, useMantineColorScheme, Button } from '@mantine/core';


export function ActionToggle() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

  return (
    <Group justify="center">
      <Button
        onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
        variant="default"
        size="xs"
        radius="xl"
        aria-label="Toggle color scheme"
      />
    </Group>
  );
}