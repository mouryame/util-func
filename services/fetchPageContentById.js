import connectDB from "@/db/connect";
import { pages } from "@/db/models";

export default async function fetchPageContentById(id) {
    await connectDB();
    const page = await pages.findOne({ id }).select("title content");
    return page;
}