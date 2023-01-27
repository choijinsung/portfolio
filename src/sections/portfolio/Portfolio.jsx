import './portfolio.css'
import Projects from './Projects'
import ProjectsCategories from './ProjectsCategories'
import data from './data'
import { useState } from 'react'

const Portfolio = () => {
  const [projects, setProjects] = useState(data);

  const categories = data.map(item => item.category);
  const eachCategories = ["all", ...new Set(categories)]; 

  const filterProjectsHandler = (category) => {
    if(category === "all"){
      setProjects(data);
      return;
    }
    const filterProjects = data.filter(project => project.category === category);
    setProjects(filterProjects);
  }

  return (
    <section id="portfolio">
      <h2>Project Updates</h2>
      <p>카테고리별로 프로젝트를 확인하실 수 있습니다</p>
      <div className='container portfolio__container'>
        <ProjectsCategories categories={eachCategories} onFilterProjects={filterProjectsHandler} />
        <Projects projects={projects}/>
      </div>
    </section>
  )
}

export default Portfolio