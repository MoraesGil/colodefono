import styled from "styled-components";

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 6rem;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 112px;
    border: 20px;
    border-radius: 50%;
  }
`;

export const Img = styled.div`
  width: 112px;
  border: 20px;
  border-radius: 50%;
`;

export const NavList = styled.div`
  display: flex;
  align-items: center;
  list-style: none;
  display: flex;
  flex-direction: row;
  padding: 0;
  margin: 0;
`;

export const BackButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
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

export const MobileMenuIcon = styled.div`
  display: none;
`;

export const MobileMenu = styled.div`
  display: none;
`;

export const NextButton = styled.button`
  border: none;
  padding: 10px;
  border-radius: 5px;
  background-color: #0187a7;
`;

export const Container = styled.header`
  background-color: rgba(0, 0, 0, 0.2);
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);

  margin-bottom: 25px;

  @media screen and (max-width: 730px) {
    padding: 1.5rem 4rem;

    ${MobileMenuIcon} {
      display: none;
    }

    ${MobileMenu} {
      display: none;
    }

    ${BackButton} {
      display: none;
    }
  }
`;
