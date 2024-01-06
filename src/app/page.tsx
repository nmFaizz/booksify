import Image from 'next/image'
import Link from 'next/link'
import { FaRegBookmark } from "react-icons/fa";
import { getApi, api } from '@/utils';
import { FaPlus } from "react-icons/fa6";

const Home = async () => {
  const response = await getApi(api.url, api.key)
  const booksLists = response.results.books

  return (
    <main className='bg-stone-100 pt-12'>
      <div className='max-w-[800px] flex-1 px-4 m-auto'>
        <div className='w-full bg-blue-300 h-[220px] rounded-md flex items-center justify-center font-bold'>
          <p className='text-[1.5rem] sm:text-[2rem] text-white'>Welcome To Booksify.</p>
        </div>

        <div className='text-black mt-10 flex flex-col gap-4'>
          <div>
            <p className='text-2xl'>For You</p>
          </div>
          {booksLists.map((bookItem: any) =>       
            <div className='w-full bg-white p-4 rounded-md shadow-md flex gap-8' key={bookItem.rank}>
                <div className='h-32 w-24 sm:h-44 sm:w-32 bg-black overflow-hidden'>
                  <Image
                    src={bookItem.book_image} 
                    width={bookItem.book_image_width}
                    height={bookItem.book_image_height}
                    alt='...'
                    style={{width: '100%', height: '100%'}}
                  />
                </div>
      
                <div>
                  <div className='h-[70%]'>
                    <p className='text-[1rem] md:text-[1.6rem] line-clamp-2'>{bookItem.title}</p>
                    <p className='text-sm'>by {bookItem.author}</p>
                  </div>
                  
                  <div className='flex items-center gap-2 h-[30%]'>
                    <Link href={`/${bookItem.rank}`} className='h-6 w-6 flex justify-center items-center'>
                      <button>
                        <FaRegBookmark className='text-xl' />
                      </button>
                    </Link>
                    <Link href={`/${bookItem.rank}`}>
                      <button className='bg-stone-200 h-6 w-14 md:w-24 rounded-sm flex justify-center items-center'>View</button>
                    </Link>
                    <Link href={`/${bookItem.rank}`}>
                      <button className='bg-stone-200 h-6 w-14 md:w-24 rounded-sm flex justify-center items-center'>
                        <FaPlus />
                      </button>
                    </Link>
                  </div>
                </div>

              </div>

          )}
        </div>
      </div>

    </main>
  )
}

export default Home
