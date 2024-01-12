import Image from "next/image"
import BookButtons from "../BookButtons/BookButtons"

const BookPreview = (props: {books: any}) => {
    const { books } = props

    return (
        <div className="rounded-md flex flex-col md:flex-row gap-12 md:px-0">
            <div className="flex justify-center overflow-hidden">
                <Image 
                    src={books.book_image} 
                    width={books.book_image_width}
                    height={books.book_image_height} 
                    alt={books.title} 
                />
            </div>

            <article className="">
                <div className="border-b-[0.4px] border-black mb-4 pb-4">
                    <p className="text-[2rem] md:text-[3rem]">{books.title}</p>
                    <p className="text-[1.2rem] md:text-[1.4rem]">by {books.author}</p>
                    <p className="w-[70%] mt-3">{books.description}</p>
                    <p className="text-[13px] mt-3">Published by {books.publisher}</p>
                </div>

                <BookButtons buyLinks={books.buy_links}/>
            </article>
        </div>
    )
}

export default BookPreview