import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { deletePost } from '../redux/slices/postsSlice';

export default function PostItem(props) {
    const {title, content, id} = props.post
    const dispatch = useDispatch()
    return(
        <article>
            <button onClick={() => dispatch(deletePost(id))}>Delete</button>
            <Link to={`/posts/${id}`}>
                <h2>{title}</h2>
                <p>{content}</p>   
            </Link>
            <button> Update</button>
        </article>
    );
}