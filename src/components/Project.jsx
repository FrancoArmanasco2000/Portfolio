import './Project.css'
import { TbWorldWww } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";


export function Project ({linkGithub, linkPage, image}) {
    return (

        <div className="container-project">
            <img src={image} className='imagen-project'></img>
            <div className='mascara-project'>
                <a href={linkPage}><TbWorldWww/></a>
                <a href={linkGithub}><FaGithub /></a>
            </div>
        </div>
    )
}