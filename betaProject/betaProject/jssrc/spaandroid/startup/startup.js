//startup.js file
var appConfig = {
    appId: "betaProject",
    appName: "betaProject",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "10.123.5.15",
    serverPort: "80",
    secureServerPort: "443",
    isMFApp: false,
    eventTypes: [],
    url: null,
    secureurl: null,
    middlewareContext: "betaProject"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    initializeUserWidgets();
    initializeCopyFBox0ecc3edc8414c44();
    initializeCopyFBox0f8ea91fcac9d41();
    initializeCopyFBox0g8d26833601045();
    initializeFBox0b8562c33719e46();
    initializeFBox0d077fbe3626e40();
    initializeFBox0f0b2edee038f43();
    initializeFBox0i57abcacb6f944();
    initializeTemp0h2d1b5ed98084c();
    categoryFormGlobals();
    flxEditProfileUGlobals();
    flxListitemGlobals();
    frmAkunPGlobals();
    frmAkunUGlobals();
    frmEditbarangGlobals();
    frmEditPasswordPGlobals();
    frmEditPasswordUGlobals();
    frmEditProfilePGlobals();
    frmHomepenjualGlobals();
    frmHomeUserGlobals();
    frmLoginGlobals();
    frmShowDetailItemUGlobals();
    frmShowitemPGlobals();
    frmSignupGlobals();
    frmUploadbarangGlobals();
    OpenGlobals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        APILevel: 7300
    })
};

function themeCallBack() {
    initializeGlobalVariables();
    requirejs.config({
        baseUrl: "spaandroid/appjs"
    });
    var requireModulesList = getSPARequireModulesList();
    require(requireModulesList, function() {
        kony.application.setApplicationInitializationEvents({
            init: appInit,
            showstartupform: function() {
                Open.show();
            }
        });
    });
};

function loadResources() {
    kony.theme.packagedthemes(
        ["default"]);
    globalhttpheaders = {};
    callAppMenu();
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        eventTypes: []
    }
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
};

function onSuccessSDKCallBack() {
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
}

function initializeApp() {
    kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
    //If default locale is specified. This is set even before any other app life cycle event is called.
    loadResources();
};
									function getSPARequireModulesList(){ return ['kvmodules']; }
								