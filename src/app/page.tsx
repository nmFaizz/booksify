import { getApi, api } from '@/utils';
import ForYou from '@/components/HomeBookPage/ForYou';


const Home = async () => {
  const response = await getApi(api.url, api.key)
  const booksLists = response.results.books

  return (
    <main className='bg-stone-100 pt-12'>
      <div className='max-w-[800px] flex-1 px-4 m-auto'>
        <div className='w-full bg-stone-400 h-[220px] rounded-md flex items-center justify-center font-bold'>
          <p className='text-[1.5rem] sm:text-[2rem] text-white'>Welcome To Booksify.</p>
        </div>

        <div className='text-black mt-4 flex flex-col gap-4'>
          <div className='bg-stone-300 rounded-md'>
            <p className='text-[1.7rem] font-[500] w-auto px-4 text-stone-500'>For You</p>
          </div>
          {booksLists.map((book: any) =>       
            <ForYou bookItem={book} key={book.rank}/>
          )}
        </div>
      </div>

    </main>
  )
}

export default Home
