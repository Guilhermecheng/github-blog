
export function SearchBar({postsList}: any) {
    return (
        <div className="mt-6 relative">
            <div className="w-full flex">
                <h1 className="text-base-title font-bold text-lg md:text-2xl">Publicações</h1>
                <h2 className="absolute right-0 text-base-span text-sm md:text-base">
                    {postsList.length === 1 ? `${postsList.length} publicação`: `${postsList.length} publicações`}
                </h2>
            </div>
            <input type="text" className="mt-3.5 w-full bg-base-input rounded-md text-base-text border-2 border-base-border px-4 py-3.5 placeholder:text-base-label focus:border-blue focus:outline-none" placeholder="Buscar conteúdo" />
        </div>
    )
}