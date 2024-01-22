
const CardTitle = ({section}) => (
  <h2 className={`text-2xl ${section === 1 || section === 3 ? "text-blue-200" : "text-gray-700"}`}>
    {
      section === 1 ? "About" :
      section === 2 ? "Projects" :
      section === 3 ? "Skills" :
      section === 4 ? "Contact" :
      null
    }
  </h2>
)

export default CardTitle