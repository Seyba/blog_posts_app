import { useParams, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deletePost } from '../redux/slices/postsSlice'

export default function PostPage() {
  const { id } = useParams();
  const history = useNavigate()
  const dispatch = useDispatch()
  // gets the posts in state and finds the post with the id from the params
  const post = useSelector((state) =>
    state.posts.find((post) => post.id == id)
  );

  // const history = useNavigate()
  // const handleDelete = () => {
  //   dispatch(post.id)
  //   history(`/posts`)
  // }
  console.log('POST', post);

  return (
    <div>
      <h2>Post Page Component</h2>

      <div>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </div>

      <Link to={`/posts/edit/${id}`}>Edit Post</Link>
      <button onClick={() => dispatch(deletePost(post.id))}>Delete</button>
      <Link to="/">Home</Link>
    </div>
  );
}