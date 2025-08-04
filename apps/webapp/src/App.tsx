import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { Router } from "./Router";

import './global.css'

export function App() {
  return (<MantineProvider>{<Router />}</MantineProvider>);
}
