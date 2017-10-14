var Equipment = require("../models/Equipments");

var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/peak-dest-rentals01");

// Seeds
var equips = [

//------------------------- Goggles -------------------------- 

		new Equipment({		
		category: "goggles", name: "Bolle Carve", img: "https://i.imgur.com/L89CzOm.png", icon: ["https://i.imgur.com/k51fhR5.png"], brand: "Bolle", desc: "Spherical, molded carbonic-x lens material provides tough performance that lasts ChromaPop™ lens with Fog-X technology and TLT optics ensures clarity Responsive Fit™ frame is held in place by a wide, silicone-backed strap and articulating outrigger positioning system Patented Porex™ filter prevents optical distortion during changes in elevation", price: 6.00,
}),
		new Equipment({
		category: "goggles", name: "Bolle Tsar", img: "https://i.imgur.com/GJyhYDf.png", icon: ["https://i.imgur.com/njBPlpG.png"], brand: "Bolle", desc: "Snapshot magnetic lens interchange system features self-locating magnets that guide the lens and hold it securely in place Large, sleek, frameless design creates an outstanding field of view Includes 2 premium Vivid lenses with Optics by Zeiss and antifog coatings: 1 sun/all-conditions lens and one infrared storm/low-light lens Evak vent technology with durable foam manages moisture Triple-layer face foam with microfleece facing for all-day comfort Seamless compatibility with all Giro helmets", price: 17.00,
}),
		new Equipment({
		category: "goggles", name: "Bolle Virtuoso", img: "https://i.imgur.com/eg3hmKY.png", icon: ["https://i.imgur.com/HUwNHUp.png"], brand: "Bolle", desc: "2-speed microelectronic turbo exhaust fan helps eliminate moisture buildup inside the goggles Includes 2 performance lenses with different visible light transmission (VLT) ratings for use in varying conditions ChromaPop Sun lens offers 9% VLT for reduced glare and clearer vision in bright, sunny conditions Second ChromaPop Storm lens offers 50% VLT for enhanced definition and clarity in overcast or lowlight conditions Carbonic-X lenses with TLT Optics and a 5X antifog inner lens help keep your vision clear and free of fog, even while working up a sweat Wide, silicone-backed strap and a quick-fit adjustment system ensure a secure, comfortable fit Medium / large fit and helmet compatible", price: 26.00,
}),
		new Equipment({
		category: "goggles", name: "Oakley Airbrake XL", img: "https://i.imgur.com/3TSd7jJ.png", icon: ["https://i.imgur.com/I9j0YTZ.png"], brand: "Oakley", desc: "Spherical, molded carbonic-x lens material provides tough performance that lasts ChromaPop™ lens with Fog-X technology and TLT optics ensures clarity Responsive Fit™ frame is held in place by a wide, silicone-backed strap and articulating outrigger positioning system Patented Porex™ filter prevents optical distortion during changes in elevation", price: 6.00,
}),
		new Equipment({
		category: "goggles", name: "Oakley Eframe", img: "https://i.imgur.com/7XaOO8c.png", icon: ["https://i.imgur.com/H0GSKzJ.png"], brand: "Oakley", desc: "Snapshot magnetic lens interchange system features self-locating magnets that guide the lens and hold it securely in place Large, sleek, frameless design creates an outstanding field of view Includes 2 premium Vivid lenses with Optics by Zeiss and antifog coatings: 1 sun/all-conditions lens and one infrared storm/low-light lens Evak vent technology with durable foam manages moisture Triple-layer face foam with microfleece facing for all-day comfort Seamless compatibility with all Giro helmets", price: 21,
}),
		new Equipment({
		category: "goggles", name: "Oakley Flight Deck", img: "https://i.imgur.com/DBoFseB.png", icon: ["https://i.imgur.com/kEBhO3n.png"], brand: "Oakley", desc: "2-speed microelectronic turbo exhaust fan helps eliminate moisture buildup inside the goggles Includes 2 performance lenses with different visible light transmission (VLT) ratings for use in varying conditions ChromaPop Sun lens offers 9% VLT for reduced glare and clearer vision in bright, sunny conditions Second ChromaPop Storm lens offers 50% VLT for enhanced definition and clarity in overcast or lowlight conditions Carbonic-X lenses with TLT Optics and a 5X antifog inner lens help keep your vision clear and free of fog, even while working up a sweat Wide, silicone-backed strap and a quick-fit adjustment system ensure a secure, comfortable fit Medium / large fit and helmet compatible", price: 41.00,
}),
		new Equipment({
		category: "goggles", name: "Smith Optics", img: "https://i.imgur.com/iFcx9Yv.png", icon: ["https://i.imgur.com/k8f0mNV.png"], brand: "Smith", desc: "Spherical, molded carbonic-x lens material provides tough performance that lasts ChromaPop™ lens with Fog-X technology and TLT optics ensures clarity Responsive Fit™ frame is held in place by a wide, silicone-backed strap and articulating outrigger positioning system Patented Porex™ filter prevents optical distortion during changes in elevation", price: 15.00,
}),	
		new Equipment({
		category: "goggles", name: "Smith Prophecy Turbo", img: "https://i.imgur.com/yLo5ZmM.png", icon: ["https://i.imgur.com/2tESCxv.png"], brand: "Smith", desc: "Snapshot magnetic lens interchange system features self-locating magnets that guide the lens and hold it securely in place Large, sleek, frameless design creates an outstanding field of view Includes 2 premium Vivid lenses with Optics by Zeiss and antifog coatings: 1 sun/all-conditions lens and one infrared storm/low-light lens Evak vent technology with durable foam manages moisture Triple-layer face foam with microfleece facing for all-day comfort Seamless compatibility with all Giro helmets", price: 20.00,
}),
		new Equipment({
		category: "goggles", name: "Smith Squad XL", img: "https://i.imgur.com/A6fdpAr.png", icon: ["https://i.imgur.com/kPdyzM3.png"], brand: "Smith", desc: "2-speed microelectronic turbo exhaust fan helps eliminate moisture buildup inside the goggles Includes 2 performance lenses with different visible light transmission (VLT) ratings for use in varying conditions ChromaPop Sun lens offers 9% VLT for reduced glare and clearer vision in bright, sunny conditions Second ChromaPop Storm lens offers 50% VLT for enhanced definition and clarity in overcast or lowlight conditions Carbonic-X lenses with TLT Optics and a 5X antifog inner lens help keep your vision clear and free of fog, even while working up a sweat Wide, silicone-backed strap and a quick-fit adjustment system ensure a secure, comfortable fit Medium / large fit and helmet compatible", price: 30.00,
}),
		

//------------------------- Helmets -------------------------- 
		new Equipment({
		category: "helmets", name: "Anon Echo", img: "https://i.imgur.com/Mepw0z5.png", icon: ["https://i.imgur.com/pbxkXWS.png"], brand: "Anon", desc: "While most helmets protect only against direct impact, MIPS technology reduces rotational forces when the helmet gets hit at an angle Integrated camera mount allows seamless attachment of your GoPro camera directly to the helmet Adjustable climate control with 12 vents dials in the right amount of airflow while the self-adjusting Lifestyle system ensures a comfortable fit", price: 12.00,
}),
		new Equipment({
		category: "helmets", name: "Anon Prime", img: "https://i.imgur.com/b7VWe01.png", icon: ["https://i.imgur.com/sPgtHMj.png"], brand: "Anon", desc: "While most helmets protect only against direct impact, MIPS technology reduces rotational forces when the helmet gets hit at an angle Hybrid Shell construction offers full coverage protection in a low-profile helmet with reduced volume and weight Adjustable climate control with 18 vents helps you dial in the right amount of airflow while the adjustable Boa fit system ensures a comfortable fit Nanosilver performance lining fights odors; Snapfit SL2 ear pads; removable ultralight goggles lock", price: 27.00,
}),
		new Equipment({
		category: "helmets", name: "Anon Raider", img: "https://i.imgur.com/bfDVK6v.png", icon: ["https://i.imgur.com/YzSACAq.png"], brand: "Anon", desc: "Lightweight hybrid construction merges a durable ventilated hard shell upper with an in-mold lower shell; lightweight EPS foam liner adds protection While most helmets protect only against direct impact, MIPS technology reduces rotational forces when the helmet gets hit at an angle In Form 2 fit system with quick-fit vertical tuning adjustment lets you custom fit the helmet for proper positioning on your head Thermostat Control adjustable venting allows you to tune the airflow instantly with a simple, low-profile control button on the outside of the helmet Vents keep air flowing around your head to help prevent overheating Stack Ventilation aligns the helmet with the center vent of your goggles to help to keep them clear and free of fog while maintaining total helmet and goggles integration Integrated POV camera mounting system is stealth, secure and easy to operate, allowing you to instantly deploy your POV camera or quickly pop it off and stash it Fidlock magnetic buckle closure uses strong magnets to make it easy to open and close while a secure snap functionality ensures a continuously high locking force", price: 38.00,
}),
		new Equipment({
		category: "helmets", name: "Giro Advance MIPS", img: "https://i.imgur.com/Ie3S8AQ.png", icon: ["https://i.imgur.com/yXiLA9x.png"], brand: "Giro", desc: "While most helmets protect only against direct impact, MIPS technology reduces rotational forces when the helmet gets hit at an angle Integrated camera mount allows seamless attachment of your GoPro camera directly to the helmet Adjustable climate control with 12 vents dials in the right amount of airflow while the self-adjusting Lifestyle system ensures a comfortable fit", price: 23.00,
}),
		new Equipment({
		category: "helmets", name: "Giro Discord", img: "https://i.imgur.com/aJMKk04.png", icon: ["https://i.imgur.com/ENFnPXE.png"], brand: "Giro", desc: "While most helmets protect only against direct impact, MIPS technology reduces rotational forces when the helmet gets hit at an angle Hybrid Shell construction offers full coverage protection in a low-profile helmet with reduced volume and weight Adjustable climate control with 18 vents helps you dial in the right amount of airflow while the adjustable Boa fit system ensures a comfortable fit Nanosilver performance lining fights odors; Snapfit SL2 ear pads; removable ultralight goggles lock", price: 42.00,
}),
		new Equipment({
		category: "helmets", name: "Smith Optics Code", img: "https://i.imgur.com/iuXoqlR.png", icon: ["https://i.imgur.com/FrCLWjK.png"], brand: "Smith", desc: "While most helmets protect only against direct impact, MIPS technology reduces rotational forces when the helmet gets hit at an angle Integrated camera mount allows seamless attachment of your GoPro camera directly to the helmet Adjustable climate control with 12 vents dials in the right amount of airflow while the self-adjusting Lifestyle system ensures a comfortable fit", price: 27.00,
}),
		new Equipment({
		category: "helmets", name: "Smith Optics Quantum", img: "https://i.imgur.com/BkbTvv2.png", icon: ["https://i.imgur.com/EmzSami.png"], brand: "Smith", desc: "While most helmets protect only against direct impact, MIPS technology reduces rotational forces when the helmet gets hit at an angle Hybrid Shell construction offers full coverage protection in a low-profile helmet with reduced volume and weight Adjustable climate control with 18 vents helps you dial in the right amount of airflow while the adjustable Boa fit system ensures a comfortable fit Nanosilver performance lining fights odors; Snapfit SL2 ear pads; removable ultralight goggles lock", price: 32.00,
}),
		new Equipment({
		category: "helmets", name: "Giro Scrive MPS", img: "https://i.imgur.com/OGJ5fmR.png", icon: ["https://i.imgur.com/JeW0QIY.png"], brand: "Giro", desc: "Lightweight hybrid construction merges a durable ventilated hard shell upper with an in-mold lower shell; lightweight EPS foam liner adds protection While most helmets protect only against direct impact, MIPS technology reduces rotational forces when the helmet gets hit at an angle In Form 2 fit system with quick-fit vertical tuning adjustment lets you custom fit the helmet for proper positioning on your head Thermostat Control adjustable venting allows you to tune the airflow instantly with a simple, low-profile control button on the outside of the helmet Vents keep air flowing around your head to help prevent overheating Stack Ventilation aligns the helmet with the center vent of your goggles to help to keep them clear and free of fog while maintaining total helmet and goggles integration Integrated POV camera mounting system is stealth, secure and easy to operate, allowing you to instantly deploy your POV camera or quickly pop it off and stash it Fidlock magnetic buckle closure uses strong magnets to make it easy to open and close while a secure snap functionality ensures a continuously high locking force", price: 90.00,
}),	
		new Equipment({
		category: "helmets", name: "Smith Optics Variance", img: "https://i.imgur.com/ZEn3X3V.png", icon: ["https://i.imgur.com/SJMsxcU.png"], brand: "Smith", desc: "Lightweight hybrid construction merges a durable ventilated hard shell upper with an in-mold lower shell; lightweight EPS foam liner adds protection While most helmets protect only against direct impact, MIPS technology reduces rotational forces when the helmet gets hit at an angle In Form 2 fit system with quick-fit vertical tuning adjustment lets you custom fit the helmet for proper positioning on your head Thermostat Control adjustable venting allows you to tune the airflow instantly with a simple, low-profile control button on the outside of the helmet Vents keep air flowing around your head to help prevent overheating Stack Ventilation aligns the helmet with the center vent of your goggles to help to keep them clear and free of fog while maintaining total helmet and goggles integration Integrated POV camera mounting system is stealth, secure and easy to operate, allowing you to instantly deploy your POV camera or quickly pop it off and stash it Fidlock magnetic buckle closure uses strong magnets to make it easy to open and close while a secure snap functionality ensures a continuously high locking force", price: 45.00,
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
		category: "skis", name: "Line Sick Day", img: "https://i.imgur.com/L9oJ8P1.png", icon: ["https://i.imgur.com/g09y1nD.png"], brand: "Line", desc: "Rocker-camber-rocker profile eases turn initiation, enhances float and offers stability and control Paulownia wood core provides lightweight performance on the uphill and confidence-boosting strength on the way back down Full sidewall construction creates constant pressure along the edges of the skis, lending torsional rigidity and enhancing performance Carbon drive technology delivers simultaneous stiffness and flex, ensuring the skis maintain lightweight performance in the backcountry", price: 90.00,
}),
		new Equipment({
		category: "skis", name: "Line Sir Francis Bacon", img: "https://i.imgur.com/YhVYswS.png", icon: ["https://i.imgur.com/JkTtoMz.png"], brand: "Line", desc: "Versatile All Mountain Rocker makes skis extremely versatile and easy to maneuver in any snow condition Exo Profile 3D profile cuts swing weight and adds even more rigidity for carving controlled turns on groomers Carbon Tank Mesh replaces layers in the construction to reduce weight while adding power and strength Firewall sidewall blocks disruptive vibrations and adds rigidity for smoother turns Power Woodcore with Titanium Backbone 2.0 for maximum power and running stability", price: 105.00,
}),
		new Equipment({
		category: "skis", name: "Line Magnum Opus", img: "https://i.imgur.com/i89zxUu.png", icon: ["https://i.imgur.com/BonjwZI.png"], brand: "Line", desc: "Rocker-camber-rocker profile eases turn initiation, enhances float and offers stability and control Paulownia wood core provides lightweight performance on the uphill and confidence-boosting strength on the way back down Full sidewall construction creates constant pressure along the edges of the skis, lending torsional rigidity and enhancing performance Carbon drive technology delivers simultaneous stiffness and flex, ensuring the skis maintain lightweight performance in the backcountry", price: 120.00,
}),
		new Equipment({
		category: "skis", name: "Rossignol Experience 77", img: "https://i.imgur.com/8WYGRFt.png", icon: ["https://i.imgur.com/J5xpwLI.png"], brand: "Rossignol", desc: "Versatile All Mountain Rocker makes skis extremely versatile and easy to maneuver in any snow condition Exo Profile 3D profile cuts swing weight and adds even more rigidity for carving controlled turns on groomers Carbon Tank Mesh replaces layers in the construction to reduce weight while adding power and strength Firewall sidewall blocks disruptive vibrations and adds rigidity for smoother turns Power Woodcore with Titanium Backbone 2.0 for maximum power and running stability", price: 83.00,
}),
		new Equipment({
		category: "skis", name: "Rossignol Experience 100 HD", img: "https://i.imgur.com/U5VJSYN.png", icon: ["https://i.imgur.com/KkdWptE.png"], brand: "Rossignol", desc: "Rocker-camber-rocker profile eases turn initiation, enhances float and offers stability and control Paulownia wood core provides lightweight performance on the uphill and confidence-boosting strength on the way back down Full sidewall construction creates constant pressure along the edges of the skis, lending torsional rigidity and enhancing performance Carbon drive technology delivers simultaneous stiffness and flex, ensuring the skis maintain lightweight performance in the backcountry", price: 113.00,
}),
		new Equipment({
		category: "skis", name: "Rossignol Pursuit 800 Ti", img: "https://i.imgur.com/WC91BX0.png", icon: ["https://i.imgur.com/6ded7fF.png"], brand: "Rossignol", desc: "Versatile All Mountain Rocker makes skis extremely versatile and easy to maneuver in any snow condition Exo Profile 3D profile cuts swing weight and adds even more rigidity for carving controlled turns on groomers Carbon Tank Mesh replaces layers in the construction to reduce weight while adding power and strength Firewall sidewall blocks disruptive vibrations and adds rigidity for smoother turns Power Woodcore with Titanium Backbone 2.0 for maximum power and running stability", price: 150.00,
}),	
		new Equipment({
		category: "skis", name: "Volkl Kendo", img: "https://i.imgur.com/L4DaIUH.png", icon: ["https://i.imgur.com/NTkBT0I.png"], brand: "Volkl", desc: "Rocker-camber-rocker profile eases turn initiation, enhances float and offers stability and control Paulownia wood core provides lightweight performance on the uphill and confidence-boosting strength on the way back down Full sidewall construction creates constant pressure along the edges of the skis, lending torsional rigidity and enhancing performance Carbon drive technology delivers simultaneous stiffness and flex, ensuring the skis maintain lightweight performance in the backcountry", price: 105.00,
}),
		new Equipment({
		category: "skis", name: "Volkl RTM 78", img: "https://i.imgur.com/bKE0bL7.png", icon: ["https://i.imgur.com/qLofrTl.png"], brand: "Volkl", desc: "Rocker-camber-rocker profile eases turn initiation, enhances float and offers stability and control Paulownia wood core provides lightweight performance on the uphill and confidence-boosting strength on the way back down Full sidewall construction creates constant pressure along the edges of the skis, lending torsional rigidity and enhancing performance Carbon drive technology delivers simultaneous stiffness and flex, ensuring the skis maintain lightweight performance in the backcountry", price: 120.00,
}),
		new Equipment({
		category: "skis", name: "Volkl Katana", img: "https://i.imgur.com/dRXHLRX.png", icon: ["https://i.imgur.com/g7wvoij.png"], brand: "Volkl", desc: "Versatile All Mountain Rocker makes skis extremely versatile and easy to maneuver in any snow condition Exo Profile 3D profile cuts swing weight and adds even more rigidity for carving controlled turns on groomers Carbon Tank Mesh replaces layers in the construction to reduce weight while adding power and strength Firewall sidewall blocks disruptive vibrations and adds rigidity for smoother turns Power Woodcore with Titanium Backbone 2.0 for maximum power and running stability", price: 165.00,
}),

//------------------------- Snowboards --------------------------  
		new Equipment({
		category: "snowboards", name: "Burton Instigator", img: "https://i.imgur.com/RruuFic.png", icon: ["https://i.imgur.com/lASF2f9.png"], brand: "Burton", desc: "Rocker tip and tail offer amazing float in soft, crusty or spring snow. Camber underfoot combined with Mellow Magne Traction gives the board snap and hold while carving hardpack or boosting out of the half pipe. New for 2018, the Mountain Twin Power Core has been re-profiled for improved torsional response between your feet. Mellow Magne Traction provides confident stability for riding through tech terrain or unexpectedly rough snow conditions. Hyper-fast sintered 7000 base is waxed at the factory waxed with Wend natural wax. ECO-plastic topsheet is made from castor beans; steel edges and ABS sidewalls are made from recycled materials.", price: 60.00,
}),
		new Equipment({
		category: "snowboards", name: "Burton Instigator", img: "https://i.imgur.com/RruuFic.png", icon: ["https://i.imgur.com/lASF2f9.png"], brand: "Burton", desc: "Rocker tip and tail offer amazing float in soft, crusty or spring snow. Camber underfoot combined with Mellow Magne Traction gives the board snap and hold while carving hardpack or boosting out of the half pipe. New for 2018, the Mountain Twin Power Core has been re-profiled for improved torsional response between your feet. Mellow Magne Traction provides confident stability for riding through tech terrain or unexpectedly rough snow conditions. Hyper-fast sintered 7000 base is waxed at the factory waxed with Wend natural wax. ECO-plastic topsheet is made from castor beans; steel edges and ABS sidewalls are made from recycled materials.", price: 60.00,
}),
		new Equipment({
		category: "snowboards", name: "Burton Custom X", img: "https://i.imgur.com/mPp6GAc.png", icon: ["https://i.imgur.com/4nntxub.png"], brand: "Burton", desc: "Carbon fiber stringers provide extra pop in the powder and additional damping for landing big drops. Slight camber from just outside of the inserts improves responsiveness and edge-to-edge control. Multiple radius sidecut optimizes edge contact and control. Textured polyamide topsheet easily sheds any type of snow and provides unparalleled scratch protection, minimizing damage from edges crossing. Wood used in core is sustainably farmed with fast reforestation times; recycled materials are used wherever possible and all scraps are recycled; no VOCs are used in epoxy.", price: 113.00,
}),
		new Equipment({
		category: "snowboards", name: "Libtech Cold Brew", img: "https://i.imgur.com/DWOoL59.png", icon: ["https://i.imgur.com/MToDNwN.png"], brand: "Lib Tech", desc: "Rocker tip and tail offer amazing float in soft, crusty or spring snow. Camber underfoot combined with Mellow Magne Traction gives the board snap and hold while carving hardpack or boosting out of the half pipe. New for 2018, the Mountain Twin Power Core has been re-profiled for improved torsional response between your feet. Mellow Magne Traction provides confident stability for riding through tech terrain or unexpectedly rough snow conditions. Hyper-fast sintered 7000 base is waxed at the factory waxed with Wend natural wax. ECO-plastic topsheet is made from castor beans; steel edges and ABS sidewalls are made from recycled materials.", price: 68.00,
}),
		new Equipment({
		category: "snowboards", name: "Libtech Attack Banana", img: "https://i.imgur.com/BnCWUfL.png", icon: ["https://i.imgur.com/FHGVaTO.png"], brand: "Lib Tech", desc: "The flat, ultrathin, skatelike profile improves the ride, thanks to Filet-O-Flex design, yet rips harder than any soft board out there. Ramped-up grip and a fast yet low-maintenance sintered base offer control and durability in variable conditions. Off-Axis construction perfectly aligns the board's design to your body's stance and positioning for board feel that fits you like a glove. Flat profile between the feet means stability, improved balance and continuous edge control. Tip and tail kick up with an early rise outside the feet for the catch-free, loose feeling you'd expect from rocker. Perfectly symmetrical for a balanced ride that's equally versatile when ridden regular or switch. Triax construction and a durable and highly porous, sintered base add durability and superior wax absorption for greater overall glide.", price: 89.00,
}),
		new Equipment({
		category: "snowboards", name: "Libtech Swiss Knife", img: "https://i.imgur.com/DShkIvU.png", icon: ["https://i.imgur.com/6kd01df.png"], brand: "Lib Tech", desc: "Carbon fiber stringers provide extra pop in the powder and additional damping for landing big drops. Slight camber from just outside of the inserts improves responsiveness and edge-to-edge control. Multiple radius sidecut optimizes edge contact and control. Textured polyamide topsheet easily sheds any type of snow and provides unparalleled scratch protection, minimizing damage from edges crossing. Wood used in core is sustainably farmed with fast reforestation times; recycled materials are used wherever possible and all scraps are recycled; no VOCs are used in epoxy.", price: 113.00,
}),	
		new Equipment({
		category: "snowboards", name: "Ride Agenda", img: "https://i.imgur.com/J1a9FET.png", icon: ["https://i.imgur.com/URFSNKI.png"], brand: "Ride", desc: "Rocker tip and tail offer amazing float in soft, crusty or spring snow. Camber underfoot combined with Mellow Magne Traction gives the board snap and hold while carving hardpack or boosting out of the half pipe. New for 2018, the Mountain Twin Power Core has been re-profiled for improved torsional response between your feet. Mellow Magne Traction provides confident stability for riding through tech terrain or unexpectedly rough snow conditions. Hyper-fast sintered 7000 base is waxed at the factory waxed with Wend natural wax. ECO-plastic topsheet is made from castor beans; steel edges and ABS sidewalls are made from recycled materials.", price: 57.00,
}),
		new Equipment({
		category: "snowboards", name: "Ride Warpig", img: "https://i.imgur.com/a5YvIgy.png", icon: ["https://i.imgur.com/cD575Yz.png"], brand: "Ride", desc: "The flat, ultrathin, skatelike profile improves the ride, thanks to Filet-O-Flex design, yet rips harder than any soft board out there. Ramped-up grip and a fast yet low-maintenance sintered base offer control and durability in variable conditions. Off-Axis construction perfectly aligns the board's design to your body's stance and positioning for board feel that fits you like a glove. Flat profile between the feet means stability, improved balance and continuous edge control. Tip and tail kick up with an early rise outside the feet for the catch-free, loose feeling you'd expect from rocker. Perfectly symmetrical for a balanced ride that's equally versatile when ridden regular or switch. Triax construction and a durable and highly porous, sintered base add durability and superior wax absorption for greater overall glide.", price: 75.00,
}),
		new Equipment({
		category: "snowboards", name: "Ride Machete GT", img: "https://i.imgur.com/ESXbfNW.png", icon: ["https://i.imgur.com/uushork.png"], brand: "Ride", desc: "Carbon fiber stringers provide extra pop in the powder and additional damping for landing big drops. Slight camber from just outside of the inserts improves responsiveness and edge-to-edge control. Multiple radius sidecut optimizes edge contact and control. Textured polyamide topsheet easily sheds any type of snow and provides unparalleled scratch protection, minimizing damage from edges crossing. Wood used in core is sustainably farmed with fast reforestation times; recycled materials are used wherever possible and all scraps are recycled; no VOCs are used in epoxy.", price: 98.00,
}),

//------------------------- Snowmobiles --------------------------  
		new Equipment({
		category: "snowmobiles", name: "Polaris Assault", img: "https://i.imgur.com/DaTDo72.png", icon: ["https://i.imgur.com/y8Eem1M.png"], brand: "Polaris", desc: "The Assault is for crossover riders who want the ultimate in cornering and handling, and a sled that virtually eliminates stutter bumps. Featuring the Rider-Balanced AXYS® Chassis, 800 H.O. Cleanfire® Engine, and multiple comfort features, this snowmobile delivers Rider-Balanced™ Control, Unrivaled Acceleration, and Rider-Centric Comfort.", price: 150.00,
}),
		new Equipment({
		category: "snowmobiles", name: "Polaris 800 SKS", img: "https://i.imgur.com/Cjg1UJ8.png", icon: ["https://i.imgur.com/TWrT4e7.png"], brand: "Polaris", desc: "The S800 SKS snowmobile is for extreme performance riders that need to dominate tough terrain at high speeds. Its lightweight yet strong AXYS® Chassis paired with the 800 H.O. Cleanfire® Engine and Race-Ready components like reinforced rail beams and racing brake system deliver extreme crossover performance.", price: 160.00,
		
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