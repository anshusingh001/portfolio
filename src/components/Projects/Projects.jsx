import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectStyledcomponent'
import ProjectCards from './ProjectCards'
import { projects } from '../../data/constants'


const Projects = () => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From Frontend projects to Full-stack projects . Here are some of my projects.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active="true" value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'full-stack' ?
            <ToggleButton active="true"  value="full-stack" onClick={() => setToggle('full-stack')}>Full-stack</ToggleButton>
            :
            <ToggleButton value="full-stack" onClick={() => setToggle('full-stack')}>Full-stack</ToggleButton>
          }
          <Divider />
          {toggle === 'frontend' ?
            <ToggleButton active="true" value="frontend" onClick={() => setToggle('frontend')}>frontend</ToggleButton>
            :
            <ToggleButton  onClick={() => setToggle('frontend')}>Frontend</ToggleButton>
          }
          <Divider />
          {toggle === 'machine learning' ?
            <ToggleButton active="true" value="machine learning" onClick={() => setToggle('machine learning')}>MACHINE LEARNING</ToggleButton>
            :
            <ToggleButton value="machine learning" onClick={() => setToggle('machine learning')}>MACHINE LEARNING</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project,index) => (
              <ProjectCards key={index} project={project} />
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project,index) => (
              <ProjectCards key={index} project={project}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects