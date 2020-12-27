const EnumCategory = require('../../enum/EnumCategory');
const EnumStatus = require('../../enum/EnumStatus');
const dataFaker = require('faker')


const generatePayload = () => {

    const payload = {

        id: 0,
        category: {
            id: dataFaker.random.number(),
            name: EnumCategory.Dog
        },
        name: dataFaker.name.firstName(),
        photoUrls: [
            "https://mypets.com.br",
        ],
        tags: [
            {
                id: dataFaker.random.number(),
                name: dataFaker.name.title()
            }
        ],
        status: EnumStatus.AVAILABLE

          };

    return payload;
};

module.exports = {
    generatePayload
};