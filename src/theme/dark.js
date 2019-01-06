export default function darkTheme(constant, settings) {
  const th = {
    fontMain: '"Open Sans", sans-serif',
    fontSecondary: '"Open Sans", sans-serif',

    fontWeightThin: '200',
    fontWeightLight: '300',
    fontWeightNormal: '400',
    fontWeightBolder: '500',
    fontWeightBold: '600',
    fontWeightUltraBold: '800',

    baseFontSize: '16px',
    fontSizeXlg: '1.25rem',
    fontSizeLg: '1.125rem',
    fontSize: '1rem',
    fontSizeSm: '0.875rem',
    fontSizeXs: '0.75rem',

    separator: '#342e73',

    radius: '0.5rem',
    padding: '1.25rem',
    margin: '1.5rem',
    lineHeight: '1.25',

    colorBg: '#3d3780',
    colorBgActive: '#494299',
    colorFg: '#a1a1e5',
    colorFgHeading: '#ffffff',
    colorFgText: '#d1d1ff',
    colorFgHighlight: '#00f9a6',
    colorNeutral: 'transparent',
    colorWhite: '#ffffff',

    socialColorFacebook: '#3b5998',
    socialColorTwitter: '#55acee',
    socialColorGoogle: '#dd4b39',
    socialColorLinkedin: '#0177b5',
    socialColorGithub: '#6b6b6b',
    socialColorStackoverflow: '#2f96e8',
    socialColorDribble: '#f26798',
    socialColorBehance: '#0093fa',

    disabled: 'rgba(255, 255, 255, 0.4)',
    primary: '#7659ff',
    success: '#00d977',
    info: '#0088ff',
    warning: '#ffa100',
    danger: '#ff386a',

    borderColor: 'rgba(81, 113, 165, 0.15)',
    shadow: '0 8px 20px 0 rgba(40, 37, 89, 0.6)',

    linkColor: '#00f9a6',
    linkColorHover: '#14ffbe',
    linkColorVisited: '#3dcc6d',

    scrollbarFg: '#554db3',
    scrollbarBg: '#332e73',
    scrollbarWidth: '5px',
    scrollbarThumbRadius: '2.5px',

    radialGradient: 'radial-gradient(circle at 50% 50%, #423f8c, #302c6e)',
    linearGradient: 'linear-gradient(to right, #171749, #413789)',
    ...constant
  };

  return {
    layoutFontFamily: th.fontMain,
    layoutFontSize: th.fontSize,
    layoutLineHeight: th.lineHeight,
    layoutFg: th.colorFg,
    layoutBg: '#2f296b',
    layoutMinHeight: '100vh',
    layoutContentWidth: '900px',
    layoutWindowModeMinWidth: '300px',
    layoutWindowModeMaxWidth: '1920px',
    get layoutWindowModeBg() {
      return this.layoutBg;
    },
    layoutWindowModePaddingTop: '4.75rem',
    layoutWindowShadow: th.shadow,
    layoutPadding: '2.25rem 2.25rem 0.75rem',
    layoutMediumPadding: '1.5rem 1.5rem 0.5rem',
    layoutSmallPadding: '1rem 1rem 0',

    cardFontSize: th.fontSize,
    cardLineHeight: th.lineHeight,
    cardFontWeight: th.fontWeightNormal,
    cardFg: th.colorFg,
    cardFgText: th.colorFgText,
    cardFgHeading: th.colorFgHeading,
    cardBg: th.colorBg,
    cardHeightXXS: '96px',
    cardHeightXS: '216px',
    cardHeightS: '336px',
    cardHeightM: '456px',
    cardHeightL: '576px',
    cardHeightXL: '696px',
    cardHeightXXL: '816px',
    cardShadow: th.shadow,
    cardBorderWidth: 0,
    cardBorderType: 'solid',
    cardBorderColor: th.colorBg,
    cardBorderRadius: th.radius,
    cardPadding: th.padding,
    cardMargin: th.margin,
    cardHeaderFontFamily: th.fontSecondary,
    cardHeaderFontSize: th.fontSizeLg,
    cardHeaderFontWeight: th.fontWeightBold,
    cardSeparator: th.separator,
    cardHeaderFg: th.colorFg,
    cardHeaderFgHeading: th.colorFgHeading,
    cardHeaderActiveBg: th.colorFg,
    cardHeaderActiveFg: th.colorBg,
    cardHeaderDisabledBg: th.disabled,
    cardHeaderPrimaryBg: th.primary,
    cardHeaderInfoBg: th.info,
    cardHeaderSuccessBg: th.success,
    cardHeaderWarningBg: th.warning,
    cardHeaderDangerBg: th.danger,
    cardHeaderBorderWidth: '1px',
    cardHeaderBorderType: 'solid',
    get cardHeaderBorderColor() {
      return this.cardSeparator;
    },

    headerHeight: '4.75rem',
    headerPadding: '1.25rem',
    headerFontFamily: th.fontSecondary,
    headerFontSize: th.fontSize,
    headerLineHeight: th.lineHeight,
    headerFg: th.colorFgHeading,
    headerBg: th.colorBg,
    headerShadow: th.shadow,

    footerHeight: '4.725rem',
    footerPadding: '1.25rem',
    footerFg: th.colorFgHeading,
    footerFgHighlight: th.colorFgHeading,
    footerBg: th.colorBg,
    footerSeparator: th.separator,
    footerShadow: th.shadow,

    sidebarFontSize: th.fontSize,
    sidebarLineHeight: th.lineHeight,
    sidebarFg: th.colorFgHeading,
    sidebarBg: th.colorBg,
    sidebarHeight: '100vh',
    sidebarWidth: '16rem',
    sidebarWidthCompact: '3.5rem',
    sidebarPadding: th.padding,
    sidebarHeaderHeight: '3.5rem',
    sidebarFooterHeight: '3.5rem',
    sidebarShadow: th.shadow,

    menuFontFamily: th.fontSecondary,
    menuFontSize: th.fontSize,
    menuFontWeight: th.fontWeightNormal,
    menuFg: th.colorFg,
    menuBg: th.colorBg,
    menuActiveFg: th.colorWhite,
    menuActiveBg: th.colorBg,
    menuActiveFontWeight: th.fontWeightBolder,
    get menuSubmenuBg() {
      return this.layoutBg;
    },
    menuSubmenuFg: th.colorFg,
    menuSubmenuActiveFg: th.colorFgHeading,
    menuSubmenuActiveBg: 'rgba(0, 255, 170, 0.25)',
    menuSubmenuActiveBorderColor: th.colorFgHighlight,
    menuSubmenuActiveShadow: '0 2px 12px 0 rgba(0, 255, 170, 0.25)',
    menuSubmenuHoverFg: th.colorFgHeading,
    menuSubmenuHoverBg: th.colorBg,
    menuSubmenuItemBorderWidth: '0.125rem',
    menuSubmenuItemBorderRadius: th.radius,
    menuSubmenuItemPadding: '0.5rem 1rem',
    menuSubmenuItemContainerPadding: '0 1.25rem',
    menuSubmenuPadding: '0.5rem',
    menuGroupFontWeight: th.fontWeightBorder,
    menuGroupFontSize: '0.875rem',
    menuGroupFg: th.colorWhite,
    menuGroupPadding: '1rem 1.25rem',
    menuItemPadding: '0.675rem 0.75rem',
    menuItemSeparator: th.separator,
    menuIconFontSize: '1.5rem',
    menuIconMargin: '0 0.25rem 0',
    menuIconColor: th.colorFg,
    menuIconActiveColor: th.colorFgHeading,

    tabsFontFamily: th.fontSecondary,
    tabsFontSize: th.fontSizeLg,
    tabsContentFontFamily: th.fontMain,
    tabsContentFontSize: th.fontSize,
    tabsActiveBg: 'transparent',
    tabsActiveFontWeight: th.fontWeightBold,
    tabsPadding: th.padding,
    tabsContentPadding: th.padding,
    tabsHeaderBg: 'transparent',
    tabsSeparator: th.separator,
    tabsFg: th.colorFg,
    tabsFgText: th.colorFgText,
    tabsFgHeading: th.colorFgHeading,
    tabsBg: 'transparent',
    tabsSelected: th.success,
    tabsIconOnlyMaxWidth: '576px',

    routeTabsFontFamily: th.fontSecondary,
    routeTabsFontSize: th.fontSizeLg,
    routeTabsActiveBg: 'transparent',
    routeTabsActiveFontWeight: th.fontWeightBold,
    routeTabsPadding: th.padding,
    routeTabsHeaderBg: 'transparent',
    routeTabsSeparator: th.separator,
    routeTabsFg: th.colorFg,
    routeTabsFgHeading: th.colorFgHeading,
    routeTabsBg: 'transparent',
    routeTabsSelected: th.success,
    routeTabsIconOnlyMaxWidth: '576px',

    userFontSize: th.fontSize,
    userLineHeight: th.lineHeight,
    userBg: th.colorBg,
    userFg: th.colorFg,
    userFgHighlight: '#bcc3cc',
    userFontFamilySecondary: th.fontSecondary,
    userSizeSmall: '1.5rem',
    userSizeMedium: '2.5rem',
    userSizeLarge: '3.25rem',
    userSizeXlarge: '4rem',

    popoverFg: th.colorFgHeading,
    popoverBg: th.colorBg,
    popoverBorder: th.success,
    popoverShadow: 'none',

    contextMenuFg: th.colorFgHeading,
    contextMenuActiveFg: th.colorWhite,
    contextMenuActiveBg: th.success,

    actionsFontSize: th.fontSize,
    actionsFontFamily: th.fontSecondary,
    actionsLineHeight: th.lineHeight,
    actionsFg: th.colorFg,
    actionsBg: th.colorBg,
    actionsSeparator: th.separator,
    actionsPadding: th.padding,
    actionsSizeSmall: '1.5rem',
    actionsSizeMedium: '2.25rem',
    actionsSizeLarge: '3.5rem',

    searchBtnOpenFg: th.colorFg,
    searchBtnCloseFg: th.colorFg,
    get searchBg() {
      return this.layoutBg;
    },
    searchBgSecondary: th.colorFg,
    searchText: th.colorFgHeading,
    searchInfo: th.colorFg,
    searchDash: th.colorFg,
    searchPlaceholder: th.colorFg,

    smartTableHeaderFontFamily: th.fontSecondary,
    smartTableHeaderFontSize: th.fontSize,
    smartTableHeaderFontWeight: th.fontWeightBold,
    smartTableHeaderLineHeight: th.lineHeight,
    smartTableHeaderFg: th.colorFgHeading,
    smartTableHeaderBg: th.colorBg,
    smartTableFontFamily: th.fontMain,
    smartTableFontSize: th.fontSize,
    smartTableFontWeight: th.fontWeightNormal,
    smartTableLineHeight: th.lineHeight,
    smartTableFg: th.colorFgHeading,
    smartTableBg: th.colorBg,
    smartTableBgEven: '#f5f7fc',
    smartTableFgSecondary: th.colorFg,
    smartTableBgActive: '#e6f3ff',
    smartTablePadding: '0.875rem 1.25rem',
    smartTableFilterPadding: '0.375rem 0.5rem',
    smartTableSeparator: th.separator,
    smartTableBorderRadius: th.radius,
    smartTablePagingBorderColor: th.separator,
    smartTablePagingBorderWidth: '1px',
    smartTablePagingFgActive: '#ffffff',
    smartTablePagingBgActive: th.success,
    smartTablePagingHover: 'rgba(0, 0, 0, 0.05)',

    toasterBg: th.primary,
    toasterFgDefault: th.colorInverse,
    toasterBtnCloseBg: 'transparent',
    toasterBtnCloseFg: th.toasterFgDefault,
    toasterShadow: th.shadow,
    toasterFg: th.colorWhite,
    toasterSuccess: th.success,
    toasterInfo: th.info,
    toasterWarning: th.warning,
    toasterWait: th.primary,
    toasterError: th.danger,

    btnFg: th.colorWhite,
    btnFontFamily: th.fontSecondary,
    btnLineHeight: th.lineHeight,
    btnDisabledOpacity: 0.3,
    btnCursor: 'default',
    btnPrimaryBg: th.primary,
    btnSecondaryBg: 'transparent',
    btnInfoBg: th.info,
    btnSuccessBg: th.success,
    btnWarningBg: th.warning,
    btnDangerBg: th.danger,
    btnSecondaryBorder: '#dadfe6',
    btnSecondaryBorderWidth: '2px',
    btnPaddingYLg: '0.875rem',
    btnPaddingXLg: '1.75rem',
    btnFontSizeLg: th.fontSizeLg,
    btnPaddingXMd: '1.5rem',
    btnFontSizeMd: '1rem',
    btnPaddingYSm: '0.625rem',
    btnPaddingXSm: '1.5rem',
    btnFontSizeSm: '0.875rem',
    btnPaddingYXs: '0.5rem',
    btnPaddingXXs: '1.25rem',
    btnFontSizeXs: '0.75rem',
    btnBorderRadius: th.radius,
    btnRectangleBorderRadius: '0.25rem',
    btnSemiRoundBorderRadius: '0.75rem',
    btnRoundBorderRadius: '1.5rem',

    btnHeroShadow: 'none',
    btnHeroTextShadow: 'none',
    btnHeroBevelSize: '0 0 0 0',
    btnHeroGlowSize: '0 0 0 0',
    get btnHeroPrimaryGlowSize() {
      return this.btnHeroGlowSize;
    },
    get btnHeroSuccessGlowSize() {
      return this.btnHeroGlowSize;
    },
    get btnHeroWarningGlowSize() {
      return this.btnHeroGlowSize;
    },
    get btnHeroInfoGlowSize() {
      return this.btnHeroGlowSize;
    },
    get btnHeroDangerGlowSize() {
      return this.btnHeroGlowSize;
    },
    get btnHeroSecondaryGlowSize() {
      return this.btnHeroGlowSize;
    },
    btnHeroDegree: '20deg',
    get btnHeroPrimaryDegree() {
      return this.btnHeroDegree;
    },
    get btnHeroSuccessDegree() {
      return this.btnHeroDegree;
    },
    btnHeroWarningDegree: '10deg',
    btnHeroInfoDegree: '10deg',
    btnHeroDangerDegree: '20deg',
    get btnHeroSecondaryDegree() {
      return this.btnHeroDegree;
    },
    btnHeroBorderRadius: th.radius,
    btnOutlineFg: th.colorFgHeading,
    btnOutlineHoverFg: '#ffffff',
    btnOutlineFocusFg: th.colorFgHeading,
    get btnGroupBg() {
      return this.layoutBg;
    },
    btnGroupFg: th.colorFgHeading,
    btnGroupSeparator: '#dadfe6',

    formControlTextPrimaryColor: th.colorFgHeading,
    formControlBg: th.colorBg,
    formControlFocusBg: th.colorBg,
    formControlBorderWidth: '2px',
    formControlBorderType: 'solid',
    formControlBorderColor: '#dadfe6',
    formControlRectangleBorderRadius: th.radius,
    formControlSemiRoundBorderRadius: '0.75rem',
    formControlRoundBorderRadius: '1.5rem',
    formControlSelectedBorderColor: th.success,
    formControlInfoBorderColor: th.info,
    formControlSuccessBorderColor: th.success,
    formControlDangerBorderColor: th.danger,
    formControlWarningBorderColor: th.warning,
    formControlPlaceholderColor: th.colorFg,
    formControlPlaceholderFontSize: '1rem',
    formControlFontSizeMd: '1rem',
    formControlPaddingMd: '0.75rem 1.125rem',
    formControlFontSizeSm: th.fontSizeSm,
    formControlPaddingSm: '0.375rem 1.125rem',
    formControlFontSizeLg: th.fontSizeLg,
    formControlPaddingLg: '1.125rem 1.125rem',
    formControlLabelFontWeight: 400,
    formControlFeedbackFontSize: '0.875rem',
    formControlFeedbackFontWeight: th.fontWeightNormal,

    checkboxBg: 'transparent',
    checkboxSize: '1.25rem',
    checkboxBorderSize: '2px',
    get checkboxBorderColor() {
      return this.formControlBorderColor;
    },
    checkboxCheckmark: 'transparent',
    checkboxCheckedBg: 'transparent',
    checkboxCheckedSize: '1.25rem',
    checkboxCheckedBorderSize: '2px',
    checkboxCheckedBorderColor: th.success,
    checkboxCheckedCheckmark: th.colorFgHeading,
    checkboxDisabledBg: 'transparent',
    checkboxDisabledSize: '1.25rem',
    checkboxDisabledBorderSize: '2px',
    checkboxDisabledBorderColor: th.colorFgHeading,
    checkboxDisabledCheckmark: th.colorFgHeading,

    modalFontSize: th.fontSize,
    modalLineHeight: th.lineHeight,
    modalFontWeight: th.fontWeightNormal,
    modalFg: th.colorFgText,
    modalFgHeading: th.colorFgHeading,
    modalBg: th.colorBg,
    modalBorder: 'transparent',
    modalBorderRadius: th.radius,
    modalPadding: th.padding,
    modalHeaderFontFamily: th.fontSecondary,
    modalHeaderFontWeight: th.fontWeightBorder,
    modalHeaderFontSize: th.fontSizeLg,
    modalBodyFontFamily: th.fontMain,
    modalBodyFontWeight: th.fontWeightNormal,
    modalBodyFontSize: th.fontSize,
    modalSeparator: th.separator,

    badgeFgText: th.colorWhite,
    badgePrimaryBgColor: th.primary,
    badgeSuccessBgColor: th.success,
    badgeInfoBgColor: th.info,
    badgeWarningBgColor: th.warning,
    badgeDangerBgColor: th.danger,

    progressBarHeightXlg: '1.75rem',
    progressBarHeightLg: '1.5rem',
    progressBarHeight: '1.375rem',
    progressBarHeightSm: '1.25rem',
    progressBarHeightXs: '1rem',
    progressBarAnimationDuration: '400ms',
    progressBarFontSizeXlg: th.fontSizeXlg,
    progressBarFontSizeLg: th.fontSizeLg,
    progressBarFontSize: th.fontSize,
    progressBarFontSizeSm: th.fontSizeSm,
    progressBarFontSizeXs: th.fontSizeXs,
    progressBarRadius: th.radius,
    get progressBarBg() {
      return this.layoutBg;
    },
    progressBarFontColor: th.colorWhite,
    progressBarFontWeight: th.fontWeightBold,
    progressBarDefaultBg: th.info,
    progressBarPrimaryBg: th.primary,
    progressBarSuccessBg: th.success,
    progressBarInfoBg: th.info,
    progressBarWarningBg: th.warning,
    progressBarDangerBg: th.danger,

    alertFontSize: th.fontSize,
    alertLineHeight: th.lineHeight,
    alertFontWeight: th.fontWeightNormal,
    alertFg: th.colorWhite,
    alertOutlineFg: th.colorFg,
    alertBg: th.colorBg,
    alertActiveBg: th.colorFg,
    alertDisabledBg: th.disabled,
    alertDisabledFg: th.colorFg,
    alertPrimaryBg: th.primary,
    alertInfoBg: th.info,
    alertSuccessBg: th.success,
    alertWarningBg: th.warning,
    alertDangerBg: th.danger,
    alertHeightXxsmall: '52px',
    alertHeightXsmall: '72px',
    alertHeightSmall: '92px',
    alertHeightMedium: '112px',
    alertHeightLarge: '132px',
    alertHeightXlarge: '152px',
    alertHeightXxlarge: '172px',
    alertShadow: 'none',
    alertBorderRadius: th.radius,
    alertPadding: '1rem 1.125rem',
    alertClosablePadding: '3rem',
    alertButtonPadding: '3rem',
    alertMargin: th.margin,

    chatFontSize: th.fontSize,
    chatFg: th.colorWhite,
    chatBg: th.colorBg,
    chatBorderRadius: th.radius,
    chatFgText: th.colorFgText,
    chatHeightXxsmall: '96px',
    chatHeightXsmall: '216px',
    chatHeightSmall: '336px',
    chatHeightMedium: '456px',
    chatHeightLarge: '576px',
    chatHeightXlarge: '696px',
    chatHeightXxlarge: '816px',
    chatBorder: th.border,
    chatPadding: th.padding,
    chatShadow: th.shadow,
    chatSeparator: th.separator,
    chatMessageFg: th.colorWhite,
    chatMessageBg: 'linearGradient(to right, #4ca6ff, #59bfff)',
    chatMessageReplyBg: th.colorBgActive,
    chatMessageReplyFg: th.colorFgText,
    chatMessageAvatarBg: th.colorFg,
    chatMessageSenderFg: th.colorFg,
    chatMessageQuoteFg: th.colorFg,
    chatMessageQuoteBg: th.colorBgActive,
    chatMessageFileFg: th.colorFg,
    chatMessageFileBg: 'transparent',
    chatFormBg: 'transparent',
    chatFormFg: th.colorFgHeading,
    chatFormBorder: th.separator,
    chatFormPlaceholderFg: th.colorFg,
    chatFormActiveBorder: th.colorFg,
    chatActiveBg: th.colorFg,
    chatDisabledBg: th.disabled,
    chatDisabledFg: th.colorFg,
    chatPrimaryBg: th.primary,
    chatInfoBg: th.info,
    chatSuccessBg: th.success,
    chatWarningBg: th.warning,
    chatDangerBg: th.danger,

    spinnerBg: 'rgba(255, 255, 255, 0.83)',
    spinnerCircleBg: th.colorBgActive,
    spinnerFg: th.colorFgText,
    spinnerActiveBg: th.colorFg,
    spinnerDisabledBg: th.disabled,
    spinnerDisabledFg: th.colorFg,
    spinnerPrimaryBg: th.primary,
    spinnerInfoBg: th.info,
    spinnerSuccessBg: th.success,
    spinnerWarningBg: th.warning,
    spinnerDangerBg: th.danger,
    spinnerXxsmall: '1.25rem',
    spinnerXsmall: '1.5rem',
    spinnerSmall: '1.75rem',
    spinnerMedium: '2rem',
    spinnerLarge: '2.25rem',
    spinnerXlarge: '2.5rem',
    spinnerXxlarge: '3rem',

    stepperIndexSize: '2rem',
    stepperLabelFontSize: th.fontSizeSm,
    stepperLabelFontWeight: th.fontWeightBorder,
    stepperAccentColor: th.primary,
    stepperCompletedFg: th.colorWhite,
    stepperFg: th.colorFg,
    stepperCompletedIconSize: '1.5rem',
    stepperCompletedIconWeight: th.fontWeightUltraBold,
    stepperStepPadding: th.padding,

    accordionPadding: th.padding,
    accordionSeparator: th.separator,
    accordionHeaderFontFamily: th.fontSecondary,
    accordionHeaderFontSize: th.fontSizeLg,
    accordionHeaderFontWeight: th.fontWeightNormal,
    accordionHeaderFgHeading: th.colorFgHeading,
    accordionHeaderDisabledFg: th.colorFg,
    accordionHeaderBorderWidth: '1px',
    accordionHeaderBorderType: 'solid',
    get accordionHeaderBorderColor() {
      return this.accordionSeparator;
    },
    accordionBorderRadius: th.radius,
    accordionItemBg: th.colorBg,
    accordionItemFontSize: th.fontSize,
    accordionItemFontWeight: th.fontWeightNormal,
    accordionItemFontFamily: th.fontMain,
    accordionItemFgText: th.colorFgText,
    accordionItemShadow: th.shadow,

    listItemBorderColor: th.separator,
    listItemPadding: '1rem',

    calendarWidth: '21.875rem',
    calendarBodyHeight: '25.625rem',
    calendarHeaderTitleFontSize: th.fontSizeXlg,
    calendarHeaderTitleFontWeight: th.fontWeightBold,
    calendarHeaderSubTitleFontSize: th.fontSize,
    calendarHeaderSubTitleFontWeight: th.fontWeightThin,
    calendarNavigationButtonWidth: '10rem',
    calendarSelectedItemBg: th.success,
    calendarHoverItemBg: th.success,
    calendarTodayItemBg: th.colorBgActive,
    calendarActiveItemBg: th.success,
    calendarFg: th.colorFgText,
    calendarSelectedFg: th.colorWhite,
    calendarTodayFg: th.calendarFg,
    calendarDayCellWidth: '2.625rem',
    calendarDayCellHeight: '2.625rem',
    calendarMonthCellWidth: '4.25rem',
    calendarMonthCellHeight: '2.375rem',
    get calendarYearCellWidth() {
      return this.calendarMonthCellWidth;
    },
    get calendarYearCellHeight() {
      return this.calendarMonthCellHeight;
    },
    calendarInactiveOpacity: 0.5,
    calendarDisabledOpacity: 0.3,
    calendarBorderRadius: th.radius,
    get calendarWeekdayWidth() {
      return this.calendarDayCellWidth;
    },
    calendarWeekdayHeight: '1.75rem',
    calendarWeekdayFontSize: th.fontSizeXs,
    calendarWeekdayFontWeight: th.fontWeightNormal,
    calendarWeekdayFg: th.colorFg,
    calendarWeekdayHolidayFg: th.danger,
    calendarRangeBgInRange: '#ebfbf2',
    calendarLargeWidth: '24.375rem',
    calendarLargeBodyHeight: '27.75rem',
    calendarDayCellLargeWidth: '3rem',
    calendarDayCellLargeHeight: '3rem',
    calendarMonthCellLargeWidth: '4.25rem',
    calendarMonthCellLargeHeight: '2.375rem',
    get calendarYearCellLargeWidth() {
      return this.calendarMonthCellWidth;
    },
    get calendarYearCellLargeHeight() {
      return this.calendarMonthCellHeight;
    },

    overlayBackdropBg: 'rgba(0, 0, 0, 0.288)',
    tooltipBg: th.colorFgText,
    tooltipPrimaryBg: th.primary,
    tooltipInfoBg: th.info,
    tooltipSuccessBg: th.success,
    tooltipWarningBg: th.warning,
    tooltipDangerBg: th.danger,
    tooltipFg: th.colorBgActive,
    tooltipStatusFg: th.colorBgActive,
    tooltipShadow: th.shadow,
    tooltipFontSize: th.fontSize,

    selectBorderWidth: '2px',
    selectMaxHeight: '20rem',
    selectBg: th.colorBg,
    get selectCheckboxColor() {
      return this.checkboxBorderColor;
    },
    get selectCheckmarkColor() {
      return this.checkboxBorderColor;
    },
    selectOptionDisabledBg: '#f2f4f7',
    selectOptionDisabledOpacity: '0.3',
    selectOptionPadding: '0.75rem 1.5rem',

    datePickerFg: th.colorFgHeading,
    datePickerBg: th.colorBg,
    datePickerBorder: th.success,
    datePickerBorderRadius: th.radius,
    datePickerShadow: 'none',
    datePickerArrowSize: '11px',

    radioBg: 'transparent',
    radioFg: th.colorFgText,
    radioSize: '1.25rem',
    radioBorderSize: '2px',
    get radioBorderColor() {
      return this.formControlBorderColor;
    },
    radioCheckmark: 'transparent',
    radioCheckedBg: 'transparent',
    radioCheckedSize: '1.25rem',
    radioCheckedBorderSize: '2px',
    radioCheckedBorderColor: th.success,
    radioCheckedCheckmark: th.success,
    radioDisabledBg: 'transparent',
    radioDisabledSize: '1.25rem',
    radioDisabledBorderSize: '2px',
    get radioDisabledBorderColor() {
      return this.radioBorderColor;
    },
    get radioDisabledCheckmark() {
      return this.radioCheckmark;
    },
    ...settings
  };
}
