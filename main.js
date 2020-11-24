// GRADICA CON CHART JS

var speedCanvas = document.getElementById("speedChart");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;

var speedData = {
  labels: ["01", "02", "03", "04", "05"],
  datasets: [{
    data: [ 29, 35, 40, 54,42],
    backgroundColor: [
    'rgb(54, 162, 235, 0.8)', 'rgb(224, 162, 235, 0.8)', 'rgb(255, 193, 7)',
    'rgb(144, 155, 213, 0.8)','rgb(54, 62, 235, 0.8)','rgb(248, 229, 91, 0.8)'],
    label: 'Dataset  1'
    
  }]
};

var chartOptions = {
  responsive: true,
  legend: {
    display: true,
    position: 'left',
    labels: {
      boxWidth: 100,
      fontColor: 'black'
    }
  },
  animation: {
          animateScale: true,
          animateRotate: true
        }
  
};

var lineChart = new Chart(speedCanvas, {
  type: 'doughnut',
  data: speedData,
  options: chartOptions
});