console.log('Hello World');

function Person(title, first, last) {
    this.firstName = first;
    this.lastName = last;
    this.title = title;

    this.log = function() {
        console.log('Person, first name: ' + this.firstName);
    }
}

var p = new Person('Mr', 'John', 'Smith');
p.log();

// setTimeout(p.log, 2000); // wont work - p.log 'loses' the this 
setTimeout(p.log.bind(p), 2000);
