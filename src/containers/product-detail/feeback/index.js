import React from "react";

import FeedbackItem from './FeebackItem';
import * as FS from './style';

const rating = [
    {
      id: 1,
      username: "user1",
      avatar_source:
        "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png",
      start: 5,
      comment: "san phat tot",
      create_at: "23/06/2021",
    },
    {
      id: 1,
      username: "user2",
      avatar_source:
        "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png",
      start: 5,
      comment: "san phat tot",
      create_at: "23/06/2021",
    },
  ];
  console.log(rating)

const Feeback = () => {
  return (
    <div>
        {rating.map((item,index)=>{
           return <FS.FeedbackBorder><FeedbackItem key={index} item={item} /></FS.FeedbackBorder>
        })}
    </div>
  );
};

export default Feeback;