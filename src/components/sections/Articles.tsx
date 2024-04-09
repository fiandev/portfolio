"use client";
import { strip_tags } from "@/utils/functions";
import { faArrowAltCircleLeft, faArrowAltCircleRight, faArrowLeftLong, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect, lazy, useMemo } from "react";
import Pagination from "../partials/Pagination";

const Image = lazy(() => import("@components/partials/Image"));

export default function Articles() {
    let [articles, setArticles] = useState<any[]>([]);
    let [pagination, setPagination] = useState<any>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);

    useEffect(() => {
        fetch(`https://harapandigital.com/api/blogs?page=${currentPage}`)
            .then(response => response.json())
            .then((data) => {
                setArticles(data.data);
                setPagination(data);
                console.log({ data, articles, pagination });
            }).catch(err => console.error(err));
    }, [currentPage]);

    return (
        <div className="flex flex-col gap-2 p-2">
            <div className="grid gap-2.5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {articles
                    ?
                    articles.map((article) => {
                        let time = new Date(article.updated_at);

                        return (
                            <div className="flex flex-col gap-2 rounded-sm shadow-md dark:shadow-slate-900 h-[60vh] md:h-96">
                                <div className="w-full h-1/2 rounded-md overflow-hidden bg-gray-400">
                                    <Image
                                        className={`${article.thumbnail ? "animation-none" : "animation-pulse"
                                            } w-full h-full`}
                                        alt={`${article.title}'s thumbnail`}
                                        srcset={article.thumbnail || "https://i.pinimg.com/564x/5b/5e/e9/5b5ee9ecb9e603900f963731a959ab89.jpg"}
                                    />
                                </div>
                                <div className="flex flex-col gap-1 h-2/3 p-2">
                                    <Link href={`/blog/${article.slug}`} className="hover:underline font-semibold h-1/4 text-slate-800 dark:text-main text-lg overflow-hidden truncate text-ellipsis">
                                        {article.title}
                                    </Link>
                                    <p className="h-2/4 text-sm text-gray-400 dark:text-gray-200 overflow-hidden line-clamp-2 text-ellipsis">
                                        {strip_tags(article.content).slice(0, 100)}
                                    </p>
                                    <div className="h-1/4 flex items-center justify-between gap-2">
                                        <Link
                                            className="flex items-center justify-center bg-sky-400 text-sm rounded-md text-white hover:bg-transparent dark:hover:text-slate-600 hover:text-slate-900 font-semibold hover:outline hover:outline-main w-fit capitalize py-1 px-2"
                                            href={`/blog/${article.slug}`}
                                        >
                                            read
                                        </Link>
                                        <div className="flex items-center justify-end gap-2 text-xs text-gray-300 animate-fadeInLeft">
                                            <p className="flex items-center gap-2">
                                                <FontAwesomeIcon icon={faUserAlt} />
                                                Admin
                                            </p>
                                            <span>{time.toLocaleDateString()}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                    : null}
            </div>
            <Pagination
                className="pagination"
                currentPage={currentPage}
                totalCount={pagination.total}
                pageSize={pagination.per_page}
                onPageChange={(page) => setCurrentPage(page)}
            />
        </div>
    );
}
