import { BookmarkType } from "@/types";
import Link from "next/link";
import React from "react";

type Props = {
  bookmark: BookmarkType;
};

const Bookmark: React.FC<Props> = ({ bookmark }) => {
  return (
    <div>
      <div className="alert alert-primary" role="alert">
        <h5>
          <Link href={bookmark.url} target={"_blank"} className={"text-decoration-none"}>
              {bookmark.title}
              <p className="mt-2 fs-6 alert-link">({bookmark.url})</p>
          </Link>          
        </h5>
      </div>
    </div>
  );
};

export default Bookmark;