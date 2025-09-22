const http  =  require("http");
const url = require("url");
const path = require("path");
const fs = require("fs");

const pageHead = '<!DOCTYPE html>\n<html lang="et">\n<head>\n\t<meta charset="utf-8">\n\t<title>Kristi Markus</title>\n</head>';
const pageBanner = '\n\t<img src="/vp_banner_2024.png" alt="veebiprogrammeerimise 2024 aasta kursuse banner" class="center">';
const pageBody = '\n\t<h1>Kristi Markus</h1><p style="background-color:#E5CCFF;"><p style="background-color:#E5CCFF;">See leht on loodud õppetöö raames <a href="https://www.tlu.ee/">Tallinna Ülikoolis</a>, Digitehnoloogiate instituudis ja ei sisalda tõsiseltvõetavat materjali!</p>\n\t<hr>\n</body>\n</html>'

http.createServer(function(req, res){
	// saan kätte url-i
	let currentUrl = url.parse(req.url, true);
	console.log(currentUrl.pathname);
	
	//reageerin erinevatele päringutele
	
	if(currentUrl.pathname === "/"){
		res.writeHead(200,{"Content-type": "text/html"});
		//res.write("Veeb tuligi!");
		res.write(pageHead);
		res.write(pageBanner);
		res.write(pageBody);
		return res.end();
	}
	else if(currentUrl.pathname === "/nali") {
		res.writeHead(200,{"Content-type": "text/html"});
		//res.write("Veeb tuligi!");
		res.write(pageHead);
		//res.write(pageBanner);
		res.write('\n\t<p>On ju naljakas!</p>');
		res.write(pageBody);
		return res.end();
	}
	else if(currentUrl.pathname === "/vp_banner_2024.png"){
		//liidame banneri failitee
		let bannerPath = path.join(__dirname, "images");
		fs.readFile(bannerPath + currentUrl.pathname, (err, data)=> {
			if(err){
				throw err;
			}
			res.writeHead(200,{"Content-type": "image/png"});
			res.end(data);
		});
	}
	else {
		res.end("ERROR 404, ei leia!");
	}
	
}).listen(5203); //listen sees port-i number http://greeny.cs.tlu.ee:5203/

// \n - newline \t - tab