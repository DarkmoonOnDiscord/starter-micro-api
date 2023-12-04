var http = require('http');
http.createServer(function (req, res) {
    console.log(`Just got a request at ${req.url}!`)
    res.write(`TOP 5 REASONS WHY YOU SHOULD KYS :
    N°1 : ur ugly
    N°2 : theres a bridge by your house
    N°3 : 198.161.9.1
    N°4 : u haz no friendz😂😂😂
    N°5 : lol`);
    res.end();
}).listen(process.env.PORT || 3000);
