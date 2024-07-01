import { Metadata } from "next";
import { lazy } from "react";

const Articles = lazy(() => import("@components/sections/Articles"));

const title = "fiandev's blog",
    thumbnail = "/graph.png",
    description =
        "see all fiandev's blog",
    keywords = [
        "blog",
        "posts",
        "articles",
        "fiandev",
        "freelance",
        "freelancer",
        "it support",
        "web web developer",
        "webdev",
        "freelance",
        "freelancer",
        "fullstack",
        "frontend",
        "backend",
        "backend developer",
        "frontend developer",
        "fullstack developer",
    ];

export const metadata: Metadata = {
    title: title,
    description: description,
    keywords: keywords,
    openGraph: {
        title: title,
        description: description,
        images: [thumbnail],
    },
    twitter: {
        card: "summary_large_image",
        title: title,
        description: description,
        siteId: "",
        creator: "@im_fiandev",
        creatorId: "",
        images: [thumbnail],
    },
};

export default async function Blog() {

    return (
        <div className={`flex flex-col scroll-smooth relative px-2`}>
            <h1 className="text-sm lg:text-lg text-main capitalize font-bold">
                my latest blog
            </h1>
            <Articles />
        </div>
    );
}
