import { Anchor, Button, Group, Title, Text } from "@mantine/core";
import styles from "./Header.module.css";
import jsonTabs from "./tabs.json";
import { ActionToggle } from "../ActionToggle/ActionToggle";

const tabs = [...jsonTabs];
const mainRoute = "/";

export default function Header() {
  const anchorList = tabs.map((tab) => {
    return (
      <Anchor
        className={styles.tabAnchor}
        href={tab.link}
        key={tab.label}
        c={"white"}
        underline="never"
      >
        <Text size="lg" fw={700}>
          {tab.label}
        </Text>
      </Anchor>
    );
  });

  return (
    <header className={styles.header}>
      <Group justify="space-between" h={"100%"} p={15}>
        <Group>
          <Anchor href={mainRoute} underline="never">
            <Title order={1} c={"white"}>
              Projeto Tribuna
            </Title>
          </Anchor>
        </Group>

        <Group justify="center">{anchorList}</Group>

        <Group visibleFrom="sm">
          <Button variant="default" radius={"xl"}>
            Entrar
          </Button>
          <Button color="red" radius={"xl"}>
            Inscrever-se
          </Button>
          <ActionToggle />
        </Group>
      </Group>
    </header>
  );
}
