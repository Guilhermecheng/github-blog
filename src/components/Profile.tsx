import { BsBoxArrowUpRight, BsGithub, BsFillBuildingFill, BsPeopleFill } from "react-icons/bs";
import { Loading } from "./Loading";

interface ProfileProps {
    profileInfo: {
        avatar_url: string;
        bio: string;
        company: string;
        name: string;
        login: string;
        followers: number;
    }
}

export function Profile({ profileInfo }: ProfileProps) {
    if (!profileInfo) {
        return (
            <div className="flex items-center justify-center mt-[-5rem] h-[148px] bg-base-profile px-10 py-8 rounded-md relative text-base-title">
                <Loading />
            </div>
        )
    }

    return (
        <div className="flex items-center mt-[-5rem] bg-base-profile px-6 md:px-10 py-8 rounded-md relative">
            <img src={profileInfo.avatar_url} alt="Guilherme Cheng" className="h-[102px] rounded-full md:h-[148px] md:rounded-md" />

            <div className="ml-10 md:ml-8 max-h-[148px]">
                <a href="https://github.com/Guilhermecheng" className="text-blue absolute right-8 top-10 md:top-8 text-sm hover:underline hover:underline-offset-2" target="_blank">
                    <span className="flex items-center gap-x-2 font-bold">
                        <span className="hidden md:flex">GITHUB </span> 
                        <BsBoxArrowUpRight size={16} className="mt-[-4px]" />
                    </span>
                </a>
                <h1 className="text-base-title font-bold text-lg md:text-2xl">{profileInfo.name}</h1>
                <p className="hidden md:flex text-base-text mt-2 h-[52px] text-sm md:text-base ">{profileInfo.bio}</p>

                <div className="flex flex-col md:flex-row text-base-subtitle mt-6 text-sm md:text-base gap-y-1 md:gap-y-0">
                    <span className="flex items-center gap-2">
                        <BsGithub size={16} className="text-base-label" />
                        {profileInfo.login}
                    </span>
                    <span className="flex items-center gap-2 ml-0 md:ml-6">
                        <BsFillBuildingFill size={16} className="text-base-label" />
                        {profileInfo.company}
                    </span>
                    <span className="flex items-center gap-2 ml-0 md:ml-6">
                        <BsPeopleFill size={16} className="text-base-label" />
                        {profileInfo.followers} seguidores
                    </span>
                </div>
            </div>
        </div>
    )
}