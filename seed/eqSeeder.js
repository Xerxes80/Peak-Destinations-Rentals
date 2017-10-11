// This file should only need to run once to populate the database

var Equipment = require("../models/Equipments");

var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/peak-dest-rentals");

// Seeds
var equips = [

//------------------------- Goggles -------------------------- 

	new Equipment({
		category: "goggles",
		name: "Bolle Carve",
		img: "https://i.imgur.com/WfwyDat.png",
		brand: "Bolle",
		level: 1,
		price: 29.99,
}),
		new Equipment({
		category: "goggles",
		name: "Bolle Tsar",
		img: "https://i.imgur.com/S08U2h0.png",
		brand: "Bolle",
		level: 2,
		price: 99.99,
}),
		new Equipment({
		category: "goggles",
		name: "Bolle Virtuoso",
		img: "https://i.imgur.com/DxlhDSd.png",
		brand: "Bolle",
		level: 3,
		price: 139.99,
}),
		new Equipment({
		category: "goggles",
		name: "Oakley Airbrake XL",
		img: "https://i.imgur.com/6arOCsj.jpg",
		brand: "Oakley",
		level: 1,
		price: 29.99,
}),
		new Equipment({
		category: "goggles",
		name: "Oakley EFrame",
		img: "https://i.imgur.com/qeOzCO7.jpg",
		brand: "Oakley",
		level: 2,
		price: 99.99,
}),
		new Equipment({
		category: "goggles",
		name: "Oakley Flight Deck",
		img: "https://i.imgur.com/OqWh1D4.jpg",
		brand: "Oakley",
		level: 3,
		price: 139.99,
}),
		new Equipment({
		category: "goggles",
		name: "Smith Optics",
		img: "https://i.imgur.com/y4HWc9P.jpg",
		brand: "Smith",
		level: 1,
		price: 29.99,
}),
		new Equipment({
		category: "goggles",
		name: "Smith Prophecy Turbo",
		img: "https://i.imgur.com/j7dQbjC.jpg",
		brand: "Smith",
		level: 2,
		price: 99.99,
}),
		new Equipment({
		category: "goggles",
		name: "Smith Squad XL",
		img: "https://i.imgur.com/1RRz0tH.jpg",
		brand: "Smith",
		level: 3,
		price: 139.99,
}),

//------------------------- Helmets -------------------------- 
		new Equipment({
		category: "helmets",
		name: "Anon Echo",
		img: "https://i.imgur.com/VJgf128.jpg",
		brand: "Anon",
		level: 1,
		price: 89.99,
}),
		new Equipment({
		category: "helmets",
		name: "Anon Prime",
		img: "https://i.imgur.com/GSZJFdt.jpg",
		brand: "Anon",
		level: 2,
		price: 99.99,
}),
		new Equipment({
		category: "helmets",
		name: "Anon Raider",
		img: "https://i.imgur.com/Lyikgqd.jpg",
		brand: "Anon",
		level: 3,
		price: 149.99,
}),
		new Equipment({
		category: "helmets",
		name: "Giro Advance MIPS",
		img: "https://i.imgur.com/7U37Id2.jpg",
		brand: "Giro",
		level: 1,
		price: 89.99,
}),
		new Equipment({
		category: "helmets",
		name: "Giro Discord",
		img: "https://i.imgur.com/G8ux5E2.jpg",
		brand: "Giro",
		level: 2,
		price: 99.99,
}),
		new Equipment({
		category: "helmets",
		name: "Giro Scrive MPS",
		img: "https://i.imgur.com/owa6rQH.jpg",
		brand: "Giro",
		level: 3,
		price: 149.99,
}),
		new Equipment({
		category: "helmets",
		name: "Smith Optics Code",
		img: "https://i.imgur.com/vlaOb16.jpg",
		brand: "Smith",
		level: 1,
		price: 89.99,
}),
		new Equipment({
		category: "helmets",
		name: "Smith Optics Quantum",
		img: "https://i.imgur.com/f7LP0Gj.jpg",
		brand: "Smith",
		level: 2,
		price: 99.99,
}),
		new Equipment({
		category: "helmets",
		name: "Smith Optics Variance",
		img: "https://i.imgur.com/17bgrKt.jpg",
		brand: "Smith",
		level: 3,
		price: 149.99,
}),
//------------------------- Poles --------------------------
		new Equipment({
		category: "poles",
		name: "K2 Comp",
		img: "https://i.imgur.com/iwzW3rg.jpg",
		brand: "K2",
		level: 1,
		price: 14.99,
}),
		new Equipment({
		category: "poles",
		name: "K2 Power 8",
		img: "https://i.imgur.com/k50WvRZ.jpg",
		brand: "K2",
		level: 2,
		price: 29.99,
}),
		new Equipment({
		category: "poles",
		name: "K2 STY 9",
		img: "https://i.imgur.com/KJ0lvdl.jpg",
		brand: "K2",
		level: 3,
		price: 49.99,
}),
		new Equipment({
		category: "poles",
		name: "Line Dart",
		img: "https://i.imgur.com/fUiaLlz.jpg",
		brand: "Line",
		level: 1,
		price: 14.99,
}),
		new Equipment({
		category: "poles",
		name: "Line Bartlett",
		img: "https://i.imgur.com/5ZSosZ3.jpg",
		brand: "Line",
		level: 2,
		price: 29.99,
}),
		new Equipment({
		category: "poles",
		name: "Line Pollard",
		img: "https://i.imgur.com/7m5vQB6.jpg",
		brand: "Line",
		level: 3,
		price: 49.99,
}),
		new Equipment({
		category: "poles",
		name: "Rossignol Diva",
		img: "https://i.imgur.com/xy7GJcJ.jpg",
		brand: "Rossignol",
		level: 1,
		price: 14.99,
}),
		new Equipment({
		category: "poles",
		name: "Rossignol PMC",
		img: "https://i.imgur.com/taRCFMD.jpg",
		brand: "Rossignol",
		level: 2,
		price: 29.99,
}),
		new Equipment({
		category: "poles",
		name: "Rossignol Snowflake",
		img: "https://i.imgur.com/In3nb06.jpg",
		brand: "Rossignol",
		level: 3,
		price: 49.99,
}),

//------------------------- Skis --------------------------  
		new Equipment({
		category: "skis",
		name: "Blizzard Argos Titan",
		img: "https://i.imgur.com/gKx2QKF.jpg",
		brand: "Blizzard",
		level: 1,
		price: 199.99,
}),
		new Equipment({
		category: "skis",
		name: "Blizzard Regulator",
		img: "https://i.imgur.com/8OY5vo9.png",
		brand: "Blizzard",
		level: 2,
		price: 299.99,
}),
		new Equipment({
		category: "skis",
		name: "Blizzard Spur",
		img: "https://i.imgur.com/WSSJMSy.png",
		brand: "Blizzard",
		level: 3,
		price: 399.99,
}),
		new Equipment({
		category: "skis",
		name: "K2 Shredditor",
		img: "https://i.imgur.com/eGtHK8A.png",
		brand: "K2",
		level: 1,
		price: 199.99,
}),
		new Equipment({
		category: "skis",
		name: "K2 Full UVIT",
		img: "https://i.imgur.com/211BAW2.png",
		brand: "K2",
		level: 2,
		price: 299.99,
}),
		new Equipment({
		category: "skis",
		name: "K2 Preditor",
		img: "https://i.imgur.com/FpAsyBd.png",
		brand: "K2",
		level: 3,
		price: 399.99,
}),
		new Equipment({
		category: "skis",
		name: "Rossignol Hive",
		img: "https://i.imgur.com/k7BgUIC.jpg",
		brand: "Rossignol",
		level: 1,
		price: 199.99,
}),
		new Equipment({
		category: "skis",
		name: "Rossignol Soul 7",
		img: "https://i.imgur.com/cdPgb6x.jpg",
		brand: "Rossignol",
		level: 2,
		price: 299.99,
}),

		new Equipment({
		category: "skis",
		name: "Rossignol Reds",
		img: "https://i.imgur.com/Dlu7B9n.png",
		brand: "Rossignol",
		level: 3,
		price: 399.99,
}),

//------------------------- Snowboards --------------------------  
		new Equipment({
		category: "snowboards",
		name: "Burton Pink Kiss",
		img: "https://i.imgur.com/UNGUViG.jpg",
		brand: "Burton",
		level: 1,
		price: 199.99,
}),
		new Equipment({
		category: "snowboards",
		name: "Burton Record Setter",
		img: "https://i.imgur.com/zgjmm5N.jpg",
		brand: "Burton",
		level: 2,
		price: 299.99,
}),
		new Equipment({
		category: "snowboards",
		name: "Burton Vader",
		img: "https://i.imgur.com/g5pdGqc.jpg",
		brand: "Burton",
		level: 3,
		price: 399.99,
}),
		new Equipment({
		category: "snowboards",
		name: "K2 Happy Hour",
		img: "https://i.imgur.com/g1ZWfbA.jpg",
		brand: "K2",
		level: 1,
		price: 199.99,
}),
		new Equipment({
		category: "snowboards",
		name: "K2 Vandal",
		img: "https://i.imgur.com/kxYpuws.jpg",
		brand: "K2",
		level: 2,
		price: 299.99,
}),
		new Equipment({
		category: "snowboards",
		name: "K2 Pizza Time",
		img: "https://i.imgur.com/GwG1nVL.jpg",
		brand: "K2",
		level: 3,
		price: 399.99,
}),
		new Equipment({
		category: "snowboards",
		name: "Lib Tech Banana Yellow",
		img: "https://i.imgur.com/qcz3tJ1.jpg",
		brand: "Lib Tech",
		level: 1,
		price: 199.99,
}),
		new Equipment({
		category: "snowboards",
		name: "Lib Tech Howl",
		img: "https://i.imgur.com/UTF4Za7.jpg",
		brand: "Lib Tech",
		level: 2,
		price: 299.99,
}),
		new Equipment({
		category: "snowboards",
		name: "Lib Tech Land Viking",
		img: "https://i.imgur.com/rKmYWMA.jpg",
		brand: "Lib Tech",
		level: 3,
		price: 399.99,
}),

//------------------------- Snowmobiles --------------------------  
		new Equipment({
		category: "snowmobiles",
		name: "Polaris Assault",
		img: "https://i.imgur.com/pqKUhC7.jpg",
		brand: "Polaris",
		level: 0,
		price: 149.00,
}),
		new Equipment({
		category: "snowmobiles",
		name: "Polaris 800 SKS",
		img: "https://i.imgur.com/kfConZt.jpg",
		brand: "Polaris",
		level: 0,
		price: 159.00,
}),

	];


// Loops through each seed in equips, populates mongodb and runs exit function
var complete = 0;
for (var i = 0; i < equips.length; i++) {
	equips[i].save(function(err, result) {
		complete++;
		if (complete === equips.length) {
			exit();
		}
	});
}
// Exits the database connection via mongoose
function exit() {
	mongoose.disconnect();
}