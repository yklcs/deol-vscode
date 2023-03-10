type ContrastColors = "contrastActiveBorder" | "contrastBorder"

type BaseColors =
  | "focusBorder"
  | "foreground"
  | "disabledForeground"
  | "widget.border"
  | "widget.shadow"
  | "selection.background"
  | "descriptionForeground"
  | "errorForeground"
  | "icon.foreground"
  | "sash.hoverBorder"

type WindowBorder = "window.activeBorder" | "window.inactiveBorder"

type TextColors =
  | "textBlockQuote.background"
  | "textBlockQuote.border"
  | "textCodeBlock.background"
  | "textLink.activeForeground"
  | "textLink.foreground"
  | "textPreformat.foreground"
  | "textSeparator.foreground"

type ActionColors =
  | "toolbar.hoverBackground"
  | "toolbar.hoverOutline"
  | "toolbar.activeBackground"

type ButtonControl =
  | "button.background"
  | "button.foreground"
  | "button.border"
  | "button.separator"
  | "button.hoverBackground"
  | "button.secondaryForeground"
  | "button.secondaryBackground"
  | "button.secondaryHoverBackground"
  | "checkbox.background"
  | "checkbox.foreground"
  | "checkbox.border"
  | "checkbox.selectBackground"
  | "checkbox.selectBorder"

type DropdownControl =
  | "dropdown.background"
  | "dropdown.listBackground"
  | "dropdown.border"
  | "dropdown.foreground"

type InputControl =
  | "input.background"
  | "input.border"
  | "input.foreground"
  | "input.placeholderForeground"
  | "inputOption.activeBackground"
  | "inputOption.activeBorder"
  | "inputOption.activeForeground"
  | "inputOption.hoverBackground"
  | "inputValidation.errorBackground"
  | "inputValidation.errorForeground"
  | "inputValidation.errorBorder"
  | "inputValidation.infoBackground"
  | "inputValidation.infoForeground"
  | "inputValidation.infoBorder"
  | "inputValidation.warningBackground"
  | "inputValidation.warningForeground"
  | "inputValidation.warningBorder"

type ScrollbarControl =
  | "scrollbar.shadow"
  | "scrollbarSlider.activeBackground"
  | "scrollbarSlider.background"
  | "scrollbarSlider.hoverBackground"

type Badge = "badge.foreground" | "badge.background"

type ProgressBar = "progressBar.background"

type ListsAndTrees =
  | "list.activeSelectionBackground"
  | "list.activeSelectionForeground"
  | "list.activeSelectionIconForeground"
  | "list.dropBackground"
  | "list.focusBackground"
  | "list.focusForeground"
  | "list.focusHighlightForeground"
  | "list.focusOutline"
  | "list.focusAndSelectionOutline"
  | "list.highlightForeground"
  | "list.hoverBackground"
  | "list.hoverForeground"
  | "list.inactiveSelectionBackground"
  | "list.inactiveSelectionForeground"
  | "list.inactiveSelectionIconForeground"
  | "list.inactiveFocusBackground"
  | "list.inactiveFocusOutline"
  | "list.invalidItemForeground"
  | "list.errorForeground"
  | "list.warningForeground"
  | "listFilterWidget.background"
  | "listFilterWidget.outline"
  | "listFilterWidget.noMatchesOutline"
  | "listFilterWidget.shadow"
  | "list.filterMatchBackground"
  | "list.filterMatchBorder"
  | "list.deemphasizedForeground"
  | "tree.indentGuidesStroke"
  | "tree.inactiveIndentGuidesStroke"
  | "tree.tableColumnsBorder"
  | "tree.tableOddRowsBackground"

type ActivityBar =
  | "activityBar.background"
  | "activityBar.dropBorder"
  | "activityBar.foreground"
  | "activityBar.inactiveForeground"
  | "activityBar.border"
  | "activityBarBadge.background"
  | "activityBarBadge.foreground"
  | "activityBar.activeBorder"
  | "activityBar.activeBackground"
  | "activityBar.activeFocusBorder"
  | "activityBar.activeBackground"

type SideBar =
  | "sideBar.background"
  | "sideBar.foreground"
  | "sideBar.border"
  | "sideBar.dropBackground"
  | "sideBarTitle.foreground"
  | "sideBarSectionHeader.background"
  | "sideBarSectionHeader.foreground"
  | "sideBarSectionHeader.border"

