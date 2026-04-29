import { formatDate, formatToKIntl } from "@/utils/utils.js";
import Image from "next/image.js";
import React from "react";

const NewsCard = ({ newses }) => {
  return (
    <>
      <div
        className="rounded-2xl cursor-pointer bg-gradient-to-br from-white/15 via-white/5 to-transparent p-[1px] reveal"
        style={{ animationDelay: "0ms" }}
      >
        <article className="group h-full rounded-2xl border border-white/10 bg-[var(--surface)] p-5 shadow-[0_24px_50px_rgba(5,8,16,0.55)] transition hover:-translate-y-1 hover:border-cyan-300/40">
          <div className="aspect-video overflow-hidden rounded-xl">
            <Image
              src={`/images/${newses.thumbnail}`}
              alt={newses.title}
              width={800}
              height={450}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
          <div className="mt-4 flex items-center justify-between text-xs text-zinc-400">
            <div className="flex items-center gap-2">
              <Image
                src={`/images/${newses.author_avatar}`}
                alt={newses.author_name}
                width={28}
                height={28}
                className="h-7 w-7 rounded-full object-cover"
              />
              <span>{newses.author_name}</span>
            </div>
            <span>{formatDate(newses.published_date)} days ago</span>
          </div>
          <h3 className="mt-3 text-lg font-semibold text-white">
            {newses.title}
          </h3>
          <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-cyan-200/80">
            {newses.tags.map((tag, index) => (
              <span
                key={index}
                className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-2 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-between text-xs text-zinc-400">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-4 w-4 text-emerald-300"
                >
                  <path
                    d="M12 4L5 11H9V20H15V11H19L12 4Z"
                    fill="currentColor"
                  />
                </svg>
                {formatToKIntl(newses.upvotes)}
              </span>
              <span className="flex items-center gap-1">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-4 w-4 text-rose-300"
                >
                  <path
                    d="M12 20L19 13H15V4H9V13H5L12 20Z"
                    fill="currentColor"
                  />
                </svg>
                {formatToKIntl(newses.downvotes)}
              </span>
            </div>
            <span className="flex items-center gap-1">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-4 w-4 text-zinc-500"
              >
                <path
                  d="M2 12C4.5 7 7.5 5 12 5C16.5 5 19.5 7 22 12C19.5 17 16.5 19 12 19C7.5 19 4.5 17 2 12Z"
                  stroke="currentColor"
                  strokeWidth="1.4"
                />
                <circle
                  cx={12}
                  cy={12}
                  r={3}
                  stroke="currentColor"
                  strokeWidth="1.4"
                />
              </svg>
              {formatToKIntl(newses.views)} views
            </span>
          </div>
        </article>
      </div>
    </>
  );
};

export default NewsCard;
