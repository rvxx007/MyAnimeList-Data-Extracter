import star from '../assets/star.png'

const ItemsCard = (prop) => {

    const {items}= prop;
  return (
    <>
          <div
          className=" md:w-[490px] w-full h-full md:h-[8rem] group hover:text-white hover:bg-black hover: border-2 border-gray-200 my-2 flex flex-row items-center p-5 gap-4 rounded-xl shadow-md ">
            <div>
              <h1 className="w-[3rem] text-xl font-sans font-bold"># {items.srNo}</h1>
            </div>
            <img className="group-hover:w-[4rem] group-hover:shadow-2xl rounded-md shadow-lg" src={items.img} alt={items.name} />
            <div className="flex flex-col justify-between items-start ">
            <h1 className="font-bold">{items.name}</h1>
            <hr />
            <div className="text-sm flex flex-row justify-start items-center gap-5">
              <span>{items.info[0]}</span>
              <span>{items.info[1]}</span>
            </div>
            <div className="text-sm flex flex-row justify-start items-center gap-3">Rating: <img className=' group-hover:animate-bounce ' src={star} alt="Rating" /> {items.score}</div>
            </div>
          </div>
          </>
  )
}

export default ItemsCard