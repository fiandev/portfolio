import { strip_tags } from "@/utils/functions";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { Metadata, ResolvingMetadata } from 'next'

type Props = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = params.slug;
  let response = await fetch(`https://harapandigital.com/api/blogs/${slug}`);
  let article = await response.json();

  const previousImages = (await parent).openGraph?.images || []
  const description = strip_tags(article.content).slice(0, 100) + "...";
  const baseURL = "https://fiandev.my.id";
  const siteName = "fiandev's portfolio";

  return {
    title: article.title,
    description: description,
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: description,
      siteId: "",
      creator: "@im_fiandev",
      creatorId: "",
      images: [article.thumbnail],
    },
    openGraph: {
      title: article.title,
      images: [article.thumbnail, ...previousImages],
      description: description,
      url: baseURL,
      siteName: siteName,
      authors: ["fiandev"],
    },
  }
}

export default async function Article({ params }: Props) {
  const slug = params.slug;

  let response = await fetch(`https://harapandigital.com/api/blogs/${slug}`);
  let article = await response.json();

  return article && (
    <div className="flex flex-col gap-2 p-2 text-slate-800 dark:text-slate-200">
      <h1 className="text-lg text-center">
        {article.title}
      </h1>
      <div className="animate-lazy w-full h-48 lg:h-[60vh] rounded-md" style={{ backgroundSize: "cover", background: `#eee url('${article.thumbnail || "https://i.pinimg.com/564x/5b/5e/e9/5b5ee9ecb9e603900f963731a959ab89.jpg"}') no-repeat center center` }}></div>
      <div className="flex items-center justify-end gap-2 px-2 text-sm text-gray-500 animate-fadeInLeft">
        <p className="flex items-center gap-2">
          <FontAwesomeIcon icon={faUserAlt} />
          Admin
        </p>
        <span>{new Date(article.updated_at).toLocaleDateString()}</span>
      </div>
      <article dangerouslySetInnerHTML={{ __html: article.content }} className="first-letter:text-lg first-letter:font-semibold animate-fadeInRight text-sm py-2"></article>
    </div>
  );
}
