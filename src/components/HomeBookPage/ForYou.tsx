import Image from "next/image"
import Link from "next/link"
import { CiBookmarkPlus } from "react-icons/ci"
import type { Books } from "@/utils"
import { BsBookmarkPlus } from "react-icons/bs";

const ForYou = (props: {bookItem: Books}) => {
    const { bookItem } = props

    return (
        <div className='w-full bg-white p-4 rounded-md shadow-md flex gap-4 md:gap-8' key={bookItem.rank}>
            <div className='h-32 w-24 sm:h-44 sm:w-32 bg-black overflow-hidden'>
                <Image
                    src={bookItem.book_image} 
                    width={bookItem.book_image_width}
                    height={bookItem.book_image_height}
                    alt='...'
                    style={{width: '100%', height: '100%'}}
                />
            </div>

            <div>
                <div className='h-[70%]'>
                    <p className='text-[1rem] md:text-[1.6rem] line-clamp-2'>{bookItem.title}</p>
                    <p className='text-sm'>by {bookItem.author}</p>

                    <div className="flex items-center mt-1 md:mt-4 gap-2">
                        <button>
                            <BsBookmarkPlus />
                        </button>
                        <p className="text-[12px]">Add to wishlist</p>
                    </div>
                </div>
                
                <div className='flex items-center gap-2 h-[30%]'>
                    <Link href={`/${bookItem.rank}`}>
                        <button className='bg-stone-200 h-6 w-14 md:w-24 rounded-sm flex justify-center items-center'>View</button>
                    </Link>
                    <Link href={`/${bookItem.rank}`}>
                        <button className='bg-stone-200 h-6 w-14 md:w-24 rounded-sm flex justify-center items-center'>
                            Add
                        </button>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default ForYou