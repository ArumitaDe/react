var express = require('express');
var router = express.Router();
var request = require('request');
var arr =[];
/* GET users listing. */
router.get('/', function(req, res, next) {
    runQuery('tennis', '2016', '2017');
    //runQuery(req.searchTerm,req.startYear,req.endYear);
    function runQuery(searchTerm, startYear, endYear) {
        // This variable will be pre-programmed with our authentication key
        // (the one we received when we registered)
        const authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
        // Counter to keep track of article numbers as they come in
        var articleCounter = 0;
        // queryURLBase is the start of our API endpoint. The searchTerm will be appended to this when
        // the user hits the search button
        let URLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=";
        let URLQuery = `${searchTerm}&begin_date=${startYear}0101&end_date=${endYear}1231`;
        let queryURL = URLBase + URLQuery;
        request({
            url: queryURL,
            method: 'GET',
        }, function(err, response, body) {
            // Log the NYTData to console, where it will show up as an object
            var obj = JSON.parse(body);
            obj.response.docs.map(function(article) {
                var result = {};
                //console.log("article is ",  article);
                console.log("article headline is ", article.headline.main);
                result.title = article.headline.main;
                console.log("article url is is ", article.web_url);
                result.link = article.web_url;
                console.log("article date is ", article.pub_date);
                result.date = article.pub_date;
                console.log("------------------------------------");
                console.log("result is ", result);
                arr.push(result);
                
            });
            res.send(arr);
        });
    }
    });
module.exports = router;
