import React from 'react'
import "./Post.css"

function Post() {
  return (
    <React.Fragment>
      <div className="post">
        <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" className="postImg" />
        <div className="postInfo">
          <div className="postCats">
            <span className="postCat">MUSIC</span>
            <span className="postCat">LIFE</span>
          </div>
          <span className="postTitle">Lorem Ipsum</span>
          <hr/>
          <span className="postDate">2 hr ago</span>
        </div>
        <div className="postDesc">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </div>
      </div>
    </React.Fragment>
  )
}

export default Post
