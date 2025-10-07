// this is all auto-generated, this is only because im lazy and want types for tiktok hydration
// uhh, probably some things repeated, ig.. TODO: clean up
export interface WebJSONResponse {
  __DEFAULT_SCOPE__: DefaultScope
}

export interface DefaultScope {
  'webapp.app-context': WebappAppContext
  'webapp.biz-context': WebappBizContext
  'webapp.i18n-translation': WebappI18nTranslation
  'seo.abtest': SeoAbtest
  'webapp.user-detail': WebappUserDetail
  'webapp.browserRedirect-context': WebappBrowserRedirectContext
  'webapp.video-detail'?: WebappVideoDetail
  'webapp.a-b': WebappAB
}

export interface WebappAppContext {
  language: string
  region: string
  appId: number
  appType: string
  user: User
  wid: string
  webIdCreatedTime: string
  nonce: string
  botType: string
  requestId: string
  clusterRegion: string
  abTestVersion: AbTestVersion
  csrfToken: string
  userAgent: string
  encryptedWebid: string
  host: string
}

export interface User {
  ftcUser: boolean
  secUid: string
  uid: string
  nickName: string
  signature: string
  uniqueId: string
  createTime: string
  hasLivePermission: boolean
  roomId: string
  region: string
  avatarUri: string[]
  isPrivateAccount: boolean
  hasIMPermission: boolean
  hasSearchPermission: boolean
  storeRegion: string
  suggestAccountBind: boolean
  showPrivateBanner: boolean
  showScheduleTips: boolean
  longVideoMinutes: number
  longVideoPopupDisplayedStatus: LongVideoPopupDisplayedStatus
  ageGateRegion: string
  ageGateTime: string
  userMode: number
  hasSearchLivePermission: boolean
  proAccountInfo: ProAccountInfo
  analyticsOn: boolean
  redDot: any[]
  photoSensitiveVideosSetting: number
  hasCollectionsAccess: boolean
  hasCollectionsRedDot: boolean
  canExpPlaylist: boolean
  showPodcastTooltip: boolean
}

export interface LongVideoPopupDisplayedStatus {
  cache_ttl: string
}

export interface ProAccountInfo {
  status: number
  analyticsOn: boolean
  businessSuiteEntrance: boolean
  downloadLink: DownloadLink
}

export interface DownloadLink {}

export interface AbTestVersion {
  versionName: string
  parameters: Parameters
  abTestApp: AbTestApp
}

export interface Parameters {
  use_inbox_notice_count_api: UseInboxNoticeCountApi
  video_feed_redesign: VideoFeedRedesign
  video_serverpush: VideoServerpush
  should_highlight_hashtag: ShouldHighlightHashtag
  mobile_vodkit: MobileVodkit
  mobile_consumption_limit_non_logged_in: MobileConsumptionLimitNonLoggedIn
  mobile_consumption_limit_v2: MobileConsumptionLimitV2
  remove_poi_anchor_mobile: RemovePoiAnchorMobile
  search_video: SearchVideo
  mobile_search_test: MobileSearchTest
  webapp_login_email_phone: WebappLoginEmailPhone
  webapp_switch_account: WebappSwitchAccount
  browser_login_redirect: BrowserLoginRedirect
  periodic_login_popup_interval: PeriodicLoginPopupInterval
  login_option_order_by_metrics: LoginOptionOrderByMetrics
  mobile_predictive_data: MobilePredictiveData
  one_column_player_size: OneColumnPlayerSize
  browser_mode_encourage_login: BrowserModeEncourageLogin
  share_button_part1_test: ShareButtonPart1Test
  enable_ml_model: EnableMlModel
  sign_up_webapp_region_change: SignUpWebappRegionChange
  mobile_consumption_limit_logged_in: MobileConsumptionLimitLoggedIn
  creator_center_connect: CreatorCenterConnect
  xgplayer_preload_config: XgplayerPreloadConfig
  last_login_method: LastLoginMethod
  xg_volume_test: XgVolumeTest
  login_modal_image: LoginModalImage
  login_modal_ui_revamp: LoginModalUiRevamp
  qr_sso_popup: QrSsoPopup
  video_bitrate_adapt: VideoBitrateAdapt
  use_follow_v2: UseFollowV2
  mobile_consumption_limit_login: MobileConsumptionLimitLogin
  non_logged_in_comments: NonLoggedInComments
  confirm_logout: ConfirmLogout
  volume_normalize: VolumeNormalize
  remove_bottom_banner: RemoveBottomBanner
  ab_tag: AbTag
  add_guide_login_test: AddGuideLoginTest
  add_kap_entry: AddKapEntry
  add_profile_left_bar: AddProfileLeftBar
  add_transcript: AddTranscript
  auto_scroll: AutoScroll
  browse_mode_autoplay_test: BrowseModeAutoplayTest
  browser_mode_creator_tab_3: BrowserModeCreatorTab3
  cc_perf_phase1: CcPerfPhase1
  clean_fixed_bottom: CleanFixedBottom
  close_to_zoom_out_test: CloseToZoomOutTest
  comment_refactor_test: CommentRefactorTest
  creator_center_connect_global: CreatorCenterConnectGlobal
  creator_center_global_comment_management: CreatorCenterGlobalCommentManagement
  creator_center_global_post_management: CreatorCenterGlobalPostManagement
  creator_center_test: CreatorCenterTest
  delay_guest: DelayGuest
  desktop_ui_opt: DesktopUiOpt
  desktop_ui_reply: DesktopUiReply
  digital_wellbeing_web: DigitalWellbeingWeb
  enable_about_this_ad: EnableAboutThisAd
  enable_ads: EnableAds
  enable_continue_play: EnableContinuePlay
  enable_fb_sdk: EnableFbSdk
  enable_not_interested: EnableNotInterested
  enable_profile_pinned_video: EnableProfilePinnedVideo
  enhance_video_consumption_test: EnhanceVideoConsumptionTest
  exchange_retention_popup: ExchangeRetentionPopup
  expand_item_tag: ExpandItemTag
  explore_shunt_test: ExploreShuntTest
  explore_test: ExploreTest
  favorite_test: FavoriteTest
  fix_tea_session: FixTeaSession
  following_display_live: FollowingDisplayLive
  following_red_dot: FollowingRedDot
  friends_tab: FriendsTab
  fyp_description_in_video: FypDescriptionInVideo
  fyp_snap_scroll: FypSnapScroll
  has_system_notification_inbox: HasSystemNotificationInbox
  husky_param: HuskyParam
  increase_detail_page_cover_quantity_test: IncreaseDetailPageCoverQuantityTest
  kep_new_ui_login: KepNewUiLogin
  kep_video_sort_ctr_exp: KepVideoSortCtrExp
  live_abr_version: LiveAbrVersion
  live_csr_insert_context: LiveCsrInsertContext
  live_detail_non_logged_in_entry: LiveDetailNonLoggedInEntry
  live_end_improved_metrics: LiveEndImprovedMetrics
  live_event_aggregation: LiveEventAggregation
  live_feed_preload: LiveFeedPreload
  live_feed_style: LiveFeedStyle
  live_golive_entrance: LiveGoliveEntrance
  live_i18n_reduce: LiveI18nReduce
  live_lcp_perf_optimize: LiveLcpPerfOptimize
  live_like: LiveLike
  live_login_reflow_btn: LiveLoginReflowBtn
  live_new_discover: LiveNewDiscover
  live_player_icon: LivePlayerIcon
  live_player_mute_text: LivePlayerMuteText
  live_player_switch_button: LivePlayerSwitchButton
  live_preview_web: LivePreviewWeb
  live_pro_show: LiveProShow
  live_recharge_by_amount: LiveRechargeByAmount
  live_recharge_cashier_google_pay: LiveRechargeCashierGooglePay
  live_recharge_cashier_phase3: LiveRechargeCashierPhase3
  live_recharge_coins_cache: LiveRechargeCoinsCache
  live_recharge_homescreen: LiveRechargeHomescreen
  live_recharge_noneu_agreement_optimize: LiveRechargeNoneuAgreementOptimize
  live_recharge_paypal_link_result: LiveRechargePaypalLinkResult
  live_report_comment_reason_api: LiveReportCommentReasonApi
  live_report_reason_api: LiveReportReasonApi
  live_room_age_restriction: LiveRoomAgeRestriction
  live_room_match: LiveRoomMatch
  live_room_non_streaming: LiveRoomNonStreaming
  live_studio_download_refactor_pc: LiveStudioDownloadRefactorPc
  live_top_viewers: LiveTopViewers
  live_wallet_performance_packup: LiveWalletPerformancePackup
  live_wallet_recharge_apple_pay: LiveWalletRechargeApplePay
  new_item_tag: NewItemTag
  optimise_browser_mode: OptimiseBrowserMode
  pc_video_playlist_test: PcVideoPlaylistTest
  photo_mode_yml: PhotoModeYml
  photo_test: PhotoTest
  profile_follow_info: ProfileFollowInfo
  promote_qr_code: PromoteQrCode
  related_videos_video_detail_page: RelatedVideosVideoDetailPage
  reverse_expand_item_tag: ReverseExpandItemTag
  search_add_live: SearchAddLive
  search_add_related_search: SearchAddRelatedSearch
  search_bar_style_opt: SearchBarStyleOpt
  search_keep_sug_show: SearchKeepSugShow
  search_transfer_history: SearchTransferHistory
  search_video_lab: SearchVideoLab
  seo_breadcrumb_detail: SeoBreadcrumbDetail
  seo_desktop: SeoDesktop
  should_recom_reduce_icon_risk: ShouldRecomReduceIconRisk
  show_aigc_label_web: ShowAigcLabelWeb
  sidenav_test: SidenavTest
  studio_web_eh_entrance: StudioWebEhEntrance
  studio_web_eh_entrance_v2: StudioWebEhEntranceV2
  tiktok: Tiktok
  tiktok_web: TiktokWeb
  translation_reduce: TranslationReduce
  tteh_effect_anchor_v1: TtehEffectAnchorV1
  ttlive_broadcast_topic_version_two: TtliveBroadcastTopicVersionTwo
  ui_layout_alignment: UiLayoutAlignment
  use_aligned_copies: UseAlignedCopies
  use_error_boundary: UseErrorBoundary
  use_profile_avatar: UseProfileAvatar
  video_detail_auto_pip_opt: VideoDetailAutoPipOpt
  video_detail_page_video_play: VideoDetailPageVideoPlay
  video_detail_related_refetch: VideoDetailRelatedRefetch
  video_detail_yml_ui: VideoDetailYmlUi
  video_tdk_chatgpt_user_pc: VideoTdkChatgptUserPc
  video_topic: VideoTopic
  web_player_refactor: WebPlayerRefactor
  webapp_explore_category: WebappExploreCategory
  webapp_jotai_foryou: WebappJotaiForyou
  webapp_preview_cover: WebappPreviewCover
  webapp_recommend_language: WebappRecommendLanguage
  webapp_repost_label: WebappRepostLabel
  webapp_seo_photomode_user_exp: WebappSeoPhotomodeUserExp
  webapp_video_detail_page_related_mask: WebappVideoDetailPageRelatedMask
  webcast: Webcast
}

export interface UseInboxNoticeCountApi {
  vid: string
}

export interface VideoFeedRedesign {
  vid: string
}

export interface VideoServerpush {
  vid: string
}

export interface ShouldHighlightHashtag {
  vid: string
}

export interface MobileVodkit {
  vid: string
}

export interface MobileConsumptionLimitNonLoggedIn {
  vid: string
}

export interface MobileConsumptionLimitV2 {
  vid: string
}

export interface RemovePoiAnchorMobile {
  vid: string
}

export interface SearchVideo {
  vid: string
  botVid: string
}

export interface MobileSearchTest {
  vid: string
}

export interface WebappLoginEmailPhone {
  vid: string
}

export interface WebappSwitchAccount {
  vid: string
}

export interface BrowserLoginRedirect {
  vid: string
}

export interface PeriodicLoginPopupInterval {
  vid: string
}

export interface LoginOptionOrderByMetrics {
  vid: string
}

export interface MobilePredictiveData {
  vid: string
}

export interface OneColumnPlayerSize {
  vid: string
}

export interface BrowserModeEncourageLogin {
  vid: string
}

export interface ShareButtonPart1Test {
  vid: string
}

export interface EnableMlModel {
  vid: string
}

export interface SignUpWebappRegionChange {
  vid: string
}

export interface MobileConsumptionLimitLoggedIn {
  vid: string
}

export interface CreatorCenterConnect {
  vid: string
}

export interface XgplayerPreloadConfig {
  vid: string
}

export interface LastLoginMethod {
  vid: string
}

export interface XgVolumeTest {
  vid: string
}

export interface LoginModalImage {
  vid: string
}

export interface LoginModalUiRevamp {
  vid: string
}

export interface QrSsoPopup {
  vid: string
}

export interface VideoBitrateAdapt {
  vid: string
}

export interface UseFollowV2 {
  vid: string
}

export interface MobileConsumptionLimitLogin {
  vid: string
}

export interface NonLoggedInComments {
  vid: string
}

