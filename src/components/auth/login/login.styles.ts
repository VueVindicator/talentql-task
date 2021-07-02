import styled from "styled-components";

export const LoginContainer = styled.div`
  max-width: 40rem;
  margin: 0 auto;
`;

export const FormControl = styled.div`
  margin-bottom: 2rem;
  label,
  input {
    display: block;
  }
  label {
    margin-bottom: 1rem;
  }
  input {
    outline: none;
    width: 100%;
    padding: 1rem;
    border-radius: 0.5rem;
    border: 0.2rem solid #ddd;
  }
`;

export const ButtonControl = styled.div`
  text-align: center;
  margin: 4rem 0rem;
  button {
    color: #fff;
    background: blue;
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    outline: none;
    border: 0rem;
    cursor: pointer;
  }
`;
