var Equipment = require("../models/Equipments");

var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/peak-dest-rentals01");

// Seeds
var equips = [

//------------------------- Goggles -------------------------- 

	new Equipment({
		category: "goggles",
		name: "Oakley Flight Deck XM Lindsey Vonn Snow Goggles",
		icon: "https://i.imgur.com/jRxRGyI.jpg",
		img: ["https://i.imgur.com/YizKXCR.jpg"],
		brand: "Oakley",
		desc: "Prizm technology boosts contrast and visibility increasing your eyes ability to perceive detail and definition in snowy terrain Iridium lens coating balances light transmission and reduces glare Optically correct lens with F3 antifog coating combats lens fogging for clear vision in changing weather Injection molded polycarbonate lenses are manufactured under extreme pressure to create a precise contour of optically correct geometry Triple layer face foam is constructed of a dense base, a plush mid layer and a soft fleece top layer, ensuring a tight seal, good moisture management and maximum comfort Discreet frame notches at temples provide compatibility with most prescription eyewear without compromising the fit",
		price: 29.99,
}),
		new Equipment({
		category: "goggles",
		name: "Smith I/O ChromaPop Snow Goggles",
		icon: "https://i.imgur.com/TdRWLLt.jpg",
		img: ["https://i.imgur.com/Xu4ERV0.jpg"],
		brand: "Smith",
		desc: "Spherical, molded carbonic-x lens material provides tough performance that lasts ChromaPop™ lens with Fog-X technology and TLT optics ensures clarity Responsive Fit™ frame is held in place by a wide, silicone-backed strap and articulating outrigger positioning system Patented Porex™ filter prevents optical distortion during changes in elevation",
		price: 29.99,
}),
		new Equipment({
		category: "goggles",
		name: "Giro Contact Snow Goggles",
		icon: "https://i.imgur.com/FCq6dzz.jpg",
		img: ["https://i.imgur.com/M9H7TOF.jpg"],
		brand: "Giro",
		desc: "Snapshot magnetic lens interchange system features self-locating magnets that guide the lens and hold it securely in place Large, sleek, frameless design creates an outstanding field of view Includes 2 premium Vivid lenses with Optics by Zeiss and antifog coatings: 1 sun/all-conditions lens and one infrared storm/low-light lens Evak vent technology with durable foam manages moisture Triple-layer face foam with microfleece facing for all-day comfort Seamless compatibility with all Giro helmets",
		price: 29.99,
}),
		new Equipment({
		category: "goggles",
		name: "Smith I/OX Turbo Fan ChromaPop Snow Goggles",
		icon:"https://i.imgur.com/MgYqpL9.jpg",
		img: ["https://i.imgur.com/i50aY4z.jpg"],
		brand: "Smith",
		desc: "2-speed microelectronic turbo exhaust fan helps eliminate moisture buildup inside the goggles Includes 2 performance lenses with different visible light transmission (VLT) ratings for use in varying conditions ChromaPop Sun lens offers 9% VLT for reduced glare and clearer vision in bright, sunny conditions Second ChromaPop Storm lens offers 50% VLT for enhanced definition and clarity in overcast or lowlight conditions Carbonic-X lenses with TLT Optics and a 5X antifog inner lens help keep your vision clear and free of fog, even while working up a sweat Wide, silicone-backed strap and a quick-fit adjustment system ensure a secure, comfortable fit Medium / large fit and helmet compatible",
		price: 29.99,
}),


//------------------------- Helmets -------------------------- 
		new Equipment({
		category: "helmets",
		name: "Giro Range MIPS Snow Helmet",
		icon: "https://i.imgur.com/NYhgwZA.jpg",
		img: ["https://i.imgur.com/VJgf128.jpg"],
		brand: "Giro",
		desc: "While most helmets protect only against direct impact, MIPS technology reduces rotational forces when the helmet gets hit at an angle Integrated camera mount allows seamless attachment of your GoPro camera directly to the helmet (camera not included) Semiflexible construction wraps around the head, providing the lowest-profile fit ever created by Giro Thermostat Control adjustable venting, Super Cool Vents and Stack Ventilation allow custom breathability Fidlock magnetic buckle closure X-Static antibacterial padding",
		price: 29.99,
}),
		new Equipment({
		category: "helmets",
		name: "Giro Strata MIPS Snow Helmet",
		icon: "https://i.imgur.com/nyyWPKf.jpg",
		img: ["https://i.imgur.com/dpp8hy8.jpg"],
		brand: "Giro",
		desc: "Lightweight hybrid construction merges a durable ventilated hard shell upper with an in-mold lower shell; lightweight EPS foam liner adds protection While most helmets protect only against direct impact, MIPS technology reduces rotational forces when the helmet gets hit at an angle In Form 2 fit system with quick-fit vertical tuning adjustment lets you custom fit the helmet for proper positioning on your head Thermostat Control adjustable venting allows you to tune the airflow instantly with a simple, low-profile control button on the outside of the helmet Vents keep air flowing around your head to help prevent overheating Stack Ventilation aligns the helmet with the center vent of your goggles to help to keep them clear and free of fog while maintaining total helmet and goggles integration Integrated POV camera mounting system is stealth, secure and easy to operate, allowing you to instantly deploy your POV camera or quickly pop it off and stash it Fidlock magnetic buckle closure uses strong magnets to make it easy to open and close while a secure snap functionality ensures a continuously high locking force",
		price: 29.99,
}),
		new Equipment({
		category: "helmets",
		name: "Smith Variance MIPS Snow Helmet",
		icon: "https://i.imgur.com/jtJ8tw1.jpg",
		img: ["https://i.imgur.com/YSnjepp.jpg"],
		brand: "Smith",
		desc: "While most helmets protect only against direct impact, MIPS technology reduces rotational forces when the helmet gets hit at an angle Hybrid Shell construction offers full coverage protection in a low-profile helmet with reduced volume and weight Adjustable climate control with 18 vents helps you dial in the right amount of airflow while the adjustable Boa fit system ensures a comfortable fit Nanosilver performance lining fights odors; Snapfit SL2 ear pads; removable ultralight goggles lock",
		price: 29.99,
}),
		new Equipment({
		category: "helmets",
		name:"Smith Gage Snow Helmet",
		icon: "https://i.imgur.com/SDcD7Zu.jpg",
		img: ["https://i.imgur.com/6Lvkx4e.jpg"],
		brand: "Smith",
		desc: "While most helmets protect only against direct impact, MIPS technology reduces rotational forces when the helmet gets hit at an angle Integrated camera mount allows seamless attachment of your GoPro camera directly to the helmet Adjustable climate control with 12 vents dials in the right amount of airflow while the self-adjusting Lifestyle system ensures a comfortable fit",
		price: 29.99,
}),

//------------------------- Poles --------------------------
		new Equipment({
		category: "poles",
		name: "Swix Cross Cross-Country Ski Poles",
		icon: "https://i.imgur.com/miSumU8.jpg",
		img: ["https://i.imgur.com/miSumU8.jpg"],
		brand: "Swix",
		desc: "65% high-strength carbon fiber is light, durable and stiff for improved energy transfer Tapered shaft and high-end materials result in an excellent pendulum, which improves the overall feel of the pole Race-proven Pro-Fit strap provides a secure and comfortable fit with full adjustment",
		price: 14.99,
}),
		new Equipment({
		category: "poles",
		name: "Salomon Equipe 60 Carbon Cross-Country Ski Poles",
		icon: "https://i.imgur.com/HRWVzBI.jpg",
		img: ["https://i.imgur.com/HRWVzBI.jpg"],
		brand: "Salomon",
		desc: "Features lightweight 60% carbon shafts with a 16mm top diameter and a 9mm bottom diameter Cork grips are comfortable to hold on cold days; thumb rests make for efficient, powerful pole plants Precise-fitting ergonomic straps remove quickly and easily from the grips, letting you keep the straps on your gloves for convenience while freeing yourself from the poles Straps are easily adjustable Include lightweight aerodynamic racing baskets Tungsten tips are ideal for icy conditions and roller skiing",
		price: 14.99,
}),
		new Equipment({
		category: "poles",
		name: "Swix Comp CT5 Ski Poles",
		icon: "https://i.imgur.com/yyM09CN.jpg",
		img: ["https://i.imgur.com/yyM09CN.jpg"],
		brand: "Swix",
		desc: "Comp poles come with a proven Swix Pro Fit 2 adjustable strap system; most pole sizes come with a large strap to accommodate a wider range of gloves Universal PC grips are very durable in cold conditions and compatible with all Swix straps on the market; 16mm is a standard size upper shaft in the Swix line Swix-favorite large race baskets work well in most snow conditions; 10mm taper is also standard with all Swix performance poles Swix poles focus on an ideal pendulum to keep poles as efficient and balanced as possible",
		price: 14.99,
}),
		new Equipment({
		category: "poles",
		name: "Swix RC Pro Cross-Country Ski Poles",
		icon: "https://i.imgur.com/ifxINuB.jpg",
		img: ["https://i.imgur.com/ifxINuB.jpg"],
		brand: "Swix",
		desc: "50% high-strength carbon fiber is light, durable and stiff Tapered shaft and high-end materials result in a light and strong feel; the RC Pro is a performance pole at a great price Race proven Pro-Fit strap provides a secure and comfortable fit with full adjustment Comes with popular 97 large race baskets Light and strong Nordic ski poles are an important performance upgrade to every level of skier",
		price: 14.99,
}),

//------------------------- Skis --------------------------  
		new Equipment({
		category: "skis",
		name: "Blizzard Cochise Skis",
		icon: "https://i.imgur.com/nRRPwXM.jpg",
		img: ["https://i.imgur.com/tDDONdv.jpg"],
		brand: "Blizzard",
		desc: "Rocker-camber-rocker profile eases turn initiation, enhances float and offers stability and control Paulownia wood core provides lightweight performance on the uphill and confidence-boosting strength on the way back down Full sidewall construction creates constant pressure along the edges of the skis, lending torsional rigidity and enhancing performance Carbon drive technology delivers simultaneous stiffness and flex, ensuring the skis maintain lightweight performance in the backcountry",
		price: 49.99,
}),
		new Equipment({
		category: "skis",
		name: "Atomic Vantage X 75 Skis with Bindings",
		icon: "https://i.imgur.com/gB5xDuM.jpg",
		img: ["https://i.imgur.com/z7IVGuF.jpg"],
		brand: "Atomic",
		desc: "Versatile All Mountain Rocker makes skis extremely versatile and easy to maneuver in any snow condition Exo Profile 3D profile cuts swing weight and adds even more rigidity for carving controlled turns on groomers Carbon Tank Mesh replaces layers in the construction to reduce weight while adding power and strength Firewall sidewall blocks disruptive vibrations and adds rigidity for smoother turns Power Woodcore with Titanium Backbone 2.0 for maximum power and running stability",
		price: 49.99,
}),
		new Equipment({
		category: "skis",
		name: "Blizzard Zero G 108 Skis",
		icon: "https://i.imgur.com/Jhyx2nq.jpg",
		img: ["https://i.imgur.com/nDOP0i6.jpg"],
		brand: "Blizzard",
		desc: "Rocker-camber-rocker profile eases turn initiation, enhances float and offers stability and control Paulownia wood core provides lightweight performance on the uphill and confidence-boosting strength on the way back down Full sidewall construction creates constant pressure along the edges of the skis, lending torsional rigidity and enhancing performance Carbon drive technology delivers simultaneous stiffness and flex, ensuring the skis maintain lightweight performance in the backcountry",
		price: 49.99,
}),
		new Equipment({
		category: "skis",
		name: "Atomic Vantage 90 CTI Skis",
		icon: "https://i.imgur.com/kHnvZAl.jpg",
		img: ["https://i.imgur.com/oiHZe3M.jpg"],
		brand: "Blizzard",
		desc: "It's one of the top models in the Atomic Vantage series—progressive all-mountain skis built to be great on hardpack and equally good in soft snow To achieve that balance it features Carbon Tank Mesh, a layer of rigid woven mesh, that adds strength across the ski while actually reducing weight. That's on top of a Titanium Backbone 2.0 that runs the length of the ski, and the iconic Vantage Firewall, an extra full sidewall for power transmission and edge grip",
		price: 49.99,
}),

//------------------------- Snowboards --------------------------  
		new Equipment({
		category: "snowboards",
		name: "Arbor Element Black Snowboard",
		icon: "https://i.imgur.com/eS3S7j6.jpg",
		img: ["https://i.imgur.com/ahHrwwE.jpg"],
		brand: "Arbor",
		desc: "Parabolic rocker progressively reduces the amount of rocker toward tip and tail for low profiles that engage with the snow for high speeds, major turns and big landings Grip Tech is a tri-radial sidecut design that creates additional heel and toe contact points, providing a direct, ergonomic way to grip the snow when more control is needed Medium-flex mountain twin is recommended for intermediate to advanced riders Hand-dyed ash Power Ply topsheet gives strength, durability and energy return Knucklehead-style tips are designed for peak-to-parking-lot versatility with extra punch for powder. 2x4 14-pack inserts give a broad stance range. Single malt standard wood core is made from sustainably grown poplar wood for reliable energy return. Triax over biax mixed glassing layup offers versatility for pow, backcountry, groomers, jumps and more. 360° fully wrapped sidewall eliminates the need for tip fill, delivering improved board life and durability.",
		price: 69.99,
}),
		new Equipment({
		category: "snowboards",
		name: "Burton Socialite Snowboard",
		icon: "https://i.imgur.com/letwsib.jpg",
		img: ["https://i.imgur.com/1X6BIAT.jpg"],
		brand: "Burton",
		desc: "The flat, ultrathin, skatelike profile improves the ride, thanks to Filet-O-Flex design, yet rips harder than any soft board out there. Ramped-up grip and a fast yet low-maintenance sintered base offer control and durability in variable conditions. Off-Axis construction perfectly aligns the board's design to your body's stance and positioning for board feel that fits you like a glove. Flat profile between the feet means stability, improved balance and continuous edge control. Tip and tail kick up with an early rise outside the feet for the catch-free, loose feeling you'd expect from rocker. Perfectly symmetrical for a balanced ride that's equally versatile when ridden regular or switch. Triax construction and a durable and highly porous, sintered base add durability and superior wax absorption for greater overall glide.",
		price: 69.99,
}),
		new Equipment({
		category: "snowboards",
		name: "Jones Mountain Twin Snowboard",
		icon: "https://i.imgur.com/im7EeD0.jpg",
		img: ["https://i.imgur.com/5RJjSWG.jpg"],
		brand: "Jones",
		desc: "Rocker tip and tail offer amazing float in soft, crusty or spring snow. Camber underfoot combined with Mellow Magne Traction gives the board snap and hold while carving hardpack or boosting out of the half pipe. New for 2018, the Mountain Twin Power Core has been re-profiled for improved torsional response between your feet. Mellow Magne Traction provides confident stability for riding through tech terrain or unexpectedly rough snow conditions. Hyper-fast sintered 7000 base is waxed at the factory waxed with Wend natural wax. ECO-plastic topsheet is made from castor beans; steel edges and ABS sidewalls are made from recycled materials.",
		price: 69.99,
}),
		new Equipment({
		category: "snowboards",
		name: "Weston Snowboards Big Chief Splitboard",
		icon: "https://i.imgur.com/aQLWPun.jpg",
		img: ["https://i.imgur.com/zq3JK21.jpg"],
		brand: "Weston",
		desc: "Carbon fiber stringers provide extra pop in the powder and additional damping for landing big drops. Slight camber from just outside of the inserts improves responsiveness and edge-to-edge control. Multiple radius sidecut optimizes edge contact and control. Textured polyamide topsheet easily sheds any type of snow and provides unparalleled scratch protection, minimizing damage from edges crossing. Wood used in core is sustainably farmed with fast reforestation times; recycled materials are used wherever possible and all scraps are recycled; no VOCs are used in epoxy.",
		price: 69.99,
}),

//------------------------- Snowmobiles --------------------------  
		new Equipment({
		category: "snowmobiles",
		name: "Polaris 800 Switchback PRO-S",
		icon: "https://i.imgur.com/wmB4uPt.jpg",
		img: ["https://i.imgur.com/W6WZIrx.jpg", "https://i.imgur.com/wmB4uPt.jpg", "https://i.imgur.com/3dBMvd4.jpg" ],
		brand: "Polaris",
		desc: "The 800 Switchback® PRO-S is for crossover riders who want the ultimate in cornering and handling, and a sled that virtually eliminates stutter bumps. Featuring the Rider-Balanced AXYS® Chassis, 800 H.O. Cleanfire® Engine, and multiple comfort features, this snowmobile delivers Rider-Balanced™ Control, Unrivaled Acceleration, and Rider-Centric Comfort.",
		price: 200.00,
}),
		new Equipment({
		category: "snowmobiles",
		name: "Polaris 800 Switchback XCR",
		icon: "https://i.imgur.com/vLQHYvt.jpg",
		img: ["https://i.imgur.com/LOXlgEA.jpg", "https://i.imgur.com/vLQHYvt.jpg", "https://i.imgur.com/YqB3NQr.jpg"],
		brand: "Polaris",
		desc: "The Switchback® XCR snowmobile is for extreme performance riders that need to dominate tough terrain at high speeds. Its lightweight yet strong AXYS® Chassis paired with the 800 H.O. Cleanfire® Engine and Race-Ready components like reinforced rail beams and racing brake system deliver extreme crossover performance.",
		price: 200.00,
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