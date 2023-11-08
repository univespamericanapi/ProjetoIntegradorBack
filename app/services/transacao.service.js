import TransacaoRepository from '../repositories/transacao.repository.js';
import db from '../models/db.model.js';
import emailService from './email.service.js';
import EmailTokenRepository from '../repositories/emailToken.repository.js';
import consoleError from "../utils/consoleError.util.js";

const transacaoService = async (Instancias, dados) => {
	try {
		const Transacao = new TransacaoRepository(db.sequelize);
		const EmailToken = new EmailTokenRepository(db.emailToken);

		const transacao = await Transacao.iniciar();
		const compCriado = await Transacao.buscarOuCriar(
			Instancias.Competidor.model,
			{ comp_cpf: dados.competidor.comp_cpf },
			dados.competidor,
			transacao
		);
		dados.apresentacao.apres_comp = compCriado.comp_id;
		const apresCriado = await Transacao.criar(
			Instancias.Apresentacao.model,
			dados.apresentacao,
			transacao
		);
		dados.participacao.part_apres = apresCriado.apres_id;
		const partCriada = await Transacao.criar(
			Instancias.Participacao.model,
			dados.participacao,
			transacao
		);

		if (dados.extra) {
			dados.extra.extra_part = partCriada.part_id;
			await Transacao.criar(Instancias.Extra.model, dados.extra, transacao);
		}
		if (dados.participacao.part_tipo_inscr === 'Inscrição') {
			await Transacao.incrementar(
				dados.concurso,
				{ conc_atual_inscr: 1 },
				transacao
			);
		} else {
			await Transacao.incrementar(
				dados.concurso,
				{ conc_atual_espera: 1 },
				transacao
			);
		}
		const emailToken = await emailService.criarToken(
			compCriado,
			dados.participacao.part_tipo_inscr
		);
		await Transacao.criar(EmailToken.model, emailToken, transacao);
		const emailCorpo = emailService.gerarMensagem(
			compCriado.comp_nome_social,
			compCriado.comp_id,
			emailToken.token
		);

		const resposta = await emailService.enviarEmail(
			compCriado.comp_email,
			emailCorpo.assunto,
			emailCorpo.mensagem
		);

		await Transacao.finalizar(transacao);

		return resposta;
	} catch (erro) {
		consoleError(erro);
		throw erro;
	}
};

export default transacaoService;
