import "@mantine/core/styles.css";

import { MantineProvider, Button} from "@mantine/core";

export function App() {
  return (
    <MantineProvider>
      {
        <>
          <Button onClick={() => {alert("Hello, World!")}}>teste</Button>          
        </>
      }
    </MantineProvider>
  );
}
