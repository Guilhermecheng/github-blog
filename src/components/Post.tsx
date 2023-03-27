import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Link } from "react-router-dom";

interface PostProps {

}

export function Post({ data }: any) {
    return (
        <Link to={`/${data.number}`}>
            <div className="mb-8 md:mb-0 p-8 bg-base-post rounded-md cursor-pointer hover:border-2 hover:border-base-label max-h-[260px]">
                <div className="flex w-full items-center">

                    {/* <h1 className="text-base-title text-xl font-semibold max-w-[80%]">JavaScript data types and data structures</h1> */}
                    <h1 className="text-base-title text-xl font-semibold max-w-[80%]">{data.title}</h1>
                    <span className="ml-auto text-base-span text-sm">Há 6 dias</span>
                </div>

                <div className="mt-5 overflow-hidden text-ellipsis max-h-[112px]">
                    <ReactMarkdown children={data.body.split('\n')[0]} className="gap-y-2 prose prose-blue max-w-none" />
                </div>
            </div>
        </Link>
    )
}