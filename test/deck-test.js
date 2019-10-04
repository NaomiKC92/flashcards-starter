const expect = require('chai').expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', function () {
  let card1, card2, card3, deck;
  beforeEach(() => {
    card1 = new Card({
      'id': 5,
      'question': 'What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?',
      'answers': ['mutator method', 'accessor method', 'iteration method'],
      'correctAnswer': 'iteration method'
    });

    card2 = new Card({
      'id': 6,
      'question': 'What is an example of a mutator method?',
      'answers': ['sort()', 'map()', 'join()'],
      'correctAnswer': 'sort()'
    });

    card3 = new Card({
      'id': 7,
      'question': 'Which array prototype is not an accessor method?',
      'answers': ['join()', 'slice()', 'splice()'],
      'correctAnswer': 'splice()'
    });

    deck = new Deck([card1, card2, card3])
  });

  it('should be a function', () => {
    expect(Deck).to.be.a('function')
  });

  it('should return the number of cards in the deck', () => {
    expect(deck.countCards()).to.equal(3);
  })

});