import { createContext, ReactNode, useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import { useDebounce } from "usehooks-ts";

type Inputs = {
    searchInput: string,
};
interface SearchContextProviderProps {
    children: ReactNode;
}

export const SearchContext = createContext({} as any)

export function SearchContextProvider({ children }: SearchContextProviderProps) {
    const { register, handleSubmit, watch } = useForm<Inputs>();
    const [debouncingString, setDebouncingString] = useState("");
    const debouncedValue = useDebounce<string>(debouncingString, 400);

    useEffect(() => {
        setDebouncingString(watch("searchInput"));
    }, [watch("searchInput")])

    return (
        <SearchContext.Provider value={{
            register, handleSubmit, watch, debouncedValue
        }}>
            { children }
        </SearchContext.Provider>
    )
}