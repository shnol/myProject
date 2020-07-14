import React from 'react';
import cls from './MyPosts.module.css';
import Post from "./post/Post";

const myPosts = () => {
    return (
        <div>
            <div className={cls.header}>
                Posts
            </div>
            <div className={cls.item}>
                <textarea></textarea>
                <button>Add post</button>
                <Post message='H1 i www123' like='15'/>
                <Post message='I want do nothing' like='55'/>
            </div>
        </div>
    );
}

export default myPosts;

