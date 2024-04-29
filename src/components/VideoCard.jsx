import React from "react";

const VideoCard = ({ info }) => {
    // console.log(info);
    const { snippet, statistics } = info;
    const { channelTitle, title, thumbnails } = snippet;
    return (

        <div className="w-[320px] h-[330px] p-2 m-2 cursor-pointer rounded-lg bg-gray-200 shadow-lg">
            <img alt="thumbnail" className="rounded-lg" src={thumbnails.medium.url} />
            <ul>
                <li className="font-bold mt-2">{title}</li>
                <li>{channelTitle}</li>
                <li>{statistics.viewCount} Views</li>
            </ul>

        </div>
    );
};
export default VideoCard;