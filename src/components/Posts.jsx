import { useState } from "react";
import Data from "../assets/data";

function Posts() {
  const [postList, setPostList] = useState(Data);

  const likePost = (postIndex) => {
    const newPostList = [...postList];
    newPostList[postIndex].likes = newPostList[postIndex].likes + 1;
    setPostList(newPostList);
  };

  const dislikePost = (postIndex) => {
    const newPostList = [...postList];
    if (newPostList[postIndex].likes > 0) {
      newPostList[postIndex].likes = newPostList[postIndex].likes - 1;
    }
    setPostList(newPostList);
  };

  return (
    <div className="app-wrapper">
      <h1 className="app-title">Posts</h1>
      <div className="post-list">
        {postList.map((item, index) => {
          return (
            <div className="post-item" key={index}>
              <div className="post-header">
                <h2>{item.title}</h2>
                <div className="post-social-media-stats">
                  <span className="stats-topic">Likes: </span>
                  <span className="post-likes">{item.likes}</span>
                </div>
              </div>
              <p className="post-content">{item.content}</p>
              <div className="post-actions">
                <button
                  className="like-button"
                  onClick={() => {
                    likePost(index);
                  }}
                >
                  Like
                </button>
                <button
                  className="dislike-button"
                  onClick={() => {
                    dislikePost(index);
                  }}
                >
                  Dislike
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Posts;
