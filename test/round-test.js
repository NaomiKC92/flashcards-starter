const expect = require('chai').expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function () {
  let card1, card2, card3, deck, round;
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

    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  });

  it('should be a function', () => {
    expect(Round).to.be.a('function')
  });

  it('should return the current card', () => {
    expect(round.returnCurrentCard()).to.equal(card1)
  });

  it('should increment turns taken', () => {
    round.takeTurn('iteration method');
    expect(round.turns).to.equal(1)
  });

  it('should update current card', () => {
    round.takeTurn('iteration method');
    round.takeTurn('sort()');
    expect(round.currentCard.id).to.equal(6)
  });

  it('should push incorrect guesses into the incorrect guesses array', () => {
    round.takeTurn('object');
    expect(round.incorrectGuesses.length).to.eql(1);
  });

  it('should provide feedback for guess', () => {
    expect(round.takeTurn('array')).to.equal('Incorrect!')
  });

  it('should return the percentage of correct guesses', () => {
    round.takeTurn('iteration method');
    round.takeTurn('sort()');
    round.takeTurn('split()');

    expect(round.calculatePercentCorrect()).to.equal(67)
  });

  it('should tell the user the round is over', () => {
    round.takeTurn('iteration method');
    round.takeTurn('sort()');
    round.takeTurn('split()');

    expect(round.endRound()).to.equal('** Round over! ** You answered 67% of the questions correctly!');
  });
});