import styled from "styled-components";

export const Nav = styled.nav`
  background-color: #fefefe;
  padding: 17px 0;
`;

export const Wrapper = styled.div`
  background: #eef5ff;
  min-height: 100vh;
  width: 100%;
`;

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
`;

export const BackBtn = styled.div`
  background: #ffffff;
  box-shadow: 0px 10px 25px rgba(148, 174, 213, 0.15);
  border-radius: 10px;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #3260a1;
  padding: 15px;
  width: 100px;
  display: flex;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  margin-top: 30px;
  margin-left: 20px;
  outline: none;
  :hover {
    box-shadow: 0px 0px 35px rgba(148, 174, 213, 1);
    transition: 0.3s all ease;
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  background: #ffffff;
  border-radius: 15px;
  padding: 30px;
  max-width: 500px;
  width: 100%;
`;

export const InputField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

export const Input = styled.input`
  width: 100%;
  display: flex;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 5px;
  outline: none;
  padding: 5px 10px;
`;

export const TextLabel = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  margin-bottom: 5px;
  color: #222222;
`;

export const TextArea = styled.textarea`
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 5px;
  min-height: 150px;
  resize: none;
  outline: none;
  padding: 5px 10px;
  margin-bottom: 5px;
`;

export const FormBtn = styled.div`
  width: 140px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #ffffff;
  background: #67bfff;
  box-shadow: 0px 10px 25px rgba(148, 174, 213, 0.15);
  border-radius: 10px;
  border: none;
  margin: 0 auto;
  margin-top: 15px;
  cursor: pointer;
`;
