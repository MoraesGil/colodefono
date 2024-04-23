import styled from "styled-components";

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 6rem;
  flex-wrap: wrap;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
`;

export const NavList = styled.div`
  display: "flex";
  align-items: "center";
  justify-content: "space-around";
`;

export const BackButton = styled.button`
  border: none;
  padding: 10px;
  border-radius: 5px;
  background-color: #0187a7;

  a {
    text-decoration: none;
    color: white;
    font-weight: 500;
    font-size: 1.1rem;
  }
`;

export const Container = styled.header`
  background-color: rgba(0, 0, 0, 0.2);
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
  margin-bottom: 25px;
`;
