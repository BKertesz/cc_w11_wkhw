const Transaction = require('../transaction.js');
const assert = require('assert');
const Collector = require('../collector.js');
const Record = require('../record.js');
const Store = require('../store.js');

describe('Transaction',function(){

  let transaction;
  let collector;
  let store;
  let record;


  beforeEach(function(){
    collector = new Collector();
    record = new Record({
      title: 'Their Greatest Hits 1971 - 1975',
      artist: 'Eagles',
      genre: 'rock',
      price: 1000
    });
    store = new Store('My Store');
    transaction = new Transaction(collector,store);

  })

  it('should have a buyer',function(){
    const actual = transaction.buyer;
    assert.deepStrictEqual(actual,collector);
  });

  it('should have a seller',function(){
    const actual = transaction.seller;
    assert.deepStrictEqual(actual,store);
  });

  it('should be able handle an exchange of a record when the seller has the record and the buyer has enough funds');



})
// EOF
