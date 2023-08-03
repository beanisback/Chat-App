import React, { useEffect, useState } from 'react';
import ChatDetail from '../components/ChatDetail';
import LeftMenu from '../components/LeftMenu';
import LoadingScreen from '../components/LoadingScreen';

// loading screen component



const WhatsApp = () => {
    const[progress, setProgress] = useState(0);
    const[loading, setLoading] = useState(true);

    useEffect(() => {
       const id =  setTimeout(() => {
            if (progress >= 100) setLoading(false);
            else {
                const increment = Math.floor(Math.random() * ( 10 + 1 )) + 7
                setProgress(progress + increment);
            }
        }, 300);
        return () => clearTimeout(id);
    } , [progress]);

  return (
    //maincontainer
    <>
    {loading ? (
      <LoadingScreen  progress={progress}/>
    ) : (
<div className="w-screen h-screen overflow-hidden">
       {/* 2 components container */}
       <div className="flex justify-start whatsapp-bp:justify-center items-center bg-[#111a21] h-screen">
        {/*Leftmenu */}
        <div className="bg-[#111a21] min-w-[340px] max-w-[500px] w-100 h-100">
        <LeftMenu />
          </div>

        {/*chatdetail */}
        <div className="bg-[#222f35] min-w-[315px] max-w-[1100px] w-100 h-100">
<ChatDetail />
        </div>

       </div>
      
    </div>
    )}
    </>
  );
}

export default WhatsApp;
