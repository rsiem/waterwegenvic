//var textColour = "#ffffff" // text color for Avoid, Reduce etc...;
//var backgroundColorStart = "#BDD7DD";//top color for background 
//var backgroundColorEnd = "#146E7F";// bottom color background
//var hoverColour = "#DE2F4C" // hover color for Avoid, Reduce etc...;;
//var fontSize = 20; // font size for Avoid, Reduce etc...;

//var colourValue = [0, 100, 250, 400, 500, 650, 900]


////var height = parseInt(d3.select('.funnel').style('height')),
////    width = parseInt(d3.select('.funnel').style('width'));

//var height = 768;
//var width = 1;

//function rgbToHex(rgb) {
//    rgb = rgb.match(/^rgb?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
//    return (rgb && rgb.length === 4) ? "#" +
//        ("0" + parseInt(rgb[1], 10).toString(16)).slice(-2) +
//        ("0" + parseInt(rgb[2], 10).toString(16)).slice(-2) +
//        ("0" + parseInt(rgb[3], 10).toString(16)).slice(-2) : '';
//}

//var gradientColor = d3.scaleLinear()
//    .domain([0, 900])
//    .range([backgroundColorStart, backgroundColorEnd])

//d3.select('#funnel')
//    .attr('height', height)
//    .attr('width', width);

//const data = [
//    {
//        label: 'Avoid',
//        value: 1,
//        backgroundColor: rgbToHex(gradientColor(colourValue[0])),
//        // tooltip and click div text 
//        tooltipText: "Does't purchase food if you won't use it, or it won't last"
//    },
//    {
//        label: 'Reduce',
//        value: 1,
//        backgroundColor: rgbToHex(gradientColor(colourValue[1])),
//        tooltipText: "Donate to Food charity, make a casserole"
//    },
//    {
//        label: 'Reuse',
//        value: 1,
//        backgroundColor: rgbToHex(gradientColor(colourValue[2])),
//        tooltipText: "Reuse bones, skins for a soup"
//    },
//    {
//        label: 'Recycle',
//        value: 1,
//        backgroundColor: rgbToHex(gradientColor(colourValue[3])),
//        tooltipText: "Separate food for worms and so on to the last least preferable"
//    },
//    {
//        label: 'Recover',
//        value: 1,
//        backgroundColor: rgbToHex(gradientColor(colourValue[4])),
//        tooltipText: "Recover"
//    },
//    {
//        label: 'Treat',
//        value: 1,
//        backgroundColor: rgbToHex(gradientColor(colourValue[5])),
//        tooltipText: "Treat"
//    },
//    {
//        label: 'Dispose',
//        value: 1,
//        backgroundColor: rgbToHex(gradientColor(colourValue[6])),
//        tooltipText: "Dispose to land fill"
//    },
//];

//const options = {
//    block: {
//        dynamicHeight: true,
//        fill: {
//            type: 'solid',
//        },
//        highlight: true
//    },
//    chart: {
//        bottomWidth: 0,
//        bottomPinch: 0,
//        height: 500,
//        animate: 100
//    },
//    label: {
//        format: '{l}',
//        fontSize: fontSize + 'px',
//        fill: textColour
//    },
//    tooltip: {
//        enabled: false
//    }
//};

//const chart = new D3Funnel('#funnel');
//chart.draw(data, options);

//// // Top Arrow Pointer mouseEvent
//d3.selectAll("#svg_24,#svg_26,#svg_32")
//    .on("mouseover", function (d) {
//        var allPaths = d3.selectAll("#funnel path").nodes();
//        d3.select(allPaths[0])
//            .style('stroke-width', 5)
//            .style('stroke', 'white')
//            .style('fill-opacity', 0.8)
//            .style('cursor', 'pointer')

//        blink(allPaths[0], 0)
//    })
//    .on("mouseout", function (d) {
//        var allPaths = d3.selectAll("#funnel path").nodes();
//        d3.select(allPaths[0]).style('stroke', 'none')
//        removeAnimation(allPaths[0], 0)
//    })

//// // Bottom Arrow Pointer mouseEvent
//d3.selectAll("#svg_19,#svg_31")
//    .on("mouseover", function (d) {
//        var allPaths = d3.selectAll("#funnel path").nodes();
//        d3.select(allPaths[6])
//            .style('stroke-width', 5)
//            .style('stroke', 'white')
//            .style('fill-opacity', 0.8)

