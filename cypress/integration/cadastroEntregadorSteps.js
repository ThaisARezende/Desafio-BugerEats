
import Cadastro from '../support/pages/cadastroEntregador/cadastroEntregadorPage';

describe('Cadastro Buger Eats', () => {
    it('Cadastro com sucesso', () => { 
        Cadastro.acessarSite();
        cy.contains("Voltar para home").should('be.visible')
        Cadastro.cadastraDadosPessoais();
        Cadastro.cadastraEndereco();
        cy.contains("Moto").click();       
        cy.get('.dropzone')
        .find('input')
        .selectFile('cypress/fixtures/exemple.png', {
            action: 'select',
            force: true,
        });
        Cadastro.botaoCadastrar();
        cy.contains("Fechar").should('be.visible').click();
    });      
   
    
    it('Cadastro sem sucesso - CPF inválido', () => {
        Cadastro.acessarSite();
        cy.contains("Voltar para home").should('be.visible')
        Cadastro.cadastroDadosInvalido();
        Cadastro.cadastraEndereco();
        cy.contains("Moto").click();       
        cy.get('.dropzone')
        .find('input')
        .selectFile('cypress/fixtures/exemple.png', {
            action: 'select',
            force: true,
        });
        Cadastro.botaoCadastrar();
        cy.contains("Oops! CPF inválido").should('be.visible');

    });

    it('Cadastro sem sucesso - CEP inválido', () => {
        Cadastro.acessarSite();
        cy.contains("Voltar para home").should('be.visible')
        Cadastro.cadastraDadosPessoais();
        Cadastro.cadastraEndInvalido();
        cy.contains("Informe um CEP válido").should('be.visible');


    });

    it('Cadastro sem sucesso - CNH inexistente', () => {
        Cadastro.acessarSite();
        cy.contains("Voltar para home").should('be.visible')
        Cadastro.cadastraDadosPessoais();
        Cadastro.cadastraEndereco();
        cy.contains("Moto").click();
        Cadastro.botaoCadastrar();
        cy.contains("Adicione uma foto da sua CNH").should('be.visible')
    });

    
});


