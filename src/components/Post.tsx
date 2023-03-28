import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Link } from "react-router-dom";
import { calcHowMuchTimeHasPassed } from "../helpers/helpers";

interface PostProps {

}

export function Post({ data }: any) {
    return (
        <Link to={`/${data.number}`}>
            <div className="mb-4 md:mb-0 p-6 md:p-8 bg-base-post rounded-md cursor-pointer hover:border-2 hover:border-base-label max-h-[260px] h-full">
                <div className="flex w-full items-center">

                    {/* <h1 className="text-base-title text-xl font-semibold max-w-[80%]">JavaScript data types and data structures</h1> */}
                    <h1 className="text-base-title text-lg md:text-xl font-bold max-w-[80%]">{data.title}</h1>
                    <span className="ml-auto text-base-span text-sm">
                        {calcHowMuchTimeHasPassed(data.created_at) === 1 ? `Há ${calcHowMuchTimeHasPassed(data.created_at)} dia` : `Há ${calcHowMuchTimeHasPassed(data.created_at)} dias`}
                    </span>
                </div>

                <div className="mt-3 md:mt-5 overflow-hidden text-ellipsis max-h-[112px]">
                    <ReactMarkdown children={data.body.split('\n')[0]} className="prose prose-blue max-w-none text-sm leading-normal md:text-base md:leading-7" />
                </div>
            </div>
        </Link>
    )
}