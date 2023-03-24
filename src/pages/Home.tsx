import axios from "axios"
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import { Post } from "../components/Post";
import { Profile } from "../components/Profile";
import { SearchBar } from "../components/SearchBar";

function Home() {
  const username = 'Guilhermecheng';
  const [userInfo, setUserInfo] = useState<any>(null);

  async function getUser() {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      console.log(response);

      return {
        avatar_url: response.data.avatar_url,
        bio: response.data.bio,
        company: response.data.company,
        name: response.data.name,
        login: response.data.login ,
        followers: response.data.followers,

      }
    } catch (err) {
      console.log(err);
    }
    
  }

  useEffect(() => {
    getUser().then(user_info => {
      setUserInfo(user_info);
    });
    
  }, [])

  return (
    // <div className='w-full h-full bg-base-background flex flex-col items-center justify-center'>
    <>
      <Helmet>
        <title>Github Blog | Home</title>
      </Helmet>

      <section className="w-full max-w-[864px] px-4">
        <Profile profileInfo={userInfo} />
        <SearchBar />

        <div className="my-12 md:grid grid-cols-2 md:gap-8">
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </section>
    </>
    // </div>
  )
}

export default Home;
