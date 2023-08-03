import React from 'react';

const Chat = ({ image, context, message, time, unreadMsgs, active }) => {
  return (
    <div className={`flex justify-between items-center cursor-pointer w-100 h-[85px] px--3 hover:bg-[#202d33] ${
        active ? "bg-[#202d33]" : ""
    }`}>
      <img className="rounded-full w-[45px] mr-5" alt="profile" src={image} />


      <div className="flex justify-between border-t border-neutral-700 w-100 h-100 py-3">


        <div className="flex flex-col justify-between text-white">

          <h1 className="font-medium text-sm mb-1">{context}</h1>
<p className={`text-sm ${
    !unreadMsgs ? "text-neutral-400" : ""
}`}>
    {message}
</p>

 </div>
        <div className="flex flex-col justify-between items-end h-100 text-xs">

    <p className="text-emerald-500 min-w-[55px]">{time}</p>

    {unreadMsgs && (
        <div className="flex justify-center items-center bg-emerald-500 rounded-full w-[20px] h-[20px] mr-2">
         <p className="text-emerald-900 pt-3">{unreadMsgs}</p>
            </div>
    )}
        </div>

      </div>

    </div>
  );
};

export default Chat;
