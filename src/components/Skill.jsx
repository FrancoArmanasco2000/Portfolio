import './Skill.css'

export function Skill ({ colorIcon, name, icon }) {
    return (
        <div className="skill-container">
            <p>{name}</p>
            <p>{icon}</p>
        </div>
    )
}