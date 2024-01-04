import Image from "next/image"
import BookButtons from "../BookButtons/BookButtons"

const BookPreview = (props: {singleBook: any}) => {
    const { singleBook } = props

    return (
        <div className="rounded-md flex gap-12">
            <div className="bg-black w-[280px] h-[340px] overflow-hidden">
                <Image 
                    src={singleBook.book_image} 
                    width={singleBook.book_image_width}
                    height={singleBook.book_image_height} 
                    alt={singleBook.title} 
                    style={{width: '100%', height: '100%'}}
                />
            </div>

            <article className="">
                <div className="border-b-[0.4px] border-black mb-4 pb-4">
                    <p className="text-[3rem]">{singleBook.title}</p>
                    <p className="text-[1.4rem]">by {singleBook.author}</p>
                    <p className="w-[70%] mt-3">{singleBook.description}</p>
                    <p className="text-[13px] mt-3">Published by {singleBook.publisher}</p>
                </div>

                <BookButtons buyLinks={singleBook.buy_links}/>
            </article>
        </div>
    )
}

export default BookPreview