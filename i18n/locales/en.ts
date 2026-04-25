import Core from "./en/core";
import Home from "./en/home";

export default defineI18nLocale(async (locale) => {
  return {
    nuxtSiteConfig: {
      name: "Rhynn",
      description: "",
    },
    Core: await Core(locale),
    Home: await Home(locale),
  };
});
