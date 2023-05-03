import Link from "next/link";
import { useRouter } from "next/router";
import type { GetStaticProps, InferGetStaticPropsType } from "next";

import { useTranslation, Trans } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useHtmlLang } from "../hooks/useHtmlLang";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

type Props = {
  // Add custom props here
};

const Homepage = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  const { t } = useTranslation("common");

  useHtmlLang();
  const onToggleLanguageClick = (newLocale: string) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  return (
    <>
      <main className="w-4/5 m-auto">
        <h1 className="text-center">{t("h1")}</h1>
        <div className="text-center my-4">
          <button
            className="bg-blue-700 text-white py-2 px-4 rounded-full hover:bg-blue-300 transition-colors duration-200 mx-4"
            onClick={() => onToggleLanguageClick("ja")}
          >
            {t("change-locale", { changeTo: t("language.japanese") })}
          </button>
          <button
            className="bg-blue-700 text-white py-2 px-4 rounded-full hover:bg-blue-300 transition-colors duration-200 mx-4"
            onClick={() => onToggleLanguageClick("zh")}
          >
            {t("change-locale", { changeTo: t("language.chinese") })}
          </button>
        </div>
      </main>
    </>
  );
};

{
  /*  const changeTo = router.locale === "ja" ? "zh" : "ja";
//  const languageText = changeTo === "ja" ? "日本語" : "中国語";
//  console.log(changeTo, languageText);

  return (
    <>
      <main>
        <Link href="/" locale={changeTo}>
          <button className="rounded-full ...">
            {t("change-locale", { changeTo })}
          </button>
        </Link>
      </main>
    </>
  );
};
 */
}

// or getServerSideProps: GetServerSideProps<Props> = async ({ locale })
export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "ja", ["common", "footer"])),
  },
});

export default Homepage;
