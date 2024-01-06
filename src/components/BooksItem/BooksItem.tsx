import Image from "next/image"

const BooksItem = ({ 
    title,
    author,
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
        <div className="bg-white">
            <div>
                <Image src={book_image} width={book_image_width} height={book_image_height} alt={title} /> 
            </div>

            <div>
                <p>{title}</p>
                <p>{author}</p>
            </div>
        </div>
    )
}

export default BooksItem