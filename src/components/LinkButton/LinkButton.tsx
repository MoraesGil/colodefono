import React from 'react';
import { Anchor, ListItem } from './LinkButton.styles';

type LinkButtonType = {
  text: string;
  href: string;
}

const LinkButton: React.FC<LinkButtonType> = ({ text, href }) => {
return (
  <ListItem>
    <Anchor href={href}>{text}</Anchor>
  </ListItem>
);
};

export default LinkButton;