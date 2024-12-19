import NF from '../assets/notfound.svg'


const NotFound = () => {
  return (
    <main className=" w-screen h-screen select-none flex justify-center items-center flex-col">
        <div className='flex justify-center items-center flex-col'> 
          <img className='w-[200px] h-[200px]' src={NF} alt="Not Found" />
          <h1 className='font-bold text-4xl'>Page Not Found</h1>
        </div>

    </main>
    
  )
}

export default NotFound