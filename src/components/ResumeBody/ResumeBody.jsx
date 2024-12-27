import classes from './ResumeBody.module.css'
import { HiExternalLink } from "react-icons/hi";


const portfolioData = [
    {
        title: "My Portfolio",
        description: 'Successfully launched my fully responsive portfolio website showcasing my resume, projects, and a contact form.',
        url: 'https://github.com/GeraldCitadel/portfolio',
        tools: 'Tools Used: React.js, React-router, CSS module',
    },
    {
        title: "Physionet Africa App",
        description: 'Developed a health website where users can book appointments with doctors and caregivers, buy drugs from pharmacy, purchase varieties of medical equipment as well as visit the library section to sort for medical books. Built with React.js, mongoDB for database and cloudinary for image upload.',
        url: 'https://www.github.com/geraldcitadel',
        tools: 'Tools Used: React.js, React-router, Node.js, Express, MongoDB, Cloudinary, Tailwind CSS',
    },
    {
        title: "An E-Commerce App",
        description: 'An E-Commerce app where users are able to purchase the latest shoes in town from the comfort of their homes and have them delivered to their address.',
        url: 'https://github.com/GeraldCitadel/ecommerce-shoe',
        tools: 'Tools Used: React.js, React-router, CSS',
    },
    {
        title: "A Weather App",
        description: 'A simple weather app capable of generating weather information of a specific loaction.',
        url: 'https://github.com/GeraldCitadel/Weather-App-with-React',
        tools: 'Tools Used: React.js, React-router, CSS',
    },
    {
        title: "Tracking Website",
        description: 'A tracking website where users can track their parcels using a tracking number, with easy content management through an admin dashboard. Built with Firebase Realtime database for data management and storage, React.js for the frontend.',
        url: 'https://github.com/GeraldCitadel/Tracking-frontend',
        tools: 'Tools Used: React.js, React-router, Firebase, Node.js, Express, CSS module',
    },
]



const ResumeBody = () => {
    return (
        <div>
            {portfolioData.map((item, index) => (
                <div key={index}>
                    <div className={classes.title}>
                        <h2>{item.title}</h2>
                        <a href={ item.url} target='_blank' className='button-text '>Github <HiExternalLink /></a>
                    </div>
                    <ul className={classes.details}>
                        <li> {item.description}</li>
                        <li>{item.tools}</li>
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default ResumeBody