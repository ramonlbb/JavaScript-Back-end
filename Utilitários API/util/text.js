function formatter(text, action) {
    switch (action) {
      case 'lowercase':
        return text.toLowerCase();
      case 'uppercase':
        return text.toUpperCase();
      default:
        throw new Error('Ação desconhecida para texto');
    }
  }
  
  module.exports = formatter;
  