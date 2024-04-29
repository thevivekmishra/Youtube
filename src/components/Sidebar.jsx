import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
    
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
    if(!isMenuOpen)return null;

    return(
        <div className="w-[150px] mt-2 p-2 shadow-lg ">
        <Link to = "/"><h2 className="font-bold p-1">Home</h2></Link>
        <h2 className="font-bold p-1 cursor-pointer">Shorts</h2>
        <h2 className="font-bold p-1 cursor-pointer">Subscription</h2>

        <div className="h-[2px] w-[140px] border bg-gray-100 mt-3 cursor-pointer"></div>

        <h2 className="font-bold p-1 cursor-pointer">You -</h2>

        <ul className="p-1 cursor-pointer">History</ul>
        <ul className="p-1 cursor-pointer">Watch Later</ul>
        <ul className="p-1 cursor-pointer">Liked Videos</ul>

        <div className="h-[2px] w-[140px] border bg-gray-700 mt-3 cursor-pointer"></div>

        <h2 className="font-bold p-1 cursor-pointer ">Subscriptions</h2>

        <ul className="p-1 cursor-pointer">Love Babbar</ul>
        <ul className="p-1 cursor-pointer">5 MInute Eng...</ul>
        <ul className="p-1 cursor-pointer">The Gaatehub</ul>
        <ul className="p-1 cursor-pointer">Akshay Saini</ul>
        <ul className="p-1 cursor-pointer">NARCI</ul>
        <ul className="p-1 cursor-pointer">Codehelp-by...</ul>
        <ul className="p-1 cursor-pointer">vipul pant</ul>
        <ul className="p-1 cursor-pointer">Honey singh</ul>
        <ul className="p-1 cursor-pointer">Sony music</ul>
        <ul className="p-1 cursor-pointer">T-series</ul>
        <ul className="p-1 cursor-pointer"> Show more</ul>
        
        </div>
    )
}
export default Sidebar;