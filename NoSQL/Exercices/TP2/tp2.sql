db.users.insertOne({name: "Chuck Norris", age: 77, hobbies: ["Karate", "Kung-fu", "Ruling the world"]})

db.users.find({_id: ObjectId('65e09329912af9f3693973c0')})

db.users.find({name: {$regex: /Chuck Norris/}})

db.users.find({ $and: [{age: {$gte : 20}}, {age: {$lte : 25}}]})

db.users.find({ $and: [{gender: "male"}, {age: {$gte : 30}}, {age: {$lte : 40}}]})

db.users.find({"address.state": "Louisiana"})

db.users.find().sort( { age: -1 } )

db.users.find({$and: [{gender: "female"}, {age: {$eq : 30}}]}).count()