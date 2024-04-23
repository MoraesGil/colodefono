import styled from "styled-components";

export const Container = styled.li`
  a {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 16px 24px;

    background: ${({ theme }) => theme.COLORS.SURFACE_COLOR};
    border: 1px solid ${({ theme }) => theme.COLORS.STROKE_COLOR};
    border-radius: 8px;
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);

    text-decoration: none;
    font-weight: 500;

    transition: background 0.2s;
  }

  a:hover {
    background: ${({ theme }) => theme.COLORS.SURFACE_COLOR};
    border: 1.5px solid ${({ theme }) => theme.COLORS.TEXT_COLOR};
  }
`;
