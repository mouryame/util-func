import connectDB from "../db/connect";
import { pages } from "../db/models";
import { globalCache } from "@/cache";

export default async function fetchAllPages() {
  const cachedPageList = globalCache.get("pageList");
  if (cachedPageList) {
    console.log("returning from cache");
    return cachedPageList;
  }
  await connectDB();
  const pagesList = await pages.find({}).select("id title");
  globalCache.set("pageList", pagesList);
  return pagesList;
}
