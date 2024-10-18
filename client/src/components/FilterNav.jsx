

const FilterNav = (prop) => {

    const [nxtPage, setNxtPage] = prop.nxtobj
    const [type, setType] =prop.tyobj

    const handleChange=(e)=>(setNxtPage(e.target.value))
    
  return (
    <>
    <nav className="w-full h-10 px-3 py-1 my-3 flex justify-between items-center ">
        <div >
            <span>Page</span> <input onChange={handleChange} type="number" min="0" max="20000" value={nxtPage}  />
        </div>
        <div>
          <select onChange={(e)=>setType(e.target.value)} value={type}>
            <option value="" selected>All</option>
            <option value="airing">Top Airing</option>
            <option value="upcoming">Top Upcoming</option>
            <option value="tv">Top TV Serie</option>
            <option value="ova">Top OVA Series</option>
            <option value="ona">Top ONA Series</option>
            <option value="special">Top Special</option>
            <option value="bypopularity">Top Anime by Popularity</option>
            <option value="favorite">Most Favorite</option>
          </select>
        </div>
    </nav>
    </>
  )
}

export default FilterNav