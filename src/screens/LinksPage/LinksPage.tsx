import React from "react";
import LinkList from "../../components/LinkList/LinkList";
import LinkButton from "../../components/LinkButton";

const LinksPage: React.FC = () => {
  return (
    <div>
     <LinkList>
     <LinkButton text="Clique Aqui" href="https://example.com" />
     </LinkList>
    </div>
  );
};

export default LinksPage;
