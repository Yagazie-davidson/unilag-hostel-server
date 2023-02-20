const express = require("express");
const app = express();
const PORT = 4000;

let eninjoku = {
	f208: {
		room_number: "F208",
		no_man: 4,
		members: [
			{
				name: "Fortune",
				matric_number: 210805151,
				department: "Creative Arts",
				image: "",
				level: 200,
			},
			{
				name: "Femi",
				matric_number: 210805151,
				department: "English",
				image: "",
				level: 200,
			},
			{
				name: "Olademeji",
				matric_number: 210805151,
				department: "Some Engineering",
				image: "",
				level: 200,
			},
			{
				name: "Ebuka",
				matric_number: 210805151,
				department: "Finance",
				image: "",
				level: 100,
			},
		],
	},
	f207: {
		room_number: "F207",
		no_man: 4,
		members: [
			{
				name: "Letam the Dev",
				matric_number: 210805151,
				department: "Computer Science",
				image: "",
				level: 100,
			},
			{
				name: "Eazy",
				matric_number: 210805151,
				department: "Medcine and Surgery",
				image: "",
				level: 100,
			},
			{
				name: "Dapo",
				matric_number: 210805151,
				department: "Survaying",
				image: "",
				level: 300,
			},
			{
				name: "ZUmba",
				matric_number: 210805151,
				department: "Marine science",
				image: "",
				level: 400,
			},
		],
	},
	unknown: {
		room_number: "undefined",
		no_man: 0,
		members: [
			{
				name: "undefined",
				matric_number: 0,
				department: "undefined",
				image: "",
				level: 0,
			},
		],
	},
};

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});
app.get("/api/room/all", (req, res) => {
	res.json(eninjoku);
});
app.get("/api/room/:room", (req, res) => {
	const room = req.params.room;
	if (eninjoku[room]) {
		res.json(eninjoku[room]);
	} else {
		res.json(eninjoku["unknown"]);
	}
	// res.json(eninjoku);
});
app.listen(PORT, () => {
	console.log(`Your server is running on port ${PORT}. Better go catch it!`);
});
