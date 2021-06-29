import React from "react";
import { StreamChat } from "stream-chat";
import {
  Chat,
  Channel,
  ChannelHeader,
  MessageInput,
  MessageList,
  Thread,
  Window,
} from "stream-chat-react";
import img from "./assets/WEB.png";

import "stream-chat-react/dist/css/index.css";

const chatClient = StreamChat.getInstance("dz5f4d5kzrue");
const userToken =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoid2hpdGUtdGVybS00IiwiZXhwIjoxNjI0OTczNDQwfQ.t95UJmKXF90UviOE4BJVmEJ-6J2BCcDnt-u6mGAvGN4";

chatClient.connectUser(
  {
    id: "white-term-4",
    name: "white",
    image: "https://getstream.io/random_png/?id=white-term-4&name=white",
  },
  userToken
);

const channel = chatClient.channel("messaging", "white-term-4", {
  // add as many custom fields as you'd like
  image: { img },
  name: "WebDesigner Chat",
  members: ["white-term-4"],
});

function TChat() {
  return (
    <Chat client={chatClient} theme="messaging light">
      <Channel channel={channel}>
        <Window>
          <ChannelHeader />
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat>
  );
}

export default TChat;
