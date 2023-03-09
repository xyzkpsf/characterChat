import "react-chat-elements/dist/main.css";
import { ChatBoxProps } from "../Utils/Types";
import { ChatList } from "react-chat-elements";

const ChatBox = (props: ChatBoxProps) => {
  return (
    <div>
      <ChatList
        className="chat-list"
        dataSource={[
          {
            id: 1,
            avatar: "https://avatars.githubusercontent.com/u/80540635?v=4",
            alt: "kursat_avatar",
            title: "Kursat",
            subtitle: "Why don't we go to the No Way Home movie this weekend ?",
            date: new Date(),
            unread: 3,
          },
        ]}
      />
    </div>
  );
};

export default ChatBox;
