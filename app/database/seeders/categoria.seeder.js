import { categoriasConstant } from '../../constants/listas.constant.js';

const categoriaSeeder = async (Categoria) => {
	categoriasConstant.forEach(async (categoria) => {
		await Categoria.create({
			categ_nome: categoria,
		});
	});
	console.log('Criando categorias...');
};

export default categoriaSeeder;
