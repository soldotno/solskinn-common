/**
 * Our application uses the CSS classes a lot for determining how the
 * output should look. Since they can change over time, this map holds
 * the values so we only have to update them here to make use of them
 * in the entire application.
 *
 * Class names from Dr. Front are prefixed df.
 */

exports = module.exports = {
    // App
    app: 'reactapp',
    solMobile: 'sol-mobile',
    solApp: 'sol-app',
    textCenter: 'text-center',

    // Ads
    dfAdvertorial: 'df-skin-skin-ad-promo',
    dfAdvertorialPink: 'df-skin-skin-ad-promo-pink',
    dfArticleAd: 'df-skin-article-ad',
    dfBannerAd: 'df-skin-banner-ad',
    advertorial: 'bg-skin-ad-promo',
    advertMarker: 'advert-marker',
    articleAdFrame: 'article-ad-frame',
    adWrapper: 'ad-wrapper',
    bannerAd: 'banner-ad',
    wrapperPad: 'wrapper-pad',
    articleAd: 'article-ad',
    promoAd: 'promo-ad',

    // News stream
    dfNewsStream: 'df-skin-news-stream',

    // Articles
    dfHorizontalArticle: 'df-skin-skin-horizontal-article',
    dfSolTv: 'df-skin-skin-tv-play-btn',
    dfAlignmentRight: 'df-right',
    dfAlignmentLeft: 'df-left',
    dfThemeColoured: 'df-style-theme-coloured',
    dfBold: 'df-style-bold',
    articles: 'articles',
    article: 'article',
    articleFullWidth: 'full-width',
    articleHalfWidth: 'half-width',
    articleTextOnly: 'text-only',
    headline: 'headline',
    caption: 'caption',
    ingress: 'ingress',
    thumbnail: 'thumbnail',
    source: 'source',
    media: 'media',
    mediaBody: 'media-body',
    pullLeft: 'pull-left',
    pullRight: 'pull-right',
    temperature: 'temperature',
    articleDescription: 'article-description',

    // Container and skins
    // Probably containers
    dfContainerSkinThreeFourth: 'df-skin-three-fourth',
    dfContainerSkinDefault: 'df-skin-default',
    dfContainerSkinNotMobile: 'df-skin-notmobile',
    dfContainerSkinNews: 'df-skin-news',
    dfContainerSkinImportantNews: 'df-skin-important-news',
    dfContainerSkinGrey: 'df-skin-grey',
    dfContainerSkinFood: 'df-skin-food',
    dfContainerSkinSport: 'df-skin-sport',
    dfContainerSkinSolTv: 'df-skin-tv',
    dfContainerSkinLighterNews: 'df-skin-lighter-news',
    dfContainerSkinChange: 'df-skin-Change',

    // Possible duplicates.
    dfSkinSolTv: 'df-skin-tv',
    dfSkinLighterNews: 'df-skin-lighter-news',
    dfSkinNews: 'df-skin-news',
    dfSkinImportantNews: 'df-skin-important-news',
    dfSkinGrey: 'df-skin-grey',
    dfSkinEaster: 'df-skin-easter',
    dfSkinMat: 'df-skin-skin-mat',

    // Probably single articles
    dfBackgroundSkin: 'df-skin-skin-bg',
    dfSkinMatBordertop: 'df-skin-skin-mat-bordertop',
    dfSkinMatBgBordertop: 'df-skin-skin-mat-bg-bordertop',
    dfSkinHealth: 'df-skin-skin-health',
    dfSkinHealthBordertop: 'df-skin-skin-health-bordertop',
    dfSkinHealthBgBordertop: 'df-skin-skin-health-bg-bordertop',
    dfSkinMotor: 'df-skin-skin-motor',
    dfSkinMotorBordertop: 'df-skin-skin-motor-bordertop',
    dfSkinMotorBgBordertop: 'df-skin-skin-motor-bg-bordertop',
    dfSkinTravel: 'df-skin-skin-travel',
    dfSkinTravelBordertop: 'df-skin-skin-travel-bordertop',
    dfSkinTravelBgBordertop: 'df-skin-skin-travel-bg-bordertop',
    dfSkinHousing: 'df-skin-skin-homes',
    dfSkinHousingBordertop: 'df-skin-skin-homes-bordertop',
    dfSkinHousingBgBordertop: 'df-skin-skin-homes-bg-bordertop',
    dfSkinSport: 'df-skin-skin-sport',
    dfSkinSportBordertop: 'df-skin-skin-sport-bordertop',
    dfSkinSportBgBordertop: 'df-skin-skin-sport-bg-bordertop',
    dfSkinDebates: 'df-skin-skin-debates',
    dfSkinDebatesBordertop: 'df-skin-skin-debates-bordertop',
    dfSkinDebatesBgBordertop: 'df-skin-skin-debates-bg-bordertop',
    mediaContainer: 'media-container',
    showMoreContainer: 'show-more-container',
    bgTransparent: 'bg-skin-bg_transparent',
    bgBlack: 'bg-skin-bg_black',
    bgLighterNews: 'bg-skin-lighter-news',
    bgSolTv: 'bg-skin-soltv',
    newsContainerPrefix: 'news-container-prefix',

    // Headers
    sectionHeader: 'section-header',
    introHeader: 'intro-header',
    introTitle: 'intro-title',
    headerInner: 'inner',
    articleHeader: 'article-header',

    // Related articles
    relatedArticles: 'related-articles',
    relatedArticle: 'related-article',
    relatedLabel: 'related-label',
    showMoreButton: 'show-more-button',

    // Header, menu and search
    pageHeader: 'page-header',
    pageHeaderContent: 'page-header-content',
    headerNav: 'header-nav',
    headerMenu: 'header-menu',
    headerTitle: 'header-title',
    headerText: 'header-text',
    headerSearch: 'header-search',
    searchInput: 'search-input',
    searchSubmit: 'search-submit',
    mainMenu: 'main-menu',
    extraMenu: 'extra-menu',
    mainMenuChildren: 'main-menu-children',
    mainMenuExpand: 'main-menu-expand',
    iconArrowRight: 'icon-arrow-right',
    iconArrowDown: 'icon-arrow-down',
    iconMenu: 'icon-menu',
    iconSearch: 'icon-search',
    toggled: 'toggled',
    bold: 'bold',
    prefixMenuLinkPulse: 'lp_menu_m_',

    // Footer
    footer: 'site-footer',
    footerWrapper: 'footer-wrapper',
    footerLogo: 'footer-logo',
    footerInfo: 'footer-information',
    footerLinks: 'footer-links',
    address: 'address',
    description: 'description',
    content: 'content'
}