export interface ConfirmLogout {
  vid: string
}

export interface VolumeNormalize {
  vid: string
}

export interface RemoveBottomBanner {
  vid: string
}

export interface AbTag {
  merge_risk_event: number
}

export interface AddGuideLoginTest {
  vid: string
}

export interface AddKapEntry {
  vid: string
}

export interface AddProfileLeftBar {
  vid: string
}

export interface AddTranscript {
  vid: string
}

export interface AutoScroll {
  vid: string
}

export interface BrowseModeAutoplayTest {
  vid: string
}

export interface BrowserModeCreatorTab3 {
  vid: string
}

export interface CcPerfPhase1 {
  vid: Vid
}

export interface Vid {
  isCreatorCenterContextEnabled: boolean
  isInsightV2Enabled: boolean
  isOfflineI18nEnabled: boolean
  isParallelIframeEnabled: boolean
  isPhase2Enabled: boolean
  isPrefetchIframeResourceEnabled: boolean
  isServerSideTranslationEnabled: boolean
}

export interface CleanFixedBottom {
  vid: string
}

export interface CloseToZoomOutTest {
  vid: string
}

export interface CommentRefactorTest {
  vid: string
}

export interface CreatorCenterConnectGlobal {
  vid: string
}

export interface CreatorCenterGlobalCommentManagement {
  vid: string
}

export interface CreatorCenterGlobalPostManagement {
  vid: string
}

export interface CreatorCenterTest {
  vid: string
}

export interface DelayGuest {
  vid: string
}

export interface DesktopUiOpt {
  vid: string
}

export interface DesktopUiReply {
  vid: string
}

export interface DigitalWellbeingWeb {
  vid: string
}

export interface EnableAboutThisAd {
  vid: string
}

export interface EnableAds {
  vid: string
}

export interface EnableContinuePlay {
  vid: string
}

export interface EnableFbSdk {
  vid: string
}

export interface EnableNotInterested {
  vid: string
}

export interface EnableProfilePinnedVideo {
  vid: string
}

export interface EnhanceVideoConsumptionTest {
  vid: string
}

export interface ExchangeRetentionPopup {
  vid: string
}

export interface ExpandItemTag {
  vid: string
}

export interface ExploreShuntTest {
  vid: string
}

export interface ExploreTest {
  vid: string
}

export interface FavoriteTest {
  vid: string
}

export interface FixTeaSession {
  vid: string
}

export interface FollowingDisplayLive {
  vid: string
}

export interface FollowingRedDot {
  vid: string
}

export interface FriendsTab {
  vid: string
}

export interface FypDescriptionInVideo {
  vid: string
}

export interface FypSnapScroll {
  vid: string
}

export interface HasSystemNotificationInbox {
  vid: string
}

export interface HuskyParam {
  client_sdk_param: ClientSdkParam
  only_remote_fetch_meta: boolean
}

export interface ClientSdkParam {
  enable_merge_request_web: number
}

export interface IncreaseDetailPageCoverQuantityTest {
  vid: string
}

export interface KepNewUiLogin {
  vid: string
}

export interface KepVideoSortCtrExp {
  vid: string
}

export interface LiveAbrVersion {
  vid: string
}

export interface LiveCsrInsertContext {
  vid: string
}

export interface LiveDetailNonLoggedInEntry {
  seconds: number
  vid: string
}

export interface LiveEndImprovedMetrics {
  vid: string
}

export interface LiveEventAggregation {
  vid: string
}

export interface LiveFeedPreload {
  vid: string
}

export interface LiveFeedStyle {
  vid: string
}

export interface LiveGoliveEntrance {
  vid: string
}

export interface LiveI18nReduce {
  vid: string
}

export interface LiveLcpPerfOptimize {
  vid: string
}

export interface LiveLike {
  vid: string
}

export interface LiveLoginReflowBtn {
  vid: string
}

export interface LiveNewDiscover {
  vid: string
}

export interface LivePlayerIcon {
  vid: string
}

export interface LivePlayerMuteText {
  vid: string
}

export interface LivePlayerSwitchButton {
  vid: string
}

export interface LivePreviewWeb {
  vid: string
}

export interface LiveProShow {
  vid: string
}

export interface LiveRechargeByAmount {
  vid: string
}

export interface LiveRechargeCashierGooglePay {
  vid: string
}

export interface LiveRechargeCashierPhase3 {
  vid: string
}

export interface LiveRechargeCoinsCache {
  vid: string
}

export interface LiveRechargeHomescreen {
  vid: string
}

export interface LiveRechargeNoneuAgreementOptimize {
  vid: string
}

export interface LiveRechargePaypalLinkResult {
  vid: string
}

export interface LiveReportCommentReasonApi {
  vid: string
}

export interface LiveReportReasonApi {
  vid: string
}

export interface LiveRoomAgeRestriction {
  vid: string
}

export interface LiveRoomMatch {
  vid: string
}

export interface LiveRoomNonStreaming {
  vid: string
}

export interface LiveStudioDownloadRefactorPc {
  vid: string
}

export interface LiveTopViewers {
  vid: string
}

export interface LiveWalletPerformancePackup {
  vid: string
}

export interface LiveWalletRechargeApplePay {
  vid: string
}

export interface NewItemTag {
  vid: string
}

export interface OptimiseBrowserMode {
  vid: string
}

export interface PcVideoPlaylistTest {
  vid: string
}

export interface PhotoModeYml {
  vid: string
}

export interface PhotoTest {
  vid: string
}

export interface ProfileFollowInfo {
  vid: string
}

export interface PromoteQrCode {
  vid: string
}

export interface RelatedVideosVideoDetailPage {
  vid: string
}

export interface ReverseExpandItemTag {
  vid: string
}

export interface SearchAddLive {
  vid: string
}

export interface SearchAddRelatedSearch {
  vid: string
}

export interface SearchBarStyleOpt {
  vid: string
}

export interface SearchKeepSugShow {
  vid: string
}

export interface SearchTransferHistory {
  vid: string
}

export interface SearchVideoLab {
  vid: string
}

export interface SeoBreadcrumbDetail {
  vid: string
}

export interface SeoDesktop {
  vid: string
}

export interface ShouldRecomReduceIconRisk {
  vid: string
}

export interface ShowAigcLabelWeb {
  vid: string
}

export interface SidenavTest {
  vid: string
}

export interface StudioWebEhEntrance {
  vid: string
}

export interface StudioWebEhEntranceV2 {
  vid: string
}

export interface Tiktok {
  private_account_prompt_for_u18: number
  use_aligned_copies: number
}

export interface TiktokWeb {
  cancel_ba_bulk_upload: number
  capcut_entry_group: number
  enable_cloud_draft: string
  enable_local_draft: string
  enable_new_playlist: string
  fbv_notice_enable: number
  opt_v1_new_entrance_v3: number
  opt_v1_new_upload_ui: number
  post_polling_version: number
  show_aigc_toggle: number
  tts_product_anchor: number
  web_creation_cover_tool: number
}

export interface TranslationReduce {
  vid: string
}

export interface TtehEffectAnchorV1 {
  vid: string
}

export interface TtliveBroadcastTopicVersionTwo {
  vid: string
}

export interface UiLayoutAlignment {
  vid: string
}

export interface UseAlignedCopies {
  vid: string
}

export interface UseErrorBoundary {
  vid: string
}

export interface UseProfileAvatar {
  vid: string
}

export interface VideoDetailAutoPipOpt {
  vid: string
}

export interface VideoDetailPageVideoPlay {
  vid: string
}

export interface VideoDetailRelatedRefetch {
  vid: string
}

export interface VideoDetailYmlUi {
  vid: string
}

export interface VideoTdkChatgptUserPc {
  vid: string
}

export interface VideoTopic {
  vid: string
}

export interface WebPlayerRefactor {
  vid: string
}

export interface WebappExploreCategory {
  vid: string
}

export interface WebappJotaiForyou {
  vid: string
}

export interface WebappPreviewCover {
  vid: string
}

export interface WebappRecommendLanguage {
  vid: string
}

export interface WebappRepostLabel {
  vid: string
}

export interface WebappSeoPhotomodeUserExp {
  vid: string
}

export interface WebappVideoDetailPageRelatedMask {
  vid: string
}

export interface Webcast {
  web_drawer_show_explore: boolean
  web_follow_guide_strategy_group: number
}

export interface AbTestApp {
  parameters: Parameters2
}

export interface Parameters2 {
  tiktok: Tiktok2
}

export interface Tiktok2 {
  long_video_popup_display_optimization: boolean
}

export interface WebappBizContext {
  os: string
  isMobile: boolean
  isAndroid: boolean
  isIOS: boolean
  jumpType: string
  navList: NavList[]
  kapLinks: KapLink[]
  config: Config
  domains: Domains
  downloadLink: DownloadLink2
  deviceLimitRegisterExpired: boolean
  subdivisions: string[]
  geo: string[]
  geoCity: GeoCity
  isGoogleBot: boolean
  isBingBot: boolean
  isBot: boolean
  isSearchEngineBot: boolean
  isTTP: boolean
  dateFmtLocale: DateFmtLocale
  videoPlayerConfig: VideoPlayerConfig
  playbackNormalizePath: PlaybackNormalizePath
  bitrateConfig: BitrateConfig
  searchVideoForLoggedin: boolean
  studioDownloadEntrance: StudioDownloadEntrance
  liveSuggestConfig: LiveSuggestConfig
  liveAnchorEntrance: LiveAnchorEntrance
  liveStudioEnable: boolean
  xgplayerInitHost: XgplayerInitHost
  videoOrder: VideoOrder
  searchLiveForLoggedin: boolean
  canUseQuery: boolean
  bitrateSelectorConfigs: BitrateSelectorConfigs
  idc: string
  vregion: string
  vgeo: string
  videoCoverSettings: VideoCoverSettings
  hevcRobustness: HevcRobustness
  apiKeys: ApiKeys
}

export interface NavList {
  title: string
  children: Children[]
}

export interface Children {
  title: string
  href: string
  key?: string
}

export interface KapLink {
  title: string
  children: Children2[]
}

export interface Children2 {
  lang: string[]
  links: Link[]
}

export interface Link {
  title: string
  href: string
}

export interface Config {
  featureFlags: FeatureFlags
  desktopAppDownloadLink: DesktopAppDownloadLink
  signUpOpen: boolean
  cookieBanner: CookieBanner
  isGrayFilter: boolean
  nickNameControlDay: string
  desktopAppSurveyLink: DesktopAppSurveyLink
  desktopWebSurveyLink: DesktopWebSurveyLink
}

export interface FeatureFlags {
  feature_tt4b_ads: boolean
  business_account_open: boolean
  support_multiline_desc: boolean
  pc_video_playlist: boolean
  feature_mobile_ui_opt_stage2: boolean
  add_recipe_card: boolean
  collapse_seo_header: boolean
  collapse_seo_header_mobile: boolean
  seo_enable_new_poi_page: boolean
  enable_privacy_center: boolean
  hashtag_viewcount: boolean
  should_show_effect_detail_page: boolean
}

export interface DesktopAppDownloadLink {
  mac: string
  win: string
}

export interface CookieBanner {
  load_dynamically: boolean
  decline_btn_staged_rollout_area: string[]
  resource: Resource
  i18n: I18n
}

export interface Resource {
  prefix: string
  themes: string[]
  esm: string
  nomodule: string
  version: string
}

export interface I18n {
  cookieBannerTitle: string
  cookieBannerTitleNew: string
  cookieBannerSubTitle: string
  cookieBannerSubTitleNew: string
  cookieBannerSubTitleV2: string
  cookieBannerBtnManage: string
  cookieBannerBtnAccept: string
  cookieBannerBtnDecline: string
  cookiesBannerDetails: string
  cookiesBannerCookiesPolicy: string
  cookiesBannerAccept: string
  webDoNotSellSettingsSavedToast: string
  cookieSettingManageYourCookieTitle: string
  cookieSettingSave: string
  cookieSettingAnalyticsAndMarketing: string
  cookieSettingNecessary: string
  cookieSettingNecessarySubtitle: string
  cookieSettingNecessaryV2: string
  cookieSettingNecessarySubtitleV2: string
  cookieSettingAnalyticsAndMarketingSubtitle: string
  cookieSettingAnalyticsAndMarketingSubtitleV2: string
  cookieManageTip: string
}

export interface DesktopAppSurveyLink {
  default: string
  vn: string
}

export interface DesktopWebSurveyLink {
  new: string
  old: string
}

export interface Domains {
  kind: string
  captcha: string
  imApi: string
  imFrontier: string
  mTApi: string
  rootApi: string
  secSDK: string
  slardar: string
  starling: string
  tea: string
  teaChannel: string
  teaChannelType: string
  libraWebSDK: string
  webcastApi: string
  webcastRootApi: string
  pipoApi: string
  tcc: string
  locationApi: string
}

export interface DownloadLink2 {
  microsoft: Microsoft
  apple: Apple
  amazon: Amazon
  google: Google
}

export interface Microsoft {
  visible: boolean
  normal: string
}

export interface Apple {
  visible: boolean
  normal: string
}

