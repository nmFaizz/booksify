import BooksItem from "@/components/BooksItem/BooksItem"
import { api, getApi } from "@/utils"


const BooksPage = async () => {
    const res = await getApi(api.url, api.key)  
    const books = res.results.books

    return (
        <div className="max-w-[1000px] m-auto px-4">
            <div className="mt-12">
                <p className="text-[1.5rem] md:text-[2rem]">Books Collection</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-white mt-4 md:mt-12 p-4 rounded-sm">
                {books.map((book: any) => 
                    <BooksItem {...book} key={book.rank} />
                )}
            </div>
        </div>
    )
}

export default BooksPage