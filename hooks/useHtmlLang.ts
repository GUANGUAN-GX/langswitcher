import { useRouter } from "next/router";
import { useEffect } from "react";
import i18nextConfig from "../next-i18next.config";

export const useHtmlLang = () => {
  const router = useRouter();

  useEffect(() => {
    const updateHtmlLang = () => {
      const currentLocale = router.locale ?? i18nextConfig.i18n.defaultLocale;
      const htmlLang = currentLocale === "zh" ? "zh-cmn-Hans" : currentLocale;
      document.documentElement.lang = htmlLang;
    };

    router.events.on("routeChangeComplete", updateHtmlLang);
    updateHtmlLang(); // Set the initial language

    return () => {
      router.events.off("routeChangeComplete", updateHtmlLang);
    };
  }, [router]);
};
