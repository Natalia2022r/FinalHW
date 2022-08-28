import React, { useState } from "react";
import {
  Wrapper,
  FormWrapper,
  Form,
  InputField,
  TextLabel,
  Input,
  TextArea,
  FormBtn,
} from "./stylePost";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { savePost } from "../../redux/action/postAction";

function AddPost() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  let navigate = useNavigate();

  const addPost = (e) => {
    e.preventDefault();
    const post = {
      title,
      text,
      imageUrl,
    };
    dispatch(savePost("http://localhost:5000/post", post));
    setTitle("");
    setText("");
    setImageUrl("");
    navigate("/post");
  };
  return (
    <Wrapper>
      <FormWrapper>
        <Form
          onSubmit={(e) => e.preventDefault()}
          style={{ marginTop: "20px" }}
        >
          <InputField>
            <TextLabel> Назва статті :</TextLabel>
            <Input onChange={(e) => setTitle(e.target.value)} />
          </InputField>

          <InputField>
            <TextLabel> Текст статті :</TextLabel>
            <TextArea
              onChange={(e) => setText(e.target.value)}
              alt="Информация"
            />
          </InputField>

          <InputField>
            <TextLabel> URL картинки :</TextLabel>

            <Input onChange={(e) => setImageUrl(e.target.value)} />
          </InputField>

          <FormBtn onClick={addPost}> Додати </FormBtn>
        </Form>
      </FormWrapper>
    </Wrapper>
  );
}

export default AddPost;
