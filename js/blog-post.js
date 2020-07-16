var node = document.getElementById('article');
var text = node.innerText.toLowerCase();

function makeBuzz(first, second, third, fourth, five, six){
    var data = [{
            "x": first,
            "value": text.split(first).length - 1
        }, {
            "x": second,
            "value": text.split(second).length - 1
        }, {
            "x": third,
            "value": text.split(third).length - 1
        }, {
            "x": fourth,
            "value": text.split(fourth).length - 1
        }, {
            "x": five,
            "value": text.split(five).length - 1
        }, {
            "x": six,
            "value": text.split(six).length - 1
        },
    ];
    // create a tag (word) cloud chart
    var chart = anychart.tagCloud(data);
    // set a chart title
    // chart.title('15 most spoken languages')
    // set an array of angles at which the words will be laid out
    chart.angles([-10])
    // enable a color range
    // chart.colorRange(true);
    // set the color range length
    // chart.colorRange().length('80%');
    // display the word cloud chart
    chart.container("buzzwords");
    chart.draw();
    document.getElementById("Generate").disabled = true;
};

function readingTime(text) {
    const wordsPerMinute = 256;
    const noOfWords = text.split(/\s/g).length;
    const minutes = noOfWords / wordsPerMinute;
    const readTime = Math.ceil(minutes);
    document.getElementById("readingTime").innerText = `Reading Time: ${readTime} minute read`;
}

readingTime(text);
