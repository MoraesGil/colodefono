import { Link } from "react-router-dom";
import { BackButton, Container } from "./CertificateMenu.styles";

interface CertificateMenuProps {
  onSelect: (id: number) => void;
  lengthArray: number;
}

const CertificateMenu: React.FC<CertificateMenuProps> = ({ lengthArray, onSelect }) => (
  <Container>
    <h3>Certificados</h3>

    <ul>
      <li>
       <a onClick={() => onSelect(1)}>
          Certificado 1
        </a>
      </li>
    </ul>

    <BackButton>
      <Link to="/">Voltar</Link>
    </BackButton>

  </Container>
);

export default CertificateMenu;
