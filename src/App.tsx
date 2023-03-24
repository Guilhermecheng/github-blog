import { Routes, Route, Link } from "react-router-dom"
import BlogPost from "./pages/BlogPost"
import Home from "./pages/Home"

function App() {
  return (
    <div className='w-full h-full bg-base-background flex flex-col items-center justify-center'>
      <section className="w-full flex items-center justify-center h-[296px] bg-cover-background bg-cover">
        <Link to="/">
          <img src="/logo.svg" alt="Github Blog" className="cursor-pointer" />
        </Link>
      </section>

      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/:slug" element={ <BlogPost /> } />
      </Routes>
    </div>
  )
}

export default App
