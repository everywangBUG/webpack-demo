import { createRoot } from "react-dom/client"
import App from "./App"
import React from "react"

const div = document.getElementById("root") as HTMLDivElement
const root = createRoot(div)


root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)