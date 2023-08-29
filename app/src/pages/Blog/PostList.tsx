import React, {useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {createPost, selectPost} from "../../store/slices/postSlice";

const PostList = () => {
    const post = useAppSelector(selectPost)
    const dispatch = useAppDispatch()
    const [postDescription, setPostDescription] = useState("")
    const [error, setError] = useState("")
    const addPost = () => {
        if (postDescription.trim() !== "") {
            dispatch(createPost(postDescription))
            setPostDescription("")
            setError("")
        } else {
            setError("Field is not required!")
        }
    }
    const onKeyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        setError("")
        if (e.key === "Enter") {
            addPost()
        }
    }
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPostDescription(e.target.value)
    }
    return (
        <div>
            <input type="text"
                   value={postDescription}
                   onChange={onChangeHandler}
                   onKeyDown={onKeyPressHandler}
            />
            {error && <div>{error}</div>}
            <button onClick={addPost}>Create post!</button>
            <div>
                <ul>
                    {
                        post.map(p => <li key={p.id}>
                            <h3>{p.description}</h3>
                            <p>{p.like}</p>
                        </li>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default PostList;