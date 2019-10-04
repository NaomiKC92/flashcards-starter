const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');

describe('Card', function() {
  let card;
  beforeEach( () => {
    card = new Card({
      'id': 5,
      'question': 'What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?',
      'answers': ['mutator method', 'accessor method', 'iteration method'],
      'correctAnswer': 'iteration method'
    });
  });

  it('should be a function', function() {
    expect(Card).to.be.a('function');
  });

  it('should have a question', function() {
    
    expect(card.question).to.equal('What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?');
  }); 

  it('should have an array of possible answers', function() {
  
    expect(card.answers).to.eql(['mutator method', 'accessor method', 'iteration method']);
  }); 

  it('should have the correct answer', function() {
    
    expect(card.correctAnswer).to.equal('iteration method');
  });
});