import './Home.css'
import { motion } from 'framer-motion'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export function Home() {
    return (
        <div className='home-container' id='inicio'>
            <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 0 }} // Agregar x: -10 en la configuración inicial
                animate={{ opacity: 1, scale: 1, y: -40 }} // x: 0 para volver a la posición original
                transition={{
                    duration: 0.5,
                    scale: {
                        type: "spring",
                        damping: 5,
                        stiffness: 100,
                        restDelta: 0.001
                    },
                    y: { // Agregar transición para el eje x
                        type: "spring",
                        stiffness: 100,
                        restDelta: 0.001,
                        delay: 1 // Agregar un retraso de 0.5 segundos
                    }
                }}
                className="home-image"
            >
                <img alt='avatar' src={`https://avatars.githubusercontent.com/u/128731027?v=4`} className='home-avatar'/>
            </motion.div>
            <motion.h1
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 10}}
                transition={{
                    duration: 0.5,
                    delay: 1.13,
                    y: {
                        type: "spring",
                        stiffness: 100,
                        restDelta: 0.001,
                        delay: 1.13,
                    }
                }}
             className='home-title'>Franco Armanasco <div><a style={{textDecoration:'none', color: 'black'}} href='https://www.linkedin.com/in/francoarmanasco/'><FaLinkedin /></a>
            <a style={{textDecoration:'none', color: 'black'}} href='https://github.com/FrancoArmanasco2000'><FaGithub /></a> </div></motion.h1>
        </div>
    )
}