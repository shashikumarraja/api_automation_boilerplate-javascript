// Contains test data

exports.email = (faker.internet.email()).toLowerCase();
exports.password = faker.internet.password();
exports.url = faker.internet.url();
exports.invalidPassword = faker.internet.password(4);
exports.randomNumber = faker.random.number({ min: 0, max: 99999999999999 });
exports.unicodeCharacters = '👾 🙇 💁 🙅 🙆 🙋 🙎 🙍';
exports.getNaughtyString = () => {
    const naughtyString = require('./naughtyStrings.json');
    const stringLength = naughtyString.length;
    const randomIndex = faker.random.number({ min: 0, max: stringLength - 1 });
    return naughtyString[randomIndex];
};
exports.name = faker.name.findName;
exports.fName = faker.name.firstName;
exports.lName = faker.name.lastName;
exports.powers = ["strength","agility"];
exports.killerFalse = 'False';
exports.age = faker.random.number(100);
