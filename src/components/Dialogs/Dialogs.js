import React from 'react';
import cls from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const User = (props) => {
    return (
    <div className={cls.user}>
        <NavLink to={"/dialogs/" + props.id}> {props.name}</NavLink>
    </div>
    )
}


const dialogs = () => {
  return (
      <div className={cls.body}>
          <div className={cls.dialogs}>
              <User id="1" name="Andrew" />
              <User id="2" name="Dima" />
              <User id="3" name="Sveta" />
              <User id="4" name="Nastya" />
              <User id="5" name="Vova" />
          </div>
          <div className={cls.messages}>
              <div className={cls.post}>HI dude</div>
              <div className={cls.post}>hihi</div>
              <div className={cls.post}>kak dela</div>
              <div className={cls.post}>vce cyper</div>
              <div className={cls.post}>poka</div>
          </div>
      </div>
  );
}

export default dialogs;

