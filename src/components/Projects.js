import React from 'react';
import { Container, Typography } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';

const projects = [
  { title: 'Project One', description: 'Description of project one.' },
  { title: 'Project Two', description: 'Description of project two.' },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <Container>
      <Typography variant="h4" component="h2">
        My Projects
      </Typography>
      <Carousel>
        {projects.map((project, index) => (
          <Paper key={index}>
            <Typography variant="h5" component="h3">
              {project.title}
            </Typography>
            <Typography>
              {project.description}
            </Typography>
            <Button variant="contained" color="primary">
              Learn More
            </Button>
          </Paper>
        ))}
      </Carousel>
    </Container>
  );
};

export default Projects;
