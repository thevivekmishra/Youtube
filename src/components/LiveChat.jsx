import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "./utils/chatSlice";
import { generateRandomMessage, generateRandomName } from "./utils/helper";

const LiveChat = () => {
    const [liveMessage, setLiveMessage] = useState("");
    const dispatch = useDispatch();

    const ChatMessages = useSelector((store) => store.chat.messages)
    useEffect(() => {
        const i = setInterval(() => {
            //API polling 
            console.log("vivek api");
            dispatch(
                addMessage({
                    name: generateRandomName(),
                    message: generateRandomMessage(20),
                })
            )
        }, 2000);
        return () => clearInterval(i);
    }, [])
    return (
        <div className="border border-black ">

            <p className="bg-red-400 static h-[40px] font-bold font-serif px-2 py-2 border border-black">Live Chat</p>
            <div className="w-[430px] h-[470px] border border-black p-4 overflow-y-scroll flex flex-col-reverse">

                <div className="bg-white p-2 w-full">

                    {ChatMessages.map((c, i) => (
                        <ChatMessage
                            key={i}
                            name={c.name}
                            message={c.message} />
                    ))
                    }
                </div>
            </div>
            <form className="flex items-center "

                onSubmit={(e) => {
                    e.preventDefault();
                    dispatch(
                        addMessage({
                            name: "You",
                            message: liveMessage,
                        })
                    )
                    setLiveMessage("");
                }}>

                <input type="text"
                    placeholder="Write your comment"
                    className=" w-full h-[40px] border-t border-black px-2"
                    value={liveMessage}
                    onChange={(e) => { setLiveMessage(e.target.value) }} />

                <button onClick={() => { onsubmit }}>
                    <img
                        className="w-[30px] h-[25px]"
                        src="https://static-00.iconduck.com/assets.00/send-icon-2048x1863-u8j8xnb6.png" alt="Send Icon"
                    />
                </button>

            </form>
        </div>
    );
};

export default LiveChat;
