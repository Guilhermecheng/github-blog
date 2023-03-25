import { Link } from "react-router-dom";

interface PostProps {

}

export function Post({ data }: any) {
    return (
        <Link to={`/${data.number}`}>
            <div className="mb-8 md:mb-0 p-8 bg-base-post rounded-md cursor-pointer hover:border-2 hover:border-base-label">
                <div className="flex w-full items-center">

                    {/* <h1 className="text-base-title text-xl font-semibold max-w-[80%]">JavaScript data types and data structures</h1> */}
                    <h1 className="text-base-title text-xl font-semibold max-w-[80%]">{data.title}</h1>
                    <span className="ml-auto text-base-span text-sm">Há 6 dias</span>
                </div>
                <p className="mt-5 text-base-text text-base">Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have.</p>
            </div>
        </Link>
    )
}