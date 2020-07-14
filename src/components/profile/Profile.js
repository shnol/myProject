import React from 'react';
import cls from './Profile.module.css';
import MyPosts from './myPosts/MyPosts'
import Profileinfo from "./profileinfo/Profileinfo";

const profile = () => {
  return (
      <div className={cls.body}>
          <Profileinfo />
          <MyPosts />
      </div>
  );
}

export default profile;

