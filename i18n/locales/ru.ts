import Core from "./ru/core";
import Home from "./ru/home";

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
