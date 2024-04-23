import { Link } from "react-router-dom";
import { BackButton, Container } from "./CertificateMenu.styles";

interface CertificateMenuProps {
  onSelect: (id: number) => void;
}

const CertificateMenu: React.FC<CertificateMenuProps> = ({ onSelect }) => (
  <Container>
    <h3>Certificados</h3>

    <ul>
      <li>
        <Link to="#" onClick={() => onSelect(1)}>
          Certificado 1
        </Link>
      </li>

      <li>
        <Link to="#" onClick={() => onSelect(2)}>
          Certificado 2
        </Link>
      </li>
    </ul>

    <BackButton>
      <Link to="/">Voltar</Link>
    </BackButton>

  </Container>
);

export default CertificateMenu;
