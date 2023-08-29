import { categoriasConstant } from '../../constants/listas.constant.js';

const categoriaSeeder = async (Categoria) => {
	console.log('Criando categorias...');
	for (let categoria of categoriasConstant) {
		await Categoria.create({
			categ_nome: categoria,
		});
	}
	console.log('Categorias criadas...');
};

export default categoriaSeeder;
