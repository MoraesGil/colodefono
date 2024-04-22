import styled from "styled-components";

export const ListItem = styled.li``;

export const Anchor = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 16px 24px;

  background: var(--surface-color);
  border: 1px solid var(--stroke-color);
  border-radius: 8px;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);

  text-decoration: none;
  font-weight: 500;

  transition: background 0.2s;

  &:hover {
    background: var(--surface-color-hover);
    border: 1.5px solid var(--text-color);
  }
`;
