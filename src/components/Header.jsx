import './Header.css'
import { motion } from 'framer-motion'


export function Header() {
    return (
        <div className="header-container">
            <motion.ul
                className='header'
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.3,
                    scale: {
                        type: "spring",
                        damping: 5,
                        stiffness: 100,
                        restDelta: 0.001
                    }
                }}
            >
                <li><a href='#inicio'>Inicio</a></li>
                <li><a href='#sobremi'>Sobre mi</a></li>
                <li><a href='#proyectos'>Proyectos</a></li>
                <li><a href='#habilidades'>Habilidades</a></li>
                <li><a href='#contacto'>Contacto</a></li>
            </motion.ul>
        </div>
    )
}