export interface Amazon {
  visible: boolean
  normal: string
}

export interface Google {
  visible: boolean
  normal: string
}

export interface GeoCity {
  City: string
  Subdivisions: string
  OriginalSubdivisions: OriginalSubdivision[]
  SubdivisionsArr: string[]
}

export interface OriginalSubdivision {
  GeoNameID: string
  ASCIName: string
  Name: string
  LocalID: string
}

export interface DateFmtLocale {
  name: string
  months: string[]
  monthsShort: string[]
  weekdays: string[]
  weekdaysShort: string[]
  weekdaysMin: string[]
  longDateFormat: LongDateFormat
  meridiem: Meridiem
}

export interface LongDateFormat {
  LT: string
  LTS: string
  L: string
  LL: string
  LLL: string
  LLLL: string
  l: string
  ll: string
  lll: string
  llll: string
  'LL-Y': string
}

export interface Meridiem {
  am: string
  pm: string
  AM: string
  PM: string
}

export interface VideoPlayerConfig {
  fallback: boolean
}

export interface PlaybackNormalizePath {
  path: string[]
}

export interface BitrateConfig {
  bitrateLower: number
  bitrateRange: number[]
  bitrateUpper: number
  mode: string
  paramBf: number
  paramBp: number
  paramLower: number
  paramUpper: number
  paramUpperBl: number
  paramVl1: number
  paramVl2: number
  paramVlLower: number
  paramVlUpper: number
  slidingWindowCountThreshold: number
  slidingWindowExtraction: string
  slidingWindowType: string
  slidingWindowWeight: string
  slidingWindowWeightThreshold: number
}

export interface StudioDownloadEntrance {
  regions: string[]
  userRegions: string[]
  allRegions: boolean
  userBlockRegions: string[]
  userBlockGeoNameIDs: string[]
}

export interface LiveSuggestConfig {
  isBlockedArea: boolean
  isRiskArea: boolean
}

export interface LiveAnchorEntrance {
  liveCenter: boolean
  creatorHub: boolean
  liveStudio: boolean
}

export interface XgplayerInitHost {
  group1: string[]
  group2: string[]
}

export interface VideoOrder {
  videoOrder: VideoOrder2[]
}

export interface VideoOrder2 {
  property: string
  detail?: number[]
  order?: string
}

export interface BitrateSelectorConfigs {
  configs: Config2[]
}

export interface Config2 {
  paramBf: number
  paramBp: number
  paramUpper: number
  paramLower: number
  paramUpperBl: number
  paramVl1: number
  paramVl2: number
  paramVlUpper: number
  paramVlLower: number
  bitrateUpper: number
  bitrateLower: number
  slidingWindowType: string
  slidingWindowWeight: string
  slidingWindowWeightThreshold: number
  slidingWindowCountThreshold: number
  slidingWindowExtraction: string
  bitrateRange: number[]
  mode: string
  quality_filter: QualityFilter
  white_list: any[]
  autoBitrateParams: AutoBitrateParams
  defaultBitrate: number
}

export interface QualityFilter {}

export interface AutoBitrateParams {
  paramA: number
  paramB: number
  paramC: number
  paramD: number
  minBitrate: number
}

export interface VideoCoverSettings {
  format: number
  acceptHeader: string
  _ssrCount: number
}

export interface HevcRobustness {
  useHevcRobustTest: boolean
  forceRobustTest: string[]
}

export interface ApiKeys {
  firebase: string
}

export interface WebappI18nTranslation {
  Webapp: Webapp
}

