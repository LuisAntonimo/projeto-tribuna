import { Anchor, Box, Button, Group, Title, Text } from "@mantine/core";
import styles from "./header.module.css";

const tabs = [{ link: "/about", label: "sobre" }, { link: "#", label: "tribuna de debates" }];

export default function Header() {
  const anchorList = tabs.map((tab) => {
    return (
      <Anchor href={tab.link} key={tab.label}>
        <Text size="lg" c={"white"} fw={700}>
          {tab.label}
        </Text>
      </Anchor>
    );
  });

  return (
    <Box>
      <header className={styles.header}>
        <Group justify="space-between" h={"100%"} p={15}>
          <Group>
            <Title order={1} c={"white"}>
              Projeto Tribuna
            </Title>
          </Group>

          <Group justify="center" >{anchorList}</Group>

          <Group visibleFrom="sm">
            <Button variant="default">Entrar</Button>
            <Button color="red">Inscrever-se</Button>
          </Group>
        </Group>
      </header>
    </Box>
  );
}
