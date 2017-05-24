const config = require('../config.js');

console.log('api has awoken!');
let getUpc = (req, res) => {

//I COMMENTED THIS OUT FOR TESTING PURPOSES TO ENSURE THE JSON PAYLOAD FROM THE 
//NUTRIONIX API IS EXACT AND CORRECT, WILL UPDATE LATER

    // const barcode = req.query.barcode;
    // config.db.one(
    //     "INSERT INTO DB (upc)" + "VALUES ($1);", [barcode]
    //     )
        // .then(
            // getInfo()
        // )
        // res.redirect('/')

        // .catch((err) => {
            // console.log(err);
        // });
};

let getInfo = (upc) => {
    console.log('getinfo woke up');
    const appId = '51857eb3';
    const appKey = 'be5d49bb734cca8a5980f4f8776ea657';
    return config.axios.get(`https://api.nutritionix.com/v1_1/item?upc=${upc}&appId=${appId}&appKey=${appKey}`)
        .then((res) => {
            var productName = res.data.item_name;
            var ingredientList = res.data.nf_ingredient_statement;
            // console.log(`name: ${productName}`);
            // console.log(`list: ${ingredientList}`);

            let listArr = ingredientList.split(" ");
            
            var info = {
                "userid": 123456789,
                "upc": `${upc}`,
                "productname": `${productName}`,
                "ingredientlist": [`${listArr}`],
                "issues": [false, false, false, false, false, false, false, false, false],
            };
            // console.log(info)

        })
        .catch((err) => {
            console.log(`err: ${err}`);
        });
    };

module.exports = {
    getUpc: getUpc,
    getInfo: getInfo,
};