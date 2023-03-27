import React from "react";
import { ChatContext } from "./ChatHistory";

const ChatMessage = ({ message, index }) => {
  const { text } = message;
  const { setSize, windowWidth } = React.useContext(ChatContext);
  const root = React.useRef();
  React.useEffect(() => {
    setSize(index, root.current.getBoundingClientRect().height);
  }, [windowWidth]);
  return (
    <div ref={root} className="message">
      {text}
    </div>
  );
};
export default ChatMessage;
