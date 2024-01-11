import { IoIosSearch } from "react-icons/io"

const SearchBar = () => {
    const KeyHandler = (ev: any) => {
        console.log(ev)
    }


    return (
        <div className='bg-none border-[1px] border-black py-2 px-2 items-center rounded-sm flex text-stone-700'>
            <input type="text" className='bg-transparent text-sm focus:outline-none lg:w-[230px] w-full' placeholder="Search books.."/>
            <IoIosSearch className="text-lg" onClick={KeyHandler} />
        </div>
    )
}

export default SearchBar