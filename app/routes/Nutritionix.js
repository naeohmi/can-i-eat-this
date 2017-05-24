var config = require('../config.js');

class Nutritionix {
    constructor() {}
    firstCall(upc) {
        return config.axios.get(`https://api.nutritionix.com/v1_1/item?upc=${upc}&appId=463fe736&appKey=8c512edcb05e0b6539ff12807328a4b6`)
    };
    secondCall() {
        var configHeader = {
            headers: {
            }
        };
        return config.axios.get(``, configHeader)
    };
    allCall() {
        config.axios.all([this.firstCall(), this.secondCall()])
            .then(config.axios.spread((first, second) => {
                var data1 = first.data.etc;
                var data2 = second.data.etc;

                config.db.none(
                        "INSERT INTO DB (data1, data2)" +
                        "VALUES ($1, $2);", [data1, data2]
                    )
            }))
            .catch((err) => {
                console.log(err);
            });
    };
};

module.exports = Nutritionix;