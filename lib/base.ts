import chroma from "chroma-js"
import type { Colors, FontStyle } from "./codeColors.js"

interface ThemeTokenSetting {
  foreground?: chroma.Color
  fontStyle?: FontStyle | FontStyle[]
}

export interface Theme {
  colors: {
    [key in Colors]: chroma.Color
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

const c = 0.01
const h = 240

const palette = {
  neutral: [
    chroma.oklch(0.18, c, h),
    chroma.oklch(0.3, c, h),
    chroma.oklch(0.43, c, h),
    chroma.oklch(0.6, c, h),
    chroma.oklch(0.75, c, h),
    chroma.oklch(0.87, c, h),
  ],
}

export default {
  colors: {
    focusBorder: palette.neutral.at(1),
    foreground: palette.neutral.at(-1),
    disabledForeground: palette.neutral.at(-3),
    "widget.border": transparent,
    "widget.shadow": transparent,
    "selection.background": palette.neutral.at(2),
    descriptionForeground: palette.neutral.at(-2),
    "icon.foreground": palette.neutral.at(-2),

    "window.activeBorder": transparent,
    "window.inactiveBorder": transparent,

    "textLink.foreground": palette.neutral.at(-3),

    "button.background": palette.neutral.at(1),
    "button.foreground": palette.neutral.at(-1),

    "dropdown.background": palette.neutral.at(1),

    "input.background": palette.neutral.at(1),

    "badge.foreground": palette.neutral.at(-1),
    "badge.background": palette.neutral.at(1),

    "activityBar.background": palette.neutral.at(0),
    "activityBar.foreground": palette.neutral.at(-1),
    "activityBar.border": palette.neutral.at(1),
    "activityBarBadge.background": palette.neutral.at(1),
    "activityBarBadge.foreground": palette.neutral.at(-1),

    "sideBar.background": palette.neutral.at(0),
    "sideBar.border": palette.neutral.at(1),
    "sideBarSectionHeader.background": palette.neutral.at(0),
    "sideBarSectionHeader.border": palette.neutral.at(1),

    "editorGroupHeader.tabsBackground": palette.neutral.at(0),
    "tab.border": transparent,
    "tab.activeBorder": palette.neutral.at(2),
    "tab.inactiveBackground": palette.neutral.at(0),
    "tab.inactiveModifiedBorder": palette.neutral.at(0),

    "editor.background": palette.neutral.at(0),
    "editor.foreground": palette.neutral.at(-1),
    "editorLineNumber.foreground": palette.neutral.at(-4),
    "editorLineNumber.activeForeground": palette.neutral.at(-1),
    "editorLineNumber.dimmedForeground": palette.neutral.at(-3),
    "editor.selectionBackground": palette.neutral.at(1),

    "editorBracketHighlight.foreground1": palette.neutral.at(-3),
    "editorBracketHighlight.foreground2": palette.neutral.at(-3),
    "editorBracketHighlight.foreground3": palette.neutral.at(-3),
    "editorBracketHighlight.foreground4": palette.neutral.at(-3),
    "editorBracketHighlight.foreground5": palette.neutral.at(-3),
    "editorBracketHighlight.foreground6": palette.neutral.at(-3),

    "statusBar.background": palette.neutral.at(0),
    "statusBarItem.activeBackground": palette.neutral.at(1),
    "statusBarItem.hoverBackground": palette.neutral.at(1),
    "statusBarItem.prominentBackground": palette.neutral.at(1),
    "statusBarItem.remoteBackground": palette.neutral.at(0),

    "titleBar.activeBackground": palette.neutral.at(0),

    "terminal.ansiBlack": palette.neutral.at(0),
    "terminal.ansiWhite": palette.neutral.at(-1),
    "terminal.ansiYellow": chroma.oklch(0.7, 0.12, 100),
    "terminal.ansiRed": chroma.oklch(0.7, 0.12, 20),
    "terminal.ansiMagenta": chroma.oklch(0.7, 0.12, 345),
    "terminal.ansiBlue": chroma.oklch(0.7, 0.12, 240),
    "terminal.ansiCyan": chroma.oklch(0.7, 0.12, 190),
    "terminal.ansiGreen": chroma.oklch(0.7, 0.12, 135),

    "terminal.ansiBrightBlack": palette.neutral.at(1),
    "terminal.ansiBrightWhite": palette.neutral.at(-1)?.brighten(0.2),
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
      settings: { foreground: palette.neutral.at(-4) },
    },
    {
      scope: ["string", "constant"],
      settings: { foreground: palette.neutral.at(-3) },
    },
    {
      scope: ["keyword.control", "keyword.other"],
      settings: {
        fontStyle: ["bold"],
      },
    },
    {
      scope: "meta.object-literal.key string",
      settings: {
        foreground: palette.neutral.at(-1),
      },
    },
    {
      scope: ["support.type.property-name", "entity.name.tag"],
      settings: {
        foreground: palette.neutral.at(-1),
      },
    },
    {
      scope: ["meta.structure.dictionary.value", "meta.property-value"],
      settings: {
        foreground: palette.neutral.at(-3),
      },
    },
    {
      scope: ["storage", "support.type"],
      settings: {
        foreground: palette.neutral.at(-2),
      },
    },
  ],
} as Theme
