import { useEffect, useState } from "react"
import CardHeading from "./CardHeading"
import { CiLinkedin, CiMail } from "react-icons/ci"

const CardContact = () => {
  const [done,setDone]=useState(false)

  useEffect(()=>{
    setDone(true)
  },[])
  
  return (
    <div className={`grid lg:grid-cols-2 transition-all delay-300 duration-500 ease-in ${done ? "opacity-100" : "opacity-0"}`}>
      <div className="flex flex-col gap-5">
        <CardHeading dark_text={true} text="Contact me" subtext="" />
        <div className="flex gap-2">
          <CiMail size={40} />
          <a href="mailto:remco@remcode.net" className="underline text-2xl text-gray-800 hover:text-black">remco@remcode.net</a>
        </div>
        <div className="flex gap-2">
          <CiLinkedin size={40} />
          <a href="https://www.linkedin.com/in/remco-van-uitert-b3b08b1a1/" className="underline text-2xl text-gray-800 hover:text-black">LinkedIn</a>
        </div>
      </div>
    </div>
  )
}

export default CardContact