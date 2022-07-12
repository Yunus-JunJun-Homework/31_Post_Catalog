const SinglePost = (props) => {
  return (
    <li style={{border: "solid", marginTop:5}} className="posts_single-post" data-post-id={props.singlePost.id}>
      <h3 className="posts_post-title">{props.singlePost.title}</h3>
      <p className="posts_post-description">{props.singlePost.body}</p>
    </li>
  );
};

export default SinglePost;
