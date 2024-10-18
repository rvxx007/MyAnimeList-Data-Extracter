import loader from '../assets/loaderx.gif'
const Loader = () => {
  return (
        <>
        <div className='h-full container flex justify-center items-center'>

        <img className="w-[100px] " src={loader} alt="Loading..." />
        </div>
        </>
  
  )
}

export default Loader