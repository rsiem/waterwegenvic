// List of words
var myWords = [
    { word: "Hardness", size: "0" },
    { word: "CalcHardness", size: "0" },
    { word: "Calc TDS", size: "0" },
    { word: "NO3+NO2", size: "0" },
    { word: "Al", size: "0" },
    { word: "Chlorophyll-a", size: "0" },
    { word: "Phaeophytin", size: "0" },
    { word: "Mo", size: "2" },
    { word: "Se", size: "2" },
    { word: "F", size: "2" },
    { word: "Anions", size: "2" },
    { word: "Cations", size: "2" },
    { word: "Cab", size: "6" },
    { word: "OH", size: "6" },
    { word: "BiCarb", size: "6" },
    { word: "TOC", size: "8" },
    { word: "Mn", size: "10" },
    { word: "DO", size: "10" },
    { word: "Fe", size: "10" },
    { word: "Hg", size: "22" },
    { word: "Nitrite", size: "32" },
    { word: "Nitrate", size: "32" },
    { word: "Cl", size: "34" },
    { word: "K", size: "34" },
    { word: "Ca", size: "34" },
    { word: "Na", size: "34" },
    { word: "SO4", size: "36" },
    { word: "Total Alk", size: "36" },
    { word: "Mg", size: "36" },
    { word: "N", size: "40" },
    { word: "Ammonia", size: "40" },
    { word: "DOC", size: "52" },
    { word: "As", size: "54" },
    { word: "Cd", size: "54" },
    { word: "Cr", size: "54" },
    { word: "Ni", size: "54" },
    { word: "Cu", size: "54" },
    { word: "Pb", size: "54" },
    { word: "Zn", size: "54" },
    { word: "SiO2", size: "100" },
    { word: "TSS", size: "140" },
    { word: "FRP", size: "160" },
    { word: "Kjeldahl N", size: "180" },
    { word: "P", size: "200" }
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

    console.log("")
    
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
            .text(function (d) { return d.text; });
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