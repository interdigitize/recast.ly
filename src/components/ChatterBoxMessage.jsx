var ChatterBoxMessage = (props) => {
  return (
    <div className="message">
      <div className="text">{props.message.text}</div>
    </div>
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.ChatterBoxMessage = ChatterBoxMessage;
