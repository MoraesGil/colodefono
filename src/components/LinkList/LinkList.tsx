import React from 'react';
import { Container } from './LinkList.styles';

type LinkListType = { children: React.ReactNode };

const LinkList: React.FC<LinkListType> = ({ children }) => {
    return <Container>{children}</Container>;
  }

export default LinkList;