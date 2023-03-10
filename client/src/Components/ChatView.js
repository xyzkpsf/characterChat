import "react-chat-elements/dist/main.css";
import { MessageList, Avatar, Input, Button } from "react-chat-elements";

// take character object, and message list as input
const ChatView = (props) => {
  return (
    <div>
      <div>
        <Avatar
          src="https://avatars.githubusercontent.com/u/80540635?v=4"
          alt="avatar"
          size="xlarge"
          type="rounded"
        />
        ;
      </div>
      <div>
        <MessageList
          className="message-list"
          lockable={true}
          toBottomHeight={"100%"}
          dataSource={[
            {
              position: "left",
              type: "text",
              title: "Kursat",
              text: "Give me a message list example !",
            },
            {
              position: "right",
              type: "text",
              title: "Emre",
              text: "That's all.",
            },
          ]}
        />
      </div>
      <div>
        <Input placeholder="Type here..." multiline={true} />
        <Button
          text={"Send"}
          onClick={() => alert("Sending...")}
          title="Send"
          // icon ={
          //   float:'left',
          //   size:15,
          //   component:<IconExample/>
          // }
        />
      </div>
    </div>
  );
};

export default ChatView;
