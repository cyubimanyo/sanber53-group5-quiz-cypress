class pomSignup {
    generateRandomString(length, includeSymbols = false) {
      const characters = 'abcdefghijklmnopqrstuvwxyz';
      const numbers = '1234567890';
      const symbols = '!@#$%^&*()_-+=<>?/{}[]';
      const allCharacters = includeSymbols ? characters + numbers + symbols : characters;
  
      let result = '';
      for (let i = 0; i < length; i++) {
        result += allCharacters.charAt(Math.floor(Math.random() * allCharacters.length));
      }
  
      cy.log(`Generated random string: ${result}`);
      return result;
    }
  
    generateRandomPassword(length) {
      // Generate a password with symbols
      return this.generateRandomString(length, true);
    }
  
    generateRandomFirstName(length) {
      // Generate a first name without symbols
      return this.generateRandomString(length);
    }
  
    generateRandomLastName(length) {
      // Generate a last name without symbols
      return this.generateRandomString(length);
    }
  }
  
  export default new pomSignup();
  