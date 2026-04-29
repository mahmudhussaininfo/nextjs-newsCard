import news from "@/public/data.json";
import { NextResponse } from "next/server.js";

export async function GET(_request, { params: { slug } }) {
  const newsItem = news.find((item) => item.slug === slug);

  if (!newsItem) {
    return NextResponse.json("no such news", { status: 404 });
  }
  return NextResponse.json(newsItem);
}

export async function PATCH(request, { params: { slug } }) {
  const newsItemIndex = news.findIndex((item) => item.slug === slug);

  if (newsItemIndex === -1) {
    return NextResponse.json("no such news", { status: 404 });
  }

  const { title, description } = await request.json();
  if (!title || !description) {
    return NextResponse.json("title and description are required", {
      status: 400,
    });
  }
  const newsItem = { title, description };
  news[newsItemIndex] = { ...news[newsItemIndex], ...newsItem };

  return NextResponse.json(news[newsItemIndex]);
}

export async function DELETE(_request, { params: { slug } }) {
  const newsItemIndex = news.findIndex((item) => item.slug === slug);

  if (newsItemIndex === -1) {
    return NextResponse.json("no such news", { status: 404 });
  }

  news.splice(newsItemIndex, 1);

  return NextResponse.json("news deleted successfully");
}
