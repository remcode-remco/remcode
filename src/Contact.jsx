import Card from "./Card"

const Contact = ({selected,setSelected,section}) => {

  return (
    <div className={`cursor-pointer bg-[#cc3] fixed bottom-0 right-0 transition-all duration-500 
                      ${selected === 4 ? "z-20 w-[100vw] h-[80%] bottom-[10vh]" : 
                      selected === 3 ? "z-10 w-[100vw] h-[10vh]" :
                      selected === 0 ? "z-10 w-[50vw] h-[30vh]" :
                      "z-10 w-[50vw] h-[10vh]"}
                    `}
          onClick={()=>{selected === 4 ? null : setSelected(4)}}
    >
      <Card section={section} selected={selected} />
    </div>
  )
}

export default Contact