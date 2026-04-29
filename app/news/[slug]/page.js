import NotFound from "@/components/NotFound.jsx";
import SingleNews from "@/components/SingleNews.jsx";
import news from "@/public/data.json";

const newsDetailsPage = ({ params: { slug } }) => {
  const newsItem = news.find((item) => item.slug === slug);

  if (!newsItem) {
    return <NotFound slug={slug} />;
  }
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-10">
        <SingleNews newsItem={newsItem} />
      </div>
    </>
  );
};

export default newsDetailsPage;