export interface Webapp {
  suggested_search_feedback1: string
  suggested_search_feedback2: string
  suggested_search_feedback3: string
  suggested_search_feedback4: string
  suggested_search_feedback5: string
  suggested_search_feedback6: string
  suggested_search_feedback7: string
  suggested_search_feedback8: string
  suggested_search_feedback9: string
  suggested_search_feedback10: string
  suggested_search_feedback11: string
  suggested_search_feedback12: string
  suggested_search_feedback13: string
  'Share to': string
  friends: string
  following: string
  messages: string
  Web_logout_modal_header: string
  Web_logout_modal_body: string
  Inbox_New: string
  'Log out': string
  Web_loginDropdown_switchAccount: string
  Web_removeAccount_modal_header: string
  Web_removeAccount_modal_body: string
  Cancel: string
  Web_removeAccount_btn: string
  Web_switchAccount_modal_manageAccount: string
  Web_switchAccount_modal_addAccount: string
  Web_removeAccount_doneEditing_btn: string
  incorrect_code: string
  common_login_panel_title: string
  webapp_coin_recharge_login: string
  WebApp_coin_recharge_9: string
  login_to_search: string
  nonloggedinsearch_popup_header_v1: string
  classifyV1AWeb_webAppDesktop_maskLayer_bodyDesc: string
  seo_pcweb_logIn_header: string
  delete: string
  reactivate_h1: string
  reactivate_btn: string
  optimize_web_open_notnow_cta: string
  optimize_web_open_tiktok_cta: string
  optimize_web_full_app_header: string
  optimize_web_full_app_body: string
  pcWeb_guestLogin_without: string
  pcWeb_guestLogin_withoutSignup: string
  login_popup_modal_header: string
  guestmode_signup_or: string
  encouragePreviousLoginPlatform_loginPage_loginBadge_body: string
  qr_code_login_prompt_popup_header: string
  tiktoktv_login_modal_loginscreen_scanqr1: string
  tiktoktv_login_modal_loginscreen_scanqr2: string
  login_fb_phoneLinked_toast: string
  login_fb_emailLinked_toast: string
  accessibilityLabels_login_modal_eyeClosedIcon: string
  accessibilityLabels_login_modal_eyeOpenIcon: string
  tv_webLogin_login_header: string
  accessibilityLabels_login_form_placeholder_countryCode: string
  webapp_orContinueWith: string
  tv_webLogin_enterCode_bodyv2: string
  tv_webLogin_enterCode_altMethod: string
  tiktok_instant_app_loading_status_header: string
  accessibilityLabels_search_button: string
  regionOption_selectCountry_list_description: string
  regionOption_selectCountry_list_title: string
  accessibilityLabels_signup_form_placeholder_month: string
  accessibilityLabels_signup_form_placeholder_day: string
  accessibilityLabels_signup_form_placeholder_year: string
  webapp_loginModal_qrCode: string
  HUToS_signupConsent_halfSheet_headline: string
  HUToS_signupConsent_halfSheet_par1: string
  HUToS_signupConsent_halfSheet_par1tos: string
  HUToS_signupConsent_halfSheet_par1pp: string
  HUToS_signupConsent_halfSheet_par1cp: string
  HUToS_signupConsent_halfSheet_par2: string
  HUToS_signupConsent_halfSheet_par2sot: string
  HUToS_signupConsent_halfSheet_par2ph: string
  HUToS_signupConsent_halfSheet_declineButton: string
  HUToS_signupConsent_halfSheet_acceptButton: string
  regionOption_signUp_COdisclaimer_description: string
  regionOption_signUp_disclaimer_description: string
  regionOption_signUp_disclaimer_placeholder: string
  regionOption_signUp_nonEUdisclaimer_description: string
  common_notification_unlogged_button: string
  title_private_on: string
  descrip_private_on_signup: string
  link_learn_more_private_accounts_signup: string
  button_signup_private_on: string
  OK: string
  login_fb_noLonger_LinkPhoneReminder: string
  login_fb_noLonger_LoginWithPhoneNextTime: string
  login_fb_noLonger_phone_send_cta: string
  "login_fb_noLonger_can'tVerifyPhone": string
  "login_fb_noLonger_can'tVerifyPhone_useEmail": string
  login_fb_link_cta: string
  login_fb_noLonger_LinkEmailAddress: string
  login_fb_noLonger_EmailLoginAlternative: string
  login_fb_noLonger_GiveFeedback: string
  "login_fb_noLonger_can'tVerifyEmail": string
  "login_fb_noLonger_can'tVerifyEmail_usePhone": string
  login_fb_noLonger_LinkPhoneNumber: string
  login_fb_noLonger_LinkPhoneNumberReminder: string
  login_fb_noLonger_LinkPhone: string
  login_fb_noLonger_notNow_cta: string
  reactivate_toast: string
  regionOption_selectCountry_list_confirmation: string
  accessibilityLabels_signup_form_back: string
  accessibilityLabels_login_form_back: string
  grid: string
  pc_web_scroll_header: string
  pc_web_scroll_body: string
  webapp_feed_redesign_allcomments: string
  comment_off: string
  video_details_page_comment_field_cta: string
  comment_disable_notfollow: string
  music_detail_unavailable_1: string
  video_label_private: string
  'Friends only': string
  author: string
  pc_web_more_btn: string
  pc_web_less_btn: string
  photosensitive_skepped_toast: string
  pc_web_report_btn: string
  Report: string
  Share: string
  share: string
  pc_web_keyboard_btn: string
  accessibilityLabels_link_userProfile: string
  server_error_title: string
  server_error_sub: string
  refresh: string
  SEO_homepage_title: string
  SEO_homepage_desc: string
  Home: string
  personalisedSearch_searchResults_moreOptions_listItem4: string
  'Thank you for your feedback': string
  search_rs_report_not_relevant: string
  others_searched_for: string
  'Sorry, something wrong with the server, please try again.': string
  try_again_btn: string
  no_results: string
  no_results_for: string
  no_results_desc: string
  sms_NGO: string
  Followers: string
  search_account: string
  search_see_more: string
  pm_main_live_entry_final: string
  search_top: string
  search_video: string
  search_nomoreresults_text: string
  'No videos with this hashtag yet': string
  'Looking for videos? Try browsing our trending creators, hashtags, and sounds.': string
  playlist_webapp_profileview_playlists_numberviews: string
  views: string
  playlist_webapp_profileview_playlists_numbervid: string
  posts: string
  playlist_webapp_toast_error_cheatPlaylist: string
  playlist_webapp_toast_error_tryagain: string
  playlist_webapp_toast_created: string
  playlist_webapp_creation_backBtn: string
  playlist_webapp_creation_header_create: string
  playlist_webapp_creation_desc: string
  playlist_webapp_upload_dropdown_nameaplaylist: string
  videos: string
  playlist_webapp_upload_addtoplaylist: string
  playlist_webapp_creation_selectvid_desc: string
  playlist_webapp_creation_btn_cancel: string
  playlist_webapp_creation_btn_create: string
  blue_v_change_username_review_modal_desc: string
  blue_v_change_name_review_modal_desc: string
  blue_v_webapp_change_name_review_modal_desc: string
  blue_v_change_name_review_modal_title: string
  blue_v_change_name_review_cancel_btn: string
  blue_v_change_name_review_submit_btn: string
  profile_personal_no_content_title: string
  profile_personal_no_content_body: string
  profile_no_content_title: string
  profile_no_content_des: string
  fc_view_empty_videos_title: string
  fc_view_fav_empty_videos_desc: string
  profile_public_nolikes_title: string
  profile_self_public_nolikes: string
  profile_others_public_nolikes: string
  cancel: string
  editprofile_editpage_error_photofail_others: string
  editprofile_editpage_photo_editphoto: string
  editprofile_editimage_zoom: string
  editprofile_cancel: string
  editprofile_editpage_photo_apply: string
  editprofile_editpage_username_confirmtitle: string
  editprofile_editpage_username_confirmtext: string
  nickname_change_pop_up_title: string
  nickname_change_pop_up_description: string
  nickname_username_change_pop_up_title: string
  nickname_username_change_pop_up_description: string
  nickname_username_change_pop_up_cta_2: string
  blue_v_change_username_modal_title: string
  blue_v_change_username_modal_desc: string
  blue_v_change_username_modal_desc_2: string
  blue_v_change_name_modal_title: string
  blue_v_change_name_modal_desc: string
  blue_v_change_name_modal_desc_2: string
  blue_v_change_username_name_modal_title: string
  blue_v_webapp_change_name_modal_desc: string
  blue_v_webapp_change_name_modal_desc_2: string
  blue_v_change_name_modal_submit_request_btn: string
  blue_v_change_name_modal_change_btn: string
  blue_v_change_username_lose_badge_modal_title: string
  blue_v_change_name_lose_badge_modal_title: string
  blue_v_webapp_change_name_lose_badge_modal_title: string
  blue_v_change_name_lose_badge_modal_desc: string
  blue_v_change_name_lose_badge_confirm_btn: string
  editprofile_editpage_error_row: string
  editprofile_editpage_bio: string
  editprofile_editpage_error_namenotavail: string
  editprofile_editpage_error_max: string
  editprofile_editpage_name: string
  nickname_change_1st_time_description: string
  nickname_change_description: string
  editprofile_editpage_error_notavailable: string
  editprofile_editpage_error_tryagain: string
  editprofile_editpage_error_min2char: string
  editprofile_editpage_error_username_max: string
  editprofile_editpage_username: string
  editprofile_editpage_username_subtext1: string
  editprofile_editpage_username_subtext2: string
  editprofile_editpage_error_photofail_max: string
  editprofile_editpage_error_image_cantuse: string
  editprofile_editpage_error_cantmodify_others: string
  editprofile_editpage_error_cantmodify_review: string
  editprofile_editpage_error_username_cantchange: string
  alert_user_update_profile_limited_toast: string
  account_status_banned: string
  nickname_change_fail_toast: string
  ecom_changename_web: string
  editprofile_editprofile: string
  editprofile_editpage_photo: string
  editprofile_save: string
  editprofile_close: string
  editprofile_tooltip_title: string
  editprofile_tooltip_subtitle: string
  webdm_message_button: string
  profile_page_message_btn: string
  sug_accounts: string
  profile_page_followerList_private_header: string
  profile_page_followerList_private_body: string
  profile_page_profile_follower_tab: string
  profile_page_profile_follower_view_desc: string
  profile_page_followingList_private_header: string
  profile_page_followingList_private_body: string
  profile_page_profile_following_tab: string
  profile_page_profile_following_view_desc: string
  profile_page_profile_follower_desc: string
  profile_page_profile_following_desc: string
  profile_page_suggested_tab: string
  profile_page_profile_friends_desc: string
  profile_page_friends_tab: string
  user_action_unfollow: string
  profile_self_link_unavailable: string
  nonpersonalizedFeeds_profile_suggestedAccounts_info_body: string
  nonpersonalizedFeeds_profile_suggestedAccounts_info_bodyManagePersonFeedsVariable: string
  nonpersonalizedFeeds_profile_suggestedAccounts_info_bodyPrivacyVariable: string
  Privacy: string
  nonpersonalizedFeeds_modal_allScenarios_body_learnMore_articleLink: string
  'Learn more': string
  nonpersonalizedFeeds_turnOn_modal_toggle_CTA: string
  'No bio yet.': string
  Following: string
  followers: string
  Likes: string
  playlist_webapp_profileview_btn_changeorder: string
  playlist_webapp_profile_entry_create: string
  playlist_webapp_changeorder_header: string
  playlist_webapp_upload_nameplaylist_btn: string
  playlist_webapp_profileview_playlists: string
  Videos: string
  LIVE: string
  webLIVE_personalPage_LIVEbanner_title: string
  profile_others_blocked_post_body: string
  profile_others_block_post_body: string
  'This account is private': string
  profile_others_private_body: string
  profile_others_like_private_title: string
  profile_others_like_private_body: string
  pcWeb_repostTab: string
  sortbyvv_profile_tab_text_favorites: string
  liked: string
  webLIVE_personalPage_LIVEbanner_numViewerDesc: string
  webapp_profile: string
  podcasts_linkFullEpisodes_publishEpisodePage_confirmationBanner: string
  editprofile_toast: string
  blue_v_change_name_toast_request_submitted: string
  'Page not available': string
  playlist_invalid_error_code: string
  videos_: string
  'No videos with this sound yet': string
  webApp_effectAnchor_tryEffect: string
  webApp_effectAnchor_scanModal_title: string
  webApp_effectAnchor_scanModal_desc1: string
  webApp_effectAnchor_scanModal_desc2: string
  webApp_effectAnchor_scanModal_desc3: string
  webApp_effectAnchor_createEffect: string
  webApp_effectAnchor_createEffect_short: string
  pcWeb_interest_dailyLife: string
  pcWeb_interest_music: string
  pcWeb_interest_random: string
  pcWeb_interest_lipSync: string
  pcWeb_interest_comics: string
  pcWeb_interest_entertainment: string
  pcWeb_interest_videoGames: string
  pcWeb_interest_Sports: string
  pcWeb_interest_comedy: string
  pcWeb_interest_cosplay: string
  pcWeb_interest_movies: string
  pcWeb_interest_fitness: string
  pcWeb_interest_romance: string
  pcWeb_interest_motivational: string
  pcWeb_interest_art: string
  pcWeb_interest_pets: string
  pcWeb_interest_beauty: string
  pcWeb_interest_style: string
  pcWeb_numberSelected: string
  pcWeb_chooseInterest_done_btn: string
  pcWeb_chooseInterest_header: string
  pcWeb_chooseInterest_bodyV1: string
  pcWeb_chooseInterest_bodyV2: string
  pcWeb_chooseInterest_skip_btn: string
  online: string
  Promote_PC_popup_title: string
  Promote_PC_popup_content: string
  topic_foryou_topics_toast_unavailable: string
  qapage_webapp_askby: string
  qapage_empty_title: string
  qapage_empty_desc: string
  follows: string
  about: string
  seo_pcWeb_recipe_about_header: string
  seo_pcWeb_recipe_ingredient_header: string
  seo_pcWeb_recipe_step_header: string
  seo_pcWeb_recipe_hint_header: string
  seo_internalLink_mayBeInterested: string
  seo_aggre_related_to: string
  Analytics: string
  Upload: string
  TikTok: string
  'SEO TikTok Description': string
  'SEO TikTok Keyword': string
  feedback_pc_back: string
  feedback_and_help_seo_title: string
  'Is your problem resolved?': string
  backend_settings_yes: string
  backend_settings_no: string
  backend_settings_stillhaveproblem: string
  'Help Center': string
  backend_settings_topictitle: string
  'Feedback and help': string
  backend_settings_faqtitle: string
  'Report a problem': string
  feedback_pc_history: string
  'Tell us your feedback': string
  'Please provide as much detail as possible': string
  feedback_pc_upload: string
  Submit: string
  'Network error. Please try again.': string
  com_mig_your_support_tickets: string
  'Description must be at least 2 characters': string
  Video: string
  webapp_unblocked_button1: string
  webdm_block: string
  webapp_privacy_and_safety_blocked_accounts: string
  BA_onboarding_welcome_title: string
  ttba_switch: string
  ttelite_switch_title: string
  ttelite_switch_intro: string
  ttelite_switch_action_yes: string
  ttelite_switch_action_no: string
  stop_seller_remove_pop_context: string
  stop_seller_remove_pop_context_hyperlink: string
  stop_seller_remove_pop_title: string
  manage_account: string
  acc_control: string
  delete_acc: string
  delete_btn: string
  changeRegistrationLocation_account_accountInformation: string
  changeRegistrationLocation_account_accountInformation_title: string
  changeRegistrationLocation_account_accountInformation_subtitle: string
  Confirm: string
  bc_account_private_enable_notice_content: string
  bc_account_private_enable_notice_contenturl: string
  ba: string
  caba_no_private: string
  caba_no_private_desc: string
  private_acc_ads: string
  switch_public_h1: string
  switch_public_desc: string
  bc_account_private_enable_notice_title: string
  disallowSwitchAccount_privacy_popUp_title: string
  disallowSwitchAccount_privacy_popUp_description: string
  disallowSwitchAccount_privacy_popUp_placeholder: string
  disallowSwitchAccount_privacy_popUp_placeholder2: string
  disallowSwitchAccount_privacy_popUp_button2: string
  toast_restricted_fam_pairing: string
  privacy_h1: string
  discoverability: string
  private_acc: string
  private_acc_desc: string
  feedback_webform_dropdown_tt4b_opt_2: string
  download_data_entry_point: string
  datadownload_process_download_your_data: string
  dyd_desc: string
  ok_btn: string
  privacy: string
  Language: string
  datadownload_screentitle: string
  'Privacy and settings': string
  WebApp_coin_recharge_1: string
  desktop_push_turn_on_tips_text1: string
  accessibilityLabels_settings_pushNotifs_modal_lockIcon: string
  desktop_push_turn_on_tips_text2: string
  push_notifications: string
  desktop_notifications: string
  allow_in_browser: string
  desktop_push_tips: string
  desktop_push_turn_on_tips_title: string
  push_preferences: string
  push_preferences_tips: string
  interactions: string
  push_likes_description: string
  push_likes: string
  push_comments: string
  push_new_followers: string
  push_mentions: string
  screentimedash_digitalwellbeing_summary_timespent_graph_yaxis_hours_1: string
  screentimedash_digitalwellbeing_summary_timespent_graph_yaxis_minutes_1: string
  screentimedash_digitalwellbeing_summary_day_label_sun: string
  screentimedash_digitalwellbeing_summary_day_label_mon: string
  screentimedash_digitalwellbeing_summary_day_label_tue: string
  screentimedash_digitalwellbeing_summary_day_label_wed: string
  screentimedash_digitalwellbeing_summary_day_label_thu: string
  screentimedash_digitalwellbeing_summary_day_label_fri: string
  screentimedash_digitalwellbeing_summary_day_label_sat: string
  screentimedash_digitalwellbeing_summary_month_label_jan: string
  screentimedash_digitalwellbeing_summary_month_label_feb: string
  screentimedash_digitalwellbeing_summary_month_label_mar: string
  screentimedash_digitalwellbeing_summary_month_label_apr: string
  screentimedash_digitalwellbeing_summary_month_label_may: string
  screentimedash_digitalwellbeing_summary_month_label_jun: string
  screentimedash_digitalwellbeing_summary_month_label_jul: string
  screentimedash_digitalwellbeing_summary_month_label_aug: string
  screentimedash_digitalwellbeing_summary_month_label_sep: string
  screentimedash_digitalwellbeing_summary_month_label_oct: string
  screentimedash_digitalwellbeing_summary_month_label_nov: string
  screentimedash_digitalwellbeing_summary_month_label_dec: string
  screentimedash_digitalwellbeing_summary_timespent_day: string
  screentimedash_digitalwellbeing_summary_timespent_hours_1: string
  screentimedash_digitalwellbeing_summary_timespent_minutes_1: string
  screentimedash_digitalwellbeing_summary_timespent_night: string
  screentimedash_digitalwellbeing_summary_appopened_day_1: string
  screentimedash_digitalwellbeing_summary_appopened_night_1: string
  screentimedash_digitalwellbeing_summary_appopened_actionsheet_chooseweek_title: string
  screentimedash_digitalwellbeing_summary_timespent_tab: string
  screentimedash_digitalwellbeing_summary_appopened_tab: string
  screentimedash_digitalwellbeing_summary_timespent_header_daytime: string
  screentimedash_digitalwellbeing_summary_daytime_tip_desc: string
  screentimedash_digitalwellbeing_summary_nighttime_tip_title: string
  screentimedash_digitalwellbeing_summary_nighttime_tip_desc: string
  screentimedash_digitalwellbeing_summary_appopened_header_total: string
  screentime_settings_dailyscreentime_status_off: string
  screentime_settings_title: string
  screenTime_web_infoIcon_desc: string
  screentimedash_digitalwellbeing_dailyscreentime_title: string
  screentime_settings_screentimebreaks_title: string
  screentime_settings_screentimebreaks_desc: string
  nightscreentimemgmt_screentimesettings_sleepreminders_feature_name: string
  nightscreentimemgmt_screentimesettings_sleepreminders_feature_desc: string
  screentimedash_digitalwellbeing_weeklyscreentime_title: string
  screentimedash_digitalwellbeing_weeklyscreentime_desc: string
  screentimedash_digitalwellbeing_summary_header: string
  screenTime_summarySection_desc: string
  teenScreenTimeDashboard_familyPairing_header_helpAndResources: string
  teenScreenTimeDashboard_familyPairing_screenTime_link: string
  pa_ads_label: string
  customizeSTM_screenTimeLimit_selectTime_minutes: string
  customizeSTM_screenTimeLimit_selectTimeActionSheet: string
  customizeSTM_screenTimeLimit_selectTime_hours: string
  customizeSTM_dailyScreenTimeOn_header_notified: string
  customizeSTM_dailyScreenTimeOn_desc_notified: string
  customizeSTM_dailyScreenTimeOn_header_discuss: string
  customizeSTM_dailyScreenTimeOn_desc_discuss: string
  customizeSTM_dailyScreenTimeOn_header_time_minutes: string
  customizeSTM_dailyScreenTimeOn_header_time_hours: string
  customizeSTM_dailyScreenTimeOn_header_time_hoursMinutes: string
  customizeSTM_teenDailyScreenTimeOn_header: string
  customizeSTM_dailyScreenTimeOn_title: string
  customizeSTM_dailyScreenTimeOff_title: string
  dailyscreentime_featurescreen_heading: string
  SEO_setting_title: string
  Sub_emote_goback: string
  webapp_block_experience_unblock_popup_header: string
  webapp_block_experience_block_popup_header: string
  webapp_block_experience_unblock_popup_body: string
  webapp_block_experience_block_popup_body: string
  webapp_unblocked_button2: string
  unblock: string
  video_detail: string
  creator: string
  video_details_page_comment_header: string
  ad_comment_close_des: string
  scheduled_video_comment_unavailable: string
  Close: string
  asr_transcript_onpc_kebab_menu_ab_transcript_button: string
  cc_webapp_age_video_details_title: string
  classifyV1AWeb_webAppDesktop_maskLayer_headerTitle: string
  cc_webapp_age_video_details_body: string
  classifyV1AWeb_webAppDesktop_maskLayer_button: string
  pcWeb_floatingPlayer_on: string
  pcWeb_multitaskPlayer_on: string
  pcWeb_miniPlayer_turnOff_cta: string
  ad_not_support: string
  profile_page_pin: string
  video_details_page_morevideos_btn: string
  'Log In': string
  pc_web_you_may_like: string
  "Couldn't upload image. Please try again": string
  setting_feedback_delete_picture: string
  setting_feedback_delete_history: string
  basicPoi_moreRelated: string
  no_video_in_collection_error_title: string
  no_video_in_collection_error_description: string
  collection_not_availble_error: string
  shared_collection_dmcard_title: string
  shared_collection_dmcard_desc: string
  support_webapp_sharing_chat_page_video_card_3: string
  Feedback: string
  support_webapp_sharing_chat_page_video_card_1: string
  support_webapp_sharing_chat_page_video_card_2: string
  photo_post_unavailable_title: string
  subVideo_unavailableScreen_title: string
  dm_stranger_delete_this_message_header: string
  dm_stranger_delete_this_message_body: string
  dm_tcm_request_link_report: string
  dm_message_request_report: string
  dm_tcm_request_desc_business_wants_send_msg: string
  dm_message_request: string
  dm_tcm_request_title_business_wants_send_msg: string
  dm_message_request_title: string
  dm_delete: string
  dm_accept: string
  webdm_unblock_this_account: string
  webdm_inputbox_block_note: string
  im_hint_send_msg: string
  comment_tray_emoji: string
  subVideo_nonsubs_webToast: string
  dm_tcm_card_title_business_invitation: string
  webdm_message_not_supported: string
  direct_meaasge_sending_ban_feedback: string
  direct_meaasge_sending_ban_notice: string
  webdm_unlike: string
  Like: string
  webdm_report: string
  Friends: string
  Inbox_Follow_back: string
  dm_tcm_banner_from_tcm: string
  WBS_inbox_cc_view: string
  wbs_inbox_msg_cctos_createcontacts: string
  webdm_report_01_message_selected: string
  webdm_report_n_message_selected: string
  Back: string
  Report_reason: string
  dm_web_baLabel_filter: string
  dm_web_baLabel_emptyLabel_state: string
  dm_web_baLabel_apply_btn: string
  dm_web_baLabel_unreadOnly_checkbox: string
  privacy_and_safety_message_detail: string
  setting_disabled_16: string
  hint_dm_settings: string
  option_everyone: string
  option_friends: string
  option_no_one: string
  family_pairing_toast_parent_settings: string
  webdm_message_settings: string
  dm_who_can_send_you_direct_messages: string
  dm_tcm_section_name_msg_preferences: string
  dm_tcm_toggle_title_always_allow: string
  dm_tcm_toggle_desc_tcm: string
  webdm_cancel: string
  save_settings: string
  message_request_inbox: string
  webdm_chatlist_head_messages: string
  like_message: string
  dm_multiple_messages: string
  support_webapp_sharing_chat_page_status_2: string
  support_webapp_sharing_chat_page_status_1: string
  dm_left_swipe_unmute: string
  dm_left_swipe_mute: string
  no_top: string
  webdm_pin_to_top: string
  dm_tcm_label_business: string
  dm_web_baLabel_noChatFound_header: string
  dm_web_baLabel_noChatFound_body: string
  im_message_list_empty: string
  webdm_report_type: string
  webdm_report_why: string
  webdm_next: string
  webdm_report_popup_title: string
  webdm_report_popup_detail: string
  webdm_done: string
  dm_stranger_error_message_header: string
  dm_stranger_error_message_body: string
  SEO_dm_title: string
  playlist_webapp_profileView_error_header: string
  playlist_webapp_profileView_error_desc: string
  playlist_webapp_toast_deleted: string
  playlist_webapp_profileview_btn_editname: string
  playlist_webapp_profileview_btn_deleteplaylist: string
  playlist_webapp_editname_header: string
  playlist_webapp_deleteplaylist_header: string
  playlist_webapp_editname_desc: string
  playlist_webapp_deleteplaylist_desc: string
  playlist_webapp_deleteplaylist_btn_cancel: string
  playlist_webapp_editname_btn: string
  playlist_webapp_deleteplaylist_btn_delete: string
  playlist_webapp_profileview_btn_removevid: string
  playlist_webapp_profileview_btn_addvid: string
  login_fb_noLonger_title: string
  login_fb_noLonger_body: string
  login_fb_noLonger_cta1: string
  login_fb_noLonger_cta2: string
  comment_tray_reply_default: string
  pcWeb_add_reply: string
  comment_tray_default: string
  pc_web_explorePage_topics_singing_dancing: string
  pc_web_explorePage_topics_comedy: string
  pc_web_explorePage_topics_sports: string
  pc_web_explorePage_topics_anime_comics: string
  pc_web_explorePage_topics_relationship: string
  pc_web_explorePage_topics_shows: string
  pc_web_explorePage_topics_lipsync: string
  pc_web_explorePage_topics_daily_life: string
  pc_web_explorePage_topics_beauty_care: string
  pc_web_explorePage_topics_games: string
  pc_web_explorePage_topics_society: string
  pc_web_explorePage_topics_outfit: string
  pc_web_explorePage_topics_cars: string
  pc_web_explorePage_topics_food: string
  pc_web_explorePage_topics_animals: string
  pc_web_explorePage_topics_family: string
  pc_web_explorePage_topics_drama: string
  pc_web_explorePage_topics_fitness_health: string
  pc_web_explorePage_topics_education: string
  pc_web_explorePage_topics_technology: string
  pc_web_empty_state_novid_header: string
  pc_web_empty_state_novid_body: string
  pc_web_explorePage_all: string
  pcWeb_seasonal_tab_newYear: string
  pcWeb_seasonal_tab_christmas: string
  pc_web_explore_meta_title: string
  pc_web_explore_meta_desc: string
  pcWeb_survey_popup_header: string
  pcWeb_survey_popup_body: string
  pcWeb_survey_popup_cta1: string
  pcWeb_survey_popup_cta2: string
  feed: string
  custom: string
  website: string
  ttlive_webLIVE_LIVEpreview_survey_q1: string
  ttlive_webLIVE_LIVEpreview_survey_a1_1: string
  ttlive_webLIVE_LIVEpreview_survey_a1_2: string
  ttlive_webLIVE_LIVEpreview_survey_a1_3: string
  ttlive_webLIVE_LIVEpreview_survey_q2: string
  ttlive_webLIVE_LIVEpreview_survey_a2_1: string
  ttlive_webLIVE_LIVEpreview_survey_a2_2: string
  ttlive_webLIVE_LIVEpreview_survey_a2_3: string
  ttlive_webLIVE_LIVEpreview_surveySubmitted_toast: string
  Next: string
  seo_popular_faq: string
  keys: string
  embed: string
  account: string
  update: string
  net: string
  ca: string
  Required: string
  subLiveShare_webLivePage_chatTextfield_subOnlyNote: string
  Webapp_tooltips_Pause: string
  Webapp_tooltips_play: string
  pm_web_fullpage_entry: string
  pm_web_fullpage_error_button: string
  live_error_network_title: string
  live_error_network_body: string
  live_error_network_button: string
  live_ending_title: string
  pm_mt_livecard_end_subtitle_1: string
  pm_web_fyp_homePage_entry: string
  live_watching_toast_host_away: string
  pm_mt_multiguest_enlarge_host_tag: string
  webapp_forYoufeed_notInterested_btn: string
  about_this_ad_title: string
  Copied: string
  copy_link: string
  webapp_share_btn: string
  accessibilityLabels_forYou_btn_share: string
  fixed_likes: string
  comment_tray_exit_title: string
  comment_tray_exit_des: string
  comment_tray_exit_leave: string
  comment_tray_exit_stay: string
  pcWeb_login_browserMode: string
  webapp_seekbar_tooltip: string
  pc_web_browser_creatorVid_exit: string
  pc_web_volume_btn: string
  view_analytics: string
  deleted: string
  video_unavailable_deleted: string
  comment_turnoff_unlike: string
  comment_turnoff_like: string
  comment_nointernet_toast: string
  comment_delete_success: string
  comment_delete_failed: string
  report_Prohibited_or_infringing: string
  report_Right_owner: string
  report_Prohibited_or_violence: string
  report_Not_right_owner: string
  Web_report_thanks_for_report: string
  dsa_illegal_report_received_confirm_logout: string
  dsa_illegal_report_received_confirm: string
  pm_mt_live_done: string
  Web_report_report_for_error: string
  live_close: string
  pm_mt_live_page_sth_wrong: string
  pm_mt_live_page_try_again: string
  report_inbox_retry_btn: string
  'Please select a scenario': string
  Web_report_reason_select: string
  dsa_illegal_placeholder_learnmore: string
  Web_report_description: string
  report_details_toast: string
  attachment_upload_limit: string
  report_img_toast: string
  event_dm_share_message_card: string
  pcWeb_youReposted_label: string
  pcWeb_nickReposted_label: string
  qapage_webapp_error_title: string
  subVideo_viewing_lable: string
  Web_report_hide_video: string
  Web_report_show_video: string
  scheduled_for: string
  pc_web_playing_now: string
  pc_web_fullscreen_btn: string
  pc_web_speed_btn: string
  who_can_view_public: string
  public_desc: string
  who_can_view_followers: string
  followers_desc_for_private: string
  who_can_view_friends: string
  followers_desc: string
  private_desc: string
  commonStrings_privacySettings_option_friends: string
  commonStrings_privacySettings_optionDescription_friends: string
  commonStrings_privacySettings_option_onlyYou: string
  commonStrings_privacySettings_option_everyone: string
  commonStrings_privacySettings_option_onOffTikTok: string
  useAlignedCopies_privacySettings_panel_description: string
  new_video_status: string
  pull_video_expl_available_for_ads: string
  duet_stitch_minor: string
  hint2: string
  hint1: string
  privacy_set: string
  view_access: string
  allow_comment: string
  allow_duet: string
  allow_stitch: string
  privacy_settings_done: string
  delete_confirm: string
  cancel_settings: string
  comment_at_search: string
  comment_at_load: string
  comment_at_tryagain: string
  no_at_me: string
  mention_privacy_toast_cant_mention: string
  comment_tray_at: string
  comment_tray_btn: string
  comment_reply_success: string
  comment_post_success: string
  comment_banned_toast: string
  comment_post_failed: string
  searchquerycomment_feedbackpanel_notinterested: string
  searchquerycomment_feedbackpanel_unrelated: string
  searchquerycomment_feedbackpanel_inappropriate: string
  searchquerycomment_feedbackpanel_others: string
  comment_delete_cancel: string
  searchquerycomment_feedbackpanel_header: string
  accessibilityLabels_forYou_btn_like: string
  comment_delete_btn: string
  comment_delete_des: string
  comment_delete_confirm: string
  following_acc: string
  friends_acc: string
  WebApp_comment_copyurl_id: string
  comment_reply_btn: string
  hide: string
  pcWeb_detailPage_comment_viewNumReply: string
  pcWeb_detailPage_comment_viewNumMore: string
  view_more_replies: string
  comment_panel_zero: string
  Comment: string
  pc_web_previous_btn: string
  pc_web_next_btn: string
  pc_web_login: string
  pc_web_login_to_comment: string
  pcWeb_detailPage_backTop_btn: string
  pc_web_browser_nowPlaying: string
  fixed_comments: string
  pc_web_browser_tabName_creatorVid: string
  support_webapp_sharing_error_message: string
  support_webapp_sharing_sent_toast_1: string
  support_webapp_sharing_sent_toast_2: string
  support_webapp_sharing_sent_toast_3: string
  support_webapp_sharing_option_button: string
  support_webapp_sharing_toast_2: string
  support_webapp_sharing_toast_1: string
  subVideo_share_note: string
  support_webapp_sharing_searchbar_ghosttext: string
  support_webapp_sharing_search_results: string
  support_webapp_sharing_recent: string
  support_webapp_sharing_following: string
  support_webapp_sharing_write_a_message: string
  support_webapp_sharing_send_button: string
  pcWeb_NewFeatureFloating: string
  creatorCenter_createVideosCapCutOnline_banner_btn1: string
  pcWeb_Floating: string
  pcWeb_Multitask: string
  embed_profile_popup_title: string
  embed_profile_popup_desc: string
  embeds_popup_hashtag_header: string
  embeds_popup_hashtag_body: string
  embeds_popup_sound_header: string
  embeds_popup_sound_body: string
  'Embed video': string
  embed_popup_embed_body: string
  embeds_popup_tns: string
  embed_profile_popup_bottom_desc_tos: string
  embed_profile_card_desc_privacy_policy: string
  'By embedding this video, you confirm that you agree to our <a href={TermsHref}>Terms of Use</a> and acknowledge you have read and understood our <a href={PolicyHref}> Privacy Policy.</a>': string
  embed_profile_popup_btn: string
  web_sharing_disable_toast: string
  embed_success: string
  embed_profile_tooltip: string
  accessibilityLabels_forYou_share_moreOptions_btn: string
  masklayer_general_title: string
  photosensitive_masklayer_title: string
  photosensitive_masklayer_removed: string
  masklayer_general_body: string
  photosensitive_masklayer_body1: string
  photosensitive_masklayer_body2: string
  photosensitive_masklayer_removed_body1: string
  photosensitive_masklayer_removed_body3: string
  masklayer_general_skip: string
  photosensitive_masklayer_watch: string
  masklayer_general_watch: string
  photosensitive_masklayer_skipall: string
  seo_popular_disclaimer: string
  seo_popular_disclaimer2_btn: string
  bc_likes: string
  bc_comments: string
  bc_shares: string
  seo_aggre_see_more: string
  seo_aggre_transcript_header: string
  get_app: string
  get_tt_desktop: string
  get_tt_app: string
  accessibilityLabels_forYou_scroll_btn: string
  webapp_feed_redesign_zerovideo: string
  webapp_feed_redesign_retry: string
  send_message: string
  creatorCenter_content_actions: string
  home_error_video_geofencing: string
  music_detail_unavailable_2: string
  qapage_webapp_error_subtitle: string
  photo_post_unavailable_dec: string
  disable_reuse_soundtrack_unavailable_page_body: string
  poisharing_edgecase_one: string
  poistore_detail_text: string
  qa_reflow_page_empty_subtitle: string
  ext_share_story_viewmore_btn: string
  poisharing_cta_return: string
  "Couldn't find this account": string
  "Couldn't find this sound": string
  disable_reuse_soundtrack_unavailable_mobile_body: string
  embed_err_unavailable: string
  "Couldn't find this hashtag": string
  desktop_error_video_geofencing: string
  qa_page_reflow_page_blank_title: string
  poisuggest_placeuna_title_1: string
  err_feature_unavailable: string
  playlist_unavailable: string
  accessibilityLabels_forYou_videoCard_fullScreen: string
  cover_notice_violation: string
  official_tag: string
  original_tag: string
  seo_user_video_cover: string
  or: string
  playlist_webapp_creation_namePlaylist_characterCount_limit: string
  yproject_playlist_name_toast: string
  playlist_webapp_upload_nameplaylist_header: string
  playlist_webapp_toast_error_vidlimit: string
  playlist_webapp_selectvid_error_header: string
  playlist_webapp_selectvid_error_desc: string
  playlist_webapp_selectvid_header: string
  playlist_webapp_selectvid_desc: string
  playlist_webapp_selectvid_toast_alreadyadded: string
  playlist_webapp_toast_error_cheatPlaylistCannotAdd: string
  playlist_webapp_profileview_toast_vidremoved: string
  Expand: string
  basicPoi_relatedTopics: string
  pc_web_playpause_btn: string
  pc_web_skip_forward_5_sec_btn: string
  pc_web_skip_back_5_sec_btn: string
  pc_web_muteunmute_btn: string
  desktop_kb_shortcuts_tooltip_previous: string
  desktop_kb_shortcuts_tooltip_next: string
  accessibilityLabels_forYou_videoControls_videoProgress: string
  accessibilityLabels_feed_icon_favorite: string
  accessibilityLabels_forYou_btn_comment: string
  accessibilityLabels_forYou_videoControls_volume_btn: string
  accessibilityLabels_forYou_videoControls_report_btn: string
  comments: string
  accessibilityLabels_forYou_videoControls_pause_btn: string
  accessibilityLabels_forYou_videoControls_play_btn: string
  pcWeb_firstTime_expand2_guide: string
  Download: string
  Caption: string
  Open: string
  start_time: string
  load_error: string
  discard: string
  more: string
  post_now: string
  Follow: string
  settings: string
  end_live: string
  follow: string
  see_all: string
  see_less: string
  go_live: string
  upload_fail: string
  Search: string
  inbox: string
  select_file: string
  email_redesign_webapp_order_details_page_title: string
  email_redesign_webapp_logistics_page_title: string
  email_redesign_webapp_write_review_page_title: string
  email_redesign_webapp_refund_detail_page_title: string
  email_redesign_webapp_orders_title: string
  email_redesign_webapp_vouchers_title: string
  email_redesign_webapp_shopping_cart_title: string
  seller_messages_email_webapp_reply_title: string
  seller_messages_email_webapp_mute_title: string
  seller_messages_email_webapp_setting_title: string
  Ecom_email_pc_shoptab_homepage_title: string
  Ecom_email_pc_pdp_shoptab_homepage_title: string
  Ecom_email_pc_deal_page_shoptab_homepage_title: string
  Ecom_email_pc_pdp_title: string
  Ecom_email_pc_coupon_add_on_title: string
  Ecom_email_pc_free_shipping_add_on_page_title: string
  email_redesign_webapp_order_details_page_context: string
  email_redesign_webapp_logistics_page_context: string
  email_redesign_webapp_write_review_page_context: string
  email_redesign_webapp_refund_detail_page_context: string
  email_redesign_webapp_orders_context: string
  email_redesign_webapp_vouchers_context: string
  email_redesign_webapp_shopping_cart_context: string
  seller_messages_email_webapp_reply_desc: string
  seller_messages_email_webapp_mute_desc: string
  seller_messages_email_webapp_setting_desc: string
  Ecom_email_pc_shoptab_homepage_description: string
  Ecom_email_pc_pdp_shoptab_homepage_description: string
  Ecom_email_pc_deal_page_shoptab_homepage_description: string
  Ecom_email_pc_pdp_description: string
  Ecom_email_pc_coupon_add_on_description: string
  Ecom_email_pc_free_shipping_add_on_page_description: string
  terms: string
  copyright: string
  Legal: string
  'Privacy Policy': string
  help: string
  safety: string
  privacyCenter_webFooter_resourcesPrivacy_navLink: string
  'Community Guidelines': string
  hca_web_Company: string
  hca_web_Program: string
  hca_web_TermsAndPolicies: string
  auto_play: string
  for_you: string
  'TikTok i18n title': string
  accessibilityLabels_forYou_nav_tiktok_btn: string
  following_my_empty_desc: string
  followers_my_empty_desc: string
  common_registration_username_suggested: string
  profile_suggested_empty_toast: string
  feed_caption_see_more: string
  desktop_logged_in_profile: string
  sidenav_follow_hint: string
  Discover: string
  tteh_webapp_acquisitionBanner_1: string
  tteh_webapp_acquisitionBanner_2: string
  hca_web_Channels: string
  pm_mt_obs_revoke_desc: string
  pm_mt_revoke_duration: string
  pm_mt_modal_revoke_confirm_btn: string
  webLIVE_enableEvent_LIVEPage_eventStartNowReminder: string
  webLIVE_enableEvent_LIVEPage_eventReminder: string
  live_on_status: string
  sidenav_login_cta: string
  pc_web_explore_main_header: string
  Profile: string
  nonpersonalizedFeeds_LIVEfeed_navP_menuLink: string
  pc_web_column_mode_tooltip: string
  pc_web_browser_mode_btn: string
  pc_web_column_mode_btn: string
  privateAccountPrompt_manageAccount_privateAccount_title: string
  privateAccountPrompt_account_permission_current_label: string
  privateAccountPrompt_manageAccount_privateAccount_body: string
  privateAccountPrompt_manageAccount_publicAccount_title: string
  privateAccountPrompt_manageAccount_publicAccount_body2: string
  privateAccountPrompt_stayPrivate_button: string
  privateAccountPrompt_stayPublic_button: string
  privateAccountPrompt_manageAccount_privateAccount_button2: string
  privateAccountPrompt_switchPrivate_button: string
  privateAccountPrompt_switchPublic_button: string
  privateAccountPrompt_manageAccount_privateAccount_button3: string
  privateAccountPrompt_manageAccount_privateAccount_button4: string
  privateAccountPrompt_manageAccount_title: string
  privateAccountPrompt_popUp_prompt_title: string
  privateAccountPrompt_welcomePage_title: string
  privateAccountPrompt_manageAccount_privateAccount_description3: string
  privateAccountPrompt_popUp_prompt_description: string
  privateAccountPrompt_account_permission_disclaimer: string
  privateAccountPrompt_manageAccount_privateAccount_placeholder: string
  pcWeb_miniPlayer_linkOpened_toast: string
  pcWeb_miniPlayer_backToLogIn_toast: string
  pcWeb_miniPlayer_linkCopied_toast: string
  pcWeb_videoSkipped: string
  pcWeb_NotSupportedFloating: string
  pcWeb_NotSupportedMulti: string
  TTweb_fyf_menuDownloadVideo_menuLink: string
  TTweb_fyf_menuSendtoFriend_menuLink: string
  TTweb_fyf_menuPictureinPicture_menuLink: string
  changeRegistrationLocation_weakWarning_loseFeatures_toast: string
  settings_privacy_interactions_comment: string
  nonpersonalizedFeeds_feed_entrypoint_manageFeed: string
  webAnalytics_videoDetail_viewPerformance: string
  expansion_SEO_Vp: string
  ls_view_details: string
  webapp_mig_blocked: string
  webapp_mig_unblocked: string
  vid_mod_analytics_penalty_reason_minor_title: string
  vid_mod_analytics_penalty_reason_minor_desc: string
  vid_mod_analytics_penalty_reason_unoriginal_title: string
  vid_mod_analytics_penalty_reason_unoriginal_desc: string
  vid_mod_analytics_nr_vid_penalty_reason_unoriginal_title: string
  vid_mod_analytics_nr_vid_penalty_reason_unoriginal_desc: string
  vid_mod_analytics_nr_acct_penalty_reason_unoriginal_title: string
  vid_mod_analytics_nr_acct_penalty_reason_unoriginal_desc: string
  vid_mod_analytics_penalty_reason_spam_title: string
  vid_mod_analytics_penalty_reason_spam_desc: string
  vid_mod_analytics_penalty_reason_sexual_title: string
  vid_mod_analytics_penalty_reason_sexual_desc: string
  vid_mod_analytics_penalty_reason_tobacco_title: string
  vid_mod_analytics_penalty_reason_tobacco_desc: string
  vid_mod_analytics_penalty_reason_stunts_title: string
  vid_mod_analytics_penalty_reason_stunts_desc: string
  vid_mod_analytics_penalty_reason_graphic_title: string
  vid_mod_analytics_penalty_reason_graphic_desc: string
  vid_mod_analytics_penalty_reason_fyf_title: string
  vid_mod_analytics_penalty_reason_fyf_desc: string
  vidModAnalytics_detailPg_sectionHumanMod_sectionBody: string
  vidModAnalytics_detailPg_sectionVideoDetails_sectionLabel: string
  vidModAnalytics_detailPg_sectionDatePosted_sectionLabel: string
  vid_mod_analytics_appeal_detailpg_reason_title: string
  vid_mod_analytics_detail_pg_title: string
  vid_mod_analytics_detail_pg_desc: string
  vidModAnalytics_detailPg_sectionSuccess_header: string
  vid_mod_analytics_appeal_success_detail_pg_desc: string
  vid_mod_analytics_appeal_detail_pg_title: string
  vid_mod_analytics_appeal_detail_pg_desc: string
  vidModAnalytics_appealSubmitted_sectionTitle_header: string
  vid_mod_analytics_appeal_rcv_detail_pg_desc: string
  dsa_illegal_appeal_expired_header: string
  dsa_illegal_appeal_expired_desc: string
  dsa_illegal_appeal_button_ok: string
  dsaCGWebapp_detailPg_sectionCG_body: string
  dsaCGWebapp_detailPg_sectionCG_link: string
  dsaCGWebapp_appealExpired_emptyState_body: string
  appeal_btn_new: string
  dsa_illegal_appeal_dropdown_title: string
  dsa_illegal_appeal_explanation: string
  dsa_illegal_appeal_alt_options: string
  inbox_all_activity: string
  system_notifications_inbox_channel_name_accountupdates: string
  system_notifications_inbox_channel_name_tiktok: string
  system_notifications_inbox_channel_name_creatormonetization: string
  system_notifications_inbox_channel_name_adssupport: string
  system_notifications_inbox_channel_name_businessaccount: string
  promote_title: string
  TTweb_inbox_systemNotificationchannel_brandActivity_name: string
  TTweb_inbox_systemNotificationchannel_tiktokPlatform_name: string
  TTweb_inbox_systemNotificationchannel_adsFeedback_name: string
  TTweb_inbox_systemNotificationchannel_missions_name: string
  system_notifications_inbox_channel_name_transactionassistant: string
  TTweb_inbox_systemNotificationchannel_creatorProgram_name: string
  system_notifications_inbox_channel_name_live: string
  TTweb_inbox_systemNotificationchannel_screenTime_name: string
  TTweb_inbox_systemNotificationchannel_mlbb_name: string
  TTweb_inbox_systemNotificationchannel_series_name: string
  TTweb_inbox_systemNotificationchannel_creatorMarketplace_name: string
  TTweb_inbox_systemNotificationchannel_effects_name: string
  report_inbox_status: string
  report_inbox_inreview: string
  report_inbox_violation: string
  report_inbox_noviolation: string
  dsa_report_pg_header: string
  dsa_illegal_report_inbox_resubmit: string
  tiktok_series_appeal_request_review_series_details_title: string
  dailyscreentime_notifreminder_desc_minutes: string
  familyPairing_dailyScreenTime_intervention_desc_minutes: string
  dailyscreentime_notifreminder_desc_hours: string
  familyPairing_dailyScreenTime_intervention_desc_hours: string
  familyPairing_dailyScreenTime_intervention_desc_hoursMinutes: string
  dailyscreentime_notifreminder_toast_incorrectpasscode: string
  nightscreentimemgmt_sleepreminders_modal_readyforsleep_heading: string
  nightscreentimemgmt_sleepreminders_modal_readyforsleep_firstreminder_desc: string
  nightscreentimemgmt_sleepreminders_modal_readyforsleep_editreminder_link: string
  nightscreentimemgmt_sleepreminders_modal_readyforsleep_ok_btn: string
  nightscreentimemgmt_sleepreminders_modal_readyforsleep_delay_btn_variantone: string
  screentime_breakreminder_modal_timetotakeabreak_title: string
  screentime_breakreminder_modal_timetotakeabreak_desc_1: string
  screentime_breakreminder_modal_editreminder_link: string
  screentime_breakreminder_modal_ok_btn: string
  screentime_breakreminder_modal_snooze_link: string
  dailyscreentime_notifreminder_header_ready: string
  familyPairing_dailyScreenTime_intervention_returnToTikTok_toast: string
  dailyscreentime_notifreminder_button_returntotiktok: string
  dailyscreentime_introsheet_minors_heading: string
  dailyscreentime_introsheet_minors_firstbullet_logoff: string
  dailyscreentime_introsheet_minors_secondbullet_settingsprivacy: string
  dailyscreentime_introsheet_minors_firstbutton_gotit: string
  dailyscreentime_introsheet_minors_secondbutton_manage: string
  dailyscreentime_notifreminder_desc_hoursminutes: string
  'Got it': string
  about_this_ad_fallback_description1: string
  about_this_ad_fallback_more_info_hyperlink_2: string
  about_this_ad_fallback_adjust_settings: string
  accessibilityLabels_home_skipContentFeed: string
  accessibilityLabels_forYou_nav_messages_btn: string
  wbs_goto_bc_modal_feature3_title: string
  wbs_goto_bc_modal_feature3_content: string
  wbs_goto_bc_modal_feature1_title: string
  wbs_goto_bc_modal_feature1_content: string
  wbs_goto_bc_modal_title: string
  wbs_goto_bc_modal_btn: string
  pc_web_dark_mode_popup_header: string
  pc_web_dark_mode_popup_body: string
  desktop_app_downloadPopup_header: string
  pcWeb_desktopApp_maintainPopup_body: string
  desktop_app_downloadPopup_cta: string
  desktop_app_upToDate_toast: string
  desktop_app_tab_settings: string
  desktop_app_tab_updateTikTok: string
  dsa_illegal_more_options_link: string
  report_inbox_video: string
  report_inbox_comment: string
  report_inbox_account: string
  report_inbox_live: string
  report_inbox_livecomment: string
  report_inbox_directmessage: string
  report_inbox_sound: string
  report_inbox_hashtag: string
  shoutouts_detail_comment_report_title: string
  tns_intro_reporter_title: string
  profile_page_events_list: string
  qareport_question: string
  report_inbox_title: string
  inbox_default_text: string
  Inbox_Comments_on_your_videos: string
  Inbox_When_someone_comments_on__one_of_your_videos_you_ll_see_it_here: string
  Inbox_New_followers: string
  Inbox_When_someone_new_follows_you_you_ll_see_it_here: string
  Inbox_Likes_on_your_videos: string
  Inbox_When_someone_likes_one_of_your_videos_you_ll_see_it_here: string
  Inbox_Mentions_of_You: string
  Inbox_When_someone_mentions_you_you_ll_see_it_here: string
  Inbox_replied_to_your_comment: string
  Inbox_commented: string
  inbox_videoreply: string
  Inbox_created_a_duet_with_you: string
  Inbox_is_following_you: string
  Inbox_started_following_you: string
  photomode_inbox_liked: string
  Inbox_liked_your_video: string
  Inbox_liked_your_comment: string
  Inbox_and: string
  Inbox_others: string
  in_app_push_mention_in_photo: string
  Inbox_mentioned_you_in_a_video: string
  Inbox_mentioned_you_in_a_comment: string
  system_notifications_inbox_header: string
  inbox_request_accept: string
  Inbox_Follow_requests: string
  Inbox_Today: string
  Inbox_Yesterday: string
  Inbox_This_Week: string
  Inbox_This_Month: string
  Inbox_Previous: string
  Inbox_All: string
  Inbox_Likes: string
  Inbox_Comments: string
  Inbox_Mentions: string
  Inbox_Notifications: string
  system_notifications_details_button: string
  accessibilityLabels_forYou_btn_inbox: string
  Inbox: string
  live_creator_hub_home_desc: string
  editprofile_feedtooltip_title: string
  editprofile_feedtooltip_subtitle: string
  tiktok_series_webapp_tooltip_get_started: string
  accessibilityLabels_forYou_nav_language_back_btn: string
  desktop_kb_shortcuts_menu: string
  accessibilityLabels_settings_darkModeOn: string
  accessibilityLabels_settings_darkModeOff: string
  'View profile': string
  tiktok_series_webapp_option: string
  ls_live_studio: string
  web_business_suite_entry: string
  live_center_title: string
  live_creator_hub_name: string
  desktop_app_accountSettings: string
  accessibilityLabels_settings_language: string
  pc_web_dark_mode: string
  login_fb_noLonger_LogInEase: string
  Log_out_sheet_2: string
  login_fb_confirmLogOut_body: string
  login_fb_confirmLogOut_stay_cta: string
  scheduler_welcome_tooltip_title: string
  scheduler_welcome_tooltip_des: string
  tenMinPlusUpload_webPage_introduceToolTip_title: string
  tenMinPlusUpload_webPage_introduceToolTip_body: string
  new_feature_guidance_Upload: string
  podcasts_linkFullEpisodes_linkPodcastPage_tooltip: string
  accessibilityLabels_forYou_nav_upload_btn: string
  accessibilityLabels_forYou_nav_settings_btn: string
  push_popup_title: string
  push_popup_content: string
  push_popup_btn1: string
  push_popup_btn2: string
  network_error_title: string
  network_error_sub: string
  settings_updated: string
  Public: string
  Settings_ads_page_adpersonalization_title: string
  Adv_settings_warning_text: string
  Adv_settings_warning_description: string
  Adv_settings_page_help_text: string
  Adv_settings_page_hide_adv_title: string
  inbox_follow_failed_banned: string
  inbox_follow_failed_noconnection: string
  inbox_follow_failed_other: string
  webapp_forYoufeed_videoRemoved_toast: string
  GENERAL: string
  Explore: string
  TRENDING: string
  search_Submission_Failed_tips: string
  sug_report_relevant: string
  view_all_results: string
  accessibilityLabels_search_suggestions: string
  embed_music_card_see_more: string
  web_search_clear_btn: string
  personalisedSearch_searchResults_searchBlankPage_manageSearchLabel: string
  web_search_recent_header: string
  search_feedback_success_tips1: string
  Web_report_report_detail: string
  avia_law_report_received_confirm: string
  dailyscreentime_featurescreen_toast_editedtime: string
  screenTime_screenTimeBreaks_manageTime_editBreak_toast: string
  error_toast: string
  screenTime_sleepReminders_setSleepTime_toast: string
  nightscreentimemgmt_sleepreminders_toast_editsleeptime: string
  family_safety_mode_locked_mode_indicator: string
  screentimedash_digitalwellbeing_dailyscreentime_desc: string
  Web_report_block_who: string
  Web_report_block_detail: string
  copyright_check_post_popup_cancel: string
  km_report_question: string
  km_pick_reason: string
  choosepassword_button: string
  Web_report_description_NetzDG: string
  Signature: string
  Sign_here: string
  Report_confirmation: string
  avia_law_false_report_warning: string
  Web_report_description_tips: string
  Web_report_you_can_also: string
  dsa_illegal_report_trustedflaggerlink: string
  dsa_illegal_report_trustedflagger: string
  dsa_report_penalty_reminder: string
  dsa_illegal_report_email: string
  dsa_illegal_report_fill_email: string
  dsa_illegal_report_trustedflagger_fill_email: string
  dsa_illegal_detail_country: string
  dsa_illegal_detail_law: string
  dsa_illegal_cite_law_desc: string
  dsa_illegal_detail_explanation: string
  dsa_illegal_report_explanation_desc: string
  dsa_illegal_appeal_signature: string
  dsa_illegal_sign_legal_name: string
  dsa_illegal_confirm_accuracy: string
  dsa_illegal_report_trustedflagger_email: string
  dsa_illegal_select_region: string
  Web_report_account_impersonated_search: string
  Web_report_account_impersonated: string
  Web_report_account_impersonated_description: string
  dsa_illegal_select_country_optional: string
  dailyscreentime_featurescreen_desc_balanceyourday: string
  dailyscreentime_featurescreen_firstbullet_settime: string
  dailyscreentime_featurescreen_firstbullet_settime_desc_choose: string
  dailyscreentime_featurescreen_secondbullet_getnotified: string
  dailyscreentime_featurescreen_secondbullet_getnotified_desc_close: string
  screenTime_web_dailyscreentime_mainSetting_toggle_desc: string
  customizeSTM_screenTimeLimit_option_sameLimit: string
  screenTime_web_setting_customTime_option: string
  customizeSTM_screenTimeLimit_option_customLimit: string
  screenTime_web_dailyscreentime_manageTime_modal_done_btn: string
  nightscreentimemgmt_setsleeptime_halfsheet_am_desc: string
  nightscreentimemgmt_setsleeptime_halfsheet_pm_desc: string
  nightscreentimemgmt_sleepreminders_sleeptime_on_secondline_teens: string
  nightscreentimemgmt_sleepreminders_sleeptime_on_secondline_adults: string
  nightscreentimemgmt_sleepreminders_defaultscreen_desc: string
  nightscreentimemgmt_sleepreminders_defaultscreen_setsleeptimebullet_title: string
  nightscreentimemgmt_sleepreminders_defaultscreen_setsleeptimebullet_desc: string
  nightscreentimemgmt_sleepreminders_defaultscreen_pushnotifsbullet_title: string
  nightscreentimemgmt_sleepreminders_defaultscreen_pushnotifsbullet_teens_desc: string
  nightscreentimemgmt_sleepreminders_defaultscreen_pushnotifsbullet_adults_desc: string
  screenTime_web_sleepReminders_mainSetting_toggle_desc: string
  screentime_settings_screentimebreaks_intro_desc: string
  screentime_settings_screentimebreaks_intro_schedulebreaks_heading: string
  screentime_settings_screentimebreaks_actionsheet_desc_returninguser: string
  screentime_settings_screentimebreaks_intro_tailoryourexp_heading: string
  screentime_settings_screentimebreaks_intro_tailoryourexp_desc: string
  screenTime_web_screenTimeBreaks_mainSetting_toggle_desc: string
  pcWeb_guestLogin_contToVideo: string
  pcWeb_guestLogin_guest: string
  unit_week: string
  unit_day: string
  unit_hr: string
  unit_min: string
  unit_sec: string
  time_ago: string
  syntheticMedia_feed_bottomBanner_AIGCLabel: string
  AIGC_FYP_descSection_label: string
  pcWeb_autoScroll_on: string
  pcWeb_autoScroll_off: string
  desktop_kb_shortcuts_tooltip_like_vid: string
  desktop_kb_shortcuts_tooltip_mute_unmute_vid: string
  desktop_kb_shortcuts_modal: string
  desktop_kb_shortcuts_tooltip_title: string
  link_close_popup: string
  bc_disclosure_tag_ecommerce_us: string
  bc_disclosure_tag_ecommerce_uk: string
  bc_new_disclosure: string
  tcm_closedLoop_commercialContent_brandOrganic_videoTag: string
  scm_label_and_appeal_modal_title: string
  scm_label_and_appeal_modal_desc: string
  scm_label_and_appeal_modal_button_learn_more: string
  scm_label_and_appeal_modal_button_dismiss: string
  ttba_ob_switchouterr_title: string
  ttba_ob_switchouterr_title_lttfb: string
  ttba_ob_switchouterr_title_lmp: string
  ttba_ob_switchouterr_title_seller: string
  ttba_ob_switchouterr_subtext: string
  ttba_ob_switchouterr_subtext_lttfb: string
  ttba_ob_switchouterr_subtext_lmp: string
  ttba_ob_switchouterr_subtext_seller: string
  switched_to_personal: string
  add_windows_store_badge_download_app_stores: string
  add_windows_store_badge_get_tiktok_app: string
  add_windows_store_badge_scan_qr: string
  engagement: string
  direct_meaasge_sending_ban_feedback_again: string
  nonpersonalizedFeeds_LIVEfeed_label_mainString_personalizationOn: string
  nonpersonalizedFeeds_LIVEfeed_label_mainString: string
  nonpersonalizedFeeds_turnOff_modal_toggle_bodyFull: string
  nonpersonalizedFeeds_turnOn_modal_toggle_bodyFull: string
  personalisedSearch_searchResults_actionSheet_bodyPara1: string
  personalisedSearch_searchResults_actionSheet_bodyPara1V2: string
  nonpersonalizedFeeds_turnOn_modal_toggle_headline: string
  personalisedSearch_searchResults_actionSheet_header: string
  personalisedSearch_searchResults_actionSheet_bodyPara2Bold1: string
  nonpersonalizedFeeds_settings_contentPreferences_entrypoint: string
  personalisedSearch_searchResults_actionSheet_toggle: string
  personalisedSearch_searchResults_actionSheet_btn: string
  search_videosearchbar_recommended_generic_1: string
  please_input_search_keyword: string
  seo_serp_expansion_num1: string
  seo_aggre_metadesc2: string
  'SERP discover title': string
  'TikTok i18n keywords': string
  SEO_discover_title: string
  SEO_discover_desc: string
  SEO_following_title: string
  SEO_following_desc: string
  hashtag_SEO_title2: string
  hashtag_SEO_desc1: string
  err_tag: string
  SEO_qa_title_1: string
  SEO_qa_desc_1: string
  SEO_search_title: string
  SEO_search_desc: string
  SEO_Recharge_title: string
  SEO_Recharge_desc: string
  SEO_live_title: string
  SEO_live_discover_title: string
  SEO_live_discover_desc: string
  SEO_live_desc: string
  SEO_live_desc2: string
  playlist_sharing_metatitle: string
  playlist_sharing_metadescription: string
  SEO_foryou_animals_title: string
  SEO_foryou_animals_desc: string
  SEO_foryou_beauty_title: string
  SEO_foryou_beauty_desc: string
  SEO_foryou_comedy_title: string
  SEO_foryou_comedy_desc: string
  SEO_foryou_dance_title: string
  SEO_foryou_dance_desc: string
  SEO_foryou_food_title: string
  SEO_foryou_food_desc: string
  SEO_foryou_gaming_title: string
  SEO_foryou_gaming_desc: string
  SEO_foryou_sports_title: string
  SEO_foryou_sports_desc: string
  share_live_event_title: string
  share_live_event_desc: string
  playlist_share_title: string
  playlist_share_desc: string
  user_SEO_official_title1: string
  user_SEO_title1: string
  share_effect_title: string
  share_sticker_desc: string
  share_sticker_preset: string
  shared_collection_other_apps_title: string
  shared_collection_other_apps_description: string
  pm_mt_ls_download_button: string
  'TikTok | Make Your Day': string
  serp_following_title: string
  serp_following_desc: string
  pc_web_skip_forward_5_sec: string
  pc_web_skip_backward_5_sec: string
  requested: string
  'QR CODE Text': string
  pc_reflow_download: string
  Get: string
  seo_aggre_metadesc1: string
  'TikTok Trends': string
  'TikTok Trending': string
  'Trending Videos': string
  'Trending Hashtags': string
  SEO_trending_title: string
  SEO_trending_desc: string
  seo_serp_hashtag_title: string
  seo_serp_hashtag_desc: string
  seo_serp_hashtag_desc1: string
  'TikTok i18n keywords for home': string
  seo_serp_expansion_title: string
  seo_serp_music_title: string
  seo_serp_music_desc3: string
  seo_serp_music_desc: string
  seo_serp_music_desc1: string
  seo_serp_music_desc2: string
  err_sound: string
  err_sound_copy: string
  basicPoi_task2_metaTdk_title: string
  basicPoi_task2_metaTdk_desc: string
  basicPoi_task2_metaTdk_keyword: string
  basicPoi_metaTdk_title: string
  basicPoi_metaTdk_regional_desc: string
  basicPoi_metaTdk_store_desc: string
  basicPoi_metaTdk_keyword: string
  basicPoi_metaTdk_storeSite: string
  poidetails_tiktokplaces: string
  poidetails_location_name_placehldtwo: string
  music_SEO_desc3: string
  seo_serp_user2_title: string
  seo_serp_user1_title: string
  seo_serp_user_desc: string
  seo_serp_user_desc1: string
  seo_serp_user_desc2: string
  seo_serp_user_desc3: string
  err_user: string
  err_user_private: string
  seo_serp_videotxt_desc1: string
  seo_serp_videotxt_desc2: string
  seo_serp_videotxt_desc3: string
  seo_serp_searchQuery_desc: string
  seo_serp_musicName_desc: string
  serp_videoText_searchQuery_title: string
  serp_videoText_searchQuery_title2: string
  seo_serp_videotxt_title: string
  seo_serp_videotxt_title2: string
  err_vid_geo: string
  err_vid: string
  subVideo_outApp_sharing_title: string
  basicPoi_toDoList_region: string
  basicPoi_toDoList: string
  seo_popular_sightseeing: string
  basicPoi_sightSeeing: string
  basicPoi_outdoorActivities: string
  basicPoi_nightLife: string
  basicPoi_familyFriendly: string
  basicPoi_bestRestaurant_region: string
  basicPoi_foodNDrinks: string
  seo_popular_restaurant: string
  basicPoi_brunchRestaurants: string
  basicPoi_fineDining: string
  basicPoi_seaFood: string
  basicPoi_veganRestaurants: string
  basicPoi_hotels_region: string
  basicPoi_hotels: string
  seo_popular_hotel: string
  basicPoi_downtownHotels: string
  basicPoi_petFriendly: string
  basicPoi_airbnbs: string
  basicPoi_luxuryHotels: string
  basicPoi_parks_region: string
  basicPoi_parks: string
  seo_popular_park: string
  basicPoi_amusementParks: string
  basicPoi_dogParks: string
  basicPoi_skateParks: string
  basicPoi_indoorParks: string
  basicPoi_shopping_region: string
  basicPoi_shopping: string
  seo_popular_shoppingMall: string
  basicPoi_shoppingMalls: string
  basicPoi_downtownShopping: string
  basicPoi_vintageShopping: string
  basicPoi_giftShops: string
}

