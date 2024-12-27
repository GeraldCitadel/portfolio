import classes from './ResumeHeader.module.css'
import { MdMail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import { HiLink } from "react-icons/hi";


const ResumeHeader = () => {
    return (
        <div className={classes.header}>
            <h1>Uchenna Gerald Emere</h1>
            <h2>Fullstack Developer</h2>
            <ul className={classes.wrapper}>
                <li><IoLocation />Port Harcourt, Nigeria</li>
                <a href="mailto:geraldcitadel@gmail.com"><li><MdMail />Geraldcitadel@gmail.com</li></a>
                <a href="tel:+2347031009615"><li><FaPhoneAlt />+2347031009615</li></a>
                <a href="http:https://portfolio-theta-three-87.vercel.app/" target="_blank" rel="noopener noreferrer"><li><HiLink />https://portfolio-theta-three-87.vercel.app</li></a>
                <a href="https://www.linkedin.com/in/geraldcitadel" target="_blank" rel="noopener noreferrer"><li><FaLinkedin />Gerald Citadel</li></a>
                <a href="'https://www.github.com/geraldcitadel" target="_blank" rel="noopener noreferrer"><li><FaGithub />Gerald Citadel</li></a>
            </ul>
        </div>
    )
}

export default ResumeHeader