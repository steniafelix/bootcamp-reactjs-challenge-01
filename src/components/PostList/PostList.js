import React, { Component } from "react";

import PostHeader from "../PostHeader/PostHeader";

const PostList = ({ users }) => (
  <div>
    <PostHeader users={users} />
  </div>
);

export default PostList;
