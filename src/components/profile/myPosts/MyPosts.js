import React from 'react';
import cls from './MyPosts.module.css';
import Post from "./post/Post";

const myPosts = (props) => {

    let postslist = props.posts.map( post => <Post message={post.text} like={post.like} id={post.id}/>)
    let newPostEl = React.createRef()
    const addpost = () =>  {alert(newPostEl.current.value)}
    return (
        <div>
            <div className={cls.header}>
                Posts
            </div>
            <div className={cls.item}>
                <textarea ref={newPostEl}></textarea>
                <button onClick={addpost}>Add post</button>
                {postslist}
            </div>
        </div>
    );
}

export default myPosts;

