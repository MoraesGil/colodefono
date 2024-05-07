import styled from "styled-components";

export const SidebarContainer = styled.nav`
  display: flex;
  flex-direction: column;

  height: 100vh;
  width: 20%;
  padding: 16px;
  overflow: auto;

  background-color: rgba(0, 0, 0, 0.2);
  color: white;

  h2 {
    padding: 20px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  ul a {
    text-decoration: none;
  }

  li {
    padding: 8px;
    cursor: pointer;
  }

  li:hover {
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
    transform: scale(1.05);
  }

  .active {
    background-color: rgba(0, 0, 0, 0.2);
    transition: background-color 0.5s, transform 0.6s;
  }

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export const Logo = styled.div``;

// MOBILE

export const CarouselContainer = styled.nav`
  padding: 10px;

  .none {
    display: none;
  }
`;

export const CarouselContent = styled.div`
  display: none;

  margin-top: 20px;

  @media screen and (max-width: 1000px) {
    display: block;
  }
`;

export const HandleContent = styled.div`
  text-align: center;
  a + a {
    margin-left: 20px;
  }
`;

export const TopContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: none;
    color: white;
    font-weight: 500;
    font-size: 1.1rem;
  }
`;

export const CarouselText = styled.div`
  font-size: 1.5em;
  text-align: center;
`;

export const BackButton = styled.button`
  border: none;
  padding: 10px;
  border-radius: 5px;
  background-color: #0187a7;

  cursor: pointer;
`;
