import { readFileSync } from 'fs';
import { request } from 'http';

const url = 'http://localhost:8080';
const keyText = 'servicekey';
const keyValue = 'servicekey';

const fileName = process.argv[2];

const fileData = readFileSync(fileName).toString("base64");

const body = JSON.stringify({ fileName, fileData });

const options = {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json',
		'Content-Length': Buffer.byteLength(body),
		[keyText]: keyValue,
	},
};

const req = request(url, options, function (res) {
	let data = [];

	res.on('data', function (chunk) {
		data = data.concat(chunk);
	});

	res.on('end', function () {
		console.log(data.toString());
	});
});

req.on('error', function (err) {
	console.error(err);
});

req.write(body);

req.end();

