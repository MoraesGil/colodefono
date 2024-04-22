import React from 'react';
import { LinkListContainer } from './LinkList.styles';

type LinkListType = { children: React.ReactNode };

const LinkList: React.FC<LinkListType> = ({ children }) => {
    return <LinkListContainer>{children}</LinkListContainer>;
  }

export default LinkList;