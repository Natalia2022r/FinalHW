import styled from "styled-components";

export const Nav = styled.ul`
  padding: 20px;
  display: inline-block;
  list-style-type: none;
  display: flex;
  align-items: center;
  gap: 25px;
`;

export const AddPostBtn = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;

  color: #ffffff;
  background: #67bfff;
  box-shadow: 0px 10px 25px rgba(148, 174, 213, 0.15);
  border-radius: 10px;
  position: absolute;
  width: 140px;
  height: 25px;
  left: 50%;
  top: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(-50%);
  cursor: pointer;
`;
