import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Container, Box } from "@mui/material";
import Moment from "react-moment";
import Grid from "@mui/material/Unstable_Grid2";

function PostItem({ data }) {
  const { title, imageUrl, text, createdAt } = data;

  return (
    <Grid xs={6} sx={{ marginTop: 10, maxWidth: 400 }}>
      <Container>
        <Box
          sx={{
            py: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Card>
            <CardMedia component="img" image={`${imageUrl}`} alt="Content" />

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>

              <Typography variant="body2" color="text.secondary">
                {text}
              </Typography>
              <Typography>
                <Moment format="D MMM YYYY, h:mm" style={{ right: "-50px" }}>
                  {createdAt}
                </Moment>
              </Typography>
            </CardContent>
            <CardActions></CardActions>
          </Card>
        </Box>
      </Container>
    </Grid>
  );
}

export default PostItem;
