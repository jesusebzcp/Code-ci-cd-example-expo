import { ExpoConfig, ConfigContext } from "expo/config";

const IS_QA = process.env.APP_VARIANT === "qa";

const defaultConfig: ExpoConfig = {
  name: "CodemagicSample",
  slug: "CodemagicSample",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/images/icon.png",
  scheme: "myapp",
  userInterfaceStyle: "automatic",
  splash: {
    image: "./assets/images/splash.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  ios: {
    supportsTablet: true,
    bundleIdentifier: IS_QA ? "com.finbankcoapp.qa" : "com.finbankcoapp",
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/images/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
    package: IS_QA ? "com.finbankcoapp.qa" : "com.finbankcoapp",
  },
  web: {
    bundler: "metro",
    output: "static",
    favicon: "./assets/images/favicon.png",
  },
  plugins: ["expo-router"],
  experiments: {
    typedRoutes: true,
  },
  extra: {
    router: {
      origin: false,
    },
    eas: {
      projectId: "292c2163-006c-48ef-8c4a-30c452427a04",
    },
  },
};

export default ({ config }: ConfigContext): ExpoConfig => defaultConfig;
