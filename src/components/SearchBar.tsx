import { Dispatch, SetStateAction, useContext, useEffect, useState } from 'react';
import { SearchContext } from '../contexts/SearchContext';

type Inputs = {
    searchInput: string,
};

interface PostProps {
    avatar_url: string;
    bio: string;
    company: string;
    name: string;
    login: string;
    followers: number;
  }

interface SearchBarProps {
    postsList: PostProps[];
    setQuery: Dispatch<SetStateAction<string>>
}

export function SearchBar({postsList, setQuery}: SearchBarProps) {
    const { register, handleSubmit, debouncedValue } = useContext(SearchContext);

    function handleSetQuery(data: Inputs | string) {
        if(typeof data === "string") {
            setQuery(data);
        } else {
            setQuery(data.searchInput);
        }
    }

    useEffect(() => {
        handleSetQuery(debouncedValue);
    }, [debouncedValue]);

    return (
        <div className="mt-6 relative">
            <div className="w-full flex">
                <h1 className="text-base-title font-bold text-lg md:text-2xl">Publicações</h1>
                <h2 className="absolute right-0 text-base-span text-sm md:text-base">
                    {postsList.length === 1 ? `${postsList.length} publicação`: `${postsList.length} publicações`}
                </h2>
            </div>

            <form onSubmit={handleSubmit(handleSetQuery)}>
                <input
                    type="text" 
                    className="mt-3.5 w-full bg-base-input rounded-md text-base-text border-2 border-base-border px-4 py-3.5 placeholder:text-base-label focus:border-blue focus:outline-none"
                    placeholder="Buscar conteúdo"
                    {...register("searchInput")}
                />
            </form>
        </div>
    )
}