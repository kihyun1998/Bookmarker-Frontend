import Bookmarks from "@/app/components/Bookmarks";
import { getAllBookmarks } from "@/lib/bookmarkAPI";
import { BookmarksResponse } from "@/types";

type Props = {
  searchParams: { page: string }
}

export default async function BookmarkPage(props: Props)  {
  const {page = 1} = props.searchParams
  
  const bookmarksData: Promise<BookmarksResponse> = getAllBookmarks(parseInt(String(page)))

  const bookmarkRes = await bookmarksData

  // const {data} = await bookmarksData
  // const bookmarks: BookmarkType[] = data
  
  return (
    <div>
        <Bookmarks bookmarks={bookmarkRes} />
    </div>
  );
}
