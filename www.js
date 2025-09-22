const http  =  require("http");
const pageHead = '<!DOCTYPE html>\n<html lang="et">\n<head>\n\t<meta charset="utf-8">\n\t<title>Kristi Markus</title>\n</head>';
const pageBanner = '\n\t<img src="images/vp_banner_2024.png" alt="veebiprogrammeerimise 2024 aasta kursuse banner" class="center">';
const pageBody = '\n\t<h1>Kristi Markus</h1><p style="background-color:#E5CCFF;"><p style="background-color:#E5CCFF;">See leht on loodud õppetöö raames <a href="https://www.tlu.ee/">Tallinna Ülikoolis</a>, Digitehnoloogiate instituudis ja ei sisalda tõsiseltvõetavat materjali!</p>\n\t<hr>\n</body>\n</html>'

http.createServer(function(req, res){
	res.writeHead(200,{"Content-type": "text/html"});
	//res.write("Veeb tuligi!");
	res.write(pageHead);
	res.write(pageBanner);
	res.write(pageBody);
	return res.end();
}).listen(5203); //listen sees port-i number http://greeny.cs.tlu.ee:5203/

// \n - newline \t - tab