type Minimap =
  | "minimap.findMatchHighlight"
  | "minimap.selectionHighlight"
  | "minimap.errorHighlight"
  | "minimap.warningHighlight"
  | "minimap.background"
  | "minimap.selectionOccurrenceHighlight"
  | "minimap.foregroundOpacity"
  | "minimapSlider.background"
  | "minimapSlider.hoverBackground"
  | "minimapSlider.activeBackground"
  | "minimapGutter.addedBackground"
  | "minimapGutter.modifiedBackground"
  | "minimapGutter.deletedBackground"

type EditorGroupsAndTabs =
  | "editorGroup.border"
  | "editorGroup.dropBackground"
  | "editorGroupHeader.noTabsBackground"
  | "editorGroupHeader.tabsBackground"
  | "editorGroupHeader.tabsBorder"
  | "editorGroupHeader.border"
  | "editorGroup.emptyBackground"
  | "editorGroup.focusedEmptyBorder"
  | "editorGroup.dropIntoPromptForeground"
  | "editorGroup.dropIntoPromptBackground"
  | "editorGroup.dropIntoPromptBorder"
  | "tab.activeBackground"
  | "tab.unfocusedActiveBackground"
  | "tab.activeForeground"
  | "tab.border"
  | "tab.activeBorder"
  | "tab.unfocusedActiveBorder"
  | "tab.activeBorderTop"
  | "tab.unfocusedActiveBorderTop"
  | "tab.lastPinnedBorder"
  | "tab.inactiveBackground"
  | "tab.unfocusedInactiveBackground"
  | "tab.inactiveForeground"
  | "tab.unfocusedActiveForeground"
  | "tab.unfocusedInactiveForeground"
  | "tab.hoverBackground"
  | "tab.unfocusedHoverBackground"
  | "tab.hoverForeground"
  | "tab.unfocusedHoverForeground"
  | "tab.hoverBorder"
  | "tab.unfocusedHoverBorder"
  | "tab.activeModifiedBorder"
  | "tab.inactiveModifiedBorder"
  | "tab.unfocusedActiveModifiedBorder"
  | "tab.unfocusedInactiveModifiedBorder"
  | "editorPane.background"
  | "sideBySideEditor.horizontalBorder"
  | "sideBySideEditor.verticalBorder"

