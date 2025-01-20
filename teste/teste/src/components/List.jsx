import './list.css'

export default function List({ taskName, description }) {
    return (
        <>
        <div className='task-container'>
        <h1 className="task-name">{taskName}</h1>
        <p className="task-description">{description}</p>
        </div>
        </>
    )
}