import connectDB from "../db/connect";
import { pages } from "../db/models";

export default async function fetchAllPages() {
    await connectDB();
    const pagesList = await pages.find({}).select("id title");
    return pagesList;
}
