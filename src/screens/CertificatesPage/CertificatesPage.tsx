import React, { useState } from "react";
import { Link } from "react-router-dom";

const certificatesImages: Record<number, string[]> = {
  1: [
    "./src/assets/certificates/1/1_page-0001.jpg",
    "./src/assets/certificates/1/1_page-0002.jpg",
  ],
  2: [
    "./src/assets/certificates/2/1 (2)_page-0001.jpg",
    "./src/assets/certificates/2/1 (2)_page-0002.jpg",
  ],
  3: [
    "./src/assets/certificates/3/20 - Valéria Caldeira dos Santos_page-0001.jpg",
    "./src/assets/certificates/3/20 - Valéria Caldeira dos Santos_page-0002.jpg",
  ],
};

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

const CertificatesPage: React.FC = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<number | null>(
    null
  );

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <CertificateMenu onSelect={(id) => setSelectedCertificate(id)} />

      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {selectedCertificate ? (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "10px",
              padding: 5,
              justifyContent: "center",
            }}
          >
            {certificatesImages[selectedCertificate].map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Certificado ${selectedCertificate}`}
                style={{ width: "45%" }}
              />
            ))}
          </div>
        ) : (
          <p>Selecione um certificado para ver sua imagem</p>
        )}
      </div>
    </div>
  );
};

export default CertificatesPage;
