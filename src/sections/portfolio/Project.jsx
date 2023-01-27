import Card from '../../components/Card'

const Project = ({project}) => {
  return (
    <Card className="portfolio__project">
      <div className="portfolio__project-image">
        <img src={project.image} alt="포트폴리오"/>
      </div>
      <h4>{project.title}</h4>
      <p>{project.info}</p>
      <div className="portfolio__project-cta">
        <a href={project.demo} className="btn sm" target="_blank" rel="noopener noreferrer">Deploys</a>
        <a href={project.github} className="btn sm primary" target="_blank" rel="noopener noreferrer">Github</a>
      </div>
    </Card>
  )
}

export default Project