import { useEffect, useState } from "react"
import CardHeading from "./CardHeading"
import CardParagraph from "./CardParagraph"

const CardAbout = () => {
  const [done,setDone]=useState(false)

  useEffect(()=>{
    setDone(true)
  },[])
  
  return (
    <div className={`grid lg:grid-cols-3 transition-all delay-300 duration-500 ease-in ${done ? "opacity-100" : "opacity-0"}`}>
      <div className="flex justify-center h-[30vh] mb-3">
        <img src="remco.jpg" alt="remco" className="shadow-lg shadow-gray-800 rounded" />
      </div>
      <div className="lg:col-span-2 lg:max-w-lg">
        <CardHeading dark_text={false} text="remco" subtext="full stack developer" />
        <CardParagraph dark_text={false} text="I'm a freelancer with several years of experience using React/NextJs and Ruby on Rails. I am easy-going, come with a positive attitude and love setting realistic goals and sticking to them!" />
      </div>
    </div>
  )
}

export default CardAbout