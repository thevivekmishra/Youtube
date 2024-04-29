import React from "react";

const ChatMessage = ({name,message}) => {
    return(
        <div className="flex mt-3 gap-3 ">
            <img className= "h-7 w-7" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"/>
            <span className="font-bold">{name}</span>
            <span>{message}</span>
        </div>
    )
}
export default ChatMessage;