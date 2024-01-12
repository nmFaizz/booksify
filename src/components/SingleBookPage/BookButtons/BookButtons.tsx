"use client";
import Link from "next/link"
import { RiArrowDropDownLine } from "react-icons/ri"
import { FaRegBookmark } from "react-icons/fa"
import { useState } from "react";

interface BuyLinks {
    name: string,
    url: string
}

const BookButtons = (props: {buyLinks: any}) => {
    const [isClicked, setIsClicked] = useState(false)
    const links = props.buyLinks

    const outsideEl = (ev: any) => {
        
    }

    return (
        <div className="flex gap-4 items-center">
            <div>
                <button 
                    className="bg-stone-200 hover:bg-stone-300 rounded-sm flex items-center h-8 relative" 
                    onClick={() => setIsClicked(prev => !prev)}
                >
                    <p className="px-4">Buy Links</p>
                    <RiArrowDropDownLine 
                        style={{display: 'inline', fontSize: '24px'}} 
                        className="bg-stone-300 h-full hover:bg-stone-400 rounded-e-sm" 
                    /> 

                </button>

                <div className={`absolute bg-stone-200 ${isClicked ? "block" : "hidden"} py-4 px-2 rounded-sm`} onClick={(e) => outsideEl(e)}>
                    {links.map((link: BuyLinks) => 
                        <div className="block py-1" key={link.url}>
                            <Link href={link.url} target="_blank">{link.name}</Link>
                        </div>
                    )}
                </div>   
            </div>
            <button className="bg-stone-200 hover:bg-stone-300 rounded-sm px-4 h-8">Add</button>
            <button className="w-[40px] h-[40px] rounded-full flex items-center justify-center bg-stone-200 hover:bg-stone-300">
                <FaRegBookmark className="text-xl" />
            </button>
        </div>
    )
}

export default BookButtons