import React, { useState } from "react";
import CertificateMenu from "../../components/CertificateMenu/CertificateMenu";

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
