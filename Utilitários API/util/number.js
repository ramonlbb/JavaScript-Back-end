function calculator(values, action) {
    switch (action) {
      case 'minimum':
        return Math.min(...values);
      case 'maximum':
        return Math.max(...values);
      default:
        throw new Error('Ação desconhecida para números');
    }
  }
  
  module.exports = calculator;
  