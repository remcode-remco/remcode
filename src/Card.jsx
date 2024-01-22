import CardAbout from "./CardAbout"
import CardProjects from "./CardProjects"
import CardIcon from "./CardIcon"
import CardTitle from "./CardTitle"
import CardContact from "./CardContact"
import CardSkills from "./CardSkills"

const Card = ({section,selected,setSelected}) => {
  return (
    <div className="h-full grid items-center justify-center">
      {section === selected ?
        section === 1 ? <CardAbout />
        :
        section === 2 ? <CardProjects />
        :
        section === 3 ? <CardSkills />
        :
        section === 4 ? <CardContact />
        : null
      :
        <div className={`flex ${selected > 0 ? "gap-2" : "flex-col gap-4"} items-center justify-center`}>
          <div>
            <CardIcon section={section}/>
          </div>
          <CardTitle section={section} />
        </div>
      }
    </div>
  )
}

export default Card