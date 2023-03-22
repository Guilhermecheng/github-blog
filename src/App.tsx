import { Post } from "./components/Post"
import { Profile } from "./components/Profile"
import { SearchBar } from "./components/SearchBar"

function App() {

  return (
    <div className='w-full h-full bg-base-background flex flex-col items-center justify-center'>
      <section className="w-full flex items-center justify-center h-[296px] bg-cover-background bg-cover">
        <img src="/logo.svg" alt="Github Blog" />
      </section>
      
      <section className="w-full max-w-[864px] px-4">
        <Profile />
        <SearchBar />

        <div className="my-12 md:grid grid-cols-2 md:gap-8">
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </section>
    </div>
  )
}

export default App
