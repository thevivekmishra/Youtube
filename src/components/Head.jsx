import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "./utils/appSlice";
import { useState } from "react";
import { YOUTUBE_SEARCH_API } from "./utils/contants";

const Head = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestion, setSuggestion] = useState([]);
    const [showSuggestion, setShowSuggestion] = useState(false);

    useEffect(() => {
        //make an API call on every keypress using dependencies,
        //set the diff of api call using setTimeout
        //decline the API call
        const timer = setTimeout(() => getSearchSuggestion(), 200);
        return () => {
            clearTimeout(timer);
        };
    }, [searchQuery]);

    const getSearchSuggestion = async () => {
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const json = await data.json();
        // console.log(json[1]);
        setSuggestion(json[1]);
    }

    const dispatch = useDispatch();
    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    }

    return (
        <div className="grid grid-flow-col shadow-lg items-center">
            <div className="flex col-span-1 p-1">

                <img
                    onClick={() => toggleMenuHandler()}
                    className="h-[60px] cursor-pointer mt-2.5"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8CAgIAAADb29vDw8OxsbHt7e3y8vK4uLiampo7OztmZmaAgIC8vLzT09NhYWEcHBxxcXHi4uITExOioqJXV1eHh4dMTEx7e3uQkJAnJyc1NTX5+fnW1tbJyclAQEBzZbpGAAABTUlEQVR4nO3cC1LCQAwG4LK8lYcioCLi/W9pGa9gkyH9vgt0/tmhGzbNdh0AAAAAAAAAAAAAAAAAAABEW0yHtkzNt9u/tKFdXg95AdeDx/uzygo4b20SobVdTsBlUMA+4ltOwmNUwH4RZykJT2EJJ+2ckvApMOFzSsL3wIQfKQk/AxPOUxJO496lLamw2YTth8ecgF23bwEZ+2dssgL2W+IloGb7Siva7q671XxY2+/MfAAAAAAPY3GbDeuW2wOe/QSctZ2Suod35xZzXpp2ILwOO/Pe5gQ8BPaArykJ14E94JxFjOwf5nQu9ID/M2HOGtb/HdZ/l9bfD0dQ04ygLu3q/7cAAAAAeBDlv9UvP29Rfmam/NxT/dm1+vOH9WdI6/eA689y15/Hr3+nQv17MUZwt8kI7qfp6t8xBAAAAAAAAAAAAAAAAAAAwDj9AgjsI6cJ8n2yAAAAAElFTkSuQmCC" />

                <a href="/">
                    <img className="h-[80px]  w-[140px] ml-3"
                        src="https://i.gadgets360cdn.com/large/youtube_logo_new_official_1504077880072.jpg" />
                </a>

            </div>

            <div className="col-span-10 " >
                <input
                    type="text" placeholder="Search" className="border border-black h-[40px] w-[500px] ml-[200px] bg-gray-100 rounded-l-full p-2 px-5"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setShowSuggestion(true)}
                    onBlur={() => setShowSuggestion(false)}
                />

                <button className="border border-black p-1 px-4  h-[40px]  bg-gray-100 rounded-r-full">Search</button>


                {/* for search suggestion  */}
                {showSuggestion && (<div className="absolute bg-white rounded-lg w-[30rem] mt-1 ml-[13rem] px-3 my-3 shadow-lg border border-gray-100">
                    <ul >
                        {suggestion.map((s) =>
                            <li key={s} className="pt-2 shadow-sm hover:bg-gray-100 cursor-default flex " >
                                <img className="h-4 w-4 mt-1 mr-2" src="https://cdn-icons-png.flaticon.com/512/54/54481.png" />
                                {s}</li>)}
                    </ul>
                </div>)}
            </div>


            <div className="col-span-1 flex gap-3 font-bold justify-center items-center">
                <h1>Vivek kumar Mishra </h1>
                <img className="h-[35px] cursor-pointer" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" />
            </div>

        </div>
    )
}
export default Head;