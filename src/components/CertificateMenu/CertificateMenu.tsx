import { Link } from "react-router-dom";

interface CertificateMenuProps {
  onSelect: (id: number) => void;
}

const CertificateMenu: React.FC<CertificateMenuProps> = ({ onSelect }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      height: "100vh",
      padding: "20px",
      background: "#f0f0f0",
      borderRight: "1px solid #ddd",
    }}
  >
    <h3 style={{ color: "black" }}>Certificados</h3>

    <ul
      style={{
        flex: 1,
        listStyleType: "none",
        padding: 10,
        overflow: "auto",
      }}
    >
      <li style={{ marginBottom: "10px" }}>
        <Link
          to="#"
          style={{ textDecoration: "none", color: "black", padding: "10px" }}
          onClick={() => onSelect(1)}
        >
          Certificado 1
        </Link>
      </li>
      <li style={{ marginBottom: "10px" }}>
        <Link
          to="#"
          style={{ textDecoration: "none", color: "black", padding: "10px" }}
          onClick={() => onSelect(2)}
        >
          Certificado 2
        </Link>
      </li>
      <li>
        <Link
          to="#"
          style={{ textDecoration: "none", color: "black", padding: "10px" }}
          onClick={() => onSelect(3)}
        >
          Certificado 3
        </Link>
      </li>
    </ul>

    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "black",
          fontWeight: "bold",
        }}
      >
        Voltar
      </Link>
    </div>
  </div>
);

export default CertificateMenu;