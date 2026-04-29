import NewsModal from "@/components/NewsModal.jsx";
import SingleNews from "@/components/SingleNews.jsx";
import news from "@/public/data.json";
import { getDictionary } from "../../dictionaries.js";

const newsModalpage = async ({ params: { slug, lang } }) => {
  const newsItem = news.find((item) => item.slug === slug);
  const dictionary = await getDictionary(lang);

  return (
    <>
      <NewsModal>
        <SingleNews newsItem={newsItem} dictionary={dictionary} />
      </NewsModal>
    </>
  );
};

export default newsModalpage;
