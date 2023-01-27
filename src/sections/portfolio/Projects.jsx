import Project from './Project'

const Projects = ({projects}) => { // Portfolio.jsx에 있는 projects 프롭애 연결한다
  return (
    <div className='portfolio__projects'>
      {
        projects.map(project => (
          <Project key={project.id} project={project}/>
        ))
      }
    </div>
  )
}

export default Projects