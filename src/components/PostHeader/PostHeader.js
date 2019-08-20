import React from "react";

const PostHeader = ({ users }) => (
  <div className="postheader">
    {users.map(user => (
      <div className="itens">
        <img src={user.img} />
        <h1>{user.name}</h1>
        <small>{user.time}</small>
        <div className="mensage">
          <p>{user.mensage}</p>
        </div>
      </div>
    ))}
  </div>
);

export default PostHeader;
