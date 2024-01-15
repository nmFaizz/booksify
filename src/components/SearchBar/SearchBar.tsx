import { IoIosSearch } from "react-icons/io"
import { useState } from "react"
import { useRouter } from "next/navigation"

const SearchBar = () => {
    const route = useRouter()

    const toSearchPage = () => {
        route.push('/Search')
    }

    const eventHandler = (ev: any) => {
        if (ev.key === 'Enter') {
            toSearchPage()
            return;
        }

        toSearchPage()
    }

    return (
        <div className='bg-none border-[1px] border-black py-2 px-2 items-center rounded-sm flex text-stone-700'>
            <input
                name="search-bar" 
                type="text" 
                className='bg-transparent text-sm focus:outline-none lg:w-[230px] w-full' 
                placeholder="Search books.."
                onKeyDown={eventHandler}
            />
            <div onClick={eventHandler}>
                <IoIosSearch className="text-lg" />

            </div>
        </div>
    )
}

export default SearchBar