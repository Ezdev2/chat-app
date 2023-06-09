import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getChannels } from "./api/channel";

const ChatPage = () => {
  const [channels, setChannels] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchChannels = async () => {
      try {
        const response:any = await getChannels();

        if (response.ok) {
          const data = await response.json();
          setChannels(data.channels);
        } else {
          console.error("récupération des canaux");
        }
      } catch (error) {
        console.error("erreurs de requête");
      }
    };

    fetchChannels();
  }, []);

  const handleChannelClick = (channelId: string) => {
    router.push(`/chat/${channelId}`);
  };

  return (
    <div>
      <h1>Chat</h1>
      <ul>
        {channels.map((channel: any) => (
          <li key={channel.id} onClick={() => handleChannelClick(channel.id)}>
            {channel.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatPage;