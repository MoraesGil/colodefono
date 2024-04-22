import React from 'react';
import { Anchor, ListItem } from './LinkButton.styles';

type LinkButtonType = {
  href: string;
  text: string;
}

const LinkButton: React.FC<LinkButtonType> = ({ href, text }) => {
return (
  <ListItem>
    <Anchor href={href}>{text}</Anchor>
  </ListItem>
);
};

export default LinkButton;