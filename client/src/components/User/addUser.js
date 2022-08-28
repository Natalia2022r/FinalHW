import React, { useState } from "react";
import {
  Wrapper,
  FormWrapper,
  Form,
  InputField,
  TextLabel,
  Input,
  FormBtn,
} from "../Posts/stylePost";
import { saveUser } from "../../redux/action/userActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      name,
      nickname,
      imageUrl,
    };

    dispatch(saveUser("http://localhost:5000/users", user));
    setName("");
    setNickname("");
    setImageUrl("");
    navigate("/");
  };
  return (
    <Wrapper>
      <FormWrapper>
        <Form
          onSubmit={(e) => e.preventDefault()}
          style={{ marginTop: "20px" }}
        >
          <InputField>
            <TextLabel> Your name:</TextLabel>
            <Input onChange={(e) => setName(e.target.value)} />
          </InputField>

          <InputField>
            <TextLabel> Your nickname:</TextLabel>
            <Input onChange={(e) => setNickname(e.target.value)} />
          </InputField>

          <InputField>
            <TextLabel> Your image :</TextLabel>

            <Input onChange={(e) => setImageUrl(e.target.value)} />
          </InputField>

          <FormBtn onClick={handleSubmit}> Додати </FormBtn>
        </Form>
      </FormWrapper>
    </Wrapper>
  );
};

export default AddUser;
