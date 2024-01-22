

const CardParagraph = ({text,dark_text}) => (
  <p className={`mb-5 text-left px-3 py-2 ${dark_text ? "text-gray-800" : "text-yellow-50"} text-xl`}>
    {text}
  </p>
)

export default CardParagraph