type EditorColors =
  | "editor.background"
  | "editor.foreground"
  | "editorLineNumber.foreground"
  | "editorLineNumber.activeForeground"
  | "editorLineNumber.dimmedForeground"
  | "editorCursor.background"
  | "editorCursor.foreground"
  | "editor.selectionBackground"
  | "editor.selectionForeground"
  | "editor.inactiveSelectionBackground"
  | "editor.selectionHighlightBackground"
  | "editor.selectionHighlightBorder"
  | "editor.wordHighlightBackground"
  | "editor.wordHighlightBorder"
  | "editor.wordHighlightStrongBackground"
  | "editor.wordHighlightStrongBorder"
  | "editor.wordHighlightTextBackground"
  | "editor.wordHighlightTextBorder"
  | "editor.findMatchBackground"
  | "editor.findMatchHighlightBackground"
  | "editor.findRangeHighlightBackground"
  | "editor.findMatchBorder"
  | "editor.findMatchHighlightBorder"
  | "editor.findRangeHighlightBorder"
  | "searchEditor.findMatchBackground"
  | "searchEditor.findMatchBorder"
  | "searchEditor.textInputBorder"
  | "editor.hoverHighlightBackground"
  | "editor.lineHighlightBackground"
  | "editor.lineHighlightBorder"
  | "editorUnicodeHighlight.border"
  | "editorUnicodeHighlight.background"
  | "editorLink.activeForeground"
  | "editor.rangeHighlightBackground"
  | "editor.rangeHighlightBorder"
  | "editor.symbolHighlightBackground"
  | "editor.symbolHighlightBorder"
  | "editorWhitespace.foreground"
  | "editorIndentGuide.background"
  | "editorIndentGuide.activeBackground"
  | "editorInlayHint.background"
  | "editorInlayHint.foreground"
  | "editorInlayHint.typeForeground"
  | "editorInlayHint.typeBackground"
  | "editorInlayHint.parameterForeground"
  | "editorInlayHint.parameterBackground"
  | "editorRuler.foreground"
  | "editor.linkedEditingBackground"
  | "editorCodeLens.foreground"
  | "editorLightBulb.foreground"
  | "editorLightBulbAutoFix.foreground"
  | "editorBracketMatch.background"
  | "editorBracketMatch.border"
  | "editorBracketHighlight.foreground1"
  | "editorBracketHighlight.foreground2"
  | "editorBracketHighlight.foreground3"
  | "editorBracketHighlight.foreground4"
  | "editorBracketHighlight.foreground5"
  | "editorBracketHighlight.foreground6"
  | "editorBracketHighlight.unexpectedBracket.foreground"
  | "editorBracketPairGuide.activeBackground1"
  | "editorBracketPairGuide.activeBackground2"
  | "editorBracketPairGuide.activeBackground3"
  | "editorBracketPairGuide.activeBackground4"
  | "editorBracketPairGuide.activeBackground5"
  | "editorBracketPairGuide.activeBackground6"
  | "editorBracketPairGuide.background1"
  | "editorBracketPairGuide.background2"
  | "editorBracketPairGuide.background3"
  | "editorBracketPairGuide.background4"
  | "editorBracketPairGuide.background5"
  | "editorBracketPairGuide.background6"
  | "editor.foldBackground"
  | "editorOverviewRuler.background"
  | "editorOverviewRuler.border"
  | "editorOverviewRuler.findMatchForeground"
  | "editorOverviewRuler.rangeHighlightForeground"
  | "editorOverviewRuler.selectionHighlightForeground"
  | "editorOverviewRuler.wordHighlightForeground"
  | "editorOverviewRuler.wordHighlightStrongForeground"
  | "editorOverviewRuler.wordHighlightTextForeground"
  | "editorOverviewRuler.modifiedForeground"
  | "editorOverviewRuler.addedForeground"
  | "editorOverviewRuler.deletedForeground"
  | "editorOverviewRuler.errorForeground"
  | "editorOverviewRuler.warningForeground"
  | "editorOverviewRuler.infoForeground"
  | "editorOverviewRuler.bracketMatchForeground"
  | "editorError.foreground"
  | "editorError.border"
  | "editorError.background"
  | "editorWarning.foreground"
  | "editorWarning.border"
  | "editorWarning.background"
  | "editorInfo.foreground"
  | "editorInfo.border"
  | "editorInfo.background"
  | "editorHint.foreground"
  | "editorHint.border"
  | "problemsErrorIcon.foreground"
  | "problemsWarningIcon.foreground"
  | "problemsInfoIcon.foreground"
  | "editorUnnecessaryCode.border"
  | "editorUnnecessaryCode.opacity"
  | "editorGutter.background"
  | "editorGutter.modifiedBackground"
  | "editorGutter.addedBackground"
  | "editorGutter.deletedBackground"
  | "editorGutter.commentRangeForeground"
  | "editorGutter.commentGlyphForground"
  | "editorGutter.foldingControlForeground"
  | "editorCommentsWidget.resolvedBorder"
  | "editorCommentsWidget.unresolvedBorder"
  | "editorCommentsWidget.rangeBackground"
  | "editorCommentsWidget.rangeBorder"
  | "editorCommentsWidget.rangeActiveBackground"
  | "editorCommentsWidget.rangeActiveBorder"

type DiffEditorColors =
  | "diffEditor.insertedTextBackground"
  | "diffEditor.insertedTextBorder"
  | "diffEditor.removedTextBackground"
  | "diffEditor.removedTextBorder"
  | "diffEditor.border"
  | "diffEditor.diagonalFill"
  | "diffEditor.insertedLineBackground"
  | "diffEditor.removedLineBackground"
  | "diffEditorGutter.insertedLineBackground"
  | "diffEditorGutter.removedLineBackground"
  | "diffEditorOverview.insertedForeground"
  | "diffEditorOverview.removedForeground"

