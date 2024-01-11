import BooksItem from "@/components/BooksItem/BooksItem"
import { api, getApi } from "@/utils"


const BooksPage = async () => {
    const res = await getApi(   api.url, api.key)  
    const books = res.results.books

    return (
        <div className="max-w-[1000px] m-auto">
            <div className="mt-12">
                <p className="text-[2rem]">Books Collection</p>
            </div>

            <div className="bg-white mt-12">

                <div className="grid grid-cols-4 gap-4">
                    {books.map((book: any) => 
                        <BooksItem {...book} key={book.rank} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default BooksPage