import React from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';

const Contact = () => {
  return (
    <Container>
      <Typography variant="h4" component="h2">
        Contact Me
      </Typography>
      <form noValidate autoComplete="off">
        <TextField label="Name" fullWidth margin="normal" />
        <TextField label="Email" fullWidth margin="normal" />
        <TextField label="Message" fullWidth margin="normal" multiline rows={4} />
        <Button variant="contained" color="primary" type="submit">
          Send
        </Button>
      </form>
    </Container>
  );
};

export default Contact;
