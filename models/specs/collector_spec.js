const Collector = require('../collector.js');
const Record = require('../record.js');
const assert = require('assert');

describe('Collector',function(){

  let collector;
  let record;

  beforeEach(function(){
    collector = new Collector();
    record = new Record({
      title: 'Their Greatest Hits 1971 - 1975',
      artist: 'Eagles',
      genre: 'rock',
      price: 1000
    });
  })

  it('should start with no funds',function(){
    const actual = collector.funds;
    assert.strictEqual(actual,0);
  });

  it('should be able to add funds',function(){
    collector.changeFunds(100);
    const actual = collector.funds;
    assert.strictEqual(actual,100);
  });

  it('should be able to remove funds',function(){
    collector.changeFunds(100);
    collector.changeFunds(-100);
    const actual = collector.funds;
    assert.strictEqual(actual,0)
  });

  it('should start with an empty collection of records',function(){
    const actual = collector.records;
    assert.deepStrictEqual(actual,[])
  });

  it('should be able to add a record to it\'s collection',function(){
    collector.addRecord(record);
    const actual = collector.records.length
    assert.deepStrictEqual(actual,1);
  });

  it('should be able to find a record by title',function(){
    collector.addRecord(record);
    const actual = collector.findRecordByTitle('Their Greatest Hits 1971 - 1975');
    assert.deepStrictEqual(actual,record);
  });

  it('should be able to remove a record from it\'s collection',function(){
    collector.addRecord(record);
    collector.removeRecord(collector.findRecordByTitle('Their Greatest Hits 1971 - 1975'));
    const actual = collector.records.length
    assert.deepStrictEqual(actual,0);
  });

  it('should be able to buy a record if it has enough funds',function(){
    collector.changeFunds(2000);
    collector.buyRecord(record);
    const actual = collector.records.length;
    const actual2 = collector.funds;
    assert.deepStrictEqual(actual,1);
    assert.deepStrictEqual(actual2,1000)
  });

  it('should be able to sell a record if it has the record',function(){
    collector.addRecord(record);
    collector.sellRecord(record);
    const actual = collector.records.length;
    const actual2 = collector.funds;
    assert.deepStrictEqual(actual,0);
    assert.deepStrictEqual(actual2,1000);
  })

})
// EOF
