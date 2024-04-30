type certificateImages = Record<
  string,
  {
    favorite: boolean;
    imagePaths: string[];
  }
>;

export const certificateImages: certificateImages = {
  [`Bacharelado em Fonoaudiologia`]: {
    favorite: true,

    imagePaths: [
      `/certificates/20151212/001/frente.jpg`,
      `/certificates/20151212/001/verso.jpg`,
    ],
  },

  [`Especialização em Adiologia Clínica e Ocupacional`]: {
    favorite: true,

    imagePaths: [
      `/certificates/20171216/001/frente.jpg`,
      `/certificates/20171216/001/verso.jpg`,
    ],
  },

  [`Aprimoramento em Disfagia`]: {
    favorite: false,

    imagePaths: [
      `/certificates/20181124/001/frente.jpg`,
      `/certificates/20181124/001/verso.jpg`,
    ],
  },

  [`Intervenção na Disfagia de Pacientes Adultos Pós-AVC`]: {
    favorite: false,

    imagePaths: [`/certificates/20200314/001/frente.jpg`],
  },

  [`Formação Clínica em Disfagia: do Hospital ao Home Care`]: {
    favorite: false,

    imagePaths: [
      `/certificates/20200819/001/frente.jpg`,
      `/certificates/20200819/001/verso.jpg`,
    ],
  },

  [`Atuação Fonoaudiológica em Pacientes Adultos com Disfagia Neurogênica`]: {
    favorite: false,

    imagePaths: [
      `/certificates/20210805/001/frente.jpg`,
      `/certificates/20210805/001/verso.jpg`,
    ],
  },

  [`Atuação Fonoaudiológica em Disfagia Mecânica e Alterações Craniofaciais Oromiofuncionais`]:
    {
      favorite: false,

      imagePaths: [
        `/certificates/20211028/001/frente.jpg`,
        `/certificates/20211028/001/verso.jpg`,
      ],
    },

  [`Atuação Fonoaudiológica Neotal e Pediátrica`]: {
    favorite: true,

    imagePaths: [
      `/certificates/20220218/001/frente.jpg`,
      `/certificates/20220218/001/verso.jpg`,
    ],
  },

  [`Diagnóstico por Imagem para Avaliação da Deglutição`]: {
    favorite: false,

    imagePaths: [
      `/certificates/20220414/001/frente.jpg`,
      `/certificates/20220414/001/verso.jpg`,
    ],
  },

  [`Curso Online Aba e Autismo`]: {
    favorite: false,

    imagePaths: [
      `/certificates/20230131/001/frente.jpg`,
      `/certificates/20230131/001/verso.jpg`,
    ],
  },

  [`Teste da Linguinha e Aprofundamento em Frênulo Lingual`]: {
    favorite: false,

    imagePaths: [`/certificates/20230330/001/frente.jpg`],
  },

  [`Seletividade Alimentar em Crianças e Adolecentes`]: {
    favorite: false,

    imagePaths: [`/certificates/20230405/001/frente.jpg`],
  },

  [`Consultoria em Amamentação para Fonoaudiólogos`]: {
    favorite: false,

    imagePaths: [`/certificates/20230501/001/frente.jpg`],
  },

  [`MO e Linguagem: Onde os Caminhos se Cruzam?`]: {
    favorite: false,

    imagePaths: [`/certificates/20240403/001/verso.jpg`],
  },

  [`Teste da Linguinha e Aprofundamento em Frenulo Lingual`]: {
    favorite: false,

    imagePaths: [`/certificates/20240329/001/frente.jpg`],
  },

  [`Consultoria em Amamentação para Fonoaudiologos`]: {
    favorite: false,

    imagePaths: [`/certificates/20240308/001/frente.jpg`],
  },

  [`Seletividade Alimentar em Crianças e Adolescentes`]: {
    favorite: false,

    imagePaths: [`/certificates/20240405/001/frente.jpg`],
  },
};

export const labelKeys = Object.keys(certificateImages);

export const favoriteCertificateKeys = labelKeys.filter(
  (key) => certificateImages[key].favorite
);

export const unfavoritedCertificateKeys = labelKeys.filter(
  (key) => !certificateImages[key].favorite
);

export const organizedCertificateKeys = [
  ...favoriteCertificateKeys,
  ...unfavoritedCertificateKeys,
];
