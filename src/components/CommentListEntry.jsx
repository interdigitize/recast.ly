var CommentListEntry = (props) => {
  var comment = props.comment.snippet.topLevelComment.snippet;
  var date = new Date(comment.publishedAt);
  var dateString = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
  var timeString = '';
  var amORpm = 'AM';

  if (date.getHours() > 12) {
    timeString += (date.getHours() - 12) + ':';
    amORpm = 'PM';
  } else {
    timeString += date.getHours() + ':';
  }

  if (date.getMinutes() < 10) {
    timeString += '0';
  }
  timeString += date.getMinutes() + ' ' + amORpm;

  return (
    <div className="comment">
      <div className="displayName">{comment.authorDisplayName}</div>
      <div className="text">{comment.textOriginal}</div>
      <div className="publishedAt">{dateString + ' ' + timeString}</div>
      <div className="likeCount">{'Likes: ' + comment.likeCount}</div>
    </div>
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.CommentListEntry = CommentListEntry;
