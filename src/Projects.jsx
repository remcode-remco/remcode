import Card from "./Card"

const Projects = ({selected,setSelected,section}) => {

  return (
    <div className={`cursor-pointer bg-[#ddc772] fixed top-0 right-0 transition-all duration-500 
                      ${selected === 2 ? "z-20 w-[100vw] h-[80%] top-[10vh]" : 
                      selected === 1 ? "z-10 w-[100vw] h-[10vh]" :
                      selected === 0 ? "z-10 w-[50vw] h-[70vh]" :
                      "z-10 w-[50vw] h-[10vh]"}
                    `}
          onClick={()=>{selected === 2 ? null : setSelected(2)}}
    >
      <Card section={section} selected={selected} setSelected={setSelected} />
    </div>
  )
}

export default Projects