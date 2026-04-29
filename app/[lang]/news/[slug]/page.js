import NotFound from "@/components/NotFound.jsx";
import SingleNews from "@/components/SingleNews.jsx";
import news from "@/public/data.json";
import { getDictionary } from "../../dictionaries.js";

const newsDetailsPage = async ({ params: { slug, lang } }) => {
  const newsItem = news.find((item) => item.slug === slug);

  const dictionary = await getDictionary(lang);
  console.log(dictionary);

  if (!newsItem) {
    return <NotFound slug={slug} />;
  }
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-10">
        <SingleNews newsItem={newsItem} dictionary={dictionary} />
      </div>
    </>
  );
};

export default newsDetailsPage;
