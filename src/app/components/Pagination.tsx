import { BookmarksResponse } from "@/types";
import Link from 'next/link';
import React from "react";

type PaginationProps = {
    bookmarks: BookmarksResponse
    query?: string
}

const Pagination: React.FC<PaginationProps> = ({bookmarks,query}) => {
    const path = "/bookmarks";
    const queryParam=(query===undefined || query === "") ? {} : {query: query}

    const firstPage = { pathname: path, query: { page: 1 },...queryParam }
    const previousPage = { pathname: path, query: { page: bookmarks.currentPage - 1,...queryParam } }
    const nextPage = { pathname: path, query: { page: bookmarks.currentPage + 1,...queryParam }}
    const lastPage = { pathname: path, query: { page: bookmarks.totalPages,...queryParam } }

    return(
        <div className="pagenation-div">
            <nav aria-label="Page navigation">
                <ul className="pagination justify-content-center">

                    <li className={"page-item " + (bookmarks.hasPrevious ? "" : "disabled")}>
                        <Link href={firstPage} className="page-link">
                            First
                        </Link>
                    </li>

                    <li className={"page-item " + (bookmarks.hasPrevious ? "" : "disabled")}>
                        <Link href={previousPage} className="page-link">
                            Previous
                        </Link>
                    </li>

                    <li className={"page-item " + (bookmarks.hasNext ? "" : "disabled")}>
                        <Link href={nextPage} className="page-link">
                            Next
                        </Link>
                    </li>

                    <li className={"page-item " + (bookmarks.hasNext ? "" : "disabled")}>
                        <Link href={lastPage} className="page-link">
                            Last
                        </Link>
                    </li>

                </ul>
            </nav>

        </div>
    );
}

export default Pagination;