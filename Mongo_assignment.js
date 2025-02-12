use('store');
// Have already created a collection namd products


//Task-1:   Insert 100 Records  

db.products.insertMany(
    [
        {
            "name": "Ginger",
            "price": 64,
            "available_quantity": 47,
            "shop": "Pure Produce"
        },
        {
            "name": "Blueberry",
            "price": 42,
            "available_quantity": 16,
            "shop": "Fruit Fiesta"
        },
        {
            "name": "Pineapple",
            "price": 90,
            "available_quantity": 49,
            "shop": "Green Valley Grocers"
        },
        {
            "name": "Onion",
            "price": 65,
            "available_quantity": 32,
            "shop": "Fruitful Finds"
        },
        {
            "name": "Apple",
            "price": 78,
            "available_quantity": 27,
            "shop": "Fresh Fields Market"
        },
        {
            "name": "Strawberry",
            "price": 81,
            "available_quantity": 41,
            "shop": "Fruit Fiesta"
        },
        {
            "name": "Eggplant",
            "price": 67,
            "available_quantity": 23,
            "shop": "Fresh Harvest Market"
        },
        {
            "name": "Banana",
            "price": 79,
            "available_quantity": 26,
            "shop": "Fruitful Finds"
        },
        {
            "name": "Spinach",
            "price": 73,
            "available_quantity": 16,
            "shop": "Healthy Harvest"
        },
        {
            "name": "Potato",
            "price": 24,
            "available_quantity": 19,
            "shop": "Fresh Harvest Market"
        },
        {
            "name": "Orange",
            "price": 61,
            "available_quantity": 17,
            "shop": "Veggie Haven"
        },
        {
            "name": "Sweet Potato",
            "price": 21,
            "available_quantity": 23,
            "shop": "Orchard Fresh"
        },
        {
            "name": "Strawberry",
            "price": 120,
            "available_quantity": 0,
            "shop": "Pure Produce"
        },
        {
            "name": "Turnip",
            "price": 67,
            "available_quantity": 9,
            "shop": "Organic Oasis"
        },
        {
            "name": "Turnip",
            "price": 96,
            "available_quantity": 40,
            "shop": "Fruitful Finds"
        },
        {
            "name": "Mango",
            "price": 97,
            "available_quantity": 46,
            "shop": "Fruit Fiesta"
        },
        {
            "name": "Pumpkin",
            "price": 60,
            "available_quantity": 48,
            "shop": "Nature's Basket"
        },
        {
            "name": "Kiwi",
            "price": 90,
            "available_quantity": 11,
            "shop": "Farm Fresh Produce"
        },
        {
            "name": "Mango",
            "price": 39,
            "available_quantity": 25,
            "shop": "Veggie Delight"
        },
        {
            "name": "Broccoli",
            "price": 45,
            "available_quantity": 29,
            "shop": "Farm Fresh Produce"
        },
        {
            "name": "Blackberry",
            "price": 76,
            "available_quantity": 25,
            "shop": "Veggie Delight"
        },
        {
            "name": "Tomato",
            "price": 29,
            "available_quantity": 40,
            "shop": "Fresh Fields Market"
        },
        {
            "name": "Mango",
            "price": 66,
            "available_quantity": 5,
            "shop": "Pure Produce"
        },
        {
            "name": "Garlic",
            "price": 54,
            "available_quantity": 40,
            "shop": "Veggie Haven"
        },
        {
            "name": "Brussels Sprout",
            "price": 50,
            "available_quantity": 30,
            "shop": "Fresh Harvest Market"
        },
        {
            "name": "Blackberry",
            "price": 37,
            "available_quantity": 7,
            "shop": "Fruitful Finds"
        },
        {
            "name": "Blackberry",
            "price": 30,
            "available_quantity": 40,
            "shop": "Pure Produce"
        },
        {
            "name": "Lettuce",
            "price": 53,
            "available_quantity": 29,
            "shop": "Orchard Fresh"
        },
        {
            "name": "Blackberry",
            "price": 36,
            "available_quantity": 2,
            "shop": "Fresh Harvest Market"
        },
        {
            "name": "Sweet Potato",
            "price": 34,
            "available_quantity": 40,
            "shop": "Veggie Haven"
        },
        {
            "name": "Tomato",
            "price": 89,
            "available_quantity": 6,
            "shop": "Pure Produce"
        },
        {
            "name": "Spinach",
            "price": 45,
            "available_quantity": 5,
            "shop": "Nature's Basket"
        },
        {
            "name": "Pumpkin",
            "price": 68,
            "available_quantity": 19,
            "shop": "Veggie Haven"
        },
        {
            "name": "Kiwi",
            "price": 41,
            "available_quantity": 34,
            "shop": "Orchard Fresh"
        },
        {
            "name": "Potato",
            "price": 65,
            "available_quantity": 43,
            "shop": "Farm Fresh Produce"
        },
        {
            "name": "Asparagus",
            "price": 45,
            "available_quantity": 34,
            "shop": "Fresh Harvest Market"
        },
        {
            "name": "Potato",
            "price": 23,
            "available_quantity": 25,
            "shop": "Green Valley Grocers"
        },
        {
            "name": "Cherry",
            "price": 96,
            "available_quantity": 50,
            "shop": "Organic Oasis"
        },
        {
            "name": "Onion",
            "price": 84,
            "available_quantity": 30,
            "shop": "Healthy Harvest"
        },
        {
            "name": "Honeydew",
            "price": 56,
            "available_quantity": 26,
            "shop": "Veggie Haven"
        },
        {
            "name": "Chili Pepper",
            "price": 33,
            "available_quantity": 27,
            "shop": "Fresh Harvest Market"
        },
        {
            "name": "Grapes",
            "price": 91,
            "available_quantity": 48,
            "shop": "Pure Produce"
        },
        {
            "name": "Blackberry",
            "price": 70,
            "available_quantity": 28,
            "shop": "Veggie Haven"
        },
        {
            "name": "Honeydew",
            "price": 50,
            "available_quantity": 1,
            "shop": "Fresh Fields Market"
        },
        {
            "name": "Lemon",
            "price": 50,
            "available_quantity": 11,
            "shop": "Pure Produce"
        },
        {
            "name": "Cucumber",
            "price": 47,
            "available_quantity": 14,
            "shop": "Fruitful Finds"
        },
        {
            "name": "Cabbage",
            "price": 55,
            "available_quantity": 9,
            "shop": "Veggie Delight"
        },
        {
            "name": "Carrot",
            "price": 77,
            "available_quantity": 46,
            "shop": "Veggie Delight"
        },
        {
            "name": "Peach",
            "price": 88,
            "available_quantity": 11,
            "shop": "Fruitful Finds"
        },
        {
            "name": "Plum",
            "price": 25,
            "available_quantity": 25,
            "shop": "Pure Produce"
        },
        {
            "name": "Watermelon",
            "price": 99,
            "available_quantity": 19,
            "shop": "Nature's Basket"
        },
        {
            "name": "Cantaloupe",
            "price": 23,
            "available_quantity": 14,
            "shop": "Green Grocers"
        },
        {
            "name": "Raspberry",
            "price": 62,
            "available_quantity": 39,
            "shop": "Fruit Fiesta"
        },
        {
            "name": "Blueberry",
            "price": 43,
            "available_quantity": 26,
            "shop": "Nature's Basket"
        },
        {
            "name": "Avocado",
            "price": 74,
            "available_quantity": 3,
            "shop": "Veggie Haven"
        },
        {
            "name": "Cauliflower",
            "price": 85,
            "available_quantity": 47,
            "shop": "Orchard Fresh"
        },
        {
            "name": "Zucchini",
            "price": 31,
            "available_quantity": 7,
            "shop": "Nature's Basket"
        },
        {
            "name": "Squash",
            "price": 52,
            "available_quantity": 1,
            "shop": "Fresh Fields Market"
        },
        {
            "name": "Bell Pepper",
            "price": 19,
            "available_quantity": 25,
            "shop": "Nature's Basket"
        },
        {
            "name": "Radish",
            "price": 27,
            "available_quantity": 30,
            "shop": "Orchard Fresh"
        },
        {
            "name": "Beetroot",
            "price": 49,
            "available_quantity": 31,
            "shop": "Pure Produce"
        },
        {
            "name": "Celery",
            "price": 22,
            "available_quantity": 4,
            "shop": "Green Valley Grocers"
        },
        {
            "name": "Artichoke",
            "price": 35,
            "available_quantity": 24,
            "shop": "Nature's Basket"
        },
        {
            "name": "Asparagus",
            "price": 46,
            "available_quantity": 37,
            "shop": "Green Valley Grocers"
        },
        {
            "name": "Brussels Sprout",
            "price": 17,
            "available_quantity": 33,
            "shop": "Veggie Haven"
        },
        {
            "name": "Blackberry",
            "price": 37,
            "available_quantity": 9,
            "shop": "Garden Goods"
        },
        {
            "name": "Blackberry",
            "price": 30,
            "available_quantity": 7,
            "shop": "Veggie Haven"
        },
        {
            "name": "Lettuce",
            "price": 53,
            "available_quantity": 15,
            "shop": "Fresh Harvest Market"
        },
        {
            "name": "Blackberry",
            "price": 36,
            "available_quantity": 47,
            "shop": "Green Grocers"
        },
        {
            "name": "Sweet Potato",
            "price": 34,
            "available_quantity": 12,
            "shop": "Healthy Harvest"
        },
        {
            "name": "Tomato",
            "price": 89,
            "available_quantity": 20,
            "shop": "Fresh Harvest Market"
        },
        {
            "name": "Spinach",
            "price": 45,
            "available_quantity": 32,
            "shop": "Green Valley Grocers"
        },
        {
            "name": "Pumpkin",
            "price": 68,
            "available_quantity": 5,
            "shop": "Veggie Delight"
        },
        {
            "name": "Kiwi",
            "price": 41,
            "available_quantity": 29,
            "shop": "Organic Oasis"
        },
        {
            "name": "Potato",
            "price": 65,
            "available_quantity": 39,
            "shop": "Fresh Fields Market"
        },
        {
            "name": "Asparagus",
            "price": 45,
            "available_quantity": 31,
            "shop": "Green Grocers"
        },
        {
            "name": "Potato",
            "price": 14,
            "available_quantity": 21,
            "shop": "Fresh Fields Market"
        },
        {
            "name": "Cherry",
            "price": 96,
            "available_quantity": 2,
            "shop": "Garden Goods"
        },
        {
            "name": "Onion",
            "price": 84,
            "available_quantity": 5,
            "shop": "Organic Oasis"
        },
        {
            "name": "Honeydew",
            "price": 56,
            "available_quantity": 21,
            "shop": "Orchard Fresh"
        },
        {
            "name": "Chili Pepper",
            "price": 33,
            "available_quantity": 18,
            "shop": "Fresh Fields Market"
        },
        {
            "name": "Grapes",
            "price": 91,
            "available_quantity": 24,
            "shop": "Nature's Basket"
        },
        {
            "name": "Blackberry",
            "price": 18,
            "available_quantity": 42,
            "shop": "Green Valley Grocers"
        },
        {
            "name": "Honeydew",
            "price": 50,
            "available_quantity": 19,
            "shop": "Green Valley Grocers"
        },
        {
            "name": "Lemon",
            "price": 6,
            "available_quantity": 32,
            "shop": "Organic Oasis"
        },
        {
            "name": "Cucumber",
            "price": 47,
            "available_quantity": 16,
            "shop": "Veggie Haven"
        },
        {
            "name": "Cabbage",
            "price": 55,
            "available_quantity": 27,
            "shop": "Fruit Fiesta"
        },
        {
            "name": "Carrot",
            "price": 77,
            "available_quantity": 15,
            "shop": "Nature's Basket"
        },
        {
            "name": "Peach",
            "price": 88,
            "available_quantity": 12,
            "shop": "Fruitful Finds"
        },
        {
            "name": "Plum",
            "price": 25,
            "available_quantity": 35,
            "shop": "Organic Oasis"
        },
        {
            "name": "Watermelon",
            "price": 99,
            "available_quantity": 29,
            "shop": "Green Valley Grocers"
        },
        {
            "name": "Cantaloupe",
            "price": 23,
            "available_quantity": 3,
            "shop": "Garden Goods"
        },
        {
            "name": "Raspberry",
            "price": 62,
            "available_quantity": 49,
            "shop": "Farm Fresh Produce"
        },
        {
            "name": "Blueberry",
            "price": 43,
            "available_quantity": 23,
            "shop": "Veggie Haven"
        },
        {
            "name": "Avocado",
            "price": 74,
            "available_quantity": 1,
            "shop": "Garden Goods"
        },
        {
            "name": "Cauliflower",
            "price": 85,
            "available_quantity": 45,
            "shop": "Healthy Harvest"
        },
        {
            "name": "Choco",
            "price": 95,
            "available_quantity": 25,
            "shop": "Orchard Fresh"
        },
        {
            "name": "Berry",
            "price": 90,
            "available_quantity": 42,
            "shop": "Fruitful Finds"
        },
        {
            "name": "Chilly",
            "price": 45,
            "available_quantity": 27,
            "shop": "Fruitful Finds"
        },
        {
            "name": "Potato",
            "price": 30,
            "available_quantity": 29,
            "shop": "Farm Fresh Produce"
        },
        {
            "name": "Tomato",
            "price": 43,
            "available_quantity": 34,
            "shop": "Fruitful Finds"
        }
    ]
);


// Task-2:  Update 100 records
// // Increase price by 5% : (price + price*(0.05))
db.products.updateMany({},
    {
        $mul:{"price": 1.05}
    }
)


// // Task-3:  Perform indexing on particular 3 fields in MongoDB
db.products.createIndex({name: 1, price: 1, shop: 1})

// // Perform Search 
db.products.find({
    name: "Apple",
    price: 81.9,
    shop: "Fresh Fields Market"
}).explain("executionStats")



// // Task-4:  Find duplicates using aggrigates in MongoDB
db.products.aggregate([
    {
        $group: {
          _id: {name:"$name", price:"$price", shop: "$shop"},
          count: {$sum: 1}
        }
    },
    {
        $match: {
          count : {$gt: 1}
        }
    },
]).toArray()