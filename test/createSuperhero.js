const {callCreateSuperheroApi,getRequestBody} = require('../support/apis/createSuperhero.js');
 describe('Create Superhero', function () {
        let name = testData.name;
        let fName = testData.fName;
        let lName = testData.lName;
        let age = testData.age;
        let powers = testData.powers;
        let killer = testData.killerFalse;
        let idOfCreatedSuperhero;

        it('Should Create Superhero', async () => {
            let requestBody = getRequestBody(name, fName, lName, age, powers, killer)
            let res = await callCreateSuperheroApi(requestBody);
            logger.log(res.body);
            res.status.should.equal(201);
            idOfCreatedSuperhero = res.body.id;
        });
 });