import React from "react"
import ReactDOM from "react-dom/client"
import { MantineProvider} from "@mantine/core"
import App from "./App.tsx"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        fontFamily: "Cabinet Grotesk, sans-serif",
        fontFamilyMonospace: "Monaco, Courier, monospace",
        headings: { fontFamily: "Bosco, serif" },
      }}
    >
      <App />
    </MantineProvider>
  </React.StrictMode>
)
