"use client";
import { strip_tags } from "@/utils/functions";
import { faArrowAltCircleLeft, faArrowAltCircleRight, faArrowLeftLong, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect, lazy, useMemo } from "react";
// import Pagination from "../partials/Pagination";

const Image = lazy(() => import("@/components/partials/Image"));

export default function Articles() {
    let [articles, setArticles] = useState<any[]>([]);
    let [pagination, setPagination] = useState<any>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);

    useEffect(() => {
        fetch(`https://kompasiana-api.vercel.app/api/profile/alfiansa`)
            .then(response => response.json())
            .then((json) => {
                setArticles(json.data.posts);
                setPagination(json.data.posts);
                console.log({ json, articles, pagination });
            }).catch(err => console.error(err));
    }, [currentPage]);

    return (
        <div className="flex flex-col gap-2 p-2">
            <div className="grid gap-2.5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {articles
                    ?
                    articles.map((article) => {
                        let time = new Date();
                        let thumbnail = article.thumbnail || "https://i.pinimg.com/564x/5b/5e/e9/5b5ee9ecb9e603900f963731a959ab89.jpg";
                        
                        return (
                            <div className="flex flex-col gap-2 rounded-sm shadow-md dark:shadow-slate-900 h-48 md:h-72 lg:h-72 bg-slate-100 dark:bg-slate-800">
                                <div style={{
                                    background: `#eee url("${ thumbnail }") no-repeat center center`,
                                    backgroundSize: "cover",
                                }} className="w-full h-2/3 rounded-md overflow-hidden bg-gray-400"></div>
                                <div className="flex flex-col h-1/3 p-2">
                                    <Link href={`/blog/${article.prefix}/${article.slug}`} className="hover:underline font-semibold text-main text-lg overflow-hidden h-2/3 text-ellipsis">
                                        {article.title}
                                    </Link>
                                    {/* <p className="h-2/4 text-sm text-gray-400 dark:text-gray-200 overflow-hidden line-clamp-2 text-ellipsis">
                                        {strip_tags(article.content).slice(0, 100)}
                                    </p> */}
                                
                                </div>
                            </div>
                        );
                    })
                    : null}
            </div>
            
            <p className="text-sm md:text-lg lg:text-xl text-gray-600 dark:text-gray-200">
                want to see more ? see on my kompasiana account. <a target="_blank" className="font-semibold text-main" href="https://kompasiana.com/alfiansa">let's go</a>
            </p>
        </div>
    );
}
