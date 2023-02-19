import fs from "node:fs/promises"
import generator from "../lib/generator.js"

await fs.mkdir("themes", { recursive: true })
const json = generator()
await fs.writeFile("themes/deol-vscode-color-theme.json", json)
