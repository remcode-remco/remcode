import { useEffect, useState } from "react"
import CardHeading from "./CardHeading"
import CardParagraph from "./CardParagraph"
import { IconContext } from "react-icons"
import { MdDeveloperMode, MdBusinessCenter } from "react-icons/md"
import { FaPeopleGroup } from "react-icons/fa6"

const CardSkills = () => {
  const [done,setDone]=useState(false)

  useEffect(()=>{
    setDone(true)
  },[])
  
  return (
    <div className="relative py-5 h-full overflow-auto w-screen">
      <IconContext.Provider value={{ className: 'text-white' }}>
        <div className={`mx-auto grid transition-all delay-300 duration-500 ease-in ${done ? "opacity-100" : "opacity-0"}`}>
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center">
              <MdDeveloperMode size={40} />
            </div>
            <CardHeading dark_text={false} text="" subtext="developing skills" />
            <CardParagraph dark_text={false} text="Received a bachelor-level degree from openclassrooms.com, focused on React and Ruby on Rails. Extended my skills after that, working on lots of personal projects and being involved in a few startups." />
            <div className="flex justify-center">
              <MdBusinessCenter size={40} />
            </div>
            <CardHeading dark_text={false} text="" subtext="business skills" />
            <CardParagraph dark_text={false} text="I have founded and managed a retail store in the Caribbean and in France and developed and managed a holiday rental complex in France. These experiences have given specific insights in different sectors, from dealing with customers and employees to dealing with business contacts and finances." />
            <div className="flex justify-center">
              <FaPeopleGroup size={40} />
            </div>
            <CardHeading dark_text={false} text="" subtext="interpersonal skills" />
            <CardParagraph dark_text={false} text="I have lived and worked in The Netherlands, Belgium, France and the Caribbean (including a US Territory). On top of that, I have travelled to every continent except for Antartica! I enjoy interacting with people from different backgrounds and generally develop good relationships while doing so." />
          </div>
        </div>
      </IconContext.Provider>
    </div>
  )
}
export default CardSkills