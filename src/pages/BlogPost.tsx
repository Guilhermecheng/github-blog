import {Link, useParams} from "react-router-dom";
import { Helmet } from "react-helmet";
import { BsChevronLeft, BsBoxArrowUpRight, BsGithub } from "react-icons/bs";
import axios from "axios";
import { useEffect, useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
//@ts-ignore
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
//@ts-ignore
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { NoMatch } from "./NoMatch";
import { Loading } from "../components/Loading";

export default function BlogPost() {
    const { slug } = useParams();
    const [postData, setPostData] = useState<any>(null);
    const [redirect, setRedirect] = useState(false);
    console.log(slug);

    async function getPostContent() {
        try {
            const response = await axios.get(`https://api.github.com/repos/Guilhermecheng/github-blog/issues/${slug}`);
            console.log(response)
            let setPageData = {
                title: response.data.title,
                author: response.data.user.login,
                createdAt: response.data.created_at,
                comments: response.data.comments,
                body: response.data.body,
            }
            setPostData(setPageData);
        } catch (error) {
            console.log(error)
            setRedirect(true)
        }
        // const response = await axios.get("https://api.github.com/repos/rocketseat-education/reactjs-github-blog-challenge/issues/1")
    }

    useEffect(() => {
        getPostContent();
    },[])

    if(!postData && !redirect){
        return (
        <div className="flex w-full h-80 justify-center items-center">
            <Loading />
        </div>
        )
    }
    if(!postData && redirect) return (<NoMatch />)

    return (
        <>
            <Helmet>
                <title>Github Blog | {postData.title}</title>
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
                            <span className="hidden md:flex">VER NO GITHUB </span> 
                            <BsBoxArrowUpRight size={12} />
                        </span>
                    </a>

                </div>

                <div className="mt-4 flex-col">
                    <h1 className="font-semibold text-lg md:text-2xl">
                        {postData.title}
                    </h1>
                    <div className="flex gap-x-8 text-base-span mt-2 text-sm md:text-base">
                        <span className="flex items-center gap-2">
                            <BsGithub size={16} className="text-base-label" />
                            {postData.author}
                        </span>
                        <span>
                            Há 1 dia
                        </span>
                        <span>
                            {postData.comments} comentários
                        </span>
                    </div>
                </div>
            </div>

            <section className="block w-full max-w-[864px] px-8 py-10 text-base-text gap-y-2">
                <ReactMarkdown 
                    children={postData.body} 
                    className="gap-y-2 prose prose-blue max-w-none" 
                    components={{
                        code({node, inline, className, children, ...props}) {
                          const match = /language-(\w+)/.exec(className || '')
                          return !inline && match ? (
                            <SyntaxHighlighter
                              children={String(children).replace(/\n$/, '')}
                              style={coldarkDark}
                              language={match[1]}
                              PreTag="div"
                              {...props}
                            />
                          ) : (
                            <code className={className} {...props}>
                              {children}
                            </code>
                          )
                        }
                      }}
                />
            </section>
        </>
    )
}