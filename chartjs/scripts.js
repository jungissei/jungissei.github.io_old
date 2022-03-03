
add_circle_graph();

/**
 * 円グラフ追加
 */
function add_circle_graph() {
  new Chart(
    document.getElementById('myChart').getContext('2d'),
    {
      type: 'pie',
      data: {
          labels: ['docomo', 'au', 'softbank', 'other'],
          datasets: [{
              data: [39.9, 27.4, 22.3, 10.4],
              backgroundColor: [
                  'rgb(255, 99, 132)',
                  'rgb(255, 159, 64)',
                  'rgb(240, 240, 240)',
                  'rgb(54, 162, 235)'
              ],
              borderWidth: 0
          }],
      },
      plugins: [ChartDataLabels],
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false
          },
          datalabels: {
            align: 'end',
            anchor: 'end',
            offset: -100,
            color: '#333',
            font: {
              weight: 'bold',
              size: 20,
            },
            formatter: function(value, ctx){
              let label = ctx.chart.data.labels[ctx.dataIndex];
              return label + '\n' + value + '%';
            },
          }
        }
      }
    }
  );
}