type EditorWidgetColors =
  | "editorWidget.foreground"
  | "editorWidget.background"
  | "editorWidget.border"
  | "editorWidget.resizeBorder"
  | "editorSuggestWidget.background"
  | "editorSuggestWidget.border"
  | "editorSuggestWidget.foreground"
  | "editorSuggestWidget.focusHighlightForeground"
  | "editorSuggestWidget.highlightForeground"
  | "editorSuggestWidget.selectedBackground"
  | "editorSuggestWidget.selectedForeground"
  | "editorSuggestWidget.selectedIconForeground"
  | "editorSuggestWidgetStatus.foreground"
  | "editorHoverWidget.foreground"
  | "editorHoverWidget.background"
  | "editorHoverWidget.border"
  | "editorHoverWidget.highlightForeground"
  | "editorHoverWidget.statusBarBackground"
  | "editorGhostText.border"
  | "editorGhostText.background"
  | "editorGhostText.foreground"
  | "editorStickyScroll.background"
  | "editorStickyScrollHover.background"
  | "debugExceptionWidget.background"
  | "debugExceptionWidget.border"
  | "editorMarkerNavigation.background"
  | "editorMarkerNavigationError.background"
  | "editorMarkerNavigationWarning.background"
  | "editorMarkerNavigationInfo.background"
  | "editorMarkerNavigationError.headerBackground"
  | "editorMarkerNavigationWarning.headerBackground"
  | "editorMarkerNavigationInfo.headerBackground"

type PeekViewColors =
  | "peekView.border"
  | "peekViewEditor.background"
  | "peekViewEditorGutter.background"
  | "peekViewEditor.matchHighlightBackground"
  | "peekViewEditor.matchHighlightBorder"
  | "peekViewEditorStickScroll.background"
  | "peekViewResult.background"
  | "peekViewResult.fileForeground"
  | "peekViewResult.lineForeground"
  | "peekViewResult.matchHighlightBackground"
  | "peekViewResult.selectionBackground"
  | "peekViewResult.selectionForeground"
  | "peekViewTitle.background"
  | "peekViewTitleDescription.foreground"
  | "peekViewTitleLabel.foreground"

type MergeConflictsColors =
  | "merge.currentHeaderBackground"
  | "merge.currentContentBackground"
  | "merge.incomingHeaderBackground"
  | "merge.incomingContentBackground"
  | "merge.border"
  | "merge.commonContentBackground"
  | "merge.commonHeaderBackground"
  | "editorOverviewRuler.currentContentForeground"
  | "editorOverviewRuler.incomingContentForeground"
  | "editorOverviewRuler.commonContentForeground"
  | "mergeEditor.change.background"
  | "mergeEditor.change.word.background"
  | "mergeEditor.conflict.unhandledUnfocused.border"
  | "mergeEditor.conflict.unhandledFocused.border"
  | "mergeEditor.conflict.handledUnfocused.border"
  | "mergeEditor.conflict.handledFocused.border"
  | "mergeEditor.conflict.handled.minimapOverViewRuler"
  | "mergeEditor.conflict.unhandled.minimapOverViewRuler"
  | "mergeEditor.conflictingLines.background"
  | "mergeEditor.changeBase.background"
  | "mergeEditor.changeBase.word.background"
  | "mergeEditor.conflict.input1.background"
  | "mergeEditor.conflict.input2.background"

type PanelColors =
  | "panel.background"
  | "panel.border"
  | "panel.dropBorder"
  | "panelTitle.activeBorder"
  | "panelTitle.activeForeground"
  | "panelTitle.inactiveForeground"
  | "panelInput.border"
  | "panelSection.border"
  | "panelSection.dropBackground"
  | "panelSectionHeader.background"
  | "panelSectionHeader.foreground"
  | "panelSectionHeader.border"

type StatusBarColors =
  | "statusBar.background"
  | "statusBar.foreground"
  | "statusBar.border"
  | "statusBar.debuggingBackground"
  | "statusBar.debuggingForeground"
  | "statusBar.debuggingBorder"
  | "statusBar.noFolderForeground"
  | "statusBar.noFolderBackground"
  | "statusBar.noFolderBorder"
  | "statusBarItem.activeBackground"
  | "statusBarItem.hoverBackground"
  | "statusBarItem.prominentForeground"
  | "statusBarItem.prominentBackground"
  | "statusBarItem.prominentHoverBackground"
  | "statusBarItem.remoteBackground"
  | "statusBarItem.remoteForeground"
  | "statusBarItem.errorBackground"
  | "statusBarItem.errorForeground"
  | "statusBarItem.warningBackground"
  | "statusBarItem.warningForeground"
  | "statusBarItem.compactHoverBackground"
  | "statusBarItem.focusBorder"
  | "statusBar.focusBorder"

