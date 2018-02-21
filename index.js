class Message {
  constructor(text = '', created = Date.now()) {
    this.text = text;
    this._created = created;
  }
  get created(){
    return this._created;
  }
  set created(created){
    if (typeof created === 'undefined' || isNaN(created)) {
      throw new error('invalid created');
    }
    if (Message.prototype.hasOwnProperty.call(this, '_creates')) {
      throw new error('created alread defined');
    }
    this._created = created;
  }
  toString() {
    return 'Message Created at:'(this.created) + '- text:'(this.text);
  }
}
class imageMessage extends Message {
  constructor(text = '', created = Date.now(),
            url = '', thumbnail = '') {
    super(text, created);
    this.url = url;
    this.thumbnail = thumbnail;    
}
  toString() {
    return  `photo${(super.toString)}` +
          `-url ${this.url}` +
          `-thumbnail ${this.thumbnail}`;
}
}

var text = 'some text';
var created = Date.now();
var duckTypeMessage {
  text,
  created
}
console.log(duckTypeMessage);

var emptyMessage = new Message();
var textMessage = new Message('yesterday message', Date.now() - 86400);
var photoMessage = new imageMessage();

console.log(emptyMessage);
console.log(textMessage);
console.log(photoMessage);

console.log(emptyMessage instanceof Message);
console.log(textMessage instanceof Message);
console.log(photoMessage instanceof Message);
console.log(photoMessage instanceof imageMessage);

console.log(emptyMessage instanceof imageMessage);
console.log(textMessage instanceof imageMessage);