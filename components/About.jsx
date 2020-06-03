import * as React from "react";


const tableData = (title, stack) => {
  return { title, stack };
};

const techStack = [
  tableData("Frontend", ["ReactJS", "Javascript", "Typescript", "GraphQL", "Material-UI", "Ant Design", "Bootstrap", "HTML5", "CSS3"]),
  tableData("Backend", ["Python", "NodeJs", "ExpressJs", "Django", "REST API", "Django Rest Framework"]),
  tableData("DevOp, Version Control", ["Git", "CI/CD", "AWS", "Jest"])
];

const useStyles = makeStyles({
  row: {
    backgroundColor: "grey",
    color: "white",
    textAlign: "center",
  },
  table: {
    width: 500,
    margin: "0 auto",
    textAlign: "center",
    fontSize: '1em',
  },
  font: {
    textAlign: "right"
  },
});

const About = () => {
  const styles = useStyles();

  return (
    <Container xs={3} md={6} lg={3}>
      <Grid className={styles.table} xs={12} sm={6} >
        <h2>About</h2>

        <p>
          Software and Programming are like food and cooking,
          <br />
          they are here to <u>enrich</u> people.
          <br />
        </p>
        <h5>Discovering, Creating & Improving</h5>
        <p> These are what gives me joy.</p>
      </Grid>
      <TableContainer component={Paper}>
        <Table className={styles.table} size="small" aria-label="a dense table">
          <TableHead className={styles.row}>
            <TableRow>
              <TableCell align="left" colSpan={3}>Technology</TableCell>

              <TableCell align="center" colSpan={9}></TableCell>
              </TableRow>
          </TableHead>
          <TableBody>
            {techStack.map(tech => {
              return (
                <TableRow key={tech.name} className={styles.font}>
                  <TableCell component="th" scope="tech">
                    {tech.title}
                  </TableCell>
                  {tech.stack.map(item => {
                    return <TableCell align="right">{item}</TableCell>;
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default About;
