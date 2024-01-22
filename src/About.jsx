import Card from "./Card"

const About = ({selected,setSelected,section}) => {
  return (
    <div className={`cursor-pointer bg-[#556c37] fixed top-0 left-0 transition-all duration-500 
                      ${selected === 1 ? "z-20 w-[100vw] h-[80vh] top-[10vh]" :
                      selected === 2 ? "z-10 w-[100vw] h-[10vh]" :
                      selected === 0 ? "z-10 w-[50vw] h-[70vh]" :
                      "z-10 w-[50vw] h-[10vh]"}
                    `}
          onClick={()=>{selected === 1 ? setSelected(0) : setSelected(1)}}
    >
      <Card section={section} selected={selected} />
    </div>
  )
}

export default About