//        blink(allPaths[6], 6)
//    })
//    .on("mouseout", function (d) {
//        var allPaths = d3.selectAll("#funnel path").nodes();
//        d3.select(allPaths[6]).style('stroke', 'none')

//        removeAnimation(allPaths[6], 6)
//    })

//// // Middle Arrow Pointer mouseEvent
//d3.select("#svg_20")
//    .on("mouseover", function (d) {
//        var allPaths = d3.selectAll("#funnel path").nodes();
//        d3.select(allPaths[3])
//            .style('stroke-width', 5)
//            .style('stroke', 'white')
//            .style('fill-opacity', 0.8)

//        blink(allPaths[3], 3)
//    })
//    .on("mouseout", function (d) {
//        var allPaths = d3.selectAll("#funnel path").nodes();
//        d3.select(allPaths[3]).style('stroke', 'none')

//        removeAnimation(allPaths[3], 3)
//    })

//setTimeout(addTooltip, 800);

//function addTooltip() {

//    d3.selectAll("#svg_24")
//        .style('fill', rgbToHex(gradientColor(colourValue[0])))

//    d3.selectAll("#svg_26")
//        .style('stroke', rgbToHex(gradientColor(colourValue[0])))

//    d3.selectAll("#svg_20")
//        .style('fill', rgbToHex(gradientColor(colourValue[3])))

//    d3.selectAll("#svg_19")
//        .style('fill', rgbToHex(gradientColor(colourValue[6])))

//    d3.selectAll("#svg_30")
//        .style('stroke', rgbToHex(gradientColor(colourValue[6])))

//    $("#infoSection").removeClass('hidden');

//    d3.selectAll("#funnel path")
//        .on("mouseover", function (d) {
//            var text = data[d.index].tooltipText;
//            d3.select(this)
//                .style('stroke-width', '3px')
//                .style('stroke', 'white')
//                .style('fill-opacity', 0.8)
//                .style('cursor', 'pointer')

//            var colour = this.__data__.fill.raw

//            d3.select(".funnelTooltip").html(text)
//                .style("left", d3.event.pageX + "px")
//                .style("top", d3.event.pageY + "px")
//                .style('border', 'solid 2px')
//                .style('color', colour)
//                .style('border-color', colour)
//                .style("display", "inline-block")
//        })
//        .on("mousemove", function (d, i) {

//            d3.select(this)
//                .style('stroke-width', '3px')
//                .style('stroke', 'white')
//                .style('fill-opacity', 0.8)

//            blink(this, i)
//            var text = data[d.index].tooltipText;
//            var colour = this.__data__.fill.raw

//            d3.select(".funnelTooltip").html(text)
//                .style("left", d3.event.pageX + "px")
//                .style("top", d3.event.pageY + "px")
//                .style('border', 'solid 2px')
//                .style('color', 'black')
//                .style('border-color', colour)
//                .style("display", "inline-block")

//        })
//        .on("mouseout", function (d, i) {
//            d3.select(".funnelTooltip")
//                .style("display", "none")

//            d3.select(this.parentElement).select('path')
//                .style('stroke', 'none')
//                .style('fill-opacity', 1)

//            removeAnimation(this, d.index);
//        })
//        .on("click", function (d, i) {
//            var text = data[d.index].tooltipText;
//            d3.select("#info").text(text)

//            var color = $(this).attr('fill')

//            $('.panel-primary').css('border-color', color)
//                .css('display', 'block')

//            $('.panel-heading').css('border-color', color)
//                .css('background-color', color)
//                .text(d.label.raw)
//        })

//    d3.selectAll("#funnel text")
//        .style('font-size', function (d, i) {
//            if (i == 6) {
//                return '11px';
//            }
//        })
//}

//function blink(ctr, index) {

//    if (d3.select(ctr.parentNode).select('text').text() == "Dispose") {
//        fontSize = "12px";
//    }
//    d3.select(ctr.parentNode).select('text')
//        .style("fill", hoverColour)
//        .style("font-size", fontSize + 'px')
//        .transition()
//        .duration(200)
//        .transition()
//        .duration(200)
//        .style('fill', function (d, i) {
//            return textColour;
//        })
//        .on("end", function () {
//            blink(ctr, index);
//        })
//}

//function removeAnimation(ctr, index) {

//    d3.select(ctr.parentNode).select('text').transition()
//        .duration(100)
//        .style("font-size", fontSize + 'px')
//        .style('fill', function (d, i) {
//            return textColour;
//        })

//        .style("font-weight", 'normal')
//}