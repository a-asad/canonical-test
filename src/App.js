import { useEffect, useState } from "react";
import Post from "./components/post";
import { formatDateString, getBlogPosts, getCategory } from "./utils";

function App() {
  const [posts, setPosts] = useState();

  useEffect(() => {
    (async () => {
      const data = await getBlogPosts();
      if (data) {
        setPosts(data);
      }
      else {
        //handle error here
      }
    })()
  }, [])

  return (
    <div className="row u-equal-height">
      {posts && posts.map((post, id) => {
        return <Post
          key={id}
          category={getCategory(post)}
          thumbnail={post.featured_media}
          link={post.link}
          title={post.title.rendered}
          authorName={post._embedded.author[0].name}
          authorLink={post._embedded.author[0].link}
          date={formatDateString(post.date)}
        />
      })
      }
    </div>
  );
}

export default App;
