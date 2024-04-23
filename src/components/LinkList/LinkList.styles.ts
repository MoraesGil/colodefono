import styled from "styled-components";

export const Container = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px 0px;

  a {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 16px 24px;

    background: ${({ theme }) => theme.COLORS.SURFACE_COLOR};
    border: 1px solid ${({ theme }) => theme.COLORS.STROKE_COLOR};
    border-radius: 8px;

    text-decoration: none;
    font-weight: 500;

    transition: background 0.2s;
  }

  a:hover {
    background: ${({ theme }) => theme.COLORS.SURFACE_COLOR};
    border: 1.5px solid ${({ theme }) => theme.COLORS.TEXT_COLOR};
  }
`;
