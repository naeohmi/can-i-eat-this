DROP TABLE IF EXISTS information;
DROP TABLE IF EXISTS allergies;
DROP TABLE IF EXISTS products;



CREATE TABLE allergies(
    userid int PRIMARY KEY NOT NULL,
    eggsallergy BOOLEAN NOT NULL,
    fishallergy BOOLEAN NOT NULL,
    milkallergy BOOLEAN NOT NULL,
    peanutsallergy BOOLEAN NOT NULL,
    sesameallergy BOOLEAN NOT NULL,
    shellfishallergy BOOLEAN NOT NULL,
    soyallergy  BOOLEAN NOT NULL,
    treenutsallergy BOOLEAN NOT NULL,
    wheatallergy BOOLEAN NOT NULL
);


CREATE TABLE information (
    id SERIAL PRIMARY KEY NOT NULL,
    userid  int REFERENCES allergies(userid) NOT NULL,
    product VARCHAR NOT NULL,
    barcode VARCHAR  NOT NULL,
    eggs BOOLEAN NOT NULL,
    fish BOOLEAN NOT NULL,
    milk BOOLEAN NOT NULL,
    peanuts BOOLEAN NOT NULL,
    sesame BOOLEAN NOT NULL,
    shellfish BOOLEAN NOT NULL,
    soy BOOLEAN NOT NULL,
    treenuts BOOLEAN NOT NULL,
    wheat BOOLEAN NOT NULL,
    result BOOLEAN NOT NULL
);


INSERT INTO allergies(userid,eggsallergy,fishallergy,milkallergy, peanutsallergy,sesameallergy,shellfishallergy,soyallergy,treenutsallergy,wheatallergy) VALUES
(123456, FALSE ,TRUE, FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE),
(987987, FALSE ,FALSE, FALSE,TRUE,FALSE,FALSE,FALSE,FALSE,FALSE);


INSERT INTO information (userid, barcode,product, eggs, fish , milk, peanuts, sesame, shellfish , soy, treenuts,wheat , result) VALUES
(123456,'034000470204','Reeses Minis Peanut Butter Cups Candy' , FALSE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,FALSE,FALSE,TRUE),
(987987,'040000380962','M&M Party Size Pouch Pretzel',FALSE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,FALSE,FALSE,TRUE);

