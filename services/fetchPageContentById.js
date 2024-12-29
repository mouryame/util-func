import { globalCache } from "@/cache";
import connectDB from "@/db/connect";
import { pages } from "@/db/models";

export default async function fetchPageContentById(id) {
  const cachedPage = globalCache.get("pageContent" + id);
  if (cachedPage) {
    console.log("returning from cache");
    return cachedPage;
  }
  await connectDB();
  const page = await pages.findOne({ id }).select("title content");
  globalCache.set("pageContent" + id, page);
  return page;
}
