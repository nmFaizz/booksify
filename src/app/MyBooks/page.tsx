import { Metadata } from "next"
import { getApi, api } from "@/utils"
import BooksItem from "@/components/BooksItem/BooksItem";
import MyBooksCollection from "@/components/MyBooksCollection/MyBooksCollection";

export const metadata: Metadata = {
    title: 'Booksify - MyBooks'
};

const MyBooks = async () => {
    const res = await getApi(api.url, api.key)
    
    return (
        <main>
            <div className="max-w-[1000px] m-auto py-12 px-4">
                <div>
                    <p className="text-[1.5rem] md:text-[2rem]">My Collections</p>
                </div>

                <MyBooksCollection />
            </div>
        </main>
    )
}

export default MyBooks