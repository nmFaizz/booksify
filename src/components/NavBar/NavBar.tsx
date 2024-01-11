"use client";
import Image from "next/image";
import NavLinks from "./NavLinks/NavLinks";
import SearchBar from "../SearchBar/SearchBar";
import { TbMenu } from "react-icons/tb";
import React, { useState } from "react";

export default function NavBar() {
    const [isMenu, setIsMenu] = useState(false)

    const navOption = [
        {
            pathName: '/',
            name: 'Home'
        },
        {
            pathName: '/MyBooks',
            name: 'My Books'
        },
        {
            pathName: '/Books',
            name: 'Books'
        },
        {
            pathName: '/Wishlist',
            name: 'Wishlist'
        },
    ]

    const isMenuHandler = (): void => {
        setIsMenu(() => false)
    }

    const navScrollHandler = (e: any) => {
        console.log(e)
    }

    return (
        <React.StrictMode>
            <header className="w-full  px-4 sm:px-12 flex justify-between items-center py-2 sticky top-0 z-50 text-stone-700" onClick={navScrollHandler}>
                <div>
                    <p className="text-2xl">BOOKSIFY</p>
                </div>
                
                <nav className="flex gap-4 sm:gap-12 items-center">
                    <div className="gap-12 lg:flex hidden">
                        {navOption.map(option => 
                            <NavLinks key={option.name} path={option.pathName}  linkName={option.name} isMenuHandler={isMenuHandler}/>
                        )}
                    </div>

                    <div className="hidden lg:block">
                        <SearchBar />

                    </div>


                    <div className="flex lg:hidden items-center" onClick={() => setIsMenu((prev: boolean) => !prev)}>
                        <TbMenu className="text-2xl" />
                    </div>

                    <div className="w-[40px] h-[40px] rounded-full bg-stone-700 overflow-hidden">
                        <Image 
                            src='/guest-pfp.jpg' 
                            alt="guest-pfp" 
                            width={0} height={0} 
                            style={{objectFit: 'cover', width: '100%', height: '100%'}} 
                        />
                    </div>
                </nav>
            </header>

            <nav className={`px-4 gap-12 lg:hidden flex fixed w-full flex-col py-12 text-white ${isMenu ? 'translate-y-[0%]' : 'translate-y-[-150%]'} transition-all text-stone-700`}>
                <div className="">
                    <SearchBar />
                </div>

                {navOption.map(option => 
                    <NavLinks key={option.name} path={option.pathName}  linkName={option.name} isMenuHandler={isMenuHandler}/>
                )}

            </nav>
        </React.StrictMode>
    ) 
}