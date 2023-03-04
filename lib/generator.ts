import builder, { PaletteSetting } from "./builder.js"

interface ThemeJSONTokenSetting {
  foreground?: string
  fontStyle?: string
}

interface ThemeJSON {
  name: string
  colors?: Record<string, string>
  tokenColors?: {
    scope: string | string[]
    settings: ThemeJSONTokenSetting
  }[]
  semanticTokenColors?: {
    [selector: string]: ThemeJSONTokenSetting
  }
  semanticHighlighting: boolean
}

export default (palette: PaletteSetting) => {
  const built = builder(palette)
  const theme = { name: "deol", semanticHighlighting: false } as ThemeJSON

  if (built.colors !== undefined) {
    if (theme.colors === undefined) {
      theme.colors = {}
    }
    for (const [key, val] of Object.entries(built.colors)) {
      theme.colors[key] = val.hex()
    }
  }

  if (built.tokenColors !== undefined) {
    if (theme.tokenColors === undefined) {
      theme.tokenColors = []
    }
    for (const val of built.tokenColors) {
      let settings: ThemeJSONTokenSetting

      settings = {}
      Object.assign(settings, val.settings, {
        foreground: val.settings.foreground?.hex(),
      })
      if (
        "fontStyle" in val.settings &&
        Array.isArray(val.settings.fontStyle)
      ) {
        settings.fontStyle = val.settings.fontStyle.join(" ")
      }

      theme.tokenColors.push({ scope: val.scope, settings })
    }
  }

  if (built.semanticTokenColors !== undefined) {
    theme.semanticHighlighting = true
    if (theme.semanticTokenColors === undefined) {
      theme.semanticTokenColors = {}
    }
    for (const [key, val] of Object.entries(built.semanticTokenColors)) {
      let settings: ThemeJSONTokenSetting

      settings = {}
      Object.assign(settings, val, {
        foreground: val.foreground?.hex(),
      })
      if ("fontStyle" in settings && Array.isArray(settings.fontStyle)) {
        settings.fontStyle = settings.fontStyle.join(" ")
      }

      theme.semanticTokenColors[key] = settings
    }
  }

  return JSON.stringify(theme)
}
