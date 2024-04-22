import React from 'react';
import { Container } from './LinkButton.styles';

type LinkButtonType = {
  href: string;
  text: string;
}

const LinkButton: React.FC<LinkButtonType> = ({ href, text }) => {
return (
  <Container>
    <a href={href}>{text}</a>
  </Container>
);
};

export default LinkButton;