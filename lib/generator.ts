import BaseTheme from "./base.js"

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

export default () => {
  const theme = { name: "deol", semanticHighlighting: false } as ThemeJSON

  if (BaseTheme.colors !== undefined) {
    if (theme.colors === undefined) {
      theme.colors = {}
    }
    for (const [key, val] of Object.entries(BaseTheme.colors)) {
      theme.colors[key] = val.hex()
    }
  }

  if (BaseTheme.tokenColors !== undefined) {
    if (theme.tokenColors === undefined) {
      theme.tokenColors = []
    }
    for (const val of BaseTheme.tokenColors) {
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

  if (BaseTheme.semanticTokenColors !== undefined) {
    theme.semanticHighlighting = true
    if (theme.semanticTokenColors === undefined) {
      theme.semanticTokenColors = {}
    }
    for (const [key, val] of Object.entries(BaseTheme.semanticTokenColors)) {
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
