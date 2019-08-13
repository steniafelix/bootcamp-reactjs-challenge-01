import React from "react";

const PostHeader = ({ users }) => (
  // <h1>{user.name}</h1>
  <div>
    {users.map(user => (
      <div>
        <img src={user.img} />
        <h1>{user.name}</h1>
        <p>{user.mensage}</p>
      </div>
    ))}
  </div>
);

export default PostHeader;
