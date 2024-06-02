/* eslint-disable react/prop-types */
import React from "react";

const PostCard = ({ post, hanldlePublicaiton }) => {
  return (
    <div className="card text-center col"  >
      <img className="card-img-top" src={`https://source.unsplash.com/150x100?${post.published}`} alt="Title" />
      <div className="card-body">
        <h4 className="card-title">{post.title}</h4>
        <h4 className="card-title">{post.author}</h4>
        <p className="card-text">{post.date}</p>
        <p className="card-text">
          {!post.published ? "Not Published" : "Published"}
        </p>
        <div className="d-grid gap-2">
          <button
            type="button"
            name=""
            id=""
            onClick={() => hanldlePublicaiton(post.id, post.published)}
            className="btn btn-primary"
          >
            {!post.published ? "Publish" : "Unpublish"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
