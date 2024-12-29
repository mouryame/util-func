"use server";
import { globalCache } from "@/cache";
import connectDB from "../db/connect";
import { pages } from "../db/models";

interface PageProps {
  id?: number;
  title?: string;
  content?: string;
  languageId?: number;
}

async function createPage(pageProps: PageProps) {
  const { title, content, languageId } = pageProps;
  await connectDB();

  const lastPage = await pages.findOne({}).sort({ id: -1 }).select("id");
  const lastPageId = lastPage?.id || 0;
  await pages.create({
    id: lastPageId + 1,
    title,
    content,
    languageId: 1, //change this to accept value from pageProps in future
  });

  globalCache.delete("pageList");
  return { message: "Page Created" };
}

async function deletePage(id: Number) {
  await connectDB();
  const isPageExisiting = await pages.findOne({ id });
  if (!isPageExisiting) return { message: "Page Not Found" };
  await pages.deleteOne({ id });
  globalCache.delete("pageList");
  return { message: "Page Deleted" };
}

async function updatePage(updatedData: PageProps) {
  await connectDB();
  await pages.updateOne({ id: updatedData.id }, { $set: updatedData });
  globalCache.delete("pageList");
  return { message: "Page Updated" };
}

export { createPage, deletePage, updatePage };
