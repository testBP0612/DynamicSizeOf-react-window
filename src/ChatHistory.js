import React from "react";
import { VariableSizeList as List } from "react-window";
import ChatMessage from "./ChatMessage";
import { useWindowSize } from "./useWindowResize";

export const ChatContext = React.createContext({});
const ChatHistory = ({ listHeight, chatHistoryRef, listRef, chatHistory }) => {
  const sizeMap = React.useRef({});
  const setSize = React.useCallback((index, size) => {
    sizeMap.current = { ...sizeMap.current, [index]: size };
  }, []);
  const getSize = React.useCallback(index => sizeMap.current[index] || 50, []);
  const [windowWidth] = useWindowSize();

  return (
    <ChatContext.Provider value={{ setSize, windowWidth }}>
      <div ref={chatHistoryRef} className="chatHistory">
        {chatHistory.length > 0 && (
          <List
            height={listHeight}
            itemCount={chatHistory.length}
            itemSize={getSize}
            width="100%"
            ref={listRef}
          >
            {({ index, style }) => (
              <div style={style}>
                <ChatMessage index={index} message={chatHistory[index]} />
              </div>
            )}
          </List>
        )}
      </div>
    </ChatContext.Provider>
  );
};

export default ChatHistory;
