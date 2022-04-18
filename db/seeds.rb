# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


reptile1 = Reptile.create(name: "Alligator Snapping Turtle", location: "Southeast", description: "Scales on shell make it look like an alligator.", image_link: 'https://news.illinois.edu/files/6367/578177/122614.jpg')
reptile2 = Reptile.create(name: "American Alligator", location: "Southeast", description: "When their mouth is closed you cannot see their teeth.", image_link: 'https://c.pxhere.com/images/21/64/b3df74c410bfd562efc49b5ac83b-1594128.jpg!d')
reptile3 = Reptile.create(name: "American Crocodile", location: "Southeast", description: "When theire mouth is open you can see their teeth.", image_link: 'https://c.pxhere.com/photos/39/3d/biscayne_national_park_florida_american_crocodile_wildlife_river_water_shoreline_dangerous-1355926.jpg!d')
reptile4 = Reptile.create(name: "Carolina Anole", location: "Southeast", description: "They can change colors.", image_link: 'https://c.pxhere.com/photos/b9/2b/nature_wildlife_brownanole_sonyalpha-170495.jpg!d')
reptile5 = Reptile.create(name: "Common Box Turtle", location: "Northeast", description: "Most common species of turtle in North America.", image_link: 'https://c.pxhere.com/photos/77/00/tortoise_grass_animal_shell-505431.jpg!s2')
reptile6 = Reptile.create(name: "Chuckwalla", location: "Southwest", description: "The Chuckwalla is a species of iguana.", image_link: 'https://c.pxhere.com/photos/87/37/chuckwalla_sauromalus_ater_reptile_animal_lizards_dragon_nature_lizard-539366.jpg!s2')
reptile7 = Reptile.create(name: "Garter Snake", location: "Northeast", description: "Garter snakes sometimes eat goldfish.", image_link: 'https://images.unsplash.com/photo-1588471627411-e60ce31e11f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2FydGVyJTIwc25ha2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60')
reptile9 = Reptile.create(name: "Copperhead", location: "Northeast", description: "", image_link: 'https://cdn.mos.cms.futurecdn.net/U4LVbsR7zhEKTP6fegzxQW.jpg')
reptile10 =Reptile.create(name: "Cottonmouth", location: "Southeast", description: "", image_link: 'https://cdn.mos.cms.futurecdn.net/WHMgGuKrVv77sqXp64ETKT.jpg')
reptile11 =Reptile.create(name: "Diamondback Terrapin", location: "Northeast", description: "", image_link: 'https://portal.ct.gov/lib/deep/wildlife/images/outreach/fact_sheets/dbterrapin.jpg')
reptile12 =Reptile.create(name: "Eastern Coral Snake", location: "Southeast", description: "", image_link: 'https://media.istockphoto.com/photos/coral-snake-picture-id453250621?k=20&m=453250621&s=612x612&w=0&h=oo6PxLl3AaB6w-VAziYmc_kLcpL8vdHkFM0G5fbXCg4=')
reptile13 =Reptile.create(name: "Gila Monster", location: "Southwest", description: "", image_link: 'https://animals.sandiegozoo.org/sites/default/files/2016-11/animals_hero_gila_monster_0.jpg')
reptile15 =Reptile.create(name: "Mojave Desert Tortoise", location: "Southwest", description: "", image_link: 'https://animalia.us-east-1.linodeobjects.com/animals/photos/full/1.25x1/desert-tortoise-8.jpg')
reptile16 =Reptile.create(name: "Racer Snake", location: "Northwest", description: "", image_link: 'https://www.floridamuseum.ufl.edu/wp-content/uploads/sites/116/2020/08/IMG_2389_S-500x347.jpg')
reptile17 =Reptile.create(name: "Ribbon Snake", location: "Northwest", description: "", image_link: 'https://upload.wikimedia.org/wikipedia/commons/d/de/EasternRibbonSnake.jpg')
reptile18 =Reptile.create(name: "Slender Glass Lizard", location: "NorthEast", description: "", image_link: 'https://herpsofnc.org/wp-content/uploads/2016/09/5691229643_973d48fd87_b.jpg')
reptile19 =Reptile.create(name: "Common Musk Turtle",  location: "Northeast", description: "", image_link: 'https://racinezoo.org/sites/default/files/Common-Musk-Turtle.png')
reptile20 =Reptile.create(name: "Texas Horned Lizard",  location: "Southwest", description: "", image_link: 'https://www.wildlifedepartment.com/sites/default/files/THL.jpg')
reptile21 =Reptile.create(name: "Western Banded Gecko", location: "Southwest", description: "", image_link: 'https://reptilesmagazine.com/wp-content/uploads/data-import/6fd47469/westernbandedgeckoshutterstock573841951.jpg')
reptile22 =Reptile.create(name: "Western Diamondback Rattlesnake", location: "Southwest", description: "", image_link: 'https://www.gannett-cdn.com/presto/2019/03/15/PSAT/bda063ae-345a-4c43-b99d-0d9d7d97eb19-Western_Diamondback_Rattlesnake-2.JPG?crop=1023,575,x0,y17&width=1023&height=511&format=pjpg&auto=webp')

journal1 = Journal.create(title:"First Journal", message:"First journal", date:"03/04/22", reptile_id: reptile1.id)
journal2 = Journal.create(title:"Second Journal", message:"Second journal", date:"03/10/22", reptile_id: reptile2.id)
journal3 = Journal.create(title:"Third Journal", message:"Third journal", date:"03/20/22", reptile_id: reptile3.id)

wishlist1 = Wishlist.create(reptile_id: reptile4.id)
wishlist2 = Wishlist.create(reptile_id: reptile5.id)
wishlist3 = Wishlist.create(reptile_id: reptile6.id)