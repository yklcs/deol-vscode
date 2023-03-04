import fs from "node:fs/promises"
import generator from "../lib/generator.js"
import * as palettes from "../lib/palettes.js"

await fs.mkdir("themes", { recursive: true })

for (const [name, palette] of Object.entries(palettes)) {
  const json = generator(palette)
  let filename
  if (name === "base") {
    filename = `themes/deol-vscode-color-theme.json`
  } else {
    filename = `themes/deol-${name}-vscode-color-theme.json`
  }
  await fs.writeFile(filename, json)
}
