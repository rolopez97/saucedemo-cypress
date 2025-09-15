class homeSaucePage{

    elements = {
        usernameInput: () => cy.get('#user-name'),
        passwordInput: () => cy.get('#password'),
        loginButton: () => cy.get('#login-button')
  }

    typeUsername(username){
        this.elements.usernameInput().type(username);
    }

    typePassword(password){
        this.elements.passwordInput().type(password);
    }

    clickLogin(){
        this.elements.loginButton().click();
    }

}

module.exports = new homeSaucePage();