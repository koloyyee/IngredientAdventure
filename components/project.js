import {RichText} from 'prismic-reactjs'
import styled from 'styled-components'

const ProjectCard = styled.div `
    padding:3vw;
    left: 5vw;
    border-radius: 1vw; 
    background-color: white;

`

const Image = styled.img `
    max-width: 20vw;
`

const Project = ({title, image, description, demo, github}) => {

    return (
        <ProjectCard>
            <RichText render = {title} />
            <p>{description}</p>
            <a href={demo} target="_blank">Demo</a>
            <br/>
            <a href={github} target="_blank">Repo</a>
            <Image src = {image} />
        </ProjectCard>

    )
}

export default Project