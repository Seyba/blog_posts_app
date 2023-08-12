import { useParams, useNavigate  } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { TEInput, TERipple } from "tw-elements-react"
import { editPost } from "../redux/slices/postsSlice";

export default function EditPostForm() {
  const { id } = useParams();
  
  // navigate the user back to the single post page
  const navigate = useNavigate();

  // gets data from redux global state
  const postToUpdate = useSelector((state) =>
    state.posts.find((post) => post.id == id)
  );

  // set post to local component state
  const [formData, setFormData] = useState(postToUpdate);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editPost(formData));
    navigate(`/posts/${id}`);
  }

  return (
    <div className="flex justify-center py-56">
      <div className="block w-5/12 rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <form>
          <TEInput
            className="mb-6"
            label="Title"
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          ></TEInput>

          <div className="relative mb-6">
            <textarea
              className="peer border-2 block min-h-[auto] w-full rounded border-1 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:border-neutral-600 focus:border-primary"
              id="exampleFormControlTextarea13"
              rows={3}
              name="content"
              value={formData.content}
              onChange={handleChange}
            />
            <label
              htmlFor="exampleFormControlTextarea13"
              className="peer-focus:bg-white pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary dark:peer-focus:bg-neutral-700"
            >
              Content
            </label>
          </div>
          <TERipple rippleColor="light" className="w-full">
              <button
                onClick={handleSubmit}
                type="button"
                className="inline-block rounded w-full bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              >
                Edit Post
              </button>
          </TERipple>
        </form>
      </div>
      
    </div>
  );
} 