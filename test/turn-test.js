const expect = require('chai').expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {
  let card, turn;

  beforeEach( () => {
    card = new Card({
      'id': 5,
      'question': 'What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?',
      'answers': ['mutator method', 'accessor method', 'iteration method'],
      'correctAnswer': 'iteration method'
    });

    turn = new Turn('iteration method', card);
  });

  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  it('should give the user\'s guess', () => {
    expect(turn.guess).to.equal('iteration method');
    expect(turn.returnGuess()).to.equal(turn.guess);
  });

  it('should return a card object', () => {
    expect(turn.returnCard()).to.equal(turn.card)
  });

  it('should determine whether the guess is true or false', () => {
    expect(turn.evaluateGuess()).to.equal(true)
  });

  it('should provide feedback', () => {
    expect(turn.giveFeedback()).to.equal('Correct!')
  });

});