// GRADICA CON CHART JS

var speedCanvas = document.getElementById("speedChart");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;

var speedData = {
  labels: ["01-10", "02-10", "03-10", "04-10", "05-10", "06-10", "07-10", "08-10", "09-10", "10-10", "11-10"],
  datasets: [{
    data: [10, 29, 35, 40, 54, 45, 64, 73, 80, 100, 108],
    backgroundColor: 'rgb(54, 162, 235, 0.8)',
    
  }]
};

var chartOptions = {
  responsive: true,
  legend: {
    display: false,
    position: 'top',
    labels: {
      boxWidth: 100,
      fontColor: 'black'
    }
  },
  
};

var lineChart = new Chart(speedCanvas, {
  type: 'line',
  data: speedData,
  options: chartOptions
});