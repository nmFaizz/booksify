import OtherBooksItem from "./OtherBooksItem/OtherBooksItem"

const OtherBooks = (props: {booksItem: any}) => {

    return (
        <div className="mt-24">
            <div>
                <p className="text-3xl">Other books</p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 rounded-md py-4 mt-8 bg-white shadow-md">
                {props.booksItem.map((book: any) => 
                    <OtherBooksItem {...book} key={book.rank} />        
                )}
            </div>
        </div>
    )
}

export default OtherBooks