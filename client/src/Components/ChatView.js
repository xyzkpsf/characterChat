import "react-chat-elements/dist/main.css";
import { MessageBox } from "react-chat-elements";

const ChatView = (props) => {
  return (
    <div>
      <MessageBox
        position={"left"}
        type={"text"}
        title={"Message Box Title"}
        text="Here is a text type message box"
      />
    </div>
  );
};

export default ChatView;
