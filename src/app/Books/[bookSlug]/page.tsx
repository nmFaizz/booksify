import { api,getApi } from "@/utils";
import BookPreview from "@/components/SingleBookPage/BookPreview/BookPreview"
import BooksItem from "@/components/BooksItem/BooksItem";

let res: any;

const findBookApi = async (slug: string) => {
    res = await getApi(api.url, api.key)

    const book = res.results.books.find((book: any) => 
        book.rank === parseInt(slug)
    )

    return book
}

const SingleBookPage = async (props: {params: any}) => {
    const { bookSlug } = props.params
    const book = await findBookApi(bookSlug)

    return (
        <main className="w-full py-24">
            <div className="max-w-[1000px] m-auto px-4">
                <BookPreview books={book} />
            
                <div className="mt-12">
                    <p className="text-[1.5rem] md:text-[2rem]">Other Books</p>
                </div>

                <div className="bg-white grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-sm">
                    {res.results.books.map((book :any) => 
                        <BooksItem {...book} key={book.rank}/> 
                    )}
                </div>
            </div>
        </main>
    )
}

export default SingleBookPage