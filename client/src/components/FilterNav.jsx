

const FilterNav = (prop) => {

    const [nxtPage, setNxtPage] = prop.nxobj
    const [type, setType] = prop.tyobj

    const handleChange=(e)=>(setNxtPage(e.target.value))
    
    const { tyArr } = prop;
  return (
    <>
    <nav className="w-full h-10 px-3 py-1 my-3 flex justify-between items-center ">
        
        <div>
          <select className="p-4 border-2 border-gray-150  bg-white " onChange={(e)=>setType(e.target.value)} value={type}>
            <option value="" defaultValue="">All</option>
            {!tyArr ? "":tyArr.map((item)=>(<option key={item.value} value={item.value}>{item.name}</option>))}
            
          </select>
        </div>
        <div className={type==="popular"?"hidden":"flex gap-3"} >
            <span>Starting From </span> <input disabled={type==="popular"?true:false} onChange={handleChange} type="number" min="0" max="20000" value={type==="popular"?setNxtPage(0):nxtPage}  />
        </div>
    </nav>
    </>
  )
}

export default FilterNav