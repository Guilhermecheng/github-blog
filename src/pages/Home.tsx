import axios from "axios"
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import { Post } from "../components/Post";
import { Profile } from "../components/Profile";
import { SearchBar } from "../components/SearchBar";

interface PostProps {
  avatar_url: string;
  bio: string;
  company: string;
  name: string;
  login: string;
  followers: number;
}

export const username = 'Guilhermecheng';

function Home() {
  const [userInfo, setUserInfo] = useState<any>(null);
  const [postsList, setPostsList] = useState<PostProps[]>([]);
  const [query, setQuery] = useState('');

  async function getUser() {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);

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

  async function getPostsList() {
    try {
      const response = await axios.get(`https://api.github.com/search/issues?q=${query}%20repo:${username}/github-blog`, {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_GITHUB_PERSONAL_TOKEN}`
        }
      });

      setPostsList(response.data.items);

    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getUser().then(user_info => {
      setUserInfo(user_info);
    });
  }, [])

  useEffect(() => {
    getPostsList();
  }, [query])
  
  return (
    <>
      <Helmet>
        <title>Github Blog | Home</title>
      </Helmet>

      <section className="w-full max-w-[864px] px-4">
        <Profile profileInfo={userInfo} />
        <SearchBar postsList={postsList} setQuery={setQuery} />

        <div className="my-10 md:my-12 md:grid grid-cols-2 md:gap-8">
          { postsList.length > 0 && (
            postsList.map((post, i) => <Post key={i} data={post} /> )
          ) }
        </div>
      </section>
    </>
  )
}

export default Home;
