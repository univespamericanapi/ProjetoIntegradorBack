import PasswordValidator from "password-validator";

const senhaValida = (senha) => {
    const schema = new PasswordValidator();

    schema
        .is().min(8)
        .is().max(16)
        .has().uppercase()
        .has().lowercase()
        .has().digits(2)
        .has().not().spaces()
        .is().not().oneOf([
            'Passw0rd',
            'Password123'
        ]);
    
    return schema.validate(senha);
}

export default senhaValida;