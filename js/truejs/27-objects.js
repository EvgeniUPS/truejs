const hotel = {
  'name': 'U doma',
  'stars': 3,
  'adv': function () {
    console.log(this.name + ' best hotel. Stars: ' + this.stars);
  },
  hi: 'hello',
  'how much': 500,
  'und': undefined
};
console.log(hotel.name);
console.log(hotel.hi);
hotel.adv();
console.log(hotel);
console.log(hotel["how much"]);
// console.log(hotel.how much); NOT WORK!!!
console.log('**********');
let b = 'how much';
console.log(hotel.b); // UNDEFINED
console.log(hotel[b]); // It's WORK!!!

console.log('***yes*******');
console.log(hotel.und);
let yes = 'how much' in hotel;
console.log(yes);

console.log('***yes1*******');
let yes1 = hotel.hasOwnProperty('und1');
console.log(yes1);

console.log('**********');
let a = {};
a.hi = 'test';
console.log(a);
console.log(a.hi);
console.log(a['hi']);
delete a.hi;
console.log(a);

console.log('*****delete*****');
console.log(hotel);
delete hotel.hi;
console.log(hotel);


