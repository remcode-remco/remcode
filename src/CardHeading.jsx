

const CardHeading = ({text,subtext,dark_text}) => (
  <>
    <h2 className={`px-3 pt-2 ${dark_text ? "text-gray-800" : "text-yellow-50"} text-4xl capitalize`}>{text}</h2>
    <h3 className={`px-3 pb-2 ${dark_text ? "text-gray-800" : "text-yellow-50"} text-2xl capitalize`}>{subtext}</h3>
  </>
)

export default CardHeading