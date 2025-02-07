import { getLocales } from "expo-localization";
import { I18n } from "i18n-js";

// Set the key-value pairs for the different languages you want to support.
const i18n = new I18n({
  en: {
    auth: {
      login: "Login",
      signUp: "Sign Up",
      forgotPassword: "Forgot Password?",
    },
    home: {
      title: "Home",
    },
    home2: {
      title: "Home 2",
    },
    home3: {
      title: "Home 3",
    },
  },
  es: {
    auth: {
      login: "Login",
      signUp: "Sign Up",
      forgotPassword: "Forgot Password?",
    },
    home: {
      title: "Principal",
    },
    home2: {
      title: "Principal 2",
    },
    home3: {
      title: "Principal 3",
    },
  },
});

// Set the locale once at the beginning of your app.
i18n.locale = getLocales()[0].languageCode;

console.log(i18n.t("welcome"));

export default i18n;
