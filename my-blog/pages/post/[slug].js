import React from "react";

import {
  PostDetail,
  Categories,
  PostWidget,
  Author,
  Comments,
  CommentsForm,
  Loader,
} from "../../components";
import { getPosts, getPostDetails } from "../../services";

const PostDetails = ({ post }) => {
  return (
    <>
      <div className="container mx-auto px-10 mb-8">PostDetails</div>
    </>
  );
};
export default PostDetails;
