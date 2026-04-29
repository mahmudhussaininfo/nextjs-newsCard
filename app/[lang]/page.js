import NewsCard from "@/components/NewsCard.jsx";
import { getNews } from "@/utils/utils.js";
import Link from "next/link.js";
import { getDictionary } from "./dictionaries.js";

export default async function Home({ params: { lang } }) {
  const news = await getNews();

  const dictionary = await getDictionary(lang);

  return (
    <>
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-10 h-80 w-80 rounded-full" />
        <div className="absolute right-0 top-52 h-72 w-72 rounded-full" />
        <div className="noise absolute inset-0" />
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold text-white">
            {dictionary.devNews}
          </h2>
          <p className="mt-1 text-sm text-zinc-400">
            {dictionary.freshSignals}
          </p>
        </div>
      </div>
      <section className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {news.map((item) => (
          <Link key={item.id} href={`/news/${item.slug}`}>
            <NewsCard newses={item} />
          </Link>
        ))}
      </section>
    </>
  );
}
