import loader from '../assets/loaderx.gif'
const Loader = () => {
  return (
        <>
        <div className='w-full h-[35rem] container flex justify-center items-center'>

        <img className="w-[100px]  m-auto" src={loader} alt="Loading..." />
        </div>
        </>
  
  )
}

export default Loader