type TitleBarColors =
  | "titleBar.activeBackground"
  | "titleBar.activeForeground"
  | "titleBar.inactiveBackground"
  | "titleBar.inactiveForeground"
  | "titleBar.border"

type MenuBarColors =
  | "menubar.selectionForeground"
  | "menubar.selectionBackground"
  | "menubar.selectionBorder"
  | "menu.foreground"
  | "menu.background"
  | "menu.selectionForeground"
  | "menu.selectionBackground"
  | "menu.selectionBorder"
  | "menu.separatorBackground"
  | "menu.border"

type CommandCenterColors =
  | "commandCenter.foreground"
  | "commandCenter.activeForeground"
  | "commandCenter.background"
  | "commandCenter.activeBackground"
  | "commandCenter.border"
  | "commandCenter.inactiveForeground"
  | "commandCenter.inactiveBorder"
  | "commandCenter.activeBorder"

type NotificationColors =
  | "notificationCenter.border"
  | "notificationCenterHeader.foreground"
  | "notificationCenterHeader.background"
  | "notificationToast.border"
  | "notifications.foreground"
  | "notifications.background"
  | "notifications.border"
  | "notificationLink.foreground"
  | "notificationsErrorIcon.foreground"
  | "notificationsWarningIcon.foreground"
  | "notificationsInfoIcon.foreground"

type BannerColors =
  | "banner.background"
  | "banner.foreground"
  | "banner.iconForeground"

type ExtensionsColors =
  | "extensionButton.prominentForeground"
  | "extensionButton.prominentBackground"
  | "extensionButton.prominentHoverBackground"
  | "extensionButton.background"
  | "extensionButton.foreground"
  | "extensionButton.hoverBackground"
  | "extensionButton.separator"
  | "extensionBadge.remoteBackground"
  | "extensionBadge.remoteForeground"
  | "extensionIcon.starForeground"
  | "extensionIcon.verifiedForeground"
  | "extensionIcon.preReleaseForeground"
  | "extensionIcon.sponsorForeground"

type QuickPickerColors =
  | "pickerGroup.border"
  | "pickerGroup.foreground"
  | "quickInput.background"
  | "quickInput.foreground"
  | "quickInputList.focusBackground"
  | "quickInputList.focusForeground"
  | "quickInputList.focusIconForeground"
  | "quickInputTitle.background"

type KeybindingLabelColors =
  | "keybindingLabel.background"
  | "keybindingLabel.foreground"
  | "keybindingLabel.border"
  | "keybindingLabel.bottomBorder"

type KeyboardShortcutTableColors =
  | "keybindingTable.headerBackground"
  | "keybindingTable.rowsBackground"

type IntegratedTerminalColors =
  | "terminal.background"
  | "terminal.border"
  | "terminal.foreground"
  | "terminal.ansiBlack"
  | "terminal.ansiBlue"
  | "terminal.ansiBrightBlack"
  | "terminal.ansiBrightBlue"
  | "terminal.ansiBrightCyan"
  | "terminal.ansiBrightGreen"
  | "terminal.ansiBrightMagenta"
  | "terminal.ansiBrightRed"
  | "terminal.ansiBrightWhite"
  | "terminal.ansiBrightYellow"
  | "terminal.ansiCyan"
  | "terminal.ansiGreen"
  | "terminal.ansiMagenta"
  | "terminal.ansiRed"
  | "terminal.ansiWhite"
  | "terminal.ansiYellow"
  | "terminal.selectionBackground"
  | "terminal.selectionForeground"
  | "terminal.inactiveSelectionBackground"
  | "terminal.findMatchBackground"
  | "terminal.findMatchBorder"
  | "terminal.findMatchHighlightBackground"
  | "terminal.findMatchHighlightBorder"
  | "terminalCursor.background"
  | "terminalCursor.foreground"
  | "terminal.dropBackground"
  | "terminal.tab.activeBorder"
  | "terminalCommandDecoration.defaultBackground"
  | "terminalCommandDecoration.successBackground"
  | "terminalCommandDecoration.errorBackground"
  | "terminalOverviewRuler.cursorForeground"
  | "terminalOverviewRuler.findMatchForeground"

