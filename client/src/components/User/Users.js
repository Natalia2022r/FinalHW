import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getApiUsers } from "../../redux/action/userActions";
import { usersSelector } from "../../redux/reducer/usersReducer";
import UserItem from "./userItem";
import { Wrapper, Container } from "../Posts/stylePost";
import Grid from "@mui/material/Grid";

const Users = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getApiUsers("http://localhost:5000/users"));
  }, []);

  const users = useSelector(usersSelector);

  return (
    <>
      <Wrapper>
        <Container>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {users.map((user) => {
              return <UserItem data={user} key={user._id} />;
            })}
          </Grid>
        </Container>
      </Wrapper>
    </>
  );
};

export default Users;
