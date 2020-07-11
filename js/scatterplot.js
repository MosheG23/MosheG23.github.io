anychart.onDocumentReady(function () {
    var data = [{
            "x": "Relationship",
            "value": document.body.innerText.split("relationship").length - 1,
            category: "Variables"
        }, {
            "x": "Patterns",
            "value": document.body.innerText.split("patterns").length - 1,
            category: "Data Visualization"
        }, {
            "x": "Variables",
            "value": document.body.innerText.split("variables").length - 1,
            category: "Variables"
        }, {
            "x": "Trend Line",
            "value": document.body.innerText.split("Trend Line").length - 1,
            category: "Data Visualization"
        }, {
            "x": "Scatter Plot",
            "value": document.body.innerText.split("scatter plot").length - 1,
            category: "Data Visualization"
        }, {
            "x": "Overplotting",
            "value": document.body.innerText.split("overplotting").length - 1,
            category: "Data Visualization"
        }, {
            "x": "Data",
            "value": document.body.innerText.split("data").length - 1,
            category: "Data Visualization"
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
});