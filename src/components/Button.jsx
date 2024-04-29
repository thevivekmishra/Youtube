import React from "react";

const Button = ({name}) => {
    return(
        <button className="px-3 py-2 m-2 bg-gray-200 rounded-lg hover:bg-black hover:text-white">{name}</button>
    )
}
export default Button ;
