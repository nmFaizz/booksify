import Image from 'next/image'
import Link from 'next/link'
import { FaRegBookmark } from "react-icons/fa";
import { getApi, api } from '@/utils';

const Home = async () => {
  const response = await getApi(api.url, api.key)
  const booksLists = response.results.books

  return (
    <main className='bg-red-100 flex justify-center'>
      <div className='bg-white p-3 max-w-[800px] flex-1'>
        <div className='w-full bg-blue-300 h-[220px] rounded-md'>

        </div>

        <div className='text-black mt-10 flex flex-col gap-4'>
          <div>
            <p className='text-2xl'>For You</p>
          </div>
          {booksLists.map((bookItem: any) =>       
            <div className='w-full bg-red-300 p-4 rounded-md' key={bookItem.rank}>
              <div className='flex gap-4'>
                <div className='h-44 w-32 bg-black overflow-hidden'>
                  <Image
                    src={bookItem.book_image} 
                    width={bookItem.book_image_width}
                    height={bookItem.book_image_height}
                    alt='...'
                    style={{width: '100%', height: '100%'}}
                  />
                </div>
      
                <div>
                  <p className='text-xl'>{bookItem.title}</p>
                  <p className='text-sm'>{bookItem.author}</p>
                  <p>Rating</p>
                  <div className='flex gap-2 items-center'>
                    <button className='bg-red-400 w-12 h-5'><Link href={`/${bookItem.rank}`}>View</Link></button>
                    <button className='bg-red-400 w-12 h-5'></button>
                    <button className='bg-red-400 w-8 h-8 rounded-full flex items-center justify-center'>
                      <FaRegBookmark />
                    </button>
                  </div>
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
