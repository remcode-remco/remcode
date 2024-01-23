import Card from "./Card"

const Skills = ({selected,setSelected,section}) => {

  return (
    <div className={`cursor-pointer bg-[#963a2f] fixed bottom-0 left-0 transition-all duration-500 
                      ${selected === 3 ? "z-20 w-[100vw] h-[80%] bottom-[10vh]" : 
                      selected === 4 ? "z-10 w-[100vw] h-[10vh]" :
                      selected === 0 ? "z-10 w-[50vw] h-[30vh]" :
                      "z-10 w-[50vw] h-[10vh]"}
                    `}
          onClick={()=>{selected === 3 ? setSelected(0) : setSelected(3)}}
    >
      <Card section={section} selected={selected} />
    </div>
  )
}

export default Skills