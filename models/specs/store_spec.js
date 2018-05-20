const Store = require('../store.js');
const assert = require('assert');
const Record = require('../record.js')

describe('Store',function(){

  let store;
  let record;

  beforeEach(function(){
    store = new Store('My Store');
    record = new Record({
      title: 'Their Greatest Hits 1971 - 1975',
      artist: 'Eagles',
      genre: 'rock',
      price: 1000
    });
  })

  it('should have a name',function(){
    const actual = store.name;
    assert.deepStrictEqual(actual,"My Store")
  });

  it('should start with no funds',function(){
    const actual = store.funds;
    assert.deepStrictEqual(actual,0);
  });

  it('should be able to add funds',function(){
    store.addFunds(100);
    const actual = store.funds;
    assert.deepStrictEqual(actual,100)
  });

  it('should start with an empty collection of records',function(){
    const actual = store.records.length;
    assert.deepStrictEqual(actual,0)
  });

  it('should be able to add a record to its stock',function(){
    store.addRecord(record);
    const actual = store.records.length;
    assert.deepStrictEqual(actual,1);
  });

  it('should be able to remove a record from its stock',function(){
    store.addRecord(record);
    store.removeRecord(record);
    const actual = store.records.length;
    assert.deepStrictEqual(actual,0);
  });

  it('should be able to sell a record if it has the record',function(){
    store.addRecord(record);
    store.sellRecord(record);
    const actual = store.records.length;
    const actual2 = store.funds;
    assert.deepStrictEqual(actual,0);
    assert.deepStrictEqual(actual2,1000);
  });

})
// EOF
