var CommentList = (props) => {
  return (
    <div className="comment-list">
      {props.comments.map((comment, index) => { return <CommentListEntry comment={comment} key={index} />; })}
    </div>
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.CommentList = CommentList;
