var html = '';

var randomRGB = function () {
    return Math.floor(Math.random() * 256);
};

for (i=0; i<1000; i++) {
    html += '<div style="background-color:' + 'rgb(' + randomRGB() + ',' + randomRGB() + ',' + randomRGB() + ')' + '"></div>';
}

document.write(html);