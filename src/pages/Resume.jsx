import { Link } from 'react-router-dom'
import ResumeHeader from '../components/ResumeHeader/ResumeHeader'
import classes from './Resume.module.css'
import ResumeTitle from '../components/ResumeTitle/ResumeTitle'
import ResumeBody from '../components/ResumeBody/ResumeBody'

const Resume = () => {
    return (
        <main className={classes.header}>
            <section className={classes.wrapper}>
                <ResumeHeader />
                <ResumeTitle title="Summary">
                    <p>Versatile and efficient Fullstack developer, adept at tackling complex projects with ease. Proficient in MERN stack; crafting scalable, efficient, and secure applications with a proactive approach, paired with excellent problem-solving skills in tackling any development challenge.</p>
                </ResumeTitle>
                <ResumeTitle title="Projects">
                    <ResumeBody />
                </ResumeTitle>
                <ResumeTitle title="Skills">
                    <div className={classes.skills}>
                        <p><span>Programming Languages: </span>JavaScript, CSS, HTML</p>
                        <p><span>Frameworks: </span>React.js, Next.js, Tailwind CSS.</p>
                        <p><span>Database Technologies: </span>MongoDB, Firebase</p>
                        <p><span>Tools: </span>Figma, Photoshop</p>
                        <p><span>Version Control Systems: </span>Git, Github</p>
                        <p><span>Soft Skills: </span>Problem Solving, Time Management, Collaboration/Teamwork, Continuos Learning</p>
                    </div>
                </ResumeTitle>
                <ResumeTitle title={"Certificates"}>
                    <ul className={classes.list}>
                        <li>FreeCodeCamp Web Development Course on React.JS Framework</li>
                        <li>FreeCodeCamp Web Development Course on JavaScript Algorithms and Data Structures</li>
                        <li>FreeCodeCamp Web Development Course on HTML and CSS</li>
                    </ul>
                </ResumeTitle>
                <ResumeTitle title={'Experience'}>
                    <h2 className={classes.heading}>React Developer Intern</h2>
                    <div className={classes.details}>
                        <h3>Aptiw Limited</h3>
                        <p>November 2024 - Present</p>
                    </div>
                    <p>Building of more complex applications using React JS</p>
                </ResumeTitle>
                <ResumeTitle title={"Education"}>
                    <div className={classes.details}>
                        <h2 className={classes.heading}>Madonna University, Elele</h2>
                        <p>2011 - 2015</p>
                    </div>
                    <p>BSc in Human Physiology</p>
                </ResumeTitle>
                <div className={classes.btn}>
                    <Link to="/"><button className='button-text' onClick={() => scrollTo(0, 0)}>back to homepage</button></Link>
                    <button className='button' onClick={() => window.print()}>Print</button>
                </div>
            </section>
        </main>
    )
}

export default Resume