import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;

  padding: 24px 0px;

  font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;

    transition: background 0.2s;
    border-radius: 50%;
  }

  a:hover {
    background: ${({ theme }) => theme.COLORS.SURFACE_HOVER_COLOR};
  }
`;