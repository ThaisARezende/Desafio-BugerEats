
const el = require('./elements').ELEMENTS

class Cadastro {
    
    acessarSite(){
        cy.visit("https://buger-eats.vercel.app/");
        cy.contains("Cadastre-se para fazer entregas").click();
    }

    cadastraDadosPessoais(){
        cy.get(el.nome).type("Thais Ambrosio");
        cy.get(el.cpf).type("09954738622");
        cy.get(el.email).type("thais@email.com");
        cy.get(el.whatsapp).type("31999999999");      
    }

    cadastroDadosInvalido(){
        cy.get(el.nome).type("Thais Ambrosio");
        cy.get(el.cpf).type("00");
        cy.get(el.email).type("thais@email.com");
        cy.get(el.whatsapp).type("31999999999");

    }

    cadastraEndereco(){
        cy.get(el.cep).type("33120480");
        cy.get(el.buscarCEP).click();
        cy.get(el.numero).type("177");
        cy.get(el.complemento).type("casa");        
    }

    cadastraEndInvalido(){
        cy.get(el.cep).type("331");
        cy.get(el.buscarCEP).click();              
    }

    botaoCadastrar(){
        cy.get(el.botaoCadastroFinal).click();
    }
}

export default new Cadastro();

