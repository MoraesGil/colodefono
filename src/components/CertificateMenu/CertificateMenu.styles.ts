import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  padding: 20px;
  background: #f0f0f0;
  border-right: 1px solid #ddd;

  h3 {
    color: black;
  }

  ul {
    flex: 1;
    list-style-type: none;
    padding: 10px;
    overflow: auto;
  }

  li {
    margin-bottom: 10px;
  }

  a {
    text-decoration: none;
    color: black;
    padding: 10px;
  }
`;

export const BackButton = styled.div`
  display: flex;
  justify-content: flex-end;

  a {
    text-decoration: none;
    color: black;
    font-weight: bold;
  }
`;
