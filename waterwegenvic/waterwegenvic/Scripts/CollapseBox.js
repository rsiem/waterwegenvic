function InitCollapseFormat() {
    var backgroundColorStart = "#BFD2F5";//top color for background
    var backgroundColorEnd = "#3E61A3";// bottom color background
    var colourValue = [0, 500, 900]
    var gradientColor = d3.scaleLinear()
        .domain([0, 900])
        .range([backgroundColorStart, backgroundColorEnd])

    $("a[level='one']").css('background-color', rgbToHex(gradientColor(colourValue[0])));
    $("a[level='one']").closest('.panel').css('border', 'solid 2px' + rgbToHex(gradientColor(colourValue[0])));
    $("div[level='one']")
    .css('background-color', _rgbToHex(gradientColor(colourValue[0])))

    $("a[level='two']").css('background-color', rgbToHex(gradientColor(colourValue[1])));
    $("a[level='two']").closest('.panel').css('border', 'solid 2px' + rgbToHex(gradientColor(colourValue[1])));

    $("div[level='two']")
    .css('background-color', _rgbToHex(gradientColor(colourValue[1])))

    $("a[level='three']").css('background-color', rgbToHex(gradientColor(colourValue[2])));
    $("a[level='three']").closest('.panel').css('border', 'solid 2px' + rgbToHex(gradientColor(colourValue[2])));
    $("div[level='three']").css('background-color', _rgbToHex(gradientColor(colourValue[2])))
}

function rgbToHex(rgb) {
    rgb = rgb.match(/^rgb?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
    return (rgb && rgb.length === 4) ? "#" +
        ("0" + parseInt(rgb[1], 10).toString(16)).slice(-2) +
        ("0" + parseInt(rgb[2], 10).toString(16)).slice(-2) +
        ("0" + parseInt(rgb[3], 10).toString(16)).slice(-2) : '';
}

function _rgbToHex(rgb) {
    return [rgb.slice(0, rgb.indexOf(')')), ',0.5', rgb.slice(17)].join('')
}