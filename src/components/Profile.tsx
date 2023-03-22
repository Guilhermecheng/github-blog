import { BsBoxArrowUpRight, BsGithub, BsFillBuildingFill, BsPeopleFill } from "react-icons/bs"

export function Profile() {
    return (
        <div className="flex mt-[-5rem] bg-base-profile px-10 py-8 rounded-md relative">
            <img src="https://github.com/Guilhermecheng.png" alt="Guilherme Cheng" className="h-[148px] rounded-md" />

            <div className="ml-8 h-[148px] ">
                <a href="https://github.com/Guilhermecheng" className="text-blue absolute right-8 top-10 text-sm hover:underline hover:underline-offset-2" target="_blank">
                    <span className="flex items-center gap-x-2">
                        <span className="hidden md:flex">GITHUB </span> 
                        <BsBoxArrowUpRight size={12} />
                    </span>
                </a>
                <h1 className="text-base-title font-semibold text-lg md:text-2xl">Guilherme Cheng</h1>
                <p className="hidden md:flex text-base-text mt-2 h-[52px] text-sm md:text-base ">Oi, eu soou o Guilherme</p>

                <div className="flex flex-col md:flex-row text-base-subtitle mt-6 text-sm md:text-base">
                    <span className="flex items-center gap-2">
                        <BsGithub size={16} className="text-base-label" />
                        Guilhermecheng
                    </span>
                    <span className="flex items-center gap-2 ml-0 md:ml-6">
                        <BsFillBuildingFill size={16} className="text-base-label" />
                        Accenture
                    </span>
                    <span className="flex items-center gap-2 ml-0 md:ml-6">
                        <BsPeopleFill size={16} className="text-base-label" />
                        10 seguidores
                    </span>
                </div>
            </div>
        </div>
    )
}