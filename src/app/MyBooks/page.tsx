import { Metadata } from "next"
import { getApi, api } from "@/utils"
import Image from "next/image"
import BooksItem from "@/components/BooksItem/BooksItem";

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

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-white mt-12 p-4 rounded-sm">
                    <p>You have no collections.</p>

                </div>
            </div>
        </main>
    )
}

export default MyBooks