type DebugColors =
  | "debugToolBar.background"
  | "debugToolBar.border"
  | "editor.stackFrameHighlightBackground"
  | "editor.focusedStackFrameHighlightBackground"
  | "editor.inlineValuesForeground"
  | "editor.inlineValuesBackground"
  | "debugView.exceptionLabelForeground"
  | "debugView.exceptionLabelBackground"
  | "debugView.stateLabelForeground"
  | "debugView.stateLabelBackground"
  | "debugView.valueChangedHighlight"
  | "debugTokenExpression.name"
  | "debugTokenExpression.value"
  | "debugTokenExpression.string"
  | "debugTokenExpression.boolean"
  | "debugTokenExpression.number"
  | "debugTokenExpression.error"

type TestingColors =
  | "testing.iconFailed"
  | "testing.iconErrored"
  | "testing.iconPassed"
  | "testing.runAction"
  | "testing.iconQueued"
  | "testing.iconUnset"
  | "testing.iconSkipped"
  | "testing.peekBorder"
  | "testing.peekHeaderBackground"
  | "testing.message.error.decorationForeground"
  | "testing.message.error.lineBackground"
  | "testing.message.info.decorationForeground"
  | "testing.message.info.lineBackground"

type WelcomePageColors =
  | "welcomePage.background"
  | "welcomePage.progress.background"
  | "welcomePage.progress.foreground"
  | "welcomePage.tileBackground"
  | "welcomePage.tileHoverBackground"
  | "welcomePage.tileBorder"
  | "walkThrough.embeddedEditorBackground"
  | "walkthrough.stepTitle.foreground"
  | "welcomeOverlay.background"

type SourceControlColors = "scm.providerBorder"

type GitColors =
  | "gitDecoration.addedResourceForeground"
  | "gitDecoration.modifiedResourceForeground"
  | "gitDecoration.deletedResourceForeground"
  | "gitDecoration.renamedResourceForeground"
  | "gitDecoration.stageModifiedResourceForeground"
  | "gitDecoration.stageDeletedResourceForeground"
  | "gitDecoration.untrackedResourceForeground"
  | "gitDecoration.ignoredResourceForeground"
  | "gitDecoration.conflictingResourceForeground"
  | "gitDecoration.submoduleResourceForeground"

type SettingsEditorColors =
  | "settings.headerForeground"
  | "settings.modifiedItemIndicator"
  | "settings.dropdownBackground"
  | "settings.dropdownForeground"
  | "settings.dropdownBorder"
  | "settings.dropdownListBorder"
  | "settings.checkboxBackground"
  | "settings.checkboxForeground"
  | "settings.checkboxBorder"
  | "settings.rowHoverBackground"
  | "settings.textInputBackground"
  | "settings.textInputForeground"
  | "settings.textInputBorder"
  | "settings.numberInputBackground"
  | "settings.numberInputForeground"
  | "settings.numberInputBorder"
  | "settings.focusedRowBackground"
  | "settings.focusedRowBorder"
  | "settings.headerBorder"
  | "settings.sashBorder"
  | "settings.settingsHeaderHoverForeground"

type BreadcrumbsColors =
  | "breadcrumb.foreground"
  | "breadcrumb.background"
  | "breadcrumb.focusForeground"
  | "breadcrumb.activeSelectionForeground"
  | "breadcrumbPicker.background"

type SnippetsColors =
  | "editor.snippetTabstopHighlightBackground"
  | "editor.snippetTabstopHighlightBorder"
  | "editor.snippetFinalTabstopHighlightBackground"
  | "editor.snippetFinalTabstopHighlightBorder"

type SymbolIconsColors =
  | "symbolIcon.arrayForeground"
  | "symbolIcon.booleanForeground"
  | "symbolIcon.classForeground"
  | "symbolIcon.colorForeground"
  | "symbolIcon.constantForeground"
  | "symbolIcon.constructorForeground"
  | "symbolIcon.enumeratorForeground"
  | "symbolIcon.enumeratorMemberForeground"
  | "symbolIcon.eventForeground"
  | "symbolIcon.fieldForeground"
  | "symbolIcon.fileForeground"
  | "symbolIcon.folderForeground"
  | "symbolIcon.functionForeground"
  | "symbolIcon.interfaceForeground"
  | "symbolIcon.keyForeground"
  | "symbolIcon.keywordForeground"
  | "symbolIcon.methodForeground"
  | "symbolIcon.moduleForeground"
  | "symbolIcon.namespaceForeground"
  | "symbolIcon.nullForeground"
  | "symbolIcon.numberForeground"
  | "symbolIcon.objectForeground"
  | "symbolIcon.operatorForeground"
  | "symbolIcon.packageForeground"
  | "symbolIcon.propertyForeground"
  | "symbolIcon.referenceForeground"
  | "symbolIcon.snippetForeground"
  | "symbolIcon.stringForeground"
  | "symbolIcon.structForeground"
  | "symbolIcon.textForeground"
  | "symbolIcon.typeParameterForeground"
  | "symbolIcon.unitForeground"
  | "symbolIcon.variableForeground"

