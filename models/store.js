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

  sellRecord(record){
    if(this.findRecordByTitle(record.title)){
      this.removeRecord(record);
      this.addFunds(record.price);
    }
  }


}


module.exports = Store;
