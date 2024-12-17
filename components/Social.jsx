import Link from "next/link";
import { FaGithub, FaLinkedin as FaLinkedIn, FaYoutube, FaTwitter, FaInstagram, FaTelegram } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: ""},
  { icon: <FaLinkedIn />, path: ""},
  { icon: <FaTelegram />, path: ""},
  { icon: <FaYoutube />, path: ""},
  { icon: <FaTwitter />, path: ""},
  { icon: <FaInstagram />, path: ""}
]
const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
          {item.icon}</Link>
        )
      })}
    </div>
  )
}

export default Social
