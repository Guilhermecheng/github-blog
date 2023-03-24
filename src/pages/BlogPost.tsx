import {Link, useParams} from "react-router-dom";
import { Helmet } from "react-helmet";
import { BsChevronLeft, BsBoxArrowUpRight, BsGithub } from "react-icons/bs";

export default function BlogPost() {
    const { slug } = useParams();

    

    return (
        <>
            <Helmet>
                <title>Github Blog | Blog</title>
            </Helmet>
            <div className="w-full max-w-[864px] flex flex-col mt-[-5rem] min-h-[148px] bg-base-profile px-10 py-8 rounded-md  text-base-title">
                <div className="w-full flex">
                    <Link to="/" className="text-blue text-sm hover:underline hover:underline-offset-2 mr-auto">
                        <span className="flex items-center gap-x-2 font-bold">
                            <BsChevronLeft size={12} />
                            <span className="hidden md:flex">VOLTAR</span> 
                        </span>
                    </Link>

                    <a href="https://github.com/Guilhermecheng" className="text-blue text-sm hover:underline hover:underline-offset-2" target="_blank">
                        <span className="flex items-center gap-x-2 font-bold">
                            <span className="hidden md:flex">GITHUB </span> 
                            <BsBoxArrowUpRight size={12} />
                        </span>
                    </a>

                </div>

                <div className="mt-4 flex-col">
                    <h1 className="font-semibold text-lg md:text-2xl">
                        {slug}
                    </h1>
                    <div className="flex gap-x-8 text-base-span mt-2 text-sm md:text-base">
                        <span className="flex items-center gap-2">
                            <BsGithub size={16} className="text-base-label" />
                            autor
                        </span>
                        <span>
                            Há 1 dia
                        </span>
                        <span>
                            X comentários
                        </span>
                    </div>
                </div>
            </div>

            <section className="block w-full max-w-[864px] px-8 py-10 text-base-text ">
                Text
            </section>
        </>
    )
}