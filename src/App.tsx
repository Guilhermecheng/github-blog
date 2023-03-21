import { Profile } from "./components/Profile"
import { SearchBar } from "./components/SearchBar"

function App() {

  return (
    <div className='w-full h-full bg-base-background flex flex-col items-center justify-center'>
      <section className="w-full flex items-center justify-center h-[296px] bg-cover-background bg-cover">
        <img src="/logo.svg" />
      </section>
      
      <section className="w-full max-w-[864px]">
        <Profile />
        <SearchBar />
      </section>
    </div>
  )
}

export default App
