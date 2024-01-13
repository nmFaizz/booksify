"use client"
import { useState } from "react"


const MyBooksCollection = () => {
    const [isEmpty, setIsEmpty] = useState(true)

    return (
        <div className={`grid ${isEmpty ? 'grid-cols-none' : 'grid-cols-2 sm:grid-cols-4 gap-4'}  bg-white mt-4 md:mt-12 p-4 rounded-sm`}>
            {
                isEmpty ? 
                    <p className="w-full">You have no collections.</p>
                    :
                    <p>is not empty.</p>
            }
        
        </div>
    )
}

export default MyBooksCollection