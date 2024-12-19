

const PlayerIframe = (prop) => {

    const { data} = prop;

  return (
    <iframe src={data.vlink} className={`w-full h-[200px] `}  ></iframe>
  )
}

export default PlayerIframe