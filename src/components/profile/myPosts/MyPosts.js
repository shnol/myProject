import React from 'react';
import cls from './MyPosts.module.css';
import Post from "./post/Post";

const myPosts = (props) => {
    let postslist = props.posts.map( post => <Post message={post.text} like={post.like} id={post.id}/>)
    return (
        <div>
            <div className={cls.header}>
                Posts
            </div>
            <div className={cls.item}>
                <textarea></textarea>
                <button>Add post</button>
                {postslist}
            </div>
        </div>
    );
}

export default myPosts;

