//JAVASCRIPT DASHBOARD DATAVISUALISATIES

// type data visualisatie 1 horizontale staafdiagram

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    type: 'horizontalBar',

    // data over voorraad eten voor staafdiagram
    data: {
        labels: ['Snacks', 'Beleg', 'Brood', 'Fruit'],
        datasets: [{
            label: 'In kilogram',
            backgroundColor: [  //kleuren van de balken
                'rgb(255, 255, 255)', //wit
                'rgb(170, 0, 255)',
                'rgb(255, 105, 180)',
                'rgb(178, 223, 238)'
            ],
            borderColor: 'rgb(255, 255, 255)',
            data: [20, 40, 60, 80],
            borderWidth: 1,
        }]
    },
    // optie informatie, over lettertype en gridlijnen
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    fontSize: 14,
                    fontColor: "rgb(255,255,255)",
                    fontFamily: "Poppins",
                },
                gridLines: {
                    color: "rgb(255,255,255)",
                }
            }],
            xAxes: [{
                ticks: {
                    fontSize: 14,
                    fontColor: "rgb(255,255,255)",
                    fontFamily: "Poppins",
                    beginAtZero: true,
                },
                gridLines: {
                    color: "rgb(255,255,255)",
                }
            }]
        }
    }
});


// type data visualisatie 2 balk
var s = 10;

document.getElementById('verbruikt').innerHTML = s + '00';
document.getElementById('balk').style.width = s + '%';

document.getElementById('gas').onclick = function () { //over de button
    s += 20;

    if (s > 1000) {
        s = 1000;
    }
    document.getElementById('verbruikt').innerHTML = s + '0';
    document.getElementById('balk').style.width = s + '%'
};


// type data visualisatie 3 lijn
var ctx = document.getElementById('lineChart').getContext('2d');
var chart = new Chart(ctx, {
    type: 'line',

    // data voor de lijn
    data: {
        labels: ['1000', '2000', '3000', '4000', '5000'], //data x-as
        datasets: [{
            label: 'In kilometers x 10^2',
            backgroundColor: 'rgb(170, 0, 255)',
            borderColor: 'rgb(255, 255, 255)',
            data: [2000, 4000, 6000, 8000, 10000] //data y-as
        }]
    },

    // optie informatie, over lettertype en gridlijnen
    options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {},
        scales: {
            yAxes: [{
                ticks: {
                    fontSize: 14,
                    fontColor: "rgb(255,255,255)",
                    fontFamily: "Poppins",
                    beginAtZero: true,
                },
                gridLines: {
                    color: "rgb(255,255,255)",
                }
            }],

            xAxes: [{
                ticks: {
                    fontSize: 14,
                    fontColor: "rgb(255,255,255)",
                    fontFamily: "Poppins",
                    beginAtZero: true,
                },
                gridLines: {
                    color: "rgb(255,255,255)",
                }
            }]
        }
    }
});
