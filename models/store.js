class Store{

  constructor(name){
    this.name = name;
    this.funds = 0;
    this.records = [];
  }

  addFunds(amount){
    this.funds += amount;
  }

  addRecord(record){
    this.records.push(record);
  }

  findRecordByTitle(title){
    return this.records.filter(record => record.title == title)[0];
  }

  removeRecord(record){
    const position = this.records.indexOf(record);
    this.records.splice(position,1);
  }


}


module.exports = Store;
