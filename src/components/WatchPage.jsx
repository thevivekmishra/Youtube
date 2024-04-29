import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "./utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";


const WatchPage = () => {

    const [searchParams] = useSearchParams();
    console.log(searchParams.get("v"));

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(closeMenu())
    }, []);

    return (
        <div className="px-3 mt-4">
            <div className="flex ">
                <div>
                    <iframe
                        className="rounded-xl"
                        width="900"
                        height="550"
                        src={"https://www.youtube.com/embed/" + searchParams.get(".v")}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen>

                    </iframe>
                    <div className="flex justify-between">
                        <div className="flex">
                            <img className="h-[34px] mt-5 " src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" />
                            <button className="mt-3 bg-gray-400 mx-10 rounded-full px-3 p-1  hover:bg-gray-500">Subscribe</button>
                        </div>
                        <div className="justify-end">
                            <button className="mt-3 bg-gray-400 mx-1 rounded-full hover:bg-gray-500 px-3 p-2">Share</button>
                            <button className="mt-3 bg-gray-400 mx-1 rounded-full hover:bg-gray-500 px-3 p-2">Download</button>
                            <button className="mt-3 bg-gray-400 mx-1 rounded-full hover:bg-gray-500 px-5 p-2 items-end font-bold">...</button>
                        </div>
                    </div>
                </div>

                <div className="mx-6">
                    <LiveChat />
                </div>
            </div>

            <CommentContainer />
        </div>
    );
};
export default WatchPage;