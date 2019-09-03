// List of words
var myWords = [
    { word: "Molybdenum", size: "2" },
    { word: "Selenium", size: "2" },
    { word: "Fluorine", size: "2" },
    { word: "Anions", size: "2" },
    { word: "Cations", size: "2" },
    { word: "Cellulose Acetate Butyrate", size: "6" },
    { word: "Hydroxide", size: "6" },
    { word: "Bicarbonate", size: "6" },
    { word: "Total Organic Carbon", size: "8" },
    { word: "Manganese", size: "10" },
    { word: "DO", size: "10" },
    { word: "Iron", size: "10" },
    { word: "Mercury", size: "22" },
    { word: "Nitrite", size: "32" },
    { word: "Nitrate", size: "32" },
    { word: "Chlorine", size: "34" },
    { word: "Potassium", size: "34" },
    { word: "Calcium", size: "34" },
    { word: "Sodium", size: "34" },
    { word: "Sulfate", size: "36" },
    { word: "Alkaline", size: "36" },
    { word: "Magnesium", size: "36" },
    { word: "Nitrogen", size: "40" },
    { word: "Ammonia", size: "40" },
    { word: "Dimethoxy Chloroamphetamine", size: "52" },
    { word: "Arsenic", size: "54" },
    { word: "Cadmium", size: "54" },
    { word: "Chromium", size: "54" },
    { word: "Nickel", size: "54" },
    { word: "Copper", size: "54" },
    { word: "Lead", size: "54" },
    { word: "Zinc", size: "54" },
    { word: "Silicon Dioxide", size: "100" },
    { word: "Total Suspended Solids", size: "140" },
    { word: "Fibre-Reinforced Plastic", size: "160" },
    { word: "Kjeldahl Nitrogen", size: "180" },
    { word: "Phosphorus", size: "200" }
];

window.onload = function () {

    var w;
    var h;

    if (window.innerWidth <= 400) {
        w = 250;
        h = 250;
    } else if (window.innerWidth <= 550) {
        w = 350;
        h = 350;
    } else {
        w = 450;
        h = 450;
    }
    
    // set the dimensions and margins of the graph
    var margin = { top: 10, right: 10, bottom: 10, left: 10 },
        width = w - margin.left - margin.right,
        height = h - margin.top - margin.bottom;

    // append the svg object to the body of the page
    var svg = d3.select("#my_dataviz").append("svg")
        .attr("class", "wordcloud_img")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

    // Constructs a new cloud layout instance. It run an algorithm to find the position of words that suits your requirements
    // Wordcloud features that are different from one word to the other must be here
    var layout = d3.layout.cloud()
        .size([width, height])
        .words(myWords.map(function (d) { return { text: d.word, size: d.size }; }))
        .padding(5)        //space between words
        .rotate(function () { return ~~(Math.random() * 2) * 90; })
        .fontSize(function (d) { return d.size; })      // font size of words
        .on("end", draw);
    layout.start();

    // This function takes the output of 'layout' above and draw the words
    // Wordcloud features that are THE SAME from one word to the other can be here
    function draw(words) {
        svg
            .append("g")
            .attr("transform", "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")")
            .selectAll("text")
            .data(words)
            .enter().append("text")
            .style("font-size", function (d) { return d.size; })
            .style("fill", "#69b3a2")
            .attr("text-anchor", "middle")
            .style("font-family", "Impact")
            .attr("transform", function (d) {
                return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
            })
            .text(function (d) {
                return d.text;
            });
    }
}

window.onresize = function () {

    var w;
    var h;

    console.log("inner width: " + window.innerWidth);

    if (window.innerWidth <= 400) {
        w = 250;
        h = 250;
    } else if (window.innerWidth <= 550) {
        w = 350;
        h = 350;
    } else {
        w = 450;
        h = 450;
    }

    console.log("width: " + w);

    // set the dimensions and margins of the graph
    var margin = { top: 10, right: 10, bottom: 10, left: 10 },
        width = w - margin.left - margin.right,
        height = h - margin.top - margin.bottom;

    d3.selectAll("svg.wordcloud_img").remove();

    // append the svg object to the body of the page
    var svg = d3.select("#my_dataviz").append("svg")
        .attr("class", "wordcloud_img")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

    // Constructs a new cloud layout instance. It run an algorithm to find the position of words that suits your requirements
    // Wordcloud features that are different from one word to the other must be here
    var layout = d3.layout.cloud()
        .size([width, height])
        .words(myWords.map(function (d) { return { text: d.word, size: d.size }; }))
        .padding(5)        //space between words
        .rotate(function () { return ~~(Math.random() * 2) * 90; })
        .fontSize(function (d) { return d.size; })      // font size of words
        .on("end", draw);
    layout.start();

    // This function takes the output of 'layout' above and draw the words
    // Wordcloud features that are THE SAME from one word to the other can be here
    function draw(words) {
        svg
            .append("g")
            .attr("transform", "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")")
            .selectAll("text")
            .data(words)
            .enter().append("text")
            .style("font-size", function (d) { return d.size; })
            .style("fill", "#69b3a2")
            .attr("text-anchor", "middle")
            .style("font-family", "Impact")
            .attr("transform", function (d) {
                return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
            })
            .text(function (d) { return d.text; });
    }
}