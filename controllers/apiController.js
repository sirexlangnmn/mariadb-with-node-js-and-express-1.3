const faker = require("faker");
const { random } = require("lodash");

// Make a fake API
const NUM_THINGS = 5;
const things = [];
// These take too long to load
// const pictureTypes = [
//     "abstract",
//     "animals",
//     "business",
//     "cats",
//     "food",
//     "transport",
// ];
for (let i = 0; i < NUM_THINGS; i++) {
    const newThing = {
        id: i + 1,
        color: faker.fake("{{commerce.color}}"),
        product: faker.fake("{{commerce.product}}"),
        price: faker.fake("{{commerce.price}}"),
        description: faker.fake("{{hacker.phrase}}"),
        // picture: faker.fake(`{{image.${sample(pictureTypes)}}}`),
        picture: `https://placekitten.com/${random(190, 300)}/${190, 300}`,
    };
    things.push(newThing);
}

// localhost:3000/api
function list(req, res, next) {
    console.log("apiController list");
    res.json(things);
}

// localhost:3000/api/12
function detail(req, res, next) {
    const thingId = req.params.id;
    res.json(things[thingId - 1]);
}

module.exports = {
    list,
    detail,
};
