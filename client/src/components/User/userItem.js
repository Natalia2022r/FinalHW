import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Container, Box } from "@mui/material";
import Moment from "react-moment";
import Grid from "@mui/material/Unstable_Grid2";
import Avatar from "@mui/material/Avatar";

const UserItem = ({ data }) => {
  const { name, nickname, imageUrl, createdAt } = data;

  return (
    <Grid xs={6} sx={{ marginTop: 10, maxWidth: 250 }}>
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
            <Avatar
              alt="avatar"
              src={`${imageUrl}`}
              sx={{ width: 100, height: 100, margin: "0 auto", marginTop: 3 }}
            />

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {name}
              </Typography>

              <Typography variant="body2" color="text.secondary">
                @{nickname}
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
};

export default UserItem;
