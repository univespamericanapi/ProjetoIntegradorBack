const cidadeSeeder = async (Cidade, Estado) => {
	await Estado.findOne({
		where: {
			est_desc: 'Acre',
		},
	}).then(async (estado) => {
		await Cidade.create({
			cid_desc: 'Acrelândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Assis Brasil',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Brasiléia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bujari',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Capixaba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cruzeiro do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Epitaciolândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Feijó',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jordão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mâncio Lima',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Manoel Urbano',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Marechal Thaumaturgo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Plácido de Castro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Porto Acre',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Porto Walter',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rio Branco',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rodrigues Alves',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Rosa do Purus',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Sena Madureira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Senador Guiomard',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tarauacá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Xapuri',
			cid_estado: estado.est_id,
		});
	});

	await Estado.findOne({
		where: {
			est_desc: 'Alagoas',
		},
	}).then(async (estado) => {
		await Cidade.create({
			cid_desc: 'Água Branca',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Anadia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Arapiraca',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Atalaia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Barra de Santo Antônio',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Barra de São Miguel',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Batalha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Belém',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Belo Monte',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Boca da Mata',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Branquinha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cacimbinhas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cajueiro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Campestre',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Campo Alegre',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Campo Grande',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Canapi',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Capela',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Carneiros',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Chã Preta',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Coité do Nóia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Colônia Leopoldina',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Coqueiro Seco',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Coruripe',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Craíbas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Delmiro Gouveia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Dois Riachos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Estrela de Alagoas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Feira Grande',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Feliz Deserto',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Flexeiras',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Girau do Ponciano',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ibateguara',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Igaci',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Igreja Nova',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Inhapi',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jacaré Dos Homens',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jacuípe',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Japaratinga',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jaramataia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jequiá da Praia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Joaquim Gomes',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jundiá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Junqueiro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lagoa da Canoa',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Limoeiro de Anadia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Maceió',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Major Isidoro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mar Vermelho',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Maragogi',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Maravilha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Marechal Deodoro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Maribondo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mata Grande',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Matriz de Camaragibe',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Messias',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Minador do Negrão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Monteirópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Murici',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Novo Lino',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: "Olho D'água Das Flores",
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: "Olho D'água do Casado",
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: "Olho D'água Grande",
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Olivença',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ouro Branco',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Palestina',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Palmeira Dos Índios',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pão de Açúcar',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pariconha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Paripueira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Passo de Camaragibe',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Paulo Jacinto',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Penedo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Piaçabuçu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pilar',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pindoba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Piranhas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Poço Das Trincheiras',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Porto Calvo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Porto de Pedras',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Porto Real do Colégio',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Quebrangulo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rio Largo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Roteiro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Luzia do Norte',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santana do Ipanema',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santana do Mundaú',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Brás',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São José da Laje',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São José da Tapera',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Luís do Quitunde',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Miguel Dos Campos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Miguel Dos Milagres',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Sebastião',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Satuba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Senador Rui Palmeira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: "Tanque D'arca",
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Taquarana',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Teotônio Vilela',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Traipu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'União Dos Palmares',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Viçosa',
			cid_estado: estado.est_id,
		});
	});

	await Estado.findOne({
		where: {
			est_desc: 'Amapá',
		},
	}).then(async (estado) => {
		await Cidade.create({
			cid_desc: 'Amapá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Calçoene',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cutias',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ferreira Gomes',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itaubal',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Laranjal do Jari',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Macapá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mazagão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Oiapoque',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pedra Branca do Amapari',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Porto Grande',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pracuúba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santana',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Serra do Navio',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tartarugalzinho',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Vitória do Jari',
			cid_estado: estado.est_id,
		});
	});

	await Estado.findOne({
		where: {
			est_desc: 'Amazonas',
		},
	}).then(async (estado) => {
		await Cidade.create({
			cid_desc: 'Alvarães',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Amaturá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Anamã',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Anori',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Apuí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Atalaia do Norte',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Autazes',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Barcelos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Barreirinha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Benjamin Constant',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Beruri',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Boa Vista do Ramos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Boca do Acre',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Borba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Caapiranga',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Canutama',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Carauari',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Careiro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Careiro da Várzea',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Coari',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Codajás',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Eirunepé',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Envira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Fonte Boa',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Guajará',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Humaitá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ipixuna',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Iranduba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itacoatiara',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itamarati',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itapiranga',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Japurá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Juruá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jutaí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lábrea',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Manacapuru',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Manaquiri',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Manaus',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Manicoré',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Maraã',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Maués',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nhamundá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Olinda do Norte',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Novo Airão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Novo Aripuanã',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Parintins',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pauini',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Presidente Figueiredo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rio Preto da Eva',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Isabel do Rio Negro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santo Antônio do Içá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Gabriel da Cachoeira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Paulo de Olivença',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Sebastião do Uatumã',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Silves',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tabatinga',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tapauá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tefé',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tonantins',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Uarini',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Urucará',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Urucurituba',
			cid_estado: estado.est_id,
		});
	});

	await Estado.findOne({
		where: {
			est_desc: 'Bahia',
		},
	}).then(async (estado) => {
		await Cidade.create({
			cid_desc: 'Abaíra',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Abaré',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Acajutiba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Adustina',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Água Fria',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Aiquara',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Alagoinhas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Alcobaça',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Almadina',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Amargosa',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Amélia Rodrigues',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'América Dourada',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Anagé',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Andaraí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Andorinha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Angical',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Anguera',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Antas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Antônio Cardoso',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Antônio Gonçalves',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Aporá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Apuarema',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Araças',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Aracatu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Araci',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Aramari',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Arataca',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Aratuípe',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Aurelino Leal',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Baianópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Baixa Grande',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Banzaê',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Barra',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Barra da Estiva',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Barra do Choça',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Barra do Mendes',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Barra do Rocha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Barreiras',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Barro Alto',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Barrocas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Belmonte',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Belo Campo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Biritinga',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Boa Nova',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Boa Vista do Tupim',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bom Jesus da Lapa',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bom Jesus da Serra',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Boninal',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bonito',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Boquira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Botuporã',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Brejões',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Brejolândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Brotas de Macaúbas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Brumado',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Buerarema',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Buritirama',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Caatiba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cabaceiras do Paraguaçu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cachoeira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Caculé',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Caém',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Caetanos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Caetité',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cafarnaum',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cairu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Caldeirão Grande',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Camacan',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Camaçari',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Camamu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Campo Alegre de Lourdes',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Campo Formoso',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Canápolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Canarana',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Canavieiras',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Candeal',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Candeias',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Candiba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cândido Sales',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cansanção',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Canudos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Capela do Alto Alegre',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Capim Grosso',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Caraíbas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Caravelas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cardeal da Silva',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Carinhanha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Casa Nova',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Castro Alves',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Catolândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Catu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Caturama',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Central',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Chorrochó',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cícero Dantas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cipó',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Coaraci',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cocos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Conceição da Feira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Conceição do Almeida',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Conceição do Coité',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Conceição do Jacuípe',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Conde',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Condeúba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Contendas do Sincorá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Coração de Maria',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cordeiros',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Coribe',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Coronel João sá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Correntina',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cotegipe',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cravolândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Crisópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cristópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cruz Das Almas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Curaçá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Dário Meira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: "Dias D'ávila",
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Dom Basílio',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Dom Macedo Costa',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Elísio Medrado',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Encruzilhada',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Entre Rios',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Érico Cardoso',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Esplanada',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Euclides da Cunha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Eunápolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Fátima',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Feira da Mata',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Feira de Santana',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Filadélfia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Firmino Alves',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Floresta Azul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Formosa do Rio Preto',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Gandu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Gavião',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Gentio do Ouro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Glória',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Gongogi',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Governador Lomanto Júnior',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Governador Mangabeira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Guajeru',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Guanambi',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Guaratinga',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Heliópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Iaçu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ibiassucê',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ibicaraí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ibicoara',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ibicuí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ibipeba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ibipitanga',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ibiquera',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ibirapitanga',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ibirapuã',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ibirataia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ibitiara',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ibititá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ibotirama',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ichu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Igaporã',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Igrapiúna',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Iguaí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ilhéus',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Inhambupe',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ipecaetá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ipiaú',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ipirá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ipupiara',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Irajuba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Iramaia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Iraquara',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Irará',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Irecê',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itabela',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itaberaba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itabuna',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itacaré',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itaeté',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itagi',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itagibá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itagimirim',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itaguaçu da Bahia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itaju do Colônia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itajuípe',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itamaraju',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itamari',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itambé',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itanagra',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itanhém',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itaparica',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itapé',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itapebi',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itapetinga',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itapicuru',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itapitanga',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itaquara',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itarantim',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itatim',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itiruçu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itiúba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itororó',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ituaçu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ituberá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Iuiú',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jaborandi',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jacaraci',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jacobina',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jaguaquara',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jaguarari',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jaguaripe',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jandaíra',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jequié',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jeremoabo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jiquiriçá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jitaúna',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'João Dourado',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Juazeiro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jucuruçu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jussara',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jussari',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jussiape',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lafaiete Coutinho',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lagoa Real',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Laje',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lajedão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lajedinho',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lajedo do Tabocal',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lamarão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lapão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lauro de Freitas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lençóis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Licínio de Almeida',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Livramento de Nossa Senhora',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Luís Eduardo Magalhães',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Macajuba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Macarani',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Macaúbas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Macururé',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Madre de Deus',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Maetinga',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Maiquinique',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mairi',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Malhada',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Malhada de Pedras',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Manoel Vitorino',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mansidão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Maracás',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Maragogipe',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Maraú',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Marcionílio Souza',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mascote',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mata de São João',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Matina',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Medeiros Neto',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Miguel Calmon',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Milagres',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mirangaba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mirante',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Monte Santo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Morpará',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Morro do Chapéu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mortugaba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mucugê',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mucuri',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mulungu do Morro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mundo Novo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Muniz Ferreira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Muquém de São Francisco',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Muritiba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mutuípe',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nazaré',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nilo Peçanha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nordestina',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Canaã',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Fátima',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Ibiá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Itarana',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Redenção',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Soure',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Viçosa',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Novo Horizonte',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Novo Triunfo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Olindina',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Oliveira Dos Brejinhos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ouriçangas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ourolândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Palmas de Monte Alto',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Palmeiras',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Paramirim',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Paratinga',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Paripiranga',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pau Brasil',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Paulo Afonso',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'pé de Serra',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pedrão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pedro Alexandre',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Piatã',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pilão Arcado',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pindaí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pindobaçu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pintadas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Piraí do Norte',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Piripá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Piritiba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Planaltino',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Planalto',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Poções',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pojuca',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ponto Novo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Porto Seguro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Potiraguá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Prado',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Presidente Dutra',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Presidente Jânio Quadros',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Presidente Tancredo Neves',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Queimadas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Quijingue',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Quixabeira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rafael Jambeiro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Remanso',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Retirolândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Riachão Das Neves',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Riachão do Jacuípe',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Riacho de Santana',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ribeira do Amparo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ribeira do Pombal',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ribeirão do Largo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rio de Contas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rio do Antônio',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rio do Pires',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rio Real',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rodelas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ruy Barbosa',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Salinas da Margarida',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Salvador',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Bárbara',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Brígida',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Cruz Cabrália',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Cruz da Vitória',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Inês',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Luzia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Maria da Vitória',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Rita de Cássia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Teresinha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santaluz',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santana',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santanópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santo Amaro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santo Antônio de Jesus',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santo Estêvão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Desidério',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Domingos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Felipe',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Félix',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Félix do Coribe',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Francisco do Conde',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Gabriel',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Gonçalo Dos Campos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São José da Vitória',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São José do Jacuípe',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Miguel Das Matas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Sebastião do Passé',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Sapeaçu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Sátiro Dias',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Saubara',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Saúde',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Seabra',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Sebastião Laranjeiras',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Senhor do Bonfim',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Sento sé',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Serra do Ramalho',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Serra Dourada',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Serra Preta',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Serrinha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Serrolândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Simões Filho',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Sítio do Mato',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Sítio do Quinto',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Sobradinho',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Souto Soares',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tabocas do Brejo Velho',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tanhaçu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tanque Novo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tanquinho',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Taperoá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tapiramutá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Teixeira de Freitas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Teodoro Sampaio',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Teofilândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Teolândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Terra Nova',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tremedal',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tucano',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Uauá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ubaíra',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ubaitaba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ubatã',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Uibaí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Umburanas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Una',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Urandi',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Uruçuca',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Utinga',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Valença',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Valente',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Várzea da Roça',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Várzea do Poço',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Várzea Nova',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Varzedo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Vera Cruz',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Vereda',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Vitória da Conquista',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Wagner',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Wanderley',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Wenceslau Guimarães',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Xique-xique',
			cid_estado: estado.est_id,
		});
	});

	await Estado.findOne({
		where: {
			est_desc: 'Ceará',
		},
	}).then(async (estado) => {
		await Cidade.create({
			cid_desc: 'Abaiara',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Acarapé',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Acaraú',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Acopiara',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Aiuaba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Alcântaras',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Altaneira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Alto Santo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Amontada',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Antonina do Norte',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Apuiarés',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Aquiraz',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Aracati',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Aracoiaba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ararendá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Araripe',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Aratuba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Arneiroz',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Assaré',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Aurora',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Baixio',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Banabuiú',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Barbalha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Barreira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Barro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Barroquinha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Baturité',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Beberibe',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bela Cruz',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Boa Viagem',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Brejo Santo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Camocim',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Campos Sales',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Canindé',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Capistrano',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Caridade',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cariré',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Caririaçu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cariús',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Carnaubal',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cascavel',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Catarina',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Catunda',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Caucaia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cedro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Chaval',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Choró',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Chorozinho',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Coreaú',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Crateús',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Crato',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Croatá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cruz',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Deputado Irapuan Pinheiro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ererê',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Eusébio',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Farias Brito',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Forquilha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Fortaleza',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Fortim',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Frecheirinha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'General Sampaio',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Graça',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Granja',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Granjeiro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Groaíras',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Guaiúba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Guaraciaba do Norte',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Guaramiranga',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Hidrolândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Horizonte',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ibaretama',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ibiapina',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ibicuitinga',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Icapuí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Icó',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Iguatu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Independência',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ipaporanga',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ipaumirim',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ipu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ipueiras',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Iracema',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Irauçuba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itaiçaba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itaitinga',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itapagé',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itapipoca',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itapiúna',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itarema',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itatira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jaguaretama',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jaguaribara',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jaguaribe',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jaguaruana',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jardim',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jati',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jijoca de Jericoacoara',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Juazeiro do Norte',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jucás',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lavras da Mangabeira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Limoeiro do Norte',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Madalena',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Maracanaú',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Maranguape',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Marco',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Martinópole',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Massapê',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mauriti',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Meruoca',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Milagres',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Milhã',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Miraíma',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Missão Velha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mombaça',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Monsenhor Tabosa',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Morada Nova',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Moraújo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Morrinhos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mucambo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mulungu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Olinda',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Russas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Novo Oriente',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ocara',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Orós',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pacajus',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pacatuba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pacoti',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pacujá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Palhano',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Palmácia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Paracuru',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Paraipaba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Parambu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Paramoti',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pedra Branca',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Penaforte',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pentecoste',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pereiro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pindoretama',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Piquet Carneiro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pires Ferreira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Poranga',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Porteiras',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Potengi',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Potiretama',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Quiterianópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Quixadá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Quixelô',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Quixeramobim',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Quixeré',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Redenção',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Reriutaba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Russas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Saboeiro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Salitre',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Quitéria',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santana do Acaraú',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santana do Cariri',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Benedito',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Gonçalo do Amarante',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São João do Jaguaribe',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Luís do Curu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Senador Pompeu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Senador sá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Sobral',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Solonópole',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tabuleiro do Norte',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tamboril',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tarrafas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tauá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tejuçuoca',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tianguá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Trairi',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tururu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ubajara',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Umari',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Umirim',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Uruburetama',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Uruoca',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Varjota',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Várzea Alegre',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Viçosa do Ceará',
			cid_estado: estado.est_id,
		});
	});

	await Estado.findOne({
		where: {
			est_desc: 'Distrito Federal',
		},
	}).then(async (estado) => {
		await Cidade.create({
			cid_desc: 'Brasília',
			cid_estado: estado.est_id,
		});
	});

	await Estado.findOne({
		where: {
			est_desc: 'Espírito Santo',
		},
	}).then(async (estado) => {
		await Cidade.create({
			cid_desc: 'Afonso Cláudio',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Água Doce do Norte',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Águia Branca',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Alegre',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Alfredo Chaves',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Alto Rio Novo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Anchieta',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Apiacá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Aracruz',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Atilio Vivacqua',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Baixo Guandu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Barra de São Francisco',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Boa Esperança',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bom Jesus do Norte',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Brejetuba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cachoeiro de Itapemirim',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cariacica',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Castelo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Colatina',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Conceição da Barra',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Conceição do Castelo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Divino de São Lourenço',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Domingos Martins',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Dores do Rio Preto',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ecoporanga',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Fundão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Governador Lindenberg',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Guaçuí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Guarapari',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ibatiba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ibiraçu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ibitirama',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Iconha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Irupi',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itaguaçu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itapemirim',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itarana',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Iúna',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jaguaré',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jerônimo Monteiro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'João Neiva',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Laranja da Terra',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Linhares',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mantenópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Marataízes',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Marechal Floriano',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Marilândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mimoso do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Montanha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mucurici',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Muniz Freire',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Muqui',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Venécia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pancas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pedro Canário',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pinheiros',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Piúma',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ponto Belo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Presidente Kennedy',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rio Bananal',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rio Novo do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Leopoldina',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Maria de Jetibá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Teresa',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Domingos do Norte',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Gabriel da Palha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São José do Calçado',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Mateus',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Roque do Canaã',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Serra',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Sooretama',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Vargem Alta',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Venda Nova do Imigrante',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Viana',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Vila Pavão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Vila Valério',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Vila Velha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Vitória',
			cid_estado: estado.est_id,
		});
	});

	await Estado.findOne({
		where: {
			est_desc: 'Goiás',
		},
	}).then(async (estado) => {
		await Cidade.create({
			cid_desc: 'Abadia de Goiás',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Abadiânia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Acreúna',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Adelândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Água Fria de Goiás',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Água Limpa',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Águas Lindas de Goiás',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Alexânia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Aloândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Alto Horizonte',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Alto Paraíso de Goiás',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Alvorada do Norte',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Amaralina',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Americano do Brasil',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Amorinópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Anápolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Anhanguera',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Anicuns',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Aparecida de Goiânia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Aparecida do Rio Doce',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Aporé',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Araçu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Aragarças',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Aragoiânia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Araguapaz',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Arenópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Aruanã',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Aurilândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Avelinópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Baliza',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Barro Alto',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bela Vista de Goiás',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bom Jardim de Goiás',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bom Jesus de Goiás',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bonfinópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bonópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Brazabrantes',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Britânia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Buriti Alegre',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Buriti de Goiás',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Buritinópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cabeceiras',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cachoeira Alta',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cachoeira de Goiás',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cachoeira Dourada',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Caçu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Caiapônia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Caldas Novas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Caldazinha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Campestre de Goiás',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Campinaçu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Campinorte',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Campo Alegre de Goiás',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Campo Limpo de Goiás',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Campos Belos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Campos Verdes',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Carmo do Rio Verde',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Castelândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Catalão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Caturaí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cavalcante',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ceres',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cezarina',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Chapadão do Céu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cidade Ocidental',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cocalzinho de Goiás',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Colinas do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Córrego do Ouro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Corumbá de Goiás',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Corumbaíba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cristalina',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cristianópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Crixás',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cromínia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cumari',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Damianópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Damolândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Davinópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Diorama',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Divinópolis de Goiás',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Doverlândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Edealina',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Edéia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Estrela do Norte',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Faina',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Fazenda Nova',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Firminópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Flores de Goiás',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Formosa',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Formoso',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Gameleira de Goiás',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Goianápolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Goiandira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Goianésia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Goiânia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Goianira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Goiás',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Goiatuba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Gouvelândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Guapó',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Guaraíta',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Guarani de Goiás',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Guarinos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Heitoraí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Hidrolândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Hidrolina',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Iaciara',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Inaciolândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Indiara',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Inhumas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ipameri',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ipiranga de Goiás',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Iporá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Israelândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itaberaí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itaguari',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itaguaru',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itajá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itapaci',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itapirapuã',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itapuranga',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itarumã',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itauçu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itumbiara',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ivolândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jandaia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jaraguá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jataí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jaupaci',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jesúpolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Joviânia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jussara',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lagoa Santa',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Leopoldo de Bulhões',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Luziânia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mairipotaba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mambaí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mara Rosa',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Marzagão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Matrinchã',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Maurilândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mimoso de Goiás',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Minaçu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mineiros',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Moiporá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Monte Alegre de Goiás',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Montes Claros de Goiás',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Montividiu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Montividiu do Norte',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Morrinhos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Morro Agudo de Goiás',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mossâmedes',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mozarlândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mundo Novo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mutunópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nazário',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nerópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Niquelândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova América',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Aurora',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Crixás',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Glória',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Iguaçu de Goiás',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Roma',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Veneza',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Novo Brasil',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Novo Gama',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Novo Planalto',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Orizona',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ouro Verde de Goiás',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ouvidor',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Padre Bernardo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Palestina de Goiás',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Palmeiras de Goiás',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Palmelo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Palminópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Panamá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Paranaiguara',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Paraúna',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Perolândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Petrolina de Goiás',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pilar de Goiás',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Piracanjuba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Piranhas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pirenópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pires do Rio',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Planaltina',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pontalina',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Porangatu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Porteirão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Portelândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Posse',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Professor Jamil',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Quirinópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rialma',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rianápolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rio Quente',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rio Verde',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rubiataba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Sanclerlândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Bárbara de Goiás',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Cruz de Goiás',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa fé de Goiás',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Helena de Goiás',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Isabel',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Rita do Araguaia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Rita do Novo Destino',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Rosa de Goiás',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Tereza de Goiás',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Terezinha de Goiás',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santo Antônio da Barra',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santo Antônio de Goiás',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santo Antônio do Descoberto',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Domingos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Francisco de Goiás',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: "São João D'aliança",
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São João da Paraúna',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Luís de Montes Belos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Luíz do Norte',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Miguel do Araguaia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Miguel do Passa Quatro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Patrício',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Simão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Senador Canedo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Serranópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Silvânia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Simolândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: "Sítio D'abadia",
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Taquaral de Goiás',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Teresina de Goiás',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Terezópolis de Goiás',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Três Ranchos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Trindade',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Trombas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Turvânia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Turvelândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Uirapuru',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Uruaçu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Uruana',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Urutaí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Valparaíso de Goiás',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Varjão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Vianópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Vicentinópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Vila Boa',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Vila Propício',
			cid_estado: estado.est_id,
		});
	});

	await Estado.findOne({
		where: {
			est_desc: 'Maranhão',
		},
	}).then(async (estado) => {
		await Cidade.create({
			cid_desc: 'Açailândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Afonso Cunha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Água Doce do Maranhão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Alcântara',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Aldeias Altas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Altamira do Maranhão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Alto Alegre do Maranhão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Alto Alegre do Pindaré',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Alto Parnaíba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Amapá do Maranhão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Amarante do Maranhão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Anajatuba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Anapurus',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Apicum-açu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Araguanã',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Araioses',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Arame',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Arari',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Axixá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bacabal',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bacabeira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bacuri',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bacurituba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Balsas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Barão de Grajaú',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Barra do Corda',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Barreirinhas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bela Vista do Maranhão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Belágua',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Benedito Leite',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bequimão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bernardo do Mearim',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Boa Vista do Gurupi',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bom Jardim',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bom Jesus Das Selvas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bom Lugar',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Brejo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Brejo de Areia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Buriti',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Buriti Bravo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Buriticupu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Buritirana',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cachoeira Grande',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cajapió',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cajari',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Campestre do Maranhão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cândido Mendes',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cantanhede',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Capinzal do Norte',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Carolina',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Carutapera',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Caxias',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cedral',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Central do Maranhão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Centro do Guilherme',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Centro Novo do Maranhão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Chapadinha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cidelândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Codó',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Coelho Neto',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Colinas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Conceição do Lago-açu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Coroatá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cururupu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Davinópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Dom Pedro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Duque Bacelar',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Esperantinópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Estreito',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Feira Nova do Maranhão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Fernando Falcão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Formosa da Serra Negra',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Fortaleza Dos Nogueiras',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Fortuna',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Godofredo Viana',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Gonçalves Dias',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Governador Archer',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Governador Edison Lobão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Governador Eugênio Barros',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Governador Luiz Rocha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Governador Newton Bello',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Governador Nunes Freire',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Graça Aranha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Grajaú',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Guimarães',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Humberto de Campos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Icatu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Igarapé do Meio',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Igarapé Grande',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Imperatriz',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itaipava do Grajaú',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itapecuru Mirim',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itinga do Maranhão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jatobá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jenipapo Dos Vieiras',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'João Lisboa',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Joselândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Junco do Maranhão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lago da Pedra',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lago do Junco',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lago Dos Rodrigues',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lago Verde',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lagoa do Mato',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lagoa Grande do Maranhão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lajeado Novo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lima Campos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Loreto',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Luís Domingues',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Magalhães de Almeida',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Maracaçumé',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Marajá do Sena',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Maranhãozinho',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mata Roma',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Matinha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Matões',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Matões do Norte',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Milagres do Maranhão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mirador',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Miranda do Norte',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mirinzal',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Monção',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Montes Altos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Morros',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nina Rodrigues',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Colinas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Iorque',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Olinda do Maranhão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: "Olho D'água Das Cunhãs",
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Olinda Nova do Maranhão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Paço do Lumiar',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Palmeirândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Paraibano',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Parnarama',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Passagem Franca',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pastos Bons',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Paulino Neves',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Paulo Ramos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pedreiras',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pedro do Rosário',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Penalva',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Peri Mirim',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Peritoró',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pindaré-mirim',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pinheiro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pio Xii',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pirapemas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Poção de Pedras',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Porto Franco',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Porto Rico do Maranhão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Presidente Dutra',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Presidente Juscelino',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Presidente Médici',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Presidente Sarney',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Presidente Vargas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Primeira Cruz',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Raposa',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Riachão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ribamar Fiquene',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rosário',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Sambaíba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Filomena do Maranhão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Helena',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Inês',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Luzia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Luzia do Paruá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Quitéria do Maranhão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Rita',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santana do Maranhão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santo Amaro do Maranhão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santo Antônio Dos Lopes',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Benedito do Rio Preto',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Bento',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Bernardo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Domingos do Azeitão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Domingos do Maranhão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Félix de Balsas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Francisco do Brejão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Francisco do Maranhão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São João Batista',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São João do Carú',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São João do Paraíso',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São João do Soter',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São João Dos Patos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São José de Ribamar',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São José Dos Basílios',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Luís',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Luís Gonzaga do Maranhão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Mateus do Maranhão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Pedro da Água Branca',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Pedro Dos Crentes',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Raimundo Das Mangabeiras',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Raimundo do Doca Bezerra',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Roberto',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Vicente Ferrer',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Satubinha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Senador Alexandre Costa',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Senador la Rocque',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Serrano do Maranhão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Sítio Novo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Sucupira do Norte',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Sucupira do Riachão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tasso Fragoso',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Timbiras',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Timon',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Trizidela do Vale',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tufilândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tuntum',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Turiaçu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Turilândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tutóia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Urbano Santos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Vargem Grande',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Viana',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Vila Nova Dos Martírios',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Vitória do Mearim',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Vitorino Freire',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Zé Doca',
			cid_estado: estado.est_id,
		});
	});

	await Estado.findOne({
		where: {
			est_desc: 'Mato Grosso',
		},
	}).then(async (estado) => {
		await Cidade.create({
			cid_desc: 'Acorizal',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Água Boa',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Alta Floresta',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Alto Araguaia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Alto Boa Vista',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Alto Garças',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Alto Paraguai',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Alto Taquari',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Apiacás',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Araguaiana',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Araguainha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Araputanga',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Arenápolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Aripuanã',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Barão de Melgaço',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Barra do Bugres',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Barra do Garças',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bom Jesus do Araguaia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Brasnorte',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cáceres',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Campinápolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Campo Novo do Parecis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Campo Verde',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Campos de Júlio',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Canabrava do Norte',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Canarana',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Carlinda',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Castanheira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Chapada Dos Guimarães',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cláudia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cocalinho',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Colíder',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Colniza',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Comodoro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Confresa',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: "Conquista D'oeste",
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cotriguaçu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cuiabá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Curvelândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Denise',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Diamantino',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Dom Aquino',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Feliz Natal',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: "Figueirópolis D'oeste",
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Gaúcha do Norte',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'General Carneiro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: "Glória D'oeste",
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Guarantã do Norte',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Guiratinga',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Indiavaí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ipiranga do Norte',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itanhangá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itaúba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itiquira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jaciara',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jangada',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jauru',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Juara',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Juína',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Juruena',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Juscimeira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: "Lambari D'oeste",
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lucas do Rio Verde',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Luciára',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Marcelândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Matupá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: "Mirassol D'oeste",
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nobres',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nortelândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nossa Senhora do Livramento',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Bandeirantes',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Brasilândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Canaã do Norte',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Guarita',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Lacerda',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Marilândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Maringá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Monte Verde',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Mutum',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Nazaré',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Olímpia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Santa Helena',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Ubiratã',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Xavantina',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Novo Horizonte do Norte',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Novo Mundo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Novo Santo Antônio',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Novo São Joaquim',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Paranaíta',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Paranatinga',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pedra Preta',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Peixoto de Azevedo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Planalto da Serra',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Poconé',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pontal do Araguaia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ponte Branca',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pontes e Lacerda',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Porto Alegre do Norte',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Porto Dos Gaúchos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Porto Esperidião',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Porto Estrela',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Poxoréo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Primavera do Leste',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Querência',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Reserva do Cabaçal',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ribeirão Cascalheira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ribeirãozinho',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rio Branco',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rondolândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rondonópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rosário Oeste',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Salto do Céu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Carmem',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Cruz do Xingu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Rita do Trivelato',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Terezinha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santo Afonso',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santo Antônio do Leste',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santo Antônio do Leverger',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Félix do Araguaia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São José do Povo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São José do Rio Claro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São José do Xingu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São José Dos Quatro Marcos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Pedro da Cipa',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Sapezal',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Serra Nova Dourada',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Sinop',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Sorriso',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tabaporã',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tangará da Serra',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tapurah',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Terra Nova do Norte',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tesouro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Torixoréu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'União do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Vale de São Domingos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Várzea Grande',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Vera',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Vila Bela da Santíssima Trindade',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Vila Rica',
			cid_estado: estado.est_id,
		});
	});

	await Estado.findOne({
		where: {
			est_desc: 'Mato Grosso do Sul',
		},
	}).then(async (estado) => {
		await Cidade.create({
			cid_desc: 'Água Clara',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Alcinópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Amambaí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Anastácio',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Anaurilândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Angélica',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Antônio João',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Aparecida do Taboado',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Aquidauana',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Aral Moreira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bandeirantes',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bataguassu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Batayporã',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bela Vista',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bodoquena',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bonito',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Brasilândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Caarapó',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Camapuã',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Campo Grande',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Caracol',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cassilândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Chapadão do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Corguinho',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Coronel Sapucaia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Corumbá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Costa Rica',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Coxim',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Deodápolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Dois Irmãos do Buriti',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Douradina',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Dourados',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Eldorado',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Fátima do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Figueirão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Glória de Dourados',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Guia Lopes da Laguna',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Iguatemi',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Inocência',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itaporã',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itaquiraí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ivinhema',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Japorã',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jaraguari',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jardim',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jateí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Juti',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ladário',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Laguna Carapã',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Maracaju',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Miranda',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mundo Novo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Naviraí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nioaque',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Alvorada do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Andradina',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Novo Horizonte do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Paraíso das Águas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Paranaíba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Paranhos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pedro Gomes',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ponta Porã',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Porto Murtinho',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ribas do Rio Pardo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rio Brilhante',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rio Negro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rio Verde de Mato Grosso',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rochedo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Rita do Pardo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Gabriel do Oeste',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Selvíria',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Sete Quedas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Sidrolândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Sonora',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tacuru',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Taquarussu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Terenos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Três Lagoas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Vicentina',
			cid_estado: estado.est_id,
		});
	});

	await Estado.findOne({
		where: {
			est_desc: 'Minas Gerais',
		},
	}).then(async (estado) => {
		await Cidade.create({
			cid_desc: 'Abadia Dos Dourados',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Abaeté',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Abre Campo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Acaiaca',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Açucena',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Água Boa',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Água Comprida',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Aguanil',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Águas Formosas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Águas Vermelhas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Aimorés',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Aiuruoca',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Alagoa',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Albertina',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Além Paraíba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Alfenas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Alfredo Vasconcelos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Almenara',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Alpercata',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Alpinópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Alterosa',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Alto Caparaó',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Alto Jequitibá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Alto Rio Doce',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Alvarenga',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Alvinópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Alvorada de Minas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Amparo do Serra',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Andradas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Andrelândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Angelândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Antônio Carlos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Antônio Dias',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Antônio Prado de Minas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Araçaí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Aracitaba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Araçuaí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Araguari',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Arantina',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Araponga',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Araporã',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Arapuá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Araújos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Araxá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Arceburgo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Arcos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Areado',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Argirita',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Aricanduva',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Arinos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Astolfo Dutra',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ataléia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Augusto de Lima',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Baependi',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Baldim',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bambuí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bandeira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bandeira do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Barão de Cocais',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Barão de Monte Alto',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Barbacena',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Barra Longa',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Barroso',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bela Vista de Minas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Belmiro Braga',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Belo Horizonte',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Belo Oriente',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Belo Vale',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Berilo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Berizal',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bertópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Betim',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bias Fortes',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bicas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Biquinhas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Boa Esperança',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bocaina de Minas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bocaiúva',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bom Despacho',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bom Jardim de Minas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bom Jesus da Penha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bom Jesus do Amparo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bom Jesus do Galho',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bom Repouso',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bom Sucesso',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bonfim',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bonfinópolis de Minas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bonito de Minas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Borda da Mata',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Botelhos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Botumirim',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Brás Pires',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Brasilândia de Minas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Brasília de Minas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Brasópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Braúnas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Brumadinho',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bueno Brandão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Buenópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bugre',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Buritis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Buritizeiro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cabeceira Grande',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cabo Verde',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cachoeira da Prata',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cachoeira de Minas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cachoeira de Pajeú',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cachoeira Dourada',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Caetanópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Caeté',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Caiana',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cajuri',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Caldas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Camacho',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Camanducaia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cambuí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cambuquira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Campanário',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Campanha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Campestre',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Campina Verde',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Campo Azul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Campo Belo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Campo do Meio',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Campo Florido',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Campos Altos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Campos Gerais',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cana Verde',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Canaã',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Canápolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Candeias',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cantagalo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Caparaó',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Capela Nova',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Capelinha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Capetinga',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Capim Branco',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Capinópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Capitão Andrade',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Capitão Enéas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Capitólio',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Caputira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Caraí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Caranaíba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Carandaí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Carangola',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Caratinga',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Carbonita',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Careaçu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Carlos Chagas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Carmésia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Carmo da Cachoeira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Carmo da Mata',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Carmo de Minas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Carmo do Cajuru',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Carmo do Paranaíba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Carmo do Rio Claro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Carmópolis de Minas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Carneirinho',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Carrancas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Carvalhópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Carvalhos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Casa Grande',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cascalho Rico',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cássia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cataguases',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Catas Altas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Catas Altas da Noruega',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Catuji',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Catuti',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Caxambu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cedro do Abaeté',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Central de Minas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Centralina',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Chácara',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Chalé',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Chapada do Norte',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Chapada Gaúcha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Chiador',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cipotânea',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Claraval',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Claro Dos Poções',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cláudio',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Coimbra',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Coluna',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Comendador Gomes',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Comercinho',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Conceição da Aparecida',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Conceição da Barra de Minas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Conceição Das Alagoas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Conceição Das Pedras',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Conceição de Ipanema',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Conceição do Mato Dentro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Conceição do Pará',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Conceição do Rio Verde',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Conceição Dos Ouros',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cônego Marinho',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Confins',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Congonhal',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Congonhas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Congonhas do Norte',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Conquista',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Conselheiro Lafaiete',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Conselheiro Pena',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Consolação',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Contagem',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Coqueiral',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Coração de Jesus',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cordisburgo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cordislândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Corinto',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Coroaci',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Coromandel',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Coronel Fabriciano',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Coronel Murta',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Coronel Pacheco',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Coronel Xavier Chaves',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Córrego Danta',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Córrego do Bom Jesus',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Córrego Fundo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Córrego Novo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Couto de Magalhães de Minas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Crisólita',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cristais',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cristália',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cristiano Otoni',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cristina',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Crucilândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cruzeiro da Fortaleza',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cruzília',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cuparaque',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Curral de Dentro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Curvelo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Datas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Delfim Moreira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Delfinópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Delta',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Descoberto',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Desterro de Entre Rios',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Desterro do Melo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Diamantina',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Diogo de Vasconcelos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Dionísio',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Divinésia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Divino',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Divino Das Laranjeiras',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Divinolândia de Minas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Divinópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Divisa Alegre',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Divisa Nova',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Divisópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Dom Bosco',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Dom Cavati',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Dom Joaquim',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Dom Silvério',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Dom Viçoso',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Dona Eusébia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Dores de Campos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Dores de Guanhães',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Dores do Indaiá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Dores do Turvo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Doresópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Douradoquara',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Durandé',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Elói Mendes',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Engenheiro Caldas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Engenheiro Navarro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Entre Folhas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Entre Rios de Minas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ervália',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Esmeraldas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Espera Feliz',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Espinosa',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Espírito Santo do Dourado',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Estiva',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Estrela Dalva',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Estrela do Indaiá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Estrela do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Eugenópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ewbank da Câmara',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Extrema',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Fama',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Faria Lemos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Felício Dos Santos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Felisburgo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Felixlândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Fernandes Tourinho',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ferros',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Fervedouro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Florestal',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Formiga',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Formoso',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Fortaleza de Minas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Fortuna de Minas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Francisco Badaró',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Francisco Dumont',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Francisco sá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Franciscópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Frei Gaspar',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Frei Inocêncio',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Frei Lagonegro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Fronteira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Fronteira Dos Vales',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Fruta de Leite',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Frutal',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Funilândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Galiléia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Gameleiras',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Glaucilândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Goiabeira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Goianá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Gonçalves',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Gonzaga',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Gouveia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Governador Valadares',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Grão Mogol',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Grupiara',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Guanhães',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Guapé',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Guaraciaba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Guaraciama',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Guaranésia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Guarani',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Guarará',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Guarda-mor',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Guaxupé',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Guidoval',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Guimarânia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Guiricema',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Gurinhatã',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Heliodora',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Iapu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ibertioga',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ibiá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ibiaí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ibiracatu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ibiraci',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ibirité',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ibitiúra de Minas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ibituruna',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Icaraí de Minas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Igarapé',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Igaratinga',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Iguatama',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ijaci',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ilicínea',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Imbé de Minas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Inconfidentes',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Indaiabira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Indianópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ingaí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Inhapim',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Inhaúma',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Inimutaba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ipaba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ipanema',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ipatinga',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ipiaçu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ipuiúna',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Iraí de Minas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itabira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itabirinha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itabirito',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itacambira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itacarambi',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itaguara',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itaipé',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itajubá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itamarandiba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itamarati de Minas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itambacuri',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itambé do Mato Dentro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itamogi',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itamonte',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itanhandu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itanhomi',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itaobim',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itapagipe',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itapecerica',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itapeva',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itatiaiuçu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itaú de Minas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itaúna',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itaverava',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itinga',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itueta',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ituiutaba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itumirim',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Iturama',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itutinga',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jaboticatubas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jacinto',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jacuí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jacutinga',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jaguaraçu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jaíba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jampruca',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Janaúba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Januária',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Japaraíba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Japonvar',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jeceaba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jenipapo de Minas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jequeri',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jequitaí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jequitibá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jequitinhonha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jesuânia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Joaíma',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Joanésia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'João Monlevade',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'João Pinheiro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Joaquim Felício',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jordânia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'José Gonçalves de Minas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'José Raydan',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Josenópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Juatuba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Juiz de Fora',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Juramento',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Juruaia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Juvenília',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ladainha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lagamar',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lagoa da Prata',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lagoa Dos Patos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lagoa Dourada',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lagoa Formosa',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lagoa Grande',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lagoa Santa',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lajinha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lambari',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lamim',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Laranjal',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lassance',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lavras',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Leandro Ferreira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Leme do Prado',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Leopoldina',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Liberdade',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lima Duarte',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Limeira do Oeste',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lontra',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Luisburgo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Luislândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Luminárias',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Luz',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Machacalis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Machado',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Madre de Deus de Minas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Malacacheta',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mamonas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Manga',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Manhuaçu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Manhumirim',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mantena',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mar de Espanha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Maravilhas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Maria da fé',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mariana',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Marilac',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mário Campos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Maripá de Minas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Marliéria',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Marmelópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Martinho Campos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Martins Soares',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mata Verde',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Materlândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mateus Leme',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mathias Lobato',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Matias Barbosa',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Matias Cardoso',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Matipó',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mato Verde',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Matozinhos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Matutina',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Medeiros',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Medina',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mendes Pimentel',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mercês',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mesquita',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Minas Novas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Minduri',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mirabela',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Miradouro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Miraí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Miravânia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Moeda',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Moema',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Monjolos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Monsenhor Paulo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Montalvânia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Monte Alegre de Minas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Monte Azul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Monte Belo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Monte Carmelo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Monte Formoso',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Monte Santo de Minas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Monte Sião',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Montes Claros',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Montezuma',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Morada Nova de Minas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Morro da Garça',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Morro do Pilar',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Munhoz',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Muriaé',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mutum',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Muzambinho',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nacip Raydan',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nanuque',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Naque',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Natalândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Natércia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nazareno',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nepomuceno',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ninheira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Belém',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Era',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Lima',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Módica',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Ponte',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Porteirinha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Resende',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Serrana',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova União',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Novo Cruzeiro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Novo Oriente de Minas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Novorizonte',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Olaria',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: "Olhos-d'água",
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Olímpio Noronha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Oliveira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Oliveira Fortes',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Onça de Pitangui',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Oratórios',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Orizânia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ouro Branco',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ouro Fino',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ouro Preto',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ouro Verde de Minas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Padre Carvalho',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Padre Paraíso',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pai Pedro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Paineiras',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pains',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Paiva',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Palma',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Palmópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Papagaios',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pará de Minas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Paracatu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Paraguaçu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Paraisópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Paraopeba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Passa Quatro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Passa Tempo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Passabém',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Passa-vinte',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Passos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Patis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Patos de Minas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Patrocínio',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Patrocínio do Muriaé',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Paula Cândido',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Paulistas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pavão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Peçanha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pedra Azul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pedra Bonita',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pedra do Anta',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pedra do Indaiá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pedra Dourada',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pedralva',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pedras de Maria da Cruz',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pedrinópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pedro Leopoldo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pedro Teixeira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pequeri',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pequi',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Perdigão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Perdizes',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Perdões',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Periquito',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pescador',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Piau',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Piedade de Caratinga',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Piedade de Ponte Nova',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Piedade do Rio Grande',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Piedade Dos Gerais',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pimenta',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: "Pingo-d'água",
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pintópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Piracema',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pirajuba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Piranga',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Piranguçu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Piranguinho',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pirapetinga',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pirapora',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Piraúba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pitangui',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Piumhi',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Planura',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Poço Fundo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Poços de Caldas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pocrane',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pompéu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ponte Nova',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ponto Chique',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ponto Dos Volantes',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Porteirinha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Porto Firme',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Poté',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pouso Alegre',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pouso Alto',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Prados',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Prata',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pratápolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pratinha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Presidente Bernardes',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Presidente Juscelino',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Presidente Kubitschek',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Presidente Olegário',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Prudente de Morais',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Quartel Geral',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Queluzito',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Raposos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Raul Soares',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Recreio',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Reduto',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Resende Costa',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Resplendor',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ressaquinha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Riachinho',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Riacho Dos Machados',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ribeirão Das Neves',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ribeirão Vermelho',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rio Acima',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rio Casca',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rio do Prado',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rio Doce',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rio Espera',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rio Manso',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rio Novo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rio Paranaíba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rio Pardo de Minas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rio Piracicaba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rio Pomba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rio Preto',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rio Vermelho',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ritápolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rochedo de Minas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rodeiro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Romaria',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rosário da Limeira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rubelita',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rubim',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Sabará',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Sabinópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Sacramento',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Salinas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Salto da Divisa',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Bárbara',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Bárbara do Leste',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Bárbara do Monte Verde',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Bárbara do Tugúrio',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Cruz de Minas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Cruz de Salinas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Cruz do Escalvado',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Efigênia de Minas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa fé de Minas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Helena de Minas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Juliana',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Luzia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Margarida',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Maria de Itabira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Maria do Salto',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Maria do Suaçuí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Rita de Caldas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Rita de Ibitipoca',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Rita de Jacutinga',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Rita de Minas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Rita do Itueto',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Rita do Sapucaí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Rosa da Serra',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Vitória',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santana da Vargem',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santana de Cataguases',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santana de Pirapama',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santana do Deserto',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santana do Garambéu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santana do Jacaré',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santana do Manhuaçu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santana do Paraíso',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santana do Riacho',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santana Dos Montes',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santo Antônio do Amparo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santo Antônio do Aventureiro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santo Antônio do Grama',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santo Antônio do Itambé',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santo Antônio do Jacinto',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santo Antônio do Monte',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santo Antônio do Retiro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santo Antônio do Rio Abaixo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santo Hipólito',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santos Dumont',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Bento Abade',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Brás do Suaçuí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Domingos Das Dores',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Domingos do Prata',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Félix de Minas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Francisco',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Francisco de Paula',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Francisco de Sales',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Francisco do Glória',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Geraldo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Geraldo da Piedade',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Geraldo do Baixio',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Gonçalo do Abaeté',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Gonçalo do Pará',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Gonçalo do Rio Abaixo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Gonçalo do Rio Preto',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Gonçalo do Sapucaí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Gotardo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São João Batista do Glória',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São João da Lagoa',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São João da Mata',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São João da Ponte',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São João Das Missões',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São João Del Rei',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São João do Manhuaçu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São João do Manteninha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São João do Oriente',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São João do Pacuí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São João do Paraíso',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São João Evangelista',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São João Nepomuceno',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Joaquim de Bicas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São José da Barra',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São José da Lapa',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São José da Safira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São José da Varginha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São José do Alegre',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São José do Divino',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São José do Goiabal',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São José do Jacuri',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São José do Mantimento',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Lourenço',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Miguel do Anta',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Pedro da União',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Pedro do Suaçuí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Pedro Dos Ferros',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Romão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Roque de Minas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Sebastião da Bela Vista',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Sebastião da Vargem Alegre',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Sebastião do Anta',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Sebastião do Maranhão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Sebastião do Oeste',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Sebastião do Paraíso',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Sebastião do Rio Preto',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Sebastião do Rio Verde',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Thomé Das Letras',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Tiago',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Tomás de Aquino',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Vicente de Minas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Sapucaí-mirim',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Sardoá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Sarzedo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Sem-peixe',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Senador Amaral',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Senador Cortes',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Senador Firmino',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Senador José Bento',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Senador Modestino Gonçalves',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Senhora de Oliveira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Senhora do Porto',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Senhora Dos Remédios',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Sericita',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Seritinga',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Serra Azul de Minas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Serra da Saudade',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Serra do Salitre',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Serra Dos Aimorés',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Serrania',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Serranópolis de Minas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Serranos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Serro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Sete Lagoas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Setubinha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Silveirânia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Silvianópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Simão Pereira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Simonésia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Sobrália',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Soledade de Minas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tabuleiro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Taiobeiras',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Taparuba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tapira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tapiraí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Taquaraçu de Minas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tarumirim',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Teixeiras',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Teófilo Otoni',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Timóteo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tiradentes',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tiros',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tocantins',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tocos do Moji',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Toledo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tombos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Três Corações',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Três Marias',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Três Pontas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tumiritinga',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tupaciguara',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Turmalina',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Turvolândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ubá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ubaí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ubaporanga',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Uberaba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Uberlândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Umburatiba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Unaí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'União de Minas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Uruana de Minas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Urucânia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Urucuia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Vargem Alegre',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Vargem Bonita',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Vargem Grande do Rio Pardo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Varginha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Varjão de Minas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Várzea da Palma',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Varzelândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Vazante',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Verdelândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Veredinha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Veríssimo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Vermelho Novo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Vespasiano',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Viçosa',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Vieiras',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Virgem da Lapa',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Virgínia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Virginópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Virgolândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Visconde do Rio Branco',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Volta Grande',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Wenceslau Braz',
			cid_estado: estado.est_id,
		});
	});

	await Estado.findOne({
		where: {
			est_desc: 'Pará',
		},
	}).then(async (estado) => {
		await Cidade.create({
			cid_desc: 'Abaetetuba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Abel Figueiredo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Acará',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Afuá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Água Azul do Norte',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Alenquer',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Almeirim',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Altamira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Anajás',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ananindeua',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Anapu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Augusto Corrêa',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Aurora do Pará',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Aveiro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bagre',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Baião',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bannach',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Barcarena',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Belém',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Belterra',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Benevides',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bom Jesus do Tocantins',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bonito',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bragança',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Brasil Novo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Brejo Grande do Araguaia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Breu Branco',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Breves',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bujaru',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cachoeira do Arari',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cachoeira do Piriá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cametá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Canaã Dos Carajás',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Capanema',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Capitão Poço',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Castanhal',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Chaves',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Colares',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Conceição do Araguaia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Concórdia do Pará',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cumaru do Norte',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Curionópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Curralinho',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Curuá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Curuçá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Dom Eliseu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Eldorado Dos Carajás',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Faro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Floresta do Araguaia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Garrafão do Norte',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Goianésia do Pará',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Gurupá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Igarapé-açu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Igarapé-miri',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Inhangapi',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ipixuna do Pará',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Irituia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itaituba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itupiranga',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jacareacanga',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jacundá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Juruti',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Limoeiro do Ajuru',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mãe do Rio',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Magalhães Barata',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Marabá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Maracanã',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Marapanim',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Marituba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Medicilândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Melgaço',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mocajuba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Moju',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mojuí dos Campos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Monte Alegre',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Muaná',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Esperança do Piriá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Ipixuna',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Timboteua',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Novo Progresso',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Novo Repartimento',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Óbidos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Oeiras do Pará',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Oriximiná',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ourém',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ourilândia do Norte',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pacajá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Palestina do Pará',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Paragominas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Parauapebas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: "Pau D'arco",
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Peixe-boi',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Piçarra',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Placas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ponta de Pedras',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Portel',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Porto de Moz',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Prainha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Primavera',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Quatipuru',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Redenção',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rio Maria',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rondon do Pará',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rurópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Salinópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Salvaterra',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Bárbara do Pará',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Cruz do Arari',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Isabel do Pará',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Luzia do Pará',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Maria Das Barreiras',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Maria do Pará',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santana do Araguaia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santarém',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santarém Novo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santo Antônio do Tauá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Caetano de Odivelas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Domingos do Araguaia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Domingos do Capim',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Félix do Xingu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Francisco do Pará',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Geraldo do Araguaia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São João da Ponta',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São João de Pirabas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São João do Araguaia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Miguel do Guamá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Sebastião da Boa Vista',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Sapucaia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Senador José Porfírio',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Soure',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tailândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Terra Alta',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Terra Santa',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tomé-açu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tracuateua',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Trairão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tucumã',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tucuruí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ulianópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Uruará',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Vigia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Viseu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Vitória do Xingu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Xinguara',
			cid_estado: estado.est_id,
		});
	});

	await Estado.findOne({
		where: {
			est_desc: 'Paraíba',
		},
	}).then(async (estado) => {
		await Cidade.create({
			cid_desc: 'Água Branca',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Aguiar',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Alagoa Grande',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Alagoa Nova',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Alagoinha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Alcantil',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Algodão de Jandaíra',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Alhandra',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Amparo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Aparecida',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Araçagi',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Arara',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Araruna',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Areia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Areia de Baraúnas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Areial',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Aroeiras',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Assunção',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Baía da Traição',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bananeiras',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Baraúna',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Barra de Santa Rosa',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Barra de Santana',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Barra de São Miguel',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bayeux',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Belém',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Belém do Brejo do Cruz',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bernardino Batista',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Boa Ventura',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Boa Vista',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bom Jesus',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bom Sucesso',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bonito de Santa fé',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Boqueirão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Borborema',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Brejo do Cruz',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Brejo Dos Santos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Caaporã',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cabaceiras',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cabedelo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cachoeira Dos Índios',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cacimba de Areia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cacimba de Dentro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cacimbas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Caiçara',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cajazeiras',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cajazeirinhas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Caldas Brandão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Camalaú',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Campina Grande',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Campo de Santana',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Capim',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Caraúbas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Carrapateira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Casserengue',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Catingueira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Catolé do Rocha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Caturité',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Conceição',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Condado',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Conde',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Congo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Coremas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Coxixola',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cruz do Espírito Santo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cubati',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cuité',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cuité de Mamanguape',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cuitegi',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Curral de Cima',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Curral Velho',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Damião',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Desterro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Diamante',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Dona Inês',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Duas Estradas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Emas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Esperança',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Fagundes',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Frei Martinho',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Gado Bravo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Guarabira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Gurinhém',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Gurjão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ibiara',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Igaracy',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Imaculada',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ingá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itabaiana',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itaporanga',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itapororoca',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itatuba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jacaraú',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jericó',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'João Pessoa',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Juarez Távora',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Juazeirinho',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Junco do Seridó',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Juripiranga',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Juru',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lagoa',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lagoa de Dentro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lagoa Seca',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lastro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Livramento',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Logradouro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lucena',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: "Mãe D'água",
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Malta',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mamanguape',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Manaíra',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Marcação',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mari',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Marizópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Massaranduba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mataraca',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Matinhas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mato Grosso',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Maturéia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mogeiro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Montadas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Monte Horebe',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Monteiro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mulungu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Natuba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nazarezinho',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Floresta',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Olinda',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Palmeira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: "Olho D'água",
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Olivedos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ouro Velho',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Parari',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Passagem',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Patos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Paulista',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pedra Branca',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pedra Lavrada',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pedras de Fogo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pedro Régis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Piancó',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Picuí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pilar',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pilões',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pilõezinhos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pirpirituba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pitimbu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pocinhos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Poço Dantas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Poço de José de Moura',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pombal',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Prata',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Princesa Isabel',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Puxinanã',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Queimadas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Quixabá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Remígio',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Riachão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Riachão do Bacamarte',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Riachão do Poço',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Riacho de Santo Antônio',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Riacho Dos Cavalos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rio Tinto',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Salgadinho',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Salgado de São Félix',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Cecília',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Cruz',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Helena',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Inês',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Luzia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Rita',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Teresinha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santana de Mangueira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santana Dos Garrotes',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santarém',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santo André',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Bentinho',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Bento',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Domingos de Pombal',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Domingos do Cariri',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Francisco',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São João do Cariri',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São João do Rio do Peixe',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São João do Tigre',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São José da Lagoa Tapada',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São José de Caiana',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São José de Espinharas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São José de Piranhas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São José de Princesa',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São José do Bonfim',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São José do Brejo do Cruz',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São José do Sabugi',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São José Dos Cordeiros',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São José Dos Ramos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Mamede',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Miguel de Taipu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Sebastião de Lagoa de Roça',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Sebastião do Umbuzeiro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Sapé',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Seridó',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Serra Branca',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Serra da Raiz',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Serra Grande',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Serra Redonda',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Serraria',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Sertãozinho',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Sobrado',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Solânea',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Soledade',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Sossêgo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Sousa',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Sumé',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Taperoá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tavares',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Teixeira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tenório',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Triunfo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Uiraúna',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Umbuzeiro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Várzea',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Vieirópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Vista Serrana',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Zabelê',
			cid_estado: estado.est_id,
		});
	});

	await Estado.findOne({
		where: {
			est_desc: 'Paraná',
		},
	}).then(async (estado) => {
		await Cidade.create({
			cid_desc: 'Abatiá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Adrianópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Agudos do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Almirante Tamandaré',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Altamira do Paraná',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Alto Paraná',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Alto Piquiri',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Altônia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Alvorada do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Amaporã',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ampére',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Anahy',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Andirá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ângulo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Antonina',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Antônio Olinto',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Apucarana',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Arapongas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Arapoti',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Arapuã',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Araruna',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Araucária',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ariranha do Ivaí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Assaí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Assis Chateaubriand',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Astorga',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Atalaia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Balsa Nova',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bandeirantes',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Barbosa Ferraz',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Barra do Jacaré',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Barracão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bela Vista da Caroba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bela Vista do Paraíso',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bituruna',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Boa Esperança',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Boa Esperança do Iguaçu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Boa Ventura de São Roque',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Boa Vista da Aparecida',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bocaiúva do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bom Jesus do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bom Sucesso',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bom Sucesso do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Borrazópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Braganey',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Brasilândia do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cafeara',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cafelândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cafezal do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Califórnia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cambará',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cambé',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cambira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Campina da Lagoa',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Campina do Simão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Campina Grande do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Campo Bonito',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Campo do Tenente',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Campo Largo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Campo Magro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Campo Mourão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cândido de Abreu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Candói',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cantagalo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Capanema',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Capitão Leônidas Marques',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Carambeí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Carlópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cascavel',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Castro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Catanduvas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Centenário do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cerro Azul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Céu Azul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Chopinzinho',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cianorte',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cidade Gaúcha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Clevelândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Colombo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Colorado',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Congonhinhas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Conselheiro Mairinck',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Contenda',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Corbélia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cornélio Procópio',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Coronel Domingos Soares',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Coronel Vivida',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Corumbataí do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cruz Machado',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cruzeiro do Iguaçu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cruzeiro do Oeste',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cruzeiro do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cruzmaltina',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Curitiba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Curiúva',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: "Diamante D'oeste",
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Diamante do Norte',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Diamante do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Dois Vizinhos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Douradina',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Doutor Camargo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Doutor Ulysses',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Enéas Marques',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Engenheiro Beltrão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Entre Rios do Oeste',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Esperança Nova',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Espigão Alto do Iguaçu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Farol',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Faxinal',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Fazenda Rio Grande',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Fênix',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Fernandes Pinheiro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Figueira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Flor da Serra do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Floraí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Floresta',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Florestópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Flórida',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Formosa do Oeste',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Foz do Iguaçu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Foz do Jordão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Francisco Alves',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Francisco Beltrão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'General Carneiro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Godoy Moreira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Goioerê',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Goioxim',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Grandes Rios',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Guaíra',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Guairaçá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Guamiranga',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Guapirama',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Guaporema',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Guaraci',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Guaraniaçu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Guarapuava',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Guaraqueçaba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Guaratuba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Honório Serpa',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ibaiti',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ibema',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ibiporã',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Icaraíma',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Iguaraçu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Iguatu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Imbaú',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Imbituva',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Inácio Martins',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Inajá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Indianópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ipiranga',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Iporã',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Iracema do Oeste',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Irati',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Iretama',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itaguajé',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itaipulândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itambaracá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itambé',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: "Itapejara D'oeste",
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itaperuçu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itaúna do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ivaí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ivaiporã',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ivaté',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ivatuba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jaboti',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jacarezinho',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jaguapitã',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jaguariaíva',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jandaia do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Janiópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Japira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Japurá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jardim Alegre',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jardim Olinda',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jataizinho',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jesuítas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Joaquim Távora',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jundiaí do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Juranda',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jussara',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Kaloré',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lapa',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Laranjal',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Laranjeiras do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Leópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lidianópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lindoeste',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Loanda',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lobato',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Londrina',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Luiziana',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lunardelli',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lupionópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mallet',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mamborê',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mandaguaçu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mandaguari',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mandirituba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Manfrinópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mangueirinha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Manoel Ribas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Marechal Cândido Rondon',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Maria Helena',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Marialva',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Marilândia do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Marilena',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mariluz',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Maringá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mariópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Maripá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Marmeleiro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Marquinho',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Marumbi',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Matelândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Matinhos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mato Rico',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mauá da Serra',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Medianeira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mercedes',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mirador',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Miraselva',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Missal',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Moreira Sales',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Morretes',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Munhoz de Melo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nossa Senhora Das Graças',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Aliança do Ivaí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova América da Colina',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Aurora',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Cantu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Esperança',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Esperança do Sudoeste',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Fátima',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Laranjeiras',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Londrina',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Olímpia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Prata do Iguaçu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Santa Bárbara',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Santa Rosa',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Tebas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Novo Itacolomi',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ortigueira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ourizona',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ouro Verde do Oeste',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Paiçandu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Palmas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Palmeira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Palmital',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Palotina',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Paraíso do Norte',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Paranacity',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Paranaguá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Paranapoema',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Paranavaí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pato Bragado',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pato Branco',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Paula Freitas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Paulo Frontin',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Peabiru',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Perobal',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pérola',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: "Pérola D'oeste",
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Piên',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pinhais',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pinhal de São Bento',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pinhalão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pinhão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Piraí do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Piraquara',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pitanga',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pitangueiras',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Planaltina do Paraná',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Planalto',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ponta Grossa',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pontal do Paraná',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Porecatu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Porto Amazonas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Porto Barreiro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Porto Rico',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Porto Vitória',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Prado Ferreira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pranchita',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Presidente Castelo Branco',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Primeiro de Maio',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Prudentópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Quarto Centenário',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Quatiguá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Quatro Barras',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Quatro Pontes',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Quedas do Iguaçu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Querência do Norte',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Quinta do Sol',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Quitandinha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ramilândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rancho Alegre',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: "Rancho Alegre D'oeste",
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Realeza',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rebouças',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Renascença',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Reserva',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Reserva do Iguaçu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ribeirão Claro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ribeirão do Pinhal',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rio Azul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rio Bom',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rio Bonito do Iguaçu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rio Branco do Ivaí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rio Branco do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rio Negro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rolândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Roncador',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rondon',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rosário do Ivaí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Sabáudia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Salgado Filho',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Salto do Itararé',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Salto do Lontra',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Amélia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Cecília do Pavão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Cruz de Monte Castelo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa fé',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Helena',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Inês',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Isabel do Ivaí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Izabel do Oeste',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Lúcia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Maria do Oeste',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Mariana',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Mônica',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Tereza do Oeste',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Terezinha de Itaipu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santana do Itararé',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santo Antônio da Platina',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santo Antônio do Caiuá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santo Antônio do Paraíso',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santo Antônio do Sudoeste',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santo Inácio',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Carlos do Ivaí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Jerônimo da Serra',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São João',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São João do Caiuá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São João do Ivaí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São João do Triunfo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: "São Jorge D'oeste",
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Jorge do Ivaí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Jorge do Patrocínio',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São José da Boa Vista',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São José Das Palmeiras',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São José Dos Pinhais',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Manoel do Paraná',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Mateus do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Miguel do Iguaçu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Pedro do Iguaçu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Pedro do Ivaí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Pedro do Paraná',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Sebastião da Amoreira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Tomé',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Sapopema',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Sarandi',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Saudade do Iguaçu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Sengés',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Serranópolis do Iguaçu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Sertaneja',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Sertanópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Siqueira Campos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Sulina',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tamarana',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tamboara',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tapejara',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tapira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Teixeira Soares',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Telêmaco Borba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Terra Boa',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Terra Rica',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Terra Roxa',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tibagi',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tijucas do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Toledo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tomazina',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Três Barras do Paraná',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tunas do Paraná',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tuneiras do Oeste',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tupãssi',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Turvo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ubiratã',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Umuarama',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'União da Vitória',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Uniflor',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Uraí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ventania',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Vera Cruz do Oeste',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Verê',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Vila Alta',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Virmond',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Vitorino',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Wenceslau Braz',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Xambrê',
			cid_estado: estado.est_id,
		});
	});

	await Estado.findOne({
		where: {
			est_desc: 'Pernambuco',
		},
	}).then(async (estado) => {
		await Cidade.create({
			cid_desc: 'Abreu e Lima',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Afogados da Ingazeira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Afrânio',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Agrestina',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Água Preta',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Águas Belas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Alagoinha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Aliança',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Altinho',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Amaraji',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Angelim',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Araçoiaba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Araripina',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Arcoverde',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Barra de Guabiraba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Barreiros',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Belém de Maria',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Belém de São Francisco',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Belo Jardim',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Betânia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bezerros',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bodocó',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bom Conselho',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bom Jardim',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bonito',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Brejão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Brejinho',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Brejo da Madre de Deus',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Buenos Aires',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Buíque',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cabo de Santo Agostinho',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cabrobó',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cachoeirinha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Caetés',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Calçado',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Calumbi',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Camaragibe',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Camocim de São Félix',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Camutanga',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Canhotinho',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Capoeiras',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Carnaíba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Carnaubeira da Penha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Carpina',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Caruaru',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Casinhas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Catende',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cedro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Chã de Alegria',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Chã Grande',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Condado',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Correntes',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cortês',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cumaru',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cupira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Custódia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Dormentes',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Escada',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Exu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Feira Nova',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Fernando de Noronha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ferreiros',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Flores',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Floresta',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Frei Miguelinho',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Gameleira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Garanhuns',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Glória do Goitá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Goiana',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Granito',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Gravatá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Iati',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ibimirim',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ibirajuba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Igarassu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Iguaraci',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ilha de Itamaracá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Inajá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ingazeira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ipojuca',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ipubi',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itacuruba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itaíba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itambé',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itapetim',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itapissuma',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itaquitinga',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jaboatão Dos Guararapes',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jaqueira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jataúba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jatobá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'João Alfredo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Joaquim Nabuco',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jucati',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jupi',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jurema',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lagoa do Carro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lagoa do Itaenga',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lagoa do Ouro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lagoa Dos Gatos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lagoa Grande',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lajedo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Limoeiro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Macaparana',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Machados',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Manari',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Maraial',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mirandiba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Moreilândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Moreno',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nazaré da Mata',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Olinda',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Orobó',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Orocó',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ouricuri',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Palmares',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Palmeirina',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Panelas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Paranatama',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Parnamirim',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Passira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Paudalho',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Paulista',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pedra',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pesqueira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Petrolândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Petrolina',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Poção',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pombos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Primavera',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Quipapá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Quixaba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Recife',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Riacho Das Almas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ribeirão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rio Formoso',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Sairé',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Salgadinho',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Salgueiro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Saloá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Sanharó',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Cruz',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Cruz da Baixa Verde',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Cruz do Capibaribe',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Filomena',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Maria da Boa Vista',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Maria do Cambucá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Terezinha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Benedito do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Bento do Una',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Caitano',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São João',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Joaquim do Monte',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São José da Coroa Grande',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São José do Belmonte',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São José do Egito',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Lourenço da Mata',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Vicente Ferrer',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Serra Talhada',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Serrita',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Sertânia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Sirinhaém',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Solidão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Surubim',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tabira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tacaimbó',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tacaratu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tamandaré',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Taquaritinga do Norte',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Terezinha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Terra Nova',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Timbaúba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Toritama',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tracunhaém',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Trindade',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Triunfo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tupanatinga',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tuparetama',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Venturosa',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Verdejante',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Vertente do Lério',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Vertentes',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Vicência',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Vitória de Santo Antão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Xexéu',
			cid_estado: estado.est_id,
		});
	});

	await Estado.findOne({
		where: {
			est_desc: 'Piauí',
		},
	}).then(async (estado) => {
		await Cidade.create({
			cid_desc: 'Acauã',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Agricolândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Água Branca',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Alagoinha do Piauí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Alegrete do Piauí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Alto Longá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Altos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Alvorada do Gurguéia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Amarante',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Angical do Piauí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Anísio de Abreu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Antônio Almeida',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Aroazes',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Aroeiras do Itaim',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Arraial',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Assunção do Piauí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Avelino Lopes',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Baixa Grande do Ribeiro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: "Barra D'alcântara",
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Barras',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Barreiras do Piauí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Barro Duro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Batalha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bela Vista do Piauí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Belém do Piauí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Beneditinos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bertolínia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Betânia do Piauí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Boa Hora',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bocaina',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bom Jesus',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bom Princípio do Piauí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bonfim do Piauí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Boqueirão do Piauí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Brasileira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Brejo do Piauí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Buriti Dos Lopes',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Buriti Dos Montes',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cabeceiras do Piauí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cajazeiras do Piauí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cajueiro da Praia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Caldeirão Grande do Piauí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Campinas do Piauí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Campo Alegre do Fidalgo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Campo Grande do Piauí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Campo Largo do Piauí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Campo Maior',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Canavieira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Canto do Buriti',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Capitão de Campos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Capitão Gervásio Oliveira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Caracol',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Caraúbas do Piauí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Caridade do Piauí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Castelo do Piauí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Caxingó',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cocal',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cocal de Telha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cocal Dos Alves',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Coivaras',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Colônia do Gurguéia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Colônia do Piauí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Conceição do Canindé',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Coronel José Dias',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Corrente',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cristalândia do Piauí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cristino Castro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Curimatá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Currais',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Curral Novo do Piauí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Curralinhos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Demerval Lobão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Dirceu Arcoverde',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Dom Expedito Lopes',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Dom Inocêncio',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Domingos Mourão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Elesbão Veloso',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Eliseu Martins',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Esperantina',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Fartura do Piauí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Flores do Piauí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Floresta do Piauí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Floriano',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Francinópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Francisco Ayres',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Francisco Macedo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Francisco Santos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Fronteiras',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Geminiano',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Gilbués',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Guadalupe',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Guaribas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Hugo Napoleão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ilha Grande',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Inhuma',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ipiranga do Piauí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Isaías Coelho',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itainópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itaueira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jacobina do Piauí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jaicós',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jardim do Mulato',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jatobá do Piauí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jerumenha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'João Costa',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Joaquim Pires',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Joca Marques',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'José de Freitas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Juazeiro do Piauí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Júlio Borges',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jurema',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lagoa Alegre',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lagoa de São Francisco',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lagoa do Barro do Piauí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lagoa do Piauí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lagoa do Sítio',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lagoinha do Piauí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Landri Sales',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Luís Correia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Luzilândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Madeiro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Manoel Emídio',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Marcolândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Marcos Parente',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Massapê do Piauí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Matias Olímpio',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Miguel Alves',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Miguel Leão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Milton Brandão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Monsenhor Gil',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Monsenhor Hipólito',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Monte Alegre do Piauí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Morro Cabeça no Tempo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Morro do Chapéu do Piauí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Murici Dos Portelas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nazaré do Piauí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nazária',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nossa Senhora de Nazaré',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nossa Senhora Dos Remédios',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Santa Rita',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Novo Oriente do Piauí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Novo Santo Antônio',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Oeiras',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: "Olho D'água do Piauí",
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Padre Marcos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Paes Landim',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pajeú do Piauí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Palmeira do Piauí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Palmeirais',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Paquetá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Parnaguá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Parnaíba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Passagem Franca do Piauí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Patos do Piauí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: "Pau D'arco do Piauí",
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Paulistana',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pavussu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pedro ii',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pedro Laurentino',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Picos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pimenteiras',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pio ix',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Piracuruca',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Piripiri',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Porto',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Porto Alegre do Piauí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Prata do Piauí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Queimada Nova',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Redenção do Gurguéia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Regeneração',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Riacho Frio',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ribeira do Piauí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ribeiro Gonçalves',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rio Grande do Piauí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Cruz do Piauí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Cruz Dos Milagres',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Filomena',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Luz',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Rosa do Piauí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santana do Piauí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santo Antônio de Lisboa',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santo Antônio Dos Milagres',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santo Inácio do Piauí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Braz do Piauí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Félix do Piauí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Francisco de Assis do Piauí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Francisco do Piauí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Gonçalo do Gurguéia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Gonçalo do Piauí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São João da Canabrava',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São João da Fronteira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São João da Serra',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São João da Varjota',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São João do Arraial',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São João do Piauí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São José do Divino',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São José do Peixe',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São José do Piauí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Julião',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Lourenço do Piauí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Luis do Piauí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Miguel da Baixa Grande',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Miguel do Fidalgo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Miguel do Tapuio',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Pedro do Piauí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Raimundo Nonato',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Sebastião Barros',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Sebastião Leal',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Sigefredo Pacheco',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Simões',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Simplício Mendes',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Socorro do Piauí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Sussuapara',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tamboril do Piauí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tanque do Piauí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Teresina',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'União',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Uruçuí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Valença do Piauí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Várzea Branca',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Várzea Grande',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Vera Mendes',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Vila Nova do Piauí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Wall Ferraz',
			cid_estado: estado.est_id,
		});
	});

	await Estado.findOne({
		where: {
			est_desc: 'Rio de Janeiro',
		},
	}).then(async (estado) => {
		await Cidade.create({
			cid_desc: 'Angra Dos Reis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Aperibé',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Araruama',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Areal',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Armação Dos Búzios',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Arraial do Cabo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Barra do Piraí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Barra Mansa',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Belford Roxo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bom Jardim',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bom Jesus do Itabapoana',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cabo Frio',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cachoeiras de Macacu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cambuci',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Campos Dos Goytacazes',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cantagalo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Carapebus',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cardoso Moreira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Carmo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Casimiro de Abreu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Comendador Levy Gasparian',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Conceição de Macabu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cordeiro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Duas Barras',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Duque de Caxias',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Engenheiro Paulo de Frontin',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Guapimirim',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Iguaba Grande',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itaboraí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itaguaí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Italva',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itaocara',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itaperuna',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itatiaia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Japeri',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Laje do Muriaé',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Macaé',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Macuco',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Magé',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mangaratiba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Maricá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mendes',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mesquita',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Miguel Pereira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Miracema',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Natividade',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nilópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Niterói',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Friburgo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Iguaçu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Paracambi',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Paraíba do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Parati',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Paty do Alferes',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Petrópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pinheiral',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Piraí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Porciúncula',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Porto Real',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Quatis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Queimados',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Quissamã',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Resende',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rio Bonito',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rio Claro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rio Das Flores',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rio Das Ostras',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rio de Janeiro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Maria Madalena',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santo Antônio de Pádua',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Fidélis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Francisco de Itabapoana',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Gonçalo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São João da Barra',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São João de Meriti',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São José de Ubá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São José do Vale do Rio Preto',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Pedro da Aldeia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Sebastião do Alto',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Sapucaia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Saquarema',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Seropédica',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Silva Jardim',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Sumidouro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tanguá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Teresópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Trajano de Morais',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Três Rios',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Valença',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Varre-sai',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Vassouras',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Volta Redonda',
			cid_estado: estado.est_id,
		});
	});

	await Estado.findOne({
		where: {
			est_desc: 'Rio Grande do Norte',
		},
	}).then(async (estado) => {
		await Cidade.create({
			cid_desc: 'Acari',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Açu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Afonso Bezerra',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Água Nova',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Alexandria',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Almino Afonso',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Alto do Rodrigues',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Angicos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Antônio Martins',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Apodi',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Areia Branca',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Arês',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Augusto Severo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Baía Formosa',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Baraúna',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Barcelona',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bento Fernandes',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bodó',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bom Jesus',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Brejinho',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Caiçara do Norte',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Caiçara do Rio do Vento',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Caicó',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Campo Redondo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Canguaretama',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Caraúbas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Carnaúba Dos Dantas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Carnaubais',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ceará-mirim',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cerro Corá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Coronel Ezequiel',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Coronel João Pessoa',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cruzeta',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Currais Novos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Doutor Severiano',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Encanto',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Equador',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Espírito Santo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Extremoz',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Felipe Guerra',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Fernando Pedroza',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Florânia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Francisco Dantas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Frutuoso Gomes',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Galinhos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Goianinha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Governador Dix-sept Rosado',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Grossos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Guamaré',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ielmo Marinho',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ipanguaçu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ipueira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itajá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itaú',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jaçanã',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jandaíra',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Janduís',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Januário Cicco',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Japi',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jardim de Angicos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jardim de Piranhas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jardim do Seridó',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'João Câmara',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'João Dias',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'José da Penha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jucurutu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jundiá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: "Lagoa D'anta",
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lagoa de Pedras',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lagoa de Velhos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lagoa Nova',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lagoa Salgada',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lajes',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lajes Pintadas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lucrécia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Luís Gomes',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Macaíba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Macau',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Major Sales',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Marcelino Vieira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Martins',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Maxaranguape',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Messias Targino',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Montanhas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Monte Alegre',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Monte Das Gameleiras',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mossoró',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Natal',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nísia Floresta',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Cruz',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: "Olho-d'água do Borges",
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ouro Branco',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Paraná',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Paraú',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Parazinho',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Parelhas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Parnamirim',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Passa e Fica',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Passagem',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Patu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pau Dos Ferros',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pedra Grande',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pedra Preta',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pedro Avelino',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pedro Velho',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pendências',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pilões',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Poço Branco',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Portalegre',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Porto do Mangue',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Presidente Juscelino',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pureza',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rafael Fernandes',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rafael Godeiro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Riacho da Cruz',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Riacho de Santana',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Riachuelo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rio do Fogo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rodolfo Fernandes',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ruy Barbosa',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Cruz',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Maria',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santana do Matos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santana do Seridó',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santo Antônio',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Bento do Norte',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Bento do Trairí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Fernando',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Francisco do Oeste',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Gonçalo do Amarante',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São João do Sabugi',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São José de Mipibu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São José do Campestre',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São José do Seridó',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Miguel',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Miguel do Gostoso',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Paulo do Potengi',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Pedro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Rafael',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Tomé',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Vicente',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Senador Elói de Souza',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Senador Georgino Avelino',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Serra de São Bento',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Serra do Mel',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Serra Negra do Norte',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Serrinha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Serrinha Dos Pintos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Severiano Melo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Sítio Novo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Taboleiro Grande',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Taipu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tangará',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tenente Ananias',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tenente Laurentino Cruz',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tibau',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tibau do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Timbaúba Dos Batistas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Touros',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Triunfo Potiguar',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Umarizal',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Upanema',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Várzea',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Venha-ver',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Vera Cruz',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Viçosa',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Vila Flor',
			cid_estado: estado.est_id,
		});
	});

	await Estado.findOne({
		where: {
			est_desc: 'Rio Grande do Sul',
		},
	}).then(async (estado) => {
		await Cidade.create({
			cid_desc: 'Aceguá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Água Santa',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Agudo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ajuricaba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Alecrim',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Alegrete',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Alegria',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Almirante Tamandaré do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Alpestre',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Alto Alegre',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Alto Feliz',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Alvorada',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Amaral Ferrador',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ametista do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'André da Rocha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Anta Gorda',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Antônio Prado',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Arambaré',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Araricá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Aratiba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Arroio do Meio',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Arroio do Padre',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Arroio do Sal',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Arroio do Tigre',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Arroio Dos Ratos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Arroio Grande',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Arvorezinha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Augusto Pestana',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Áurea',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bagé',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Balneário Pinhal',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Barão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Barão de Cotegipe',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Barão do Triunfo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Barra do Guarita',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Barra do Quaraí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Barra do Ribeiro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Barra do Rio Azul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Barra Funda',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Barracão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Barros Cassal',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Benjamin Constant do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bento Gonçalves',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Boa Vista Das Missões',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Boa Vista do Buricá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Boa Vista do Cadeado',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Boa Vista do Incra',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Boa Vista do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bom Jesus',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bom Princípio',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bom Progresso',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bom Retiro do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Boqueirão do Leão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bossoroca',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bozano',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Braga',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Brochier',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Butiá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Caçapava do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cacequi',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cachoeira do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cachoeirinha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cacique Doble',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Caibaté',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Caiçara',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Camaquã',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Camargo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cambará do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Campestre da Serra',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Campina Das Missões',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Campinas do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Campo Bom',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Campo Novo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Campos Borges',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Candelária',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cândido Godói',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Candiota',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Canela',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Canguçu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Canoas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Canudos do Vale',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Capão Bonito do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Capão da Canoa',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Capão do Cipó',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Capão do Leão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Capela de Santana',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Capitão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Capivari do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Caraá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Carazinho',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Carlos Barbosa',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Carlos Gomes',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Casca',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Caseiros',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Catuípe',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Caxias do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Centenário',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cerrito',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cerro Branco',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cerro Grande',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cerro Grande do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cerro Largo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Chapada',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Charqueadas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Charrua',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Chiapetta',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Chuí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Chuvisca',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cidreira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ciríaco',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Colinas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Colorado',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Condor',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Constantina',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Coqueiro Baixo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Coqueiros do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Coronel Barros',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Coronel Bicaco',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Coronel Pilar',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cotiporã',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Coxilha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Crissiumal',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cristal',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cristal do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cruz Alta',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cruzaltense',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cruzeiro do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'David Canabarro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Derrubadas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Dezesseis de Novembro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Dilermando de Aguiar',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Dois Irmãos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Dois Irmãos Das Missões',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Dois Lajeados',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Dom Feliciano',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Dom Pedrito',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Dom Pedro de Alcântara',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Dona Francisca',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Doutor Maurício Cardoso',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Doutor Ricardo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Eldorado do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Encantado',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Encruzilhada do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Engenho Velho',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Entre Rios do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Entre-ijuís',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Erebango',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Erechim',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ernestina',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Erval Grande',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Erval Seco',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Esmeralda',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Esperança do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Espumoso',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Estação',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Estância Velha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Esteio',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Estrela',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Estrela Velha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Eugênio de Castro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Fagundes Varela',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Farroupilha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Faxinal do Soturno',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Faxinalzinho',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Fazenda Vilanova',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Feliz',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Flores da Cunha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Floriano Peixoto',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Fontoura Xavier',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Formigueiro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Forquetinha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Fortaleza Dos Valos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Frederico Westphalen',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Garibaldi',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Garruchos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Gaurama',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'General Câmara',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Gentil',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Getúlio Vargas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Giruá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Glorinha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Gramado',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Gramado Dos Loureiros',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Gramado Xavier',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Gravataí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Guabiju',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Guaíba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Guaporé',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Guarani Das Missões',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Harmonia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Herval',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Herveiras',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Horizontina',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Hulha Negra',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Humaitá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ibarama',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ibiaçá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ibiraiaras',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ibirapuitã',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ibirubá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Igrejinha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ijuí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ilópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Imbé',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Imigrante',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Independência',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Inhacorá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ipê',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ipiranga do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Iraí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itaara',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itacurubi',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itapuca',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itaqui',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itati',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itatiba do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ivorá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ivoti',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jaboticaba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jacuizinho',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jacutinga',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jaguarão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jaguari',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jaquirana',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jari',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jóia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Júlio de Castilhos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lagoa Bonita do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lagoa Dos Três Cantos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lagoa Vermelha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lagoão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lajeado',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lajeado do Bugre',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lavras do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Liberato Salzano',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lindolfo Collor',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Linha Nova',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Maçambara',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Machadinho',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mampituba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Manoel Viana',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Maquiné',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Maratá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Marau',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Marcelino Ramos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mariana Pimentel',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mariano Moro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Marques de Souza',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mata',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mato Castelhano',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mato Leitão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mato Queimado',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Maximiliano de Almeida',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Minas do Leão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Miraguaí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Montauri',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Monte Alegre Dos Campos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Monte Belo do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Montenegro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mormaço',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Morrinhos do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Morro Redondo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Morro Reuter',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mostardas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Muçum',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Muitos Capões',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Muliterno',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Não-me-toque',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nicolau Vergueiro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nonoai',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Alvorada',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Araçá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Bassano',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Boa Vista',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Bréscia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Candelária',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Esperança do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Hartz',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Pádua',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Palma',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Petrópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Prata',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Ramada',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Roma do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Santa Rita',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Novo Barreiro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Novo Cabrais',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Novo Hamburgo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Novo Machado',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Novo Tiradentes',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Novo Xingu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Osório',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Paim Filho',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Palmares do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Palmeira Das Missões',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Palmitinho',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Panambi',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pantano Grande',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Paraí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Paraíso do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pareci Novo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Parobé',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Passa Sete',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Passo do Sobrado',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Passo Fundo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Paulo Bento',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Paverama',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pedras Altas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pedro Osório',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pejuçara',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pelotas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Picada Café',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pinhal',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pinhal da Serra',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pinhal Grande',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pinheirinho do Vale',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pinheiro Machado',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pinto Bandeira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pirapó',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Piratini',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Planalto',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Poço Das Antas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pontão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ponte Preta',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Portão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Porto Alegre',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Porto Lucena',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Porto Mauá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Porto Vera Cruz',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Porto Xavier',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pouso Novo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Presidente Lucena',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Progresso',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Protásio Alves',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Putinga',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Quaraí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Quatro Irmãos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Quevedos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Quinze de Novembro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Redentora',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Relvado',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Restinga Seca',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rio Dos Índios',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rio Grande',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rio Pardo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Riozinho',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Roca Sales',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rodeio Bonito',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rolador',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rolante',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ronda Alta',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rondinha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Roque Gonzales',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rosário do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Sagrada Família',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Saldanha Marinho',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Salto do Jacuí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Salvador Das Missões',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Salvador do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Sananduva',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Bárbara do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Cecília do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Clara do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Cruz do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Margarida do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Maria',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Maria do Herval',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Rosa',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Tereza',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Vitória do Palmar',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santana da Boa Vista',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santana do Livramento',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santiago',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santo Ângelo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santo Antônio da Patrulha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santo Antônio Das Missões',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santo Antônio do Palma',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santo Antônio do Planalto',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santo Augusto',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santo Cristo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santo Expedito do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Borja',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Domingos do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Francisco de Assis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Francisco de Paula',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Gabriel',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Jerônimo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São João da Urtiga',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São João do Polêsine',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Jorge',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São José Das Missões',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São José do Herval',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São José do Hortêncio',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São José do Inhacorá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São José do Norte',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São José do Ouro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São José do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São José Dos Ausentes',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Leopoldo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Lourenço do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Luiz Gonzaga',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Marcos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Martinho',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Martinho da Serra',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Miguel Das Missões',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Nicolau',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Paulo Das Missões',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Pedro da Serra',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Pedro Das Missões',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Pedro do Butiá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Pedro do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Sebastião do Caí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Sepé',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Valentim',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Valentim do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Valério do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Vendelino',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Vicente do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Sapiranga',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Sapucaia do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Sarandi',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Seberi',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Sede Nova',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Segredo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Selbach',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Senador Salgado Filho',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Sentinela do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Serafina Corrêa',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Sério',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Sertão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Sertão Santana',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Sete de Setembro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Severiano de Almeida',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Silveira Martins',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Sinimbu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Sobradinho',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Soledade',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tabaí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tapejara',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tapera',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tapes',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Taquara',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Taquari',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Taquaruçu do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tavares',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tenente Portela',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Terra de Areia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Teutônia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tio Hugo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tiradentes do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Toropi',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Torres',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tramandaí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Travesseiro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Três Arroios',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Três Cachoeiras',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Três Coroas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Três de Maio',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Três Forquilhas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Três Palmeiras',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Três Passos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Trindade do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Triunfo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tucunduva',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tunas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tupanci do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tupanciretã',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tupandi',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tuparendi',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Turuçu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ubiretama',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'União da Serra',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Unistalda',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Uruguaiana',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Vacaria',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Vale do Sol',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Vale Real',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Vale Verde',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Vanini',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Venâncio Aires',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Vera Cruz',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Veranópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Vespasiano Correa',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Viadutos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Viamão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Vicente Dutra',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Victor Graeff',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Vila Flores',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Vila Lângaro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Vila Maria',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Vila Nova do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Vista Alegre',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Vista Alegre do Prata',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Vista Gaúcha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Vitória Das Missões',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Westfalia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Xangri-lá',
			cid_estado: estado.est_id,
		});
	});

	await Estado.findOne({
		where: {
			est_desc: 'Rondônia',
		},
	}).then(async (estado) => {
		await Cidade.create({
			cid_desc: "Alta Floresta D'oeste",
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Alto Alegre Dos Parecis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Alto Paraíso',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: "Alvorada D'oeste",
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ariquemes',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Buritis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cabixi',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cacaulândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cacoal',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Campo Novo de Rondônia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Candeias do Jamari',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Castanheiras',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cerejeiras',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Chupinguaia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Colorado do Oeste',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Corumbiara',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Costa Marques',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cujubim',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: "Espigão D'oeste",
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Governador Jorge Teixeira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Guajará-mirim',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itapuã do Oeste',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jaru',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ji-paraná',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: "Machadinho D'oeste",
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ministro Andreazza',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mirante da Serra',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Monte Negro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: "Nova Brasilândia D'oeste",
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Mamoré',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova União',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Novo Horizonte do Oeste',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ouro Preto do Oeste',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Parecis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pimenta Bueno',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pimenteiras do Oeste',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Porto Velho',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Presidente Médici',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Primavera de Rondônia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rio Crespo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rolim de Moura',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: "Santa Luzia D'oeste",
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: "São Felipe D'oeste",
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Francisco do Guaporé',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Miguel do Guaporé',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Seringueiras',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Teixeirópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Theobroma',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Urupá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Vale do Anari',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Vale do Paraíso',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Vilhena',
			cid_estado: estado.est_id,
		});
	});

	await Estado.findOne({
		where: {
			est_desc: 'Roraima',
		},
	}).then(async (estado) => {
		await Cidade.create({
			cid_desc: 'Alto Alegre',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Amajari',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Boa Vista',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bonfim',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cantá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Caracaraí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Caroebe',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Iracema',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mucajaí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Normandia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pacaraima',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rorainópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São João da Baliza',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Luiz',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Uiramutã',
			cid_estado: estado.est_id,
		});
	});

	await Estado.findOne({
		where: {
			est_desc: 'Santa Catarina',
		},
	}).then(async (estado) => {
		await Cidade.create({
			cid_desc: 'Abdon Batista',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Abelardo Luz',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Agrolândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Agronômica',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Água Doce',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Águas de Chapecó',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Águas Frias',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Águas Mornas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Alfredo Wagner',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Alto Bela Vista',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Anchieta',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Angelina',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Anita Garibaldi',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Anitápolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Antônio Carlos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Apiúna',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Arabutã',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Araquari',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Araranguá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Armazém',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Arroio Trinta',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Arvoredo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ascurra',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Atalanta',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Aurora',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Balneário Arroio do Silva',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Balneário Barra do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Balneário Camboriú',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Balneário Gaivota',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Balneário Rincão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bandeirante',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Barra Bonita',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Barra Velha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bela Vista do Toldo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Belmonte',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Benedito Novo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Biguaçu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Blumenau',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bocaina do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bom Jardim da Serra',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bom Jesus',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bom Jesus do Oeste',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bom Retiro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bombinhas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Botuverá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Braço do Norte',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Braço do Trombudo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Brunópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Brusque',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Caçador',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Caibi',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Calmon',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Camboriú',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Campo Alegre',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Campo Belo do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Campo Erê',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Campos Novos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Canelinha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Canoinhas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Capão Alto',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Capinzal',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Capivari de Baixo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Catanduvas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Caxambu do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Celso Ramos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cerro Negro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Chapadão do Lageado',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Chapecó',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cocal do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Concórdia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cordilheira Alta',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Coronel Freitas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Coronel Martins',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Correia Pinto',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Corupá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Criciúma',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cunha Porã',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cunhataí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Curitibanos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Descanso',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Dionísio Cerqueira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Dona Emma',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Doutor Pedrinho',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Entre Rios',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ermo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Erval Velho',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Faxinal Dos Guedes',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Flor do Sertão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Florianópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Formosa do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Forquilhinha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Fraiburgo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Frei Rogério',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Galvão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Garopaba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Garuva',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Gaspar',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Governador Celso Ramos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Grão Pará',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Gravatal',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Guabiruba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Guaraciaba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Guaramirim',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Guarujá do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Guatambú',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: "Herval D'oeste",
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ibiam',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ibicaré',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ibirama',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Içara',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ilhota',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Imaruí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Imbituba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Imbuia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Indaial',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Iomerê',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ipira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Iporã do Oeste',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ipuaçu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ipumirim',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Iraceminha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Irani',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Irati',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Irineópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itaiópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itajaí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itapema',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itapiranga',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itapoá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ituporanga',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jaborá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jacinto Machado',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jaguaruna',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jaraguá do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jardinópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Joaçaba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Joinville',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'José Boiteux',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jupiá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lacerdópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lages',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Laguna',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lajeado Grande',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Laurentino',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lauro Muller',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lebon Régis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Leoberto Leal',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lindóia do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lontras',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Luiz Alves',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Luzerna',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Macieira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mafra',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Major Gercino',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Major Vieira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Maracajá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Maravilha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Marema',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Massaranduba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Matos Costa',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Meleiro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mirim Doce',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Modelo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mondaí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Monte Carlo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Monte Castelo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Morro da Fumaça',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Morro Grande',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Navegantes',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Erechim',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Itaberaba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Trento',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Veneza',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Novo Horizonte',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Orleans',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Otacílio Costa',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ouro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ouro Verde',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Paial',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Painel',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Palhoça',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Palma Sola',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Palmeira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Palmitos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Papanduva',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Paraíso',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Passo de Torres',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Passos Maia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Paulo Lopes',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pedras Grandes',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Penha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Peritiba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pescaria Brava',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Petrolândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Piçarras',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pinhalzinho',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pinheiro Preto',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Piratuba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Planalto Alegre',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pomerode',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ponte Alta',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ponte Alta do Norte',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ponte Serrada',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Porto Belo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Porto União',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pouso Redondo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Praia Grande',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Presidente Castelo Branco',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Presidente Getúlio',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Presidente Nereu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Princesa',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Quilombo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rancho Queimado',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rio Das Antas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rio do Campo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rio do Oeste',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rio do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rio Dos Cedros',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rio Fortuna',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rio Negrinho',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rio Rufino',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Riqueza',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rodeio',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Romelândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Salete',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Saltinho',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Salto Veloso',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Sangão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Cecília',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Helena',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Rosa de Lima',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Rosa do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Terezinha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Terezinha do Progresso',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santiago do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santo Amaro da Imperatriz',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Bento do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Bernardino',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Bonifácio',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Carlos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Cristovão do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Domingos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Francisco do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São João Batista',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São João do Itaperiú',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São João do Oeste',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São João do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Joaquim',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São José',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São José do Cedro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São José do Cerrito',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Lourenço do Oeste',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Ludgero',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Martinho',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Miguel da Boa Vista',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Miguel do Oeste',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Pedro de Alcântara',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Saudades',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Schroeder',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Seara',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Serra Alta',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Siderópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Sombrio',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Sul Brasil',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Taió',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tangará',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tigrinhos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tijucas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Timbé do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Timbó',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Timbó Grande',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Três Barras',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Treviso',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Treze de Maio',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Treze Tílias',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Trombudo Central',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tubarão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tunápolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Turvo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'União do Oeste',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Urubici',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Urupema',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Urussanga',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Vargeão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Vargem',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Vargem Bonita',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Vidal Ramos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Videira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Vitor Meireles',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Witmarsum',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Xanxerê',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Xavantina',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Xaxim',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Zortéa',
			cid_estado: estado.est_id,
		});
	});

	await Estado.findOne({
		where: {
			est_desc: 'São Paulo',
		},
	}).then(async (estado) => {
		await Cidade.create({
			cid_desc: 'Adamantina',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Adolfo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Aguaí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Águas da Prata',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Águas de Lindóia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Águas de Santa Bárbara',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Águas de São Pedro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Agudos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Alambari',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Alfredo Marcondes',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Altair',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Altinópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Alto Alegre',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Alumínio',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Álvares Florence',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Álvares Machado',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Álvaro de Carvalho',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Alvinlândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Americana',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Américo Brasiliense',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Américo de Campos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Amparo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Analândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Andradina',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Angatuba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Anhembi',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Anhumas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Aparecida',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: "Aparecida D'oeste",
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Apiaí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Araçariguama',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Araçatuba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Araçoiaba da Serra',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Aramina',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Arandu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Arapeí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Araraquara',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Araras',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Arco-íris',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Arealva',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Areias',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Areiópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ariranha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Artur Nogueira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Arujá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Aspásia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Assis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Atibaia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Auriflama',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Avaí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Avanhandava',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Avaré',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bady Bassitt',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Balbinos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bálsamo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bananal',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Barão de Antonina',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Barbosa',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bariri',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Barra Bonita',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Barra do Chapéu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Barra do Turvo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Barretos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Barrinha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Barueri',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bastos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Batatais',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bauru',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bebedouro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bento de Abreu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bernardino de Campos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bertioga',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bilac',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Birigui',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Biritiba-mirim',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Boa Esperança do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bocaina',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bofete',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Boituva',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bom Jesus Dos Perdões',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bom Sucesso de Itararé',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Borá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Boracéia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Borborema',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Borebi',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Botucatu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bragança Paulista',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Braúna',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Brejo Alegre',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Brodowski',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Brotas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Buri',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Buritama',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Buritizal',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cabrália Paulista',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cabreúva',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Caçapava',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cachoeira Paulista',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Caconde',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cafelândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Caiabu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Caieiras',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Caiuá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cajamar',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cajati',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cajobi',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cajuru',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Campina do Monte Alegre',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Campinas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Campo Limpo Paulista',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Campos do Jordão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Campos Novos Paulista',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cananéia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Canas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cândido Mota',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cândido Rodrigues',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Canitar',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Capão Bonito',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Capela do Alto',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Capivari',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Caraguatatuba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Carapicuíba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cardoso',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Casa Branca',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cássia Dos Coqueiros',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Castilho',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Catanduva',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Catiguá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cedral',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cerqueira César',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cerquilho',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cesário Lange',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Charqueada',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Chavantes',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Clementina',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Colina',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Colômbia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Conchal',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Conchas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cordeirópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Coroados',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Coronel Macedo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Corumbataí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cosmópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cosmorama',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cotia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cravinhos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cristais Paulista',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cruzália',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cruzeiro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cubatão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cunha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Descalvado',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Diadema',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Dirce Reis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Divinolândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Dobrada',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Dois Córregos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Dolcinópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Dourado',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Dracena',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Duartina',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Dumont',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Echaporã',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Eldorado',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Elias Fausto',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Elisiário',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Embaúba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Embu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Embu-guaçu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Emilianópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Engenheiro Coelho',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Espírito Santo do Pinhal',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Espírito Santo do Turvo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Estiva Gerbi',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: "Estrela D'oeste",
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Estrela do Norte',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Euclides da Cunha Paulista',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Fartura',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Fernando Prestes',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Fernandópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Fernão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ferraz de Vasconcelos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Flora Rica',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Floreal',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Flórida Paulista',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Florínia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Franca',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Francisco Morato',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Franco da Rocha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Gabriel Monteiro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Gália',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Garça',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Gastão Vidigal',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Gavião Peixoto',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'General Salgado',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Getulina',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Glicério',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Guaiçara',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Guaimbê',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Guaíra',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Guapiaçu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Guapiara',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Guará',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Guaraçaí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Guaraci',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: "Guarani D'oeste",
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Guarantã',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Guararapes',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Guararema',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Guaratinguetá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Guareí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Guariba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Guarujá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Guarulhos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Guatapará',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Guzolândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Herculândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Holambra',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Hortolândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Iacanga',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Iacri',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Iaras',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ibaté',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ibirá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ibirarema',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ibitinga',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ibiúna',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Icém',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Iepê',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Igaraçu do Tietê',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Igarapava',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Igaratá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Iguape',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ilha Comprida',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ilha Solteira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ilhabela',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Indaiatuba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Indiana',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Indiaporã',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Inúbia Paulista',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ipaussu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Iperó',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ipeúna',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ipiguá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Iporanga',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ipuã',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Iracemápolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Irapuã',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Irapuru',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itaberá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itaí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itajobi',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itaju',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itanhaém',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itaóca',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itapecerica da Serra',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itapetininga',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itapeva',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itapevi',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itapira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itapirapuã Paulista',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itápolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itaporanga',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itapuí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itapura',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itaquaquecetuba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itararé',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itariri',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itatiba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itatinga',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itirapina',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itirapuã',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itobi',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itupeva',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ituverava',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jaborandi',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jaboticabal',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jacareí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jaci',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jacupiranga',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jaguariúna',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jales',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jambeiro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jandira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jardinópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jarinu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jaú',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jeriquara',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Joanópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'João Ramalho',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'José Bonifácio',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Júlio Mesquita',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jumirim',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jundiaí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Junqueirópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Juquiá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Juquitiba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lagoinha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Laranjal Paulista',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lavínia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lavrinhas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Leme',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lençóis Paulista',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Limeira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lindóia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lins',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lorena',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lourdes',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Louveira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lucélia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lucianópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Luís Antônio',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Luiziânia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lupércio',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lutécia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Macatuba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Macaubal',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Macedônia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Magda',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mairinque',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mairiporã',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Manduri',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Marabá Paulista',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Maracaí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Marapoama',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mariápolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Marília',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Marinópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Martinópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Matão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mauá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mendonça',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Meridiano',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mesópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Miguelópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mineiros do Tietê',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mira Estrela',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Miracatu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mirandópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mirante do Paranapanema',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mirassol',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mirassolândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mococa',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mogi Guaçu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Moji Das Cruzes',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Moji-mirim',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mombuca',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Monções',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mongaguá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Monte Alegre do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Monte Alto',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Monte Aprazível',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Monte Azul Paulista',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Monte Castelo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Monte Mor',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Monteiro Lobato',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Morro Agudo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Morungaba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Motuca',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Murutinga do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nantes',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Narandiba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Natividade da Serra',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nazaré Paulista',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Neves Paulista',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nhandeara',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nipoã',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Aliança',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Campina',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Canaã Paulista',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Castilho',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Europa',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Granada',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Guataporanga',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Independência',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Luzitânia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Odessa',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Novais',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Novo Horizonte',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nuporanga',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ocauçu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Óleo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Olímpia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Onda Verde',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Oriente',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Orindiúva',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Orlândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Osasco',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Oscar Bressane',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Osvaldo Cruz',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ourinhos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ouro Verde',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ouroeste',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pacaembu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Palestina',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Palmares Paulista',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: "Palmeira D'oeste",
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Palmital',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Panorama',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Paraguaçu Paulista',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Paraibuna',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Paraíso',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Paranapanema',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Paranapuã',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Parapuã',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pardinho',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pariquera-açu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Parisi',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Patrocínio Paulista',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Paulicéia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Paulínia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Paulistânia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Paulo de Faria',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pederneiras',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pedra Bela',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pedranópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pedregulho',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pedreira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pedrinhas Paulista',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pedro de Toledo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Penápolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pereira Barreto',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pereiras',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Peruíbe',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Piacatu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Piedade',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pilar do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pindamonhangaba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pindorama',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pinhalzinho',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Piquerobi',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Piquete',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Piracaia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Piracicaba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Piraju',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pirajuí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pirangi',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pirapora do Bom Jesus',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pirapozinho',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pirassununga',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Piratininga',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pitangueiras',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Planalto',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Platina',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Poá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Poloni',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pompéia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pongaí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pontal',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pontalinda',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pontes Gestal',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Populina',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Porangaba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Porto Feliz',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Porto Ferreira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Potim',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Potirendaba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pracinha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pradópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Praia Grande',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pratânia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Presidente Alves',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Presidente Bernardes',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Presidente Epitácio',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Presidente Prudente',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Presidente Venceslau',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Promissão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Quadra',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Quatá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Queiroz',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Queluz',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Quintana',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rafard',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rancharia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Redenção da Serra',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Regente Feijó',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Reginópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Registro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Restinga',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ribeira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ribeirão Bonito',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ribeirão Branco',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ribeirão Corrente',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ribeirão do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ribeirão Dos Índios',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ribeirão Grande',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ribeirão Pires',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ribeirão Preto',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rifaina',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rincão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rinópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rio Claro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rio Das Pedras',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rio Grande da Serra',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Riolândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Riversul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rosana',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Roseira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rubiácea',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rubinéia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Sabino',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Sagres',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Sales',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Sales Oliveira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Salesópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Salmourão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Saltinho',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Salto',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Salto de Pirapora',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Salto Grande',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Sandovalina',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Adélia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Albertina',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: "Santa Bárbara D'oeste",
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Branca',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: "Santa Clara D'oeste",
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Cruz da Conceição',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Cruz da Esperança',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Cruz Das Palmeiras',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Cruz do Rio Pardo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Ernestina',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa fé do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Gertrudes',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Isabel',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Lúcia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Maria da Serra',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Mercedes',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: "Santa Rita D'oeste",
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Rita do Passa Quatro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Rosa de Viterbo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Salete',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santana da Ponte Pensa',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santana de Parnaíba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santo Anastácio',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santo André',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santo Antônio da Alegria',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santo Antônio de Posse',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santo Antônio do Aracanguá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santo Antônio do Jardim',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santo Antônio do Pinhal',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santo Expedito',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santópolis do Aguapeí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Bento do Sapucaí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Bernardo do Campo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Caetano do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Carlos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Francisco',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São João da Boa Vista',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São João Das Duas Pontes',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São João de Iracema',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: "São João do Pau D'alho",
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Joaquim da Barra',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São José da Bela Vista',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São José do Barreiro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São José do Rio Pardo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São José do Rio Preto',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São José Dos Campos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Lourenço da Serra',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Luís do Paraitinga',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Manuel',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Miguel Arcanjo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Paulo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Pedro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Pedro do Turvo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Roque',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Sebastião',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Sebastião da Grama',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Simão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Vicente',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Sarapuí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Sarutaiá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Sebastianópolis do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Serra Azul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Serra Negra',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Serrana',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Sertãozinho',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Sete Barras',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Severínia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Silveiras',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Socorro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Sorocaba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Sud Mennucci',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Sumaré',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Suzanápolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Suzano',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tabapuã',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tabatinga',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Taboão da Serra',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Taciba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Taguaí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Taiaçu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Taiúva',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tambaú',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tanabi',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tapiraí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tapiratiba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Taquaral',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Taquaritinga',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Taquarituba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Taquarivaí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tarabai',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tarumã',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tatuí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Taubaté',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tejupá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Teodoro Sampaio',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Terra Roxa',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tietê',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Timburi',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Torre de Pedra',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Torrinha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Trabiju',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tremembé',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Três Fronteiras',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tuiuti',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tupã',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tupi Paulista',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Turiúba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Turmalina',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ubarana',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ubatuba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ubirajara',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Uchoa',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'União Paulista',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Urânia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Uru',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Urupês',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Valentim Gentil',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Valinhos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Valparaíso',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Vargem',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Vargem Grande do Sul',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Vargem Grande Paulista',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Várzea Paulista',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Vera Cruz',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Vinhedo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Viradouro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Vista Alegre do Alto',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Vitória Brasil',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Votorantim',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Votuporanga',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Zacarias',
			cid_estado: estado.est_id,
		});
	});

	await Estado.findOne({
		where: {
			est_desc: 'Sergipe',
		},
	}).then(async (estado) => {
		await Cidade.create({
			cid_desc: 'Amparo de São Francisco',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Aquidabã',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Aracaju',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Arauá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Areia Branca',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Barra Dos Coqueiros',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Boquim',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Brejo Grande',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Campo do Brito',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Canhoba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Canindé de São Francisco',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Capela',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Carira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Carmópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cedro de São João',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cristinápolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cumbe',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Divina Pastora',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Estância',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Feira Nova',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Frei Paulo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Gararu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'General Maynard',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Gracho Cardoso',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ilha Das Flores',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Indiaroba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itabaiana',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itabaianinha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itabi',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: "Itaporanga D'ajuda",
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Japaratuba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Japoatã',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lagarto',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Laranjeiras',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Macambira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Malhada Dos Bois',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Malhador',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Maruim',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Moita Bonita',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Monte Alegre de Sergipe',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Muribeca',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Neópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nossa Senhora Aparecida',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nossa Senhora da Glória',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nossa Senhora Das Dores',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nossa Senhora de Lourdes',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nossa Senhora do Socorro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pacatuba',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pedra Mole',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pedrinhas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pinhão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pirambu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Poço Redondo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Poço Verde',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Porto da Folha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Propriá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Riachão do Dantas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Riachuelo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ribeirópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rosário do Catete',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Salgado',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Luzia do Itanhy',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Rosa de Lima',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santana do São Francisco',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santo Amaro Das Brotas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Cristóvão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Domingos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Francisco',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Miguel do Aleixo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Simão Dias',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Siriri',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Telha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tobias Barreto',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tomar do Geru',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Umbaúba',
			cid_estado: estado.est_id,
		});
	});

	await Estado.findOne({
		where: {
			est_desc: 'Tocantins',
		},
	}).then(async (estado) => {
		await Cidade.create({
			cid_desc: 'Abreulândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Aguiarnópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Aliança do Tocantins',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Almas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Alvorada',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ananás',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Angico',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Aparecida do Rio Negro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Aragominas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Araguacema',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Araguaçu',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Araguaína',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Araguanã',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Araguatins',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Arapoema',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Arraias',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Augustinópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Aurora do Tocantins',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Axixá do Tocantins',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Babaçulândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bandeirantes do Tocantins',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Barra do Ouro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Barrolândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bernardo Sayão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Bom Jesus do Tocantins',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Brasilândia do Tocantins',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Brejinho de Nazaré',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Buriti do Tocantins',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cachoeirinha',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Campos Lindos',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cariri do Tocantins',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Carmolândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Carrasco Bonito',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Caseara',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Centenário',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Chapada da Natividade',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Chapada de Areia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Colinas do Tocantins',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Colméia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Combinado',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Conceição do Tocantins',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Couto de Magalhães',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Cristalândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Crixás do Tocantins',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Darcinópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Dianópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Divinópolis do Tocantins',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Dois Irmãos do Tocantins',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Dueré',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Esperantina',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Fátima',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Figueirópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Filadélfia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Formoso do Araguaia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Fortaleza do Tabocão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Goianorte',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Goiatins',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Guaraí',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Gurupi',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ipueiras',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itacajá',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itaguatins',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itapiratins',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Itaporã do Tocantins',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Jaú do Tocantins',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Juarina',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lagoa da Confusão',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lagoa do Tocantins',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lajeado',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lavandeira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Lizarda',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Luzinópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Marianópolis do Tocantins',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Mateiros',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Maurilândia do Tocantins',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Miracema do Tocantins',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Miranorte',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Monte do Carmo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Monte Santo do Tocantins',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Muricilândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Natividade',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nazaré',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Olinda',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Nova Rosalândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Novo Acordo',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Novo Alegre',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Novo Jardim',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Oliveira de Fátima',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Palmas',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Palmeirante',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Palmeiras do Tocantins',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Palmeirópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Paraíso do Tocantins',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Paranã',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: "Pau D'arco",
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pedro Afonso',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Peixe',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pequizeiro',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pindorama do Tocantins',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Piraquê',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pium',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ponte Alta do Bom Jesus',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Ponte Alta do Tocantins',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Porto Alegre do Tocantins',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Porto Nacional',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Praia Norte',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Presidente Kennedy',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Pugmil',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Recursolândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Riachinho',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rio da Conceição',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rio Dos Bois',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Rio Sono',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Sampaio',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Sandolândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa fé do Araguaia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Maria do Tocantins',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Rita do Tocantins',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Rosa do Tocantins',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Tereza do Tocantins',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Santa Terezinha do Tocantins',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Bento do Tocantins',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Félix do Tocantins',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Miguel do Tocantins',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Salvador do Tocantins',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Sebastião do Tocantins',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'São Valério da Natividade',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Silvanópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Sítio Novo do Tocantins',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Sucupira',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Taguatinga',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Taipas do Tocantins',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Talismã',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tocantínia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tocantinópolis',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tupirama',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Tupiratins',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Wanderlândia',
			cid_estado: estado.est_id,
		});
		await Cidade.create({
			cid_desc: 'Xambioá',
			cid_estado: estado.est_id,
		});
	});
	console.log('Criando cidades...');
};

export default cidadeSeeder;
