import Image from "next/image"
import Link from "next/link"

const OtherBooksItem = ({
    title,
    author,
    rank,
    book_image,
    book_image_width,
    book_image_height,
}: {
    title: string,
    author: string,
    rank: number
    book_image: string,
    book_image_width: number,
    book_image_height: number
}) => {

    return (
        <div className="flex flex-col items-center">
            <div className="w-[190px]">
                <div className="bg-black w-[190px] h-[270px] m-auto overflow-hidden">
                    <Image 
                        src={book_image}
                        width={book_image_width}
                        height={book_image_height}
                        alt={title}
                        className="w-full h-full"
                    />
                </div>      
                
                <div className="">
                    <Link href={`/${rank}`}>
                        <button className="bg-red-100 w-full mt-2 rounded-sm">
                            View
                        </button>
                    </Link>
                    <Link href="/">
                        <button className="bg-red-100 w-full mt-2 rounded-sm">
                            Add
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default OtherBooksItem