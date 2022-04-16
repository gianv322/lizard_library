# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


reptile1 = Reptile.create(name: "Alligator Snapping Turtle", location: "Southeast", description: "Scales on shell make it look like an alligator.")
reptile2 = Reptile.create(name: "American Alligator", location: "Southeast", description: "When their mouth is closed you cannot see their teeth.")
reptile3 = Reptile.create(name: "American Crocodile", location: "Southeast", description: "When theire mouth is open you can see their teeth.")
reptile4 = Reptile.create(name: "Carolina Anole", location: "Southeast", description: "They can change colors.")
reptile5 = Reptile.create(name: "Common Box Turtle", location: "Northeast", description: "Most common species of turtle in North America.")
reptile6 = Reptile.create(name: "Chuckwalla", location: "Southwest", description: "The Chuckwalla is a species of iguana.")
reptile7 = Reptile.create(name: "Garter Snake", location: "Northeast", description: "Garter snakes sometimes eat goldfish.")
reptile9 = Reptile.create(name: "Copperhead", location: "Northeast", description: "")
reptile10 =Reptile.create(name: "Cottonmouth", location: "Southeast", description: "")
reptile11 =Reptile.create(name: "Diamondback Terrapin", location: "Northeast", description: "")
reptile12 =Reptile.create(name: "Eastern Coral Snake", location: "Southeast", description: "")
reptile13 =Reptile.create(name: "Gila Monster", location: "Southwest", description: "")
reptile14 =Reptile.create(name: "Common Box Turtle", location: "Northeast", description: "")
reptile15 =Reptile.create(name: "Mojave Desert Tortoise", location: "Southwest", description: "")
reptile16 =Reptile.create(name: "Racer Snake", location: "Northwest", description: "")
reptile17 =Reptile.create(name: "Ribbon Snake", location: "Northwest", description: "")
reptile18 =Reptile.create(name: "Slender Glass Lizard", location: "NorthEast", description: "")
reptile19 =Reptile.create(name: "Common Musk Turtle",  location: "Northeast", description: "")
reptile20 =Reptile.create(name: "Texas Horned Lizard",  location: "Southwest", description: "")
reptile21 =Reptile.create(name: "Western Banded Gecko", location: "Southwest", description: "")
reptile22 =Reptile.create(name: "Western Diamondback Rattlesnake", location: "Southwest", description: "")

journal1 = Journal.create(title:"First Journal", message:"First journal", date:"03/04/22", reptile_id: reptile1.id)
journal2 = Journal.create(title:"Second Journal", message:"Second journal", date:"03/10/22", reptile_id: reptile2.id)
journal3 = Journal.create(title:"Third Journal", message:"Third journal", date:"03/20/22", reptile_id: reptile3.id)

wishlist1 = Wishlist.create(reptile_id: reptile4.id)
wishlist2 = Wishlist.create(reptile_id: reptile5.id)
wishlist3 = Wishlist.create(reptile_id: reptile6.id)