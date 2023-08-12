import { useSelector, useDispatch } from "react-redux"
import PostItem from "./PostItem"
import { Spinner } from "./Spinner"
import { useEffect } from "react"
import {deleteAllPosts, fetchPosts} from '../redux/slices/postsSlice'
import { Modal } from "./Modal"

export default function PostsList() {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  console.log(posts);
  return (
    <div>
      <h1>Posts List</h1>

      <section>
        <button onClick={() => dispatch(deleteAllPosts())}>Remove All</button>
        <Modal posts = {posts}/>
        {posts.length ? (
          posts.map((post) => <PostItem post={post} key={post.id} />)
        ) : (
            <div>
              <h2>Posts Loading... </h2>
              <Spinner/>
            </div>
          
        )}
      </section>
      
    </div>
  );
}