import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

export default function ComplexGrid() {
  return (
    <Paper
      sx={{
        p: 2,
        margin: "auto",
        maxWidth: 400,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#1A2027" : "#fff"
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                ULTIMATE DESIGN
              </Typography>
              <Typography variant="body2" gutterBottom>
                Ultimate Drafting Services firmly believes in creating designs
                that surpass expectations while maintaining a solid value of
                integrity behind every project.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
    
  );
}
