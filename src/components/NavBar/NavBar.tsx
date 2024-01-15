"use client";
import Image from "next/image";
import NavLinks from "./NavLinks/NavLinks";
import SearchBar from "../SearchBar/SearchBar";
import { TbMenu } from "react-icons/tb";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function NavBar() {
    const [isMenu, setIsMenu] = useState(false)
    const [isNav, setIsNav] = useState(false)

    const scrollHandler = () => {
        if (window.scrollY >= 30) {
            setIsNav(() => true)
        } else {
            setIsNav(() => false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler)

        return () => window.removeEventListener('scroll', scrollHandler)
    }, [])

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
    

    return (
        <header className="sticky top-0 z-50">
            <div className={`w-full ${isNav ? 'bg-white' : 'bg-none text-stone-700'} px-4 sm:px-12 flex justify-between items-center py-2`}>
                <div>
                    <h1 className="text-2xl">BOOKSIFY</h1>
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
                            width={50} height={50} 
                            style={{objectFit: 'cover', width: '100%', height: '100%'}} 
                        />
                    </div>
                </nav>

                {isMenu &&
                    <nav className={`px-4 gap-12 lg:hidden ${isNav ? 'bg-white' : 'bg-stone-100'} flex absolute top-0 left-0 z-[-1] w-full flex-col py-24 transition-all text-stone-700`}>
                        <div className="">
                            <SearchBar />
                        </div>

                        {navOption.map(option => 
                            <NavLinks key={option.name} path={option.pathName}  linkName={option.name} isMenuHandler={isMenuHandler}/>
                        )}
                    </nav>
                }
                
                
            </div>
        </header>
    ) 
}