export interface SeoAbtest {
  canonical: string
  pageId: string
  vidList: any[]
  parameters: Parameters3
}

export interface Parameters3 {}

export interface WebappBrowserRedirectContext {
  originalUrl: string
  browserRedirectUrl: string
}

export interface WebappVideoDetail {
  itemInfo: ItemInfo
  shareMeta: ShareMeta
  statusCode: number
  statusMsg: string
}

export interface ItemInfo {
  itemStruct: ItemStruct
}

export interface ItemStruct {
  id: string
  desc: string
  createTime: string
  scheduleTime: number
  video: Video
  author: Author
  music: Music
  challenges: Challenge[]
  stats: Stats
  statsV2: StatsV2
  warnInfo: any[]
  originalItem: boolean
  officalItem: boolean
  textExtra: TextExtra[]
  secret: boolean
  forFriend: boolean
  digged: boolean
  itemCommentStatus: number
  takeDown: number
  effectStickers: any[]
  privateItem: boolean
  stickersOnItem: any[]
  shareEnabled: boolean
  comments: any[]
  duetDisplay: number
  stitchDisplay: number
  imagePost: ImagePost
  locationCreated: string
  suggestedWords: any[]
  contents: Content[]
  collected: boolean
  channelTags: any[]
  item_control: ItemControl
  isContentClassified: boolean
  IsAigc: boolean
  AIGCDescription: string
}

