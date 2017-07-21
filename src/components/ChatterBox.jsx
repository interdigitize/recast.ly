var ChatterBox = (props) => {
  console.log(props.messages);
  return (
    <div className="chatterbox-client">
      <div className="title">Chatter Box</div>
      <div>
        {props.messages.map((message, index) => { return <ChatterBoxMessage message={message} key={index} />; })}
      </div>
    </div>
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.ChatterBox = ChatterBox;
