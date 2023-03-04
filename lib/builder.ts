import chroma from "chroma-js"
import type { Colors, FontStyle } from "./codeColors.js"

export interface PaletteSetting {
  c?: number
  h?: number
  ls?: [number, number, number, number, number, number]
}

interface ThemeTokenSetting {
  foreground?: chroma.Color
  fontStyle?: FontStyle | FontStyle[]
}

export interface Theme {
  colors: {
    [key in Colors]?: chroma.Color
  }
  tokenColors?: {
    scope: string | string[]
    settings: ThemeTokenSetting
  }[]
  semanticTokenColors?: {
    [selector: string]: ThemeTokenSetting
  }
}

const transparent = chroma("#ffffff00")

const builder = (setting: PaletteSetting): Theme => {
  const ls = setting.ls ?? [0.18, 0.3, 0.43, 0.6, 0.75, 0.87]
  const c = setting.c ?? 0.01
  const h = setting.h ?? 240

  const neutral = ls.map(l => chroma.oklch(l, c, h))

  return {
    colors: {
      focusBorder: neutral.at(1),
      foreground: neutral.at(-1),
      disabledForeground: neutral.at(-3),
      "widget.border": transparent,
      "widget.shadow": transparent,
      "selection.background": neutral.at(2),
      descriptionForeground: neutral.at(-2),
      "icon.foreground": neutral.at(-2),

      "window.activeBorder": transparent,
      "window.inactiveBorder": transparent,

      "textLink.foreground": neutral.at(-3),

      "button.background": neutral.at(1),
      "button.foreground": neutral.at(-1),

      "dropdown.background": neutral.at(1),

      "input.background": neutral.at(1),

      "badge.foreground": neutral.at(-1),
      "badge.background": neutral.at(1),

      "activityBar.background": neutral.at(0),
      "activityBar.foreground": neutral.at(-1),
      "activityBar.border": neutral.at(1),
      "activityBarBadge.background": neutral.at(1),
      "activityBarBadge.foreground": neutral.at(-1),

      "sideBar.background": neutral.at(0),
      "sideBar.border": neutral.at(1),
      "sideBarSectionHeader.background": neutral.at(0),
      "sideBarSectionHeader.border": neutral.at(1),

      "editorGroupHeader.tabsBackground": neutral.at(0),
      "tab.border": transparent,
      "tab.activeBorder": neutral.at(2),
      "tab.inactiveBackground": neutral.at(0),
      "tab.inactiveModifiedBorder": neutral.at(0),

      "editor.background": neutral.at(0),
      "editor.foreground": neutral.at(-1),
      "editorLineNumber.foreground": neutral.at(-4),
      "editorLineNumber.activeForeground": neutral.at(-1),
      "editorLineNumber.dimmedForeground": neutral.at(-3),
      "editor.selectionBackground": neutral.at(1),

      "editorBracketHighlight.foreground1": neutral.at(-3),
      "editorBracketHighlight.foreground2": neutral.at(-3),
      "editorBracketHighlight.foreground3": neutral.at(-3),
      "editorBracketHighlight.foreground4": neutral.at(-3),
      "editorBracketHighlight.foreground5": neutral.at(-3),
      "editorBracketHighlight.foreground6": neutral.at(-3),

      "statusBar.background": neutral.at(0),
      "statusBarItem.activeBackground": neutral.at(1),
      "statusBarItem.hoverBackground": neutral.at(1),
      "statusBarItem.prominentBackground": neutral.at(1),
      "statusBarItem.remoteBackground": neutral.at(0),

      "titleBar.activeBackground": neutral.at(0),

      "terminal.ansiBlack": neutral.at(0),
      "terminal.ansiWhite": neutral.at(-1),
      "terminal.ansiYellow": chroma.oklch(0.7, 0.12, 100),
      "terminal.ansiRed": chroma.oklch(0.7, 0.12, 20),
      "terminal.ansiMagenta": chroma.oklch(0.7, 0.12, 345),
      "terminal.ansiBlue": chroma.oklch(0.7, 0.12, 240),
      "terminal.ansiCyan": chroma.oklch(0.7, 0.12, 190),
      "terminal.ansiGreen": chroma.oklch(0.7, 0.12, 135),

      "terminal.ansiBrightBlack": neutral.at(1),
      "terminal.ansiBrightWhite": neutral.at(-1)?.brighten(0.2),
      "terminal.ansiBrightYellow": chroma.oklch(0.8, 0.12, 100),
      "terminal.ansiBrightRed": chroma.oklch(0.8, 0.12, 20),
      "terminal.ansiBrightMagenta": chroma.oklch(0.8, 0.12, 345),
      "terminal.ansiBrightBlue": chroma.oklch(0.8, 0.12, 240),
      "terminal.ansiBrightCyan": chroma.oklch(0.8, 0.12, 190),
      "terminal.ansiBrightGreen": chroma.oklch(0.8, 0.12, 135),
    },
    tokenColors: [
      {
        scope: ["comment", "punctuation.definition.comment"],
        settings: { foreground: neutral.at(-4) },
      },
      {
        scope: ["string", "constant"],
        settings: { foreground: neutral.at(-3) },
      },
      {
        scope: ["keyword.control", "keyword.other"],
        settings: {
          fontStyle: "bold",
        },
      },
      {
        scope: ["keyword.other.unit"],
        settings: {
          fontStyle: "",
        },
      },
      {
        scope: "meta.object-literal.key string",
        settings: {
          foreground: neutral.at(-1),
        },
      },
      {
        scope: ["support.type.property-name", "entity.name.tag"],
        settings: {
          foreground: neutral.at(-1),
        },
      },
      {
        scope: ["meta.structure.dictionary.value", "meta.property-value"],
        settings: {
          foreground: neutral.at(-3),
        },
      },
      {
        scope: ["storage", "support.type"],
        settings: {
          foreground: neutral.at(-2),
        },
      },
    ],
  }
}

export default builder
