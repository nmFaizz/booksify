import { api, getApi } from "@/utils"
import Image from "next/image"
import BookButtons from "@/components/SingleBookPage/BookButtons/BookButtons"
import OtherBooks from "@/components/OtherBooks/OtherBooks"
import BookPreview from "@/components/SingleBookPage/BookPreview/BookPreview"

let res: any;

const findBookApi = async (slug: string) => {
    res = await getApi(api.url, api.key)

    const book = res.results.books.find((book: any) => 
        book.rank === parseInt(slug)
    )

    return book
}

interface Slug {
    slug: string
}

const SingleBookPage = async (props: {params: Slug}) => {
    const { slug } = props.params
    const book = await findBookApi(slug)

    return (
        <main className="w-full bg-red-100 py-12">
            <div className="max-w-[1000px] m-auto">
                <BookPreview singleBook={book} />
                
                <OtherBooks booksItem={res.results.books}/>
            </div>
        </main>
    )
}

export default SingleBookPage