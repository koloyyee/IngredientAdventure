import { getAllProjects } from "../../lib/api";
import Project from "../../components/project";
import styled from "styled-components";
import SideNav from "../../components/navbar";

const ProjectWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1vw;
  margin-left: -3vw;
`;

const Projects = ({ projects }) => {
  return (
    <>
      <SideNav />
      <ProjectWrapper>
        {projects.map((project) => {
          return (
            <Project
              key={project.node.title}
              title={project.node.title}
              description={project.node.description}
              image={project.node.image.url}
              demo={project.node.demo[0].text}
              github={project.node.github[0].text}
            />
          );
        })}
      </ProjectWrapper>
    </>
  );
};

export const getStaticProps = async () => {
  const projects = await getAllProjects();
  return { props: { projects } };
};

export default Projects;
