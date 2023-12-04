import { ExpoConfig } from "expo/config";

//* Configuraciones.
const config: ExpoConfig = {
  //* -- Expo config.
  name: "iMovie",
  description: "iMovie es una aplicación que te permite conocer mas sobre tus películas favoritas",
  slug: "imovies",
  owner: "javieralmarza",
  currentFullName: "@javieralmarza/imovies",
  originalFullName: "@javieralmarza/imovies",
  privacy: "public",

  //* -- SDK config.
  sdkVersion: "49.0.0",
  runtimeVersion: {
    policy: "appVersion"
  },
  version: "1.0.0",
  platforms: [
    "ios",
    "android",
    "web"
  ],
  githubUrl: "",


  //* -- Design config.
  orientation: "portrait",
  // userInterfaceStyle: "dark",
  // backgroundColor: "#0E1011",
  // primaryColor: "#AE9408",
  icon: "./assets/icon.png",


  //* -- Android Status bar.
  // androidStatusBar: {
  //   barStyle: "light-content",
  //   // backgroundColor: "#0E1011",
  //   hidden: false,
  //   translucent: true
  // },


  //* -- Android Status bar.
  // androidNavigationBar: {
  //   // visible: "leanback",
  //   barStyle: "light-content",
  //   // backgroundColor: "#0E1011",
  // },


  //* -- Development CLIENT config.
  // developmentClient: {
  //   silentLaunch: true,
  // },


  //* -- Extra config.
  scheme: "imovie",
  extra: {
    eas: {
      projectId: "d451f03c-407e-4216-896b-eb2c2d8fbba8"
    }
  },


  //* -- Updates config.
  // updates: {
  // enabled: true,
  // checkAutomatically: "ON_LOAD",
  // fallbackToCacheTimeout: 3000,
  // url: "",
  // codeSigningCertificate: "",
  // codeSigningMetadata: {
  //   alg: "",
  //   keyId: ""
  // },
  // requestHeaders: {},
  // useClassicUpdates: false,
  // },


  //* -- Assetes config.
  // locales: {},
  assetBundlePatterns: [
    "*/"
  ],


  //* -- Plugins Config.
  plugins: [
    [
      "expo-router",
    ]
  ],


  //* -- Splash config.
  splash: {
    backgroundColor: "#0E1011",
    resizeMode: "contain",
    image: "./assets/splash.png",
  },


  //* -- Javascript Engine config.
  // jsEngine: "hermes",


  //* -- iOS config.
  ios: {
    // publishManifestPath: "",
    // publishBundlePath: "",
    bundleIdentifier: "com.imovie.cl",
    buildNumber: "1.0.0",
    // backgroundColor: "#0E1011",
    // icon: "./assets/icon.png",
    // appStoreUrl: "",
    // bitcode: false,
    config: {
      // branch: {
      //   apiKey: ""
      // },
      // usesNonExemptEncryption: false,
      // googleMapsApiKey: "",
      // googleMobileAdsAppId: "",
      // googleMobileAdsAutoInit: false,
    },
    // googleServicesFile: "",
    supportsTablet: true,
    // isTabletOnly: false,
    // requireFullScreen: true,
    // userInterfaceStyle: "dark",
    // infoPlist: {},
    // entitlements: {},
    // associatedDomains: [],
    // usesIcloudStorage: false,
    // usesAppleSignIn: true,
    // accessesContactNotes: false,
    // splash: {
    //   // backgroundColor: "#0E1011",
    //   resizeMode: "contain",
    //   image: "./assets/splash.png",
    //   // tabletImage: "",
    //   dark: {
    //     // backgroundColor: "#0E1011",
    //     resizeMode: "contain",
    //     image: "./assets/splash.png",
    //     // tabletImage: "",
    // }
    // },
    // jsEngine: "hermes",
    // runtimeVersion: "appVersion",
  },


  //* -- Android config.
  android: {
    // publishManifestPath: "",
    // publishBundlePath: "",
    package: "com.imovie.cl",
    versionCode: 100,
    // backgroundColor: "#0E1011",
    // userInterfaceStyle: "dark",
    // icon: "./assets/icon.png",
    // adaptiveIcon: {
    //   foregroundImage: "./assets/adaptive-icon.png",
    //   monochromeImage: "./assets/adaptive-icon.png",
    //   backgroundImage: "./assets/adaptive-icon.png",
    // },
    // playStoreUrl: "",
    permissions: [],
    // blockedPermissions: [],
    // googleServicesFile: "",
    config: {
      // branch: {
      //   apiKey: ""
      // },
      // googleMaps: {
      // apiKey: ""
      // },
      // googleMobileAdsAppId: "",
      // googleMobileAdsAutoInit: true,
    },
    // splash: {
    // backgroundColor: "#0E1011",
    // resizeMode: "contain",
    // image: "./assets/splash.png",
    // mdpi: "",
    // hdpi: "",
    // xhdpi: "",
    // xxhdpi: "",
    // xxxhdpi: "",
    // dark: {
    // backgroundColor: "#0E1011",
    // resizeMode: "contain",
    // image: "./assets/splash.png",
    // mdpi: "",
    // hdpi: "",
    // xhdpi: "",
    // xxhdpi: "",
    // xxxhdpi: "",
    // },
    // },
    // intentFilters: [],
    // allowBackup: false,
    // softwareKeyboardLayoutMode: ""
    // jsEngine: "hermes",
    // runtimeVersion: "appVersion",
  },


  //* -- Web config.
  web: {
    bundler: "metro",
    favicon: "./assets/favicon.png",
    name: "iMovie",
  },


  //* -- Hooks config.
  // hooks: {},


  //* -- Experimental config.
  experiments: {
    tsconfigPaths: true,
    // typedRoutes: true,
    // turboModules: true,
  }
};

export default config;