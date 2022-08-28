import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Wrapper, Container } from "./stylePost";
import { getApiPost } from "../../redux/action/postAction";
import { postSelector } from "../../redux/reducer/postReducer";
import PostItem from "./PostItem";

import Grid from "@mui/material/Grid";

function Blog() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getApiPost("http://localhost:5000/post"));
  }, []);

  const post = useSelector(postSelector);

  return (
    <>
      <Wrapper>
        <Container>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {post.map((post) => (
              <PostItem data={post} key={post._id} />
            ))}
          </Grid>
        </Container>
      </Wrapper>
    </>
  );
}

export default Blog;
