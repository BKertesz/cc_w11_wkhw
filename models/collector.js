class Collector{
  constructor(){
    this.funds = 0;
    this.records = [];
  }

  changeFunds(amount){
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



  buyRecord(record){
    if(this.funds >= record.price){
      this.addRecord(record)
      this.changeFunds(-record.price)
    }
  }

  sellRecord(record){
    if(this.findRecordByTitle(record.title)){
      this.removeRecord(record);
      this.changeFunds(record.price);
    }
  }

}

module.exports = Collector;
