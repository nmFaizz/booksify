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
            <div className="max-w-[1000px] m-auto">
                <BookPreview books={book} />
                

                <div className="mt-12">
                    <p className="text-[2rem]">Other Books</p>
                </div>
                <div className="bg-white grid grid-cols-2 sm:grid-cols-4 gap-4 px-4 py-8 rounded-sm">
                    {res.results.books.map((book :any) => 
                        <BooksItem {...book} key={book.rank}/> 
                    )}
                </div>
            </div>
        </main>
    )
}

export default SingleBookPage