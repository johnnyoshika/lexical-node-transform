import { ThemeProvider } from '@emotion/react';
import { CssBaseline, Grid, Typography } from '@mui/material';
import Editor from './Editor';
import { muiTheme } from './theme';

const App = () => {
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Grid
        container
        sx={{ minHeight: '100vh' }}
        flexDirection="column"
        alignItems="center" // Center content horizontally
      >
        <Grid item sx={{ my: 4 }}>
          <Typography variant="h4">Essay Editor</Typography>
        </Grid>
        <Grid item sx={{ width: '80%' }}>
          <Editor />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default App;
