import { FaHtml5, FaCss3, FaReact, FaNodeJs, FaJava, FaGit } from "react-icons/fa";
import { SiSpringboot, SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { DiMongodb, DiPostgresql } from "react-icons/di";
import { Skill } from './Skill'
import './Skills.css'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect} from 'react'

export function Skills () {

    const controls = useAnimation();
    const [ref, inView] = useInView();

    const skills = [
        {
            name: 'HTML',
            icon: <FaHtml5 />,
        },
        {
            name: 'CSS',
            icon: <FaCss3 />,
        },
        {
            name: 'JavaScript',
            icon: <IoLogoJavascript />,
        },
        {
            name: 'React',
            icon: <FaReact/>,
        },
        {
            name: 'Node.js',
            icon: <FaNodeJs />,
        },
        {
            name: 'MongoDB',
            icon: <DiMongodb />,
        },
        {
            name: 'PostgreSQL',
            icon: <DiPostgresql />,
        },
        {
            name: 'Java',
            icon: <FaJava />,
        },
        {
            name: 'Git',
            icon: <FaGit />,
        },
        {
            name: 'Spring boot',
            icon: <SiSpringboot />
        },
        {
            name: 'Typescript',
            icon: <SiTypescript />
        }
    ]

    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, y: 0 });
        }
    }, [controls, inView]);

    return (
        <div className="skills-container" id="habilidades">
            <h1>Habilidades</h1>
            <div ref={ref} className="skills-habilidades">
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={controls}
                        transition={{
                            duration: 0.5,
                            delay: index * 0.2
                        }}
                    >
                        <Skill name={skill.name} icon={skill.icon} />
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
