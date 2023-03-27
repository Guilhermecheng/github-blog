import axios from "axios"
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import { Post } from "../components/Post";
import { Profile } from "../components/Profile";
import { SearchBar } from "../components/SearchBar";

interface PostsListProps {

}

function Home() {
  const username = 'Guilhermecheng';
  const [userInfo, setUserInfo] = useState<any>(null);
  const [postsList, setPostsList] = useState([]);

  async function getUser() {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      // console.log(response);

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
      const response = await axios.get(`https://api.github.com/search/issues?q=repo:Guilhermecheng/github-blog`);
      console.log(response);

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
  }, [])
  
  return (
    <>
      <Helmet>
        <title>Github Blog | Home</title>
      </Helmet>

      <section className="w-full max-w-[864px] px-4">
        <Profile profileInfo={userInfo} />
        <SearchBar postsList={postsList} />

        <div className="my-12 md:grid grid-cols-2 md:gap-8">
          { postsList.length > 0 && (
            postsList.map((post, i) => <Post key={i} data={post} /> )
          ) }
        </div>
      </section>
    </>
  )
}

export default Home;