type DebugIconsColors =
  | "debugIcon.breakpointForeground"
  | "debugIcon.breakpointDisabledForeground"
  | "debugIcon.breakpointUnverifiedForeground"
  | "debugIcon.breakpointCurrentStackframeForeground"
  | "debugIcon.breakpointStackframeForeground"
  | "debugIcon.startForeground"
  | "debugIcon.pauseForeground"
  | "debugIcon.stopForeground"
  | "debugIcon.disconnectForeground"
  | "debugIcon.restartForeground"
  | "debugIcon.stepOverForeground"
  | "debugIcon.stepIntoForeground"
  | "debugIcon.stepOutForeground"
  | "debugIcon.continueForeground"
  | "debugIcon.stepBackForeground"
  | "debugConsole.infoForeground"
  | "debugConsole.warningForeground"
  | "debugConsole.errorForeground"
  | "debugConsole.sourceForeground"
  | "debugConsoleInputIcon.foreground"

type NotebookColors =
  | "notebook.editorBackground"
  | "notebook.cellBorderColor"
  | "notebook.cellHoverBackground"
  | "notebook.cellInsertionIndicator"
  | "notebook.cellStatusBarItemHoverBackground"
  | "notebook.cellToolbarSeparator"
  | "notebook.cellEditorBackground"
  | "notebook.focusedCellBackground"
  | "notebook.focusedCellBorder"
  | "notebook.focusedEditorBorder"
  | "notebook.inactiveFocusedCellBorder"
  | "notebook.inactiveSelectedCellBorder"
  | "notebook.outputContainerBackgroundColor"
  | "notebook.outputContainerBorderColor"
  | "notebook.selectedCellBackground"
  | "notebook.selectedCellBorder"
  | "notebook.symbolHighlightBackground"
  | "notebookScrollbarSlider.activeBackground"
  | "notebookScrollbarSlider.background"
  | "notebookScrollbarSlider.hoverBackground"
  | "notebookStatusErrorIcon.foreground"
  | "notebookStatusRunningIcon.foreground"
  | "notebookStatusSuccessIcon.foreground"
  | "notebookEditorOverviewRuler.runningCellForeground"

type ChartColors =
  | "charts.foreground"
  | "charts.lines"
  | "charts.red"
  | "charts.blue"
  | "charts.yellow"
  | "charts.orange"
  | "charts.green"
  | "charts.purple"

type PortsColors = "ports.iconRunningProcessForeground"

export type Colors =
  | ContrastColors
  | BaseColors
  | WindowBorder
  | TextColors
  | ActionColors
  | ButtonControl
  | DropdownControl
  | InputControl
  | ScrollbarControl
  | Badge
  | ProgressBar
  | ListsAndTrees
  | ActivityBar
  | SideBar
  | Minimap
  | EditorGroupsAndTabs
  | EditorColors
  | DiffEditorColors
  | EditorWidgetColors
  | PeekViewColors
  | MergeConflictsColors
  | PanelColors
  | StatusBarColors
  | TitleBarColors
  | MenuBarColors
  | CommandCenterColors
  | NotificationColors
  | BannerColors
  | ExtensionsColors
  | QuickPickerColors
  | KeybindingLabelColors
  | KeyboardShortcutTableColors
  | IntegratedTerminalColors
  | DebugColors
  | TestingColors
  | WelcomePageColors
  | SourceControlColors
  | GitColors
  | SettingsEditorColors
  | BreadcrumbsColors
  | SnippetsColors
  | SymbolIconsColors
  | DebugIconsColors
  | NotebookColors
  | ChartColors
  | PortsColors
  | ExtensionsColors

export type FontStyle = "bold" | "italic" | "strikethrough" | "underline" | ""
