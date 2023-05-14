import PasswordValidator from 'password-validator';

const senhaVerifica = (senha) => {
	const schema = new PasswordValidator();

	schema
		.is()
		.min(5)
		.is()
		.max(50)
		.has()
		.uppercase()
		.has()
		.lowercase()
		.has()
		.digits(1)
		.has()
		.not()
		.spaces()
		.is()
		.not()
		.oneOf(['Passw0rd', 'Password123']);

	return schema.validate(senha);
};

export default senhaVerifica;
