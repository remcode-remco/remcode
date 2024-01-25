import React, { useEffect, useState } from "react"
import CardHeading from "./CardHeading"
import CardParagraph from "./CardParagraph"

const projects = [
  {
    image: "cinema.png",
    link: "https://www.cinemawebhost.com",
    heading_text: "CinemaWebhost",
    heading_subtext: "platform for cinema websites",
    paragraphs: [
      "Platform to host multiple cinema websites. Cinema can import their showtimes (date, time and movie title), the application looks up movie information (actors, director, trailers, etc), it takes minutes to update the cinema's website for an entire month!",
      "Export functionality to print schedules. Employee/volunteer scheduling option. Full CMS for other website sections for general cinema information, events, etc.",
      "It is running on a dedicated VPS: Ubuntu, Nginx, Passenger, Postgres, SSL. Made with NextJS and TailwindCSS front-end and Ruby on Rails back-end.",
    ]
  },
  {
    image: "gite.png",
    link: "https://rental.remcode.net",
    heading_text: "Rental Template",
    heading_subtext: "template for vacation rental website",
    paragraphs: [
      "React website template with minimal CMS. 90% done as of writing.",
      "Extremely simplified CMS to showcase vacation rentals. Clients can change images and content, but nothing else. This is by design, lots of people struggle with classic CMS because of the extensive possibilities.",
      "Made from scratch using React (Typescript) and TailwindCSS. PHP scripts to handle changes made. Information is stored in json files so the entire project is portable, there is no backend!",
    ]
  },
  {
    image: "nearly.png",
    link: "",
    heading_text: "Nearly",
    heading_subtext: "social network idea",
    paragraphs: [
      "Early stage/will never finish project idea.",
      "Social network aimed at people who live in areas with low population density. Shows posts from people around you (or at a set distance, for example 5/10/20/50kms).",
      "Instead of people creating groups around a certain hobby or interest and (in the worst case) creating echo chambers, this would allow people to communicate with those who live close to them. The idea is that this will get people more interested and involved with things happening around them.",
    ]
  },
  {
    image: "bibzoo.png",
    link: "",
    heading_text: "BibZoo",
    heading_subtext: "platform to exchange race registrations",
    paragraphs: [
      "Platform where users can exchange race registrations (running, cycling, etc).",
      "Taken offline because I couldn't find enough users. It was running on a dedicated VPS: Ubuntu, Nginx, Passenger, Postgres, SSL. Made with NextJS and custom SCSS front-end and Ruby on Rails back-end.",
      "Users could register with only their e-mail (no password), they received a link that logged them in a saved a cookie for future sessions. When a user was interested in a race registration, they could show this by requesting the e-mail address of the person offering it. Any communication after that would take place between the two parties via e-mail.",
    ]
  },
  {
    image: "github.png",
    link: "https://github.com/remcode-remco",
    heading_text: "GitHub",
    heading_subtext: "my public repositories",
  },
]

const CardProjectDetail = ({project}) => {
  const [expand,setExpand]=useState(false)
  
  return (
    <div 
        onClick={()=>setExpand(!expand)} 
        className={`relative ${expand ? "h-auto": "h-[40vh] lg:h-[50vh]"} 
                    transition-all duration-1000 overflow-y-hidden pb-10
                    lg:grid lg:grid-cols-2 border-b-2 border-gray-800
                  `}
    >
      <div className="flex justify-center mb-3">
        <a href={project.link ? project.link : null} target="_window">
          <img  src={project.image} alt="bibzoo" className="w-[90vw] shadow-lg shadow-gray-800 rounded"/>
        </a>
      </div>
      <div>
        <CardHeading dark_text={true} text={project.heading_text} subtext={project.heading_subtext}  />
      </div>
      <div className="lg:col-span-2">
        {project.paragraphs && project.paragraphs.map((paragraph,index)=>(
            <React.Fragment key={index}>
              <CardParagraph dark_text={true} text={paragraph} />
            </React.Fragment>
          ))
        }
        <div className={`absolute bottom-0 left-0 right-0 ${expand ? "h-10" : "h-24"}`}>
          <div className="h-full bg-gradient-to-t from-[#ddc772] via-[#ddc772] to-transparent flex justify-center items-end pb-2">
            {expand ? 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="cursor-pointer w-10 h-10 p-1 bg-yellow-300 rounded-xl shadow-lg">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
              </svg>
            :
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="cursor-pointer w-10 h-10 p-1 bg-yellow-300 rounded-xl shadow-lg">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

const CardProjects = () => {
  const [done,setDone]=useState(false)

  useEffect(()=>{
    setDone(true)
  },[])
  
  return (
    <div className="relative py-5 h-full overflow-auto w-screen">
      <div className={`mx-auto grid max-w-3xl gap-4 p-2 transition-all delay-300 duration-500 ease-in ${done ? "opacity-100" : "opacity-0"}`}>
        {projects.map((project,index)=>
          <React.Fragment key={index}>
            <CardProjectDetail project={project} />
          </React.Fragment>
        )}
      </div>
    </div>
  )
}

export default CardProjects
