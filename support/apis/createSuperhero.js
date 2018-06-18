/**
 * @api {post} /superhero/ Create a new Superhero
 * @apiName CreateSuperhero
 * @apiGroup Superhero
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */

const apiEndPoint = 'superhero/';
exports.callCreateSuperheroApi = async (requestBody) => {
    return baseUrl.post(apiEndPoint)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .send(requestBody);
};
 exports.getRequestBody = (name, fName, lName, age, powers, killer) => {
    return {
        "name": name,
        "fName": fName,
        "lName": lName,
        "age": age,
        "powers": powers,
        "killer": killer
    }
};