export interface Video {
  id: string
  height: number
  width: number
  duration: number
  ratio: string
  cover: string
  originCover: string
  dynamicCover: string
  playAddr: string
  downloadAddr: string
  shareCover: string[]
  reflowCover: string
  bitrate: number
  encodedType: string
  format: string
  videoQuality: string
  encodeUserTag: string
  codecType: string
  definition: string
  subtitleInfos: any[]
  zoomCover: ZoomCover
  volumeInfo: VolumeInfo
  bitrateInfo: BitrateInfo[]
  PlayAddrStruct: PlayAddr
  VQScore: string
}

export interface ZoomCover {
  '240': string
  '480': string
  '720': string
  '960': string
}

export interface VolumeInfo {
  Loudness: number
  Peak: number
}

export interface BitrateInfo {
  Bitrate: number
  QualityType: number
  GearName: string
  PlayAddr: PlayAddr
  CodecType: string
  MVMAF: string
}

export interface PlayAddr {
  DataSize: string
  Uri: string
  UrlList: string[]
  UrlKey: string
  FileHash: string
  FileCs: string
}

export interface Author {
  id: string
  shortId: string
  uniqueId: string
  nickname: string
  avatarLarger: string
  avatarMedium: string
  avatarThumb: string
  signature: string
  createTime: number
  verified: boolean
  secUid: string
  ftc: boolean
  relation: number
  openFavorite: boolean
  commentSetting: number
  duetSetting: number
  stitchSetting: number
  privateAccount: boolean
  secret: boolean
  isADVirtual: boolean
  roomId: string
  uniqueIdModifyTime: number
  ttSeller: boolean
  downloadSetting: number
  recommendReason: string
  nowInvitationCardUrl: string
  nickNameModifyTime: number
  isEmbedBanned: boolean
  canExpPlaylist: boolean
  suggestAccountBind: boolean
}

