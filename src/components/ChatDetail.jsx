import React, { useEffect, useRef, useState } from 'react';
import RoundedBtn from './Common/RoundedBtn';
import { MdSearch, MdSend } from "react-icons/md";
import { HiDotsVertical } from 'react-icons/hi';
import { p1, p4 } from '../assets/images/whatsapp';
import { BiHappy } from 'react-icons/bi';
import { AiOutlinePaperClip } from 'react-icons/ai';
import { BsFillMicFill } from 'react-icons/bs';
import { messagedata } from '../data/whatsapp';
import { getTime } from '../logic/whatsapp';
import Message from './Message';

const ChatDetail = () => {

    const [messages, setMessages] = useState(messagedata);

    const[typing, setTyping] = useState(false);

    const inputRef = useRef(null);
    const bottomRef = useRef(null);


    const addMessage = (msg) => {
        const newMesssages = [...messages,msg]
        setMessages(newMesssages);
    }

    const handleEmojiClick = () => {
        inputRef.current.value += "🙃";
        inputRef.current.focus();

    }

    const handleImageUpload = () => {
        addMessage({
            
                pic: p4,
                time: getTime(),
                sent: true
        
        });
    }

    const handleInputChange = () => {
        inputRef.current.value.length === 0 ? setTyping(false) : setTyping(true);
    };

    const handleInputSubmit = () => {
if(inputRef.current.value.length > 0) {addMessage({
    msg: inputRef.current.value,
    time: getTime(),
    sent: true,

 });
 inputRef.current.value = "";
 inputRef.current.focus();
 setTyping(false);
} };

    useEffect(() => {
        bottomRef.current?.scrollIntoView({
            behavior: "smooth"
        });
    } , [messages]);



    useEffect(() => {

        const listener = (e) => {
            if(e.code === "Enter") handleInputSubmit();
        };
        document.addEventListener("keydown", listener);
        return () => document.removeEventListener("keydown", listener)
    })
    return (

        <div className="flex flex-col h-screen">

            <div className="flex justify-between bg-[#202d33] h-[60px] p-3">
                {/* contact info */}
                <div className="flex items-center">

                    <img
                        className="w-8 h-8 rounded-full mr-5"
                        alt="imagep"
                        src={p1}
                    />

                    <div className='flex flex-col'>
                        <h1 className="text-white text-sm pt-4">Rajeev</h1>

                        <p className="text-[#8796a1] text-xs pb-2">online</p>
                    </div>

                </div>
                {/* buttons */}
                <div className="flex justify-between items-center w-[85px]">
                    <RoundedBtn icon={<MdSearch />} />
                    <RoundedBtn icon={<HiDotsVertical />} />



                </div>

            </div>

            <div className="bg-[#0a131a] bg-[url('assets/images/dd.jpeg')] bg-contain overflow-y-scroll h-100"
                style={{ padding: "12px 7%" }}>

                {messages.map((msg) => (
                    <Message
                        msg={msg.msg}
                        time={msg.time}
                        link={msg.link}
                        pic={msg.pic}
                        sent={msg.sent} />
                ))}
                <div ref={bottomRef}></div>

            </div>

            <div className="flex items-center bg-[#202d33] w-100 h-[70px] p-2">
                {/* emoji btn */}
                
                    
                        <RoundedBtn icon={<BiHappy/>} onClick={handleEmojiClick} />
                    


                {/* upload btn */}
                <span className="mr-2">
                    <RoundedBtn icon={<AiOutlinePaperClip />}  onClick={handleImageUpload}/>
                </span>

                {/* input bar  */}

                <input
                    className="bg-[#2c3943] rounded-lg outline-none text-sm text-neutral-200 w-100 h-100 px-3 
placeholder:text-sm placeholder:text-[#8796a1]"
                    type="text"
                    placeholder="Type a message"
                    onChange={handleInputChange}
                    ref={inputRef}
                    
                />

                {/* mic/send btn */}
                <span className='ml-2'>
                    {typing ? (
                        <RoundedBtn icon={<MdSend />} onClick={handleInputSubmit} />
                    ) : (
                        <RoundedBtn icon={<BsFillMicFill />} />
                    )}
               
                    
                </span>

            </div>
        </div>
    );
};

export default ChatDetail;
