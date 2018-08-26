// Contains test data
var randomNaughtyString = require('naughty-string-validator');
exports.email = (faker.internet.email()).toLowerCase();
exports.password = faker.internet.password();
exports.url = faker.internet.url();
exports.invalidPassword = faker.internet.password(4);
exports.randomNumber = faker.random.number({ min: 0, max: 99999999999999 });
exports.unicodeCharacters = '👾 🙇 💁 🙅 🙆 🙋 🙎 🙍';
exports.getNaughtyString = randomNaughtyString;
exports.name = faker.name.findName;
exports.fName = faker.name.firstName;
exports.lName = faker.name.lastName;
exports.powers = ["strength", "agility"];
exports.killerFalse = 'False';
exports.age = faker.random.number(100);
