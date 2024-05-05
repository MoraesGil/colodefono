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
			`/assets/certificates/2015-12-12/001/frente.jpg`,
			`/assets/certificates/2015-12-12/001/verso.jpg`,
		],
	},

	[`Especialização em Adiologia Clínica e Ocupacional`]: {
		favorite: true,

		imagePaths: [
			`/assets/certificates/2017-12-16/001/frente.jpg`,
			`/assets/certificates/2017-12-16/001/verso.jpg`,
		],
	},

	[`Aprimoramento em Disfagia`]: {
		favorite: false,

		imagePaths: [
			`/assets/certificates/2018-11-24/001/frente.jpg`,
			`/assets/certificates/2018-11-24/001/verso.jpg`,
		],
	},

	[`Intervenção na Disfagia de Pacientes Adultos Pós-AVC`]: {
		favorite: false,

		imagePaths: [`/assets/certificates/2020-03-14/001/frente.jpg`],
	},

	[`Formação Clínica em Disfagia: do Hospital ao Home Care`]: {
		favorite: false,

		imagePaths: [
			`/assets/certificates/2020-08-17/001/frente.jpg`,
			`/assets/certificates/2020-08-17/001/verso.jpg`,
		],
	},

	[`Atuação Fonoaudiológica em Pacientes Adultos com Disfagia Neurogênica`]: {
		favorite: false,

		imagePaths: [
			`/assets/certificates/2021-08-15/001/frente.jpg`,
			`/assets/certificates/2021-08-15/001/verso.jpg`,
		],
	},

	[`Atuação Fonoaudiológica em Disfagia Mecânica e Alterações Craniofaciais Oromiofuncionais`]:
		{
			favorite: false,

			imagePaths: [
				`/assets/certificates/2021-10-28/001/frente.jpg`,
				`/assets/certificates/2021-10-28/001/verso.jpg`,
			],
		},

	[`Atuação Fonoaudiológica Neotal e Pediátrica`]: {
		favorite: false,

		imagePaths: [
			`/assets/certificates/2022-02-18/001/frente.jpg`,
			`/assets/certificates/2022-02-18/001/verso.jpg`,
		],
	},

	[`Diagnóstico por Imagem para Avaliação da Deglutição`]: {
		favorite: false,

		imagePaths: [
			`/assets/certificates/2022-04-14/001/frente.jpg`,
			`/assets/certificates/2022-04-14/001/verso.jpg`,
		],
	},

	[`Curso Online Aba e Autismo`]: {
		favorite: false,

		imagePaths: [
			`/assets/certificates/2023-01-31/001/frente.jpg`,
			`/assets/certificates/2023-01-31/001/verso.jpg`,
		],
	},

	[`Teste da Linguinha e Aprofundamento em Frênulo Lingual`]: {
		favorite: false,

		imagePaths: [`/assets/certificates/2023-03-30/001/frente.jpg`],
	},

	[`Seletividade Alimentar em Crianças e Adolecentes`]: {
		favorite: false,

		imagePaths: [`/assets/certificates/2023-04-05/001/frente.jpg`],
	},

	[`Consultoria em Amamentação para Fonoaudiólogos`]: {
		favorite: false,

		imagePaths: [`/assets/certificates/2023-05-01/001/frente.jpg`],
	},

	[`MO e Linguagem: Onde os Caminhos se Cruzam?`]: {
		favorite: false,

		imagePaths: [`/assets/certificates/2024-04-03/001/frente.jpg`],
	},
};
