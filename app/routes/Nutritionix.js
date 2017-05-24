var config = require('../config.js');

let getInfo = (upc) => {
        return config.axios.get(`https://api.nutritionix.com/v1_1/item?upc=${upc}&appId=463fe736&appKey=8c512edcb05e0b6539ff12807328a4b6`)
            .then((res) => {
                console.log('res: ' res);
                var ingredientName = res.data.item_name;
                var ingredientList = res.data.nf_ingredient_statement;
                console.log('name: ' ingredientName)
                console.log('list: ' ingredientList)

                config.db.none(
                        "INSERT INTO DB (upc, name, ingredient)" +
                        "VALUES ($1, $2, $3);", [upc, ingredientName, ingredientList]
                    )
            }))
            .catch((err) => {
                return next(err);
            });
    };
};

module.exports = Nutritionix;