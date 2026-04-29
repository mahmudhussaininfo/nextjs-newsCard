import NewsModal from "@/components/NewsModal.jsx";
import SingleNews from "@/components/SingleNews.jsx";
import news from "@/public/data.json";

const newsModalpage = ({ params: { slug } }) => {
  const newsItem = news.find((item) => item.slug === slug);

  return (
    <>
      <NewsModal>
        <SingleNews newsItem={newsItem} />
      </NewsModal>
    </>
  );
};

export default newsModalpage;
