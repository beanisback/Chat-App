import React, { useEffect, useState } from 'react';
import Chat from './Chat';
import { chatsData } from '../data/whatsapp';
import { ImFolderDownload } from "react-icons/im";



const Chats = ({filter}) => {
    const [chats, setChats] = useState(chatsData);

    useEffect(() => {
        const newChats = filter
        ? chatsData.filter((chat) => chat.unreadMsgs)
        : chatsData;
        setChats(newChats);
    }, [filter]);

  return (
    <div className="flex flex-col overflow-y-scroll cursor-pointer h-100">
        
        {/*Archived container*/}
        <div className="flex justify-between items-center w-100 min-h-[55px] px-3 hover:bg-[#202d33]">
   {/*icon and text container */}
   <div className="flex justify-around items-center w-[150px]">
{/*icon*/}

<span className="text-emerald-500 text-lg">
<ImFolderDownload />
</span>

<h6 className="text-white">Archived</h6>
   </div>
   {/*number of chats */}
   <p className="text-emerald-500 text-xs font-light">7</p>
        </div>
      

        {chats.map((chat, index) => {
    return (

    <Chat
    key={index}
         image={chat.image}
         context={chat.context}
         message={chat.message}
         time={chat.time}
         unreadMsgs={chat.unreadMsgs}
        active={index === 0}


    />
    );
})}

    </div>
  );
}

export default Chats;