export interface Music {
  id: string
  title: string
  playUrl: string
  coverLarge: string
  coverMedium: string
  coverThumb: string
  authorName: string
  original: boolean
  duration: number
  album: string
  scheduleSearchTime: number
  collected: boolean
  preciseDuration: PreciseDuration
}

export interface PreciseDuration {
  preciseDuration: number
  preciseShootDuration: number
  preciseAuditionDuration: number
  preciseVideoDuration: number
}

export interface Challenge {
  id: string
  title: string
  desc: string
  profileLarger: string
  profileMedium: string
  profileThumb: string
  coverLarger: string
  coverMedium: string
  coverThumb: string
}

export interface Stats {
  diggCount: number
  shareCount: number
  commentCount: number
  playCount: number
  collectCount: string
}

export interface StatsV2 {
  diggCount: string
  shareCount: string
  commentCount: string
  playCount: string
  collectCount: string
  repostCount: string
}

export interface TextExtra {
  awemeId: string
  start: number
  end: number
  hashtagId?: string
  hashtagName: string
  type: number
  subType: number
  isCommerce: boolean
  userId?: string
  userUniqueId?: string
  secUid?: string
}

export interface ImagePost {
  images: Image[]
  cover: Cover
  shareCover: ShareCover
  title: string
}

export interface Image {
  imageURL: ImageUrl
  imageWidth: number
  imageHeight: number
}

export interface ImageUrl {
  urlList: string[]
}

export interface Cover {
  imageURL: ImageUrl2
  imageWidth: number
  imageHeight: number
}

export interface ImageUrl2 {
  urlList: string[]
}

export interface ShareCover {
  imageURL: ImageUrl3
  imageWidth: number
  imageHeight: number
}

export interface ImageUrl3 {
  urlList: string[]
}

export interface Content {
  desc: string
  textExtra: TextExtra2[]
}

export interface TextExtra2 {
  awemeId: string
  start: number
  end: number
  hashtagId?: string
  hashtagName: string
  type: number
  subType: number
  isCommerce: boolean
  userId?: string
  userUniqueId?: string
  secUid?: string
}

export interface ItemControl {}

export interface ShareMeta {
  title: string
  desc: string
}

export interface WebappAB {
  b_c: string
}

export interface WebappUserDetail {
  userInfo: UserInfo
  shareMeta: ShareMeta
  statusCode: number
  statusMsg: string
  needFix: boolean
}

export interface ShareMeta {
  title: string
  desc: string
}

export interface UserInfo {
  user: DetailUser
  stats: Stats
  statsV2: StatsV2
  itemList: any[]
}

export interface Stats {
  followerCount: number
  followingCount: number
  heart: number
  heartCount: number
  videoCount: number
  diggCount: number
  friendCount: number
}

export interface StatsV2 {
  followerCount: string
  followingCount: string
  heart: string
  heartCount: string
  videoCount: string
  diggCount: string
  friendCount: string
}

export interface DetailUser {
  id: string
  shortId: string
  uniqueId: string
  nickname: string
  avatarLarger: string
  avatarMedium: string
  avatarThumb: string
  signature: string
  createTime: number
  verified: boolean
  secUid: string
  ftc: boolean
  relation: number
  openFavorite: boolean
  bioLink: BioLink
  commentSetting: number
  commerceUserInfo: CommerceUserInfo
  duetSetting: number
  stitchSetting: number
  privateAccount: boolean
  secret: boolean
  isADVirtual: boolean
  roomId: string
  uniqueIdModifyTime: number
  ttSeller: boolean
  region: string
  downloadSetting: number
  profileTab: ProfileTab
  followingVisibility: number
  recommendReason: string
  nowInvitationCardUrl: string
  nickNameModifyTime: number
  isEmbedBanned: boolean
  canExpPlaylist: boolean
  profileEmbedPermission: number
  language: string
  eventList: any[]
  suggestAccountBind: boolean
  isOrganization: number
  UserStoryStatus: number
}

export interface BioLink {
  link: string
  risk: number
}

export interface CommerceUserInfo {
  commerceUser: boolean
}

export interface ProfileTab {
  showMusicTab: boolean
  showQuestionTab: boolean
  showPlayListTab: boolean
}
