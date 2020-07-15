import React from 'react';
import cls from './Profile.module.css';
import MyPosts from './myPosts/MyPosts'
import Profileinfo from "./profileinfo/Profileinfo";



const profile = (props) => {
  return (
      <div className={cls.body}>
          <Profileinfo />
          <MyPosts posts={props.posts}/>
      </div>
  );
}

export default profile;

