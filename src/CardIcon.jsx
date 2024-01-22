import { PiPersonSimpleRun } from "react-icons/pi"
import { IoIosConstruct } from "react-icons/io"
import { FaRegRectangleList } from "react-icons/fa6"
import { BiMessageSquareEdit } from "react-icons/bi"

const CardIcon = ({section}) => (
  section === 1 ? <PiPersonSimpleRun size={60} /> :
  section === 2 ? <IoIosConstruct size={60} /> :
  section === 3 ? <FaRegRectangleList size={60} /> :
  section === 4 ? <BiMessageSquareEdit size={60} /> :
  null
)

export default CardIcon