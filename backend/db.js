const mongoose = require('mongoose');
// const mongoURI = 'mongodb+srv://truptpatel:buddy@cluster0.kncusjq.mongodb.net/gofood?retryWrites=true&w=majority'

// const mongoURI = 'mongodb+srv://truptpatel:buddy@cluster0.kncusjq.mongodb.net/gofood?retryWrites=true&w=majority&appName=Cluster0'
const mongoURI = 'mongodb+srv://truptpatel:buddy@cluster0.kncusjq.mongodb.net/gofood?retryWrites=true&w=majority&appName=Cluster0'
const mongoDB = async () => {
    await mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
        if (err) console.log("---", err)
        else {
            console.log("connected");
            const fetched_data = await mongoose.connection.db.collection("food_items");
            fetched_data.find({}).toArray(async function (err, data) {

                const food_Category = await mongoose.connection.db.collection("food_Category");
                food_Category.find({}).toArray(function (err, catData) {
                    if (err) console.log(err);
                    else {
                        global.food_items = data;
                        global.food_Category = catData;  
                    }
                })
                // if(err) console.log(err);
                // else {
                //     global.food_items = data;
                //     console.log(global.food_items)
                // }
            })
        }

    });
}

module.exports = mongoDB;
