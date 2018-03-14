class SmartCalculator {
  constructor(initialValue) {
    this.answer = [initialValue];
  }

  add(number) {
    this.answer.push('+',number);
    return this;
  }

  subtract(number) {
    this.answer.push('-',number);
    return this;
  }

  multiply(number) {
    this.answer.push('*',number);
    return this;
  }

  devide(number) {
    this.answer.push('/',number);
    return this;
  }

  pow(number) {
    this.answer.push('^',number);
    return this;
  }

  toString() {
     for (var i = 1; i < this.answer.length - 1; i += 2){
      if (this.answer[i] == "^") {

        while (this.answer[i+2] == "^") {
          this.answer[i] = Math.pow(this.answer[i],this.answer[i+2]);
          this.answer.splice(i+2,2);
        }

        this.answer[i-1] = Math.pow(this.answer[i-1],this.answer[i+1]);
        this.answer.splice(i,2);
        i -= 2;
        }
     }

    for (var i = 1; i < this.answer.length - 1; i += 2){
      if (this.answer[i] == "*") {
        this.answer[i-1]=this.answer[i-1] * this.answer[i+1];
        this.answer.splice(i,2);
        i -= 2;
        }
       if (this.answer[i] == "/") {
        this.answer[i-1] = this.answer[i-1] / this.answer[i+1];
        this.answer.splice(i,2);
        i -= 2;
      }
    }

    for (var i = 1; i < this.answer.length-1; i += 2){
      if (this.answer[i] == "+") {
        this.answer[i-1] = this.answer[i-1] + this.answer[i+1];
        this.answer.splice(i,2);
        i -= 2;
      }
       if (this.answer[i] == "-") {
        this.answer[i-1] = this.answer[i-1] - this.answer[i+1];
        this.answer.splice(i,2);
        i -= 2;
      }
    }
    return this.answer[0];
  }
}

module.exports = SmartCalculator;
