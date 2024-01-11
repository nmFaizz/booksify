import Image from "next/image"
import Link from "next/link"
import type { Books } from "@/utils"


const BooksItem = ({ 
    title,
    author,
    rank,
    book_image,
    book_image_width,
    book_image_height,
}: Books) => {
    return (
        <Link href={`/Books/${rank.toString()}`}>
            <div className="bg-white">
                <div>
                    <Image src={book_image} width={book_image_width} height={book_image_height} alt={title} /> 
                </div>

                <div>
                    <p>{title}</p>
                    <p className="text-[12px]">{author}</p>
                </div>
            </div>
        
        </Link>
    )
}

export default BooksItem