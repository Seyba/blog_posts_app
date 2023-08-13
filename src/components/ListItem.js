import { useSelector, useDispatch} from "react-redux"
import { deletePost, editPost } from "../redux/slices/postsSlice"
import {Link } from 'react-router-dom'

export const ListItem = (props) => {
    const dispatch = useDispatch()
    const allPosts = useSelector(state => state.posts)
    console.log(allPosts)
    const { title, content, id} = props
    const { posts } = allPosts
    
    return(

        <ul className="container  ">
            <div class="grid grid-cols-3 gap-2 divide-y outline-offset-2 ">
                <div>
                    <Link to={`/posts/${id}`}>Update</Link>
                </div>
                <div>
                    <li className="font-bold">{title}</li>
                    <p className="text-xl">{content}</p>
                </div>
                <div>
                    <button>
                        Delete
                    </button>
                </div>
            </div>
        </ul>

    )
}