var jq = jQuery.noConflict();

jq(function () {
  "use strict";
  feather.replace();
  //BAR CHART
  let purchase = jq("#purchase").val();
  let sale = jq("#sale").val();
  let waste = jq("#waste").val();
  let expense = jq("#expense").val();
  let cust_rcv = jq("#cust_rcv").val();
  let supp_pay = jq("#supp_pay").val();
  let purchase_value = Number(jq("#purchase_value").val());
  let sale_value = Number(jq("#sale_value").val());
  let waste_value = Number(jq("#waste_value").val());
  let expense_value = Number(jq("#expense_value").val());
  let cust_rcv_value = Number(jq("#cust_rcv_value").val());
  let supp_pay_value = Number(jq("#supp_pay_value").val());

  let dinein_count = Number(jq("#dinein_count").val());
  let take_away_count = Number(jq("#take_away_count").val());
  let delivery_count = Number(jq("#delivery_count").val());
  base_url = jq("#base_url_").val();

  // let bar = new Morris.Bar({
  //   element: "operational_comparision",
  //   resize: true,
    // data: [
    //   {
    //     y: purchase,
    //     a: purchase_value,
    //   },
    //   {
    //     y: sale,
    //     a: sale_value,
    //   },
    //   {
    //     y: waste,
    //     a: waste_value,
    //   },
    //   {
    //     y: expense,
    //     a: expense_value,
    //   },
    //   {
    //     y: cust_rcv,
    //     a: cust_rcv_value,
    //   },
    //   {
    //     y: supp_pay,
    //     a: supp_pay_value,
    //   },
    // ],
  //   barColors: ["#7367f0", "#7367f0"],
  //   xkey: "y",
  //   ykeys: ["a"],
  //   labels: ["Amount"],
  //   hideHover: "auto",
  // });

  // $(
  //   "#low_stock_ingredients, #top_ten_food_menu, #top_ten_customer, #customer_receivable, #supplier_payable"
  // ).slimscroll({
  //   height: "220px",
  // });

// Draw chart
//initial blank chart assign
//Plugin is not being initialized in use strict mode, script is added here for that reason

// let ctx = document.getElementById("day_week_month_chart_report").getContext('2d');
// const myLineChart = new Chart(ctx, {
//     type: 'line',
//     data: {
//         labels: [],
//         datasets: [{
//             label: '', // Name the series
//             data: [], // Specify the data values array
//             fill: true,
//             borderColor: '#7367f0', // Add custom color border (Line)
//             backgroundColor: '#7367f045', // Add custom color background (Points and Fill)
//             borderWidth: 3, // Specify bar border width
//             animations: true
//         }]
//     },
//     options: {
//         plugins: {
//             legend: {
//                 display: false
//             }
//         },
//         responsive: true,
//         maintainAspectRatio: false,
//     }
// });


  var options_new = {

    series: [{
      name: "",
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0]
    }],

    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    // title: {
    //   text: 'Product Trends by Month',
    //   align: 'left'
    // },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
      },
    },
    
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    }

  };

  var chart_new = new ApexCharts(document.querySelector("#day_week_month_chart_report"), options_new);
  chart_new.render();

var options = {
  colors : ['#0A91CB', '#0A91CB'],
          series: [{
          name: 'Amount',
          data: [purchase_value, sale_value, waste_value, expense_value, cust_rcv_value, supp_pay_value]
        }],
          chart: {
          height: 200,
          type: 'bar',
        },
        plotOptions: {
          bar: {
            borderRadius: 10,
            dataLabels: {
              position: 'top', // top, center, bottom
            },
          }
        },
        dataLabels: {
          enabled: true,
          formatter: function (val) {
            //return val;
            if(val > 0){
                return val;
              }
          },
          offsetY: -20,
          style: {
            fontSize: '12px',
            colors: ["#304758"]
          }
        },
        
        xaxis: {
          categories: [purchase, sale, waste, expense, cust_rcv, supp_pay],
          position: 'bottom',
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          crosshairs: {
            fill: {
              type: 'gradient',
              
              gradient: {
                colorFrom: '#D8E3F0',
                colorTo: '#BED1E6',
                stops: [0, 100],
                opacityFrom: 0.4,
                opacityTo: 0.5,
                
              }
            }
          },
          tooltip: {
            enabled: true,
          }
        },
        yaxis: {
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false,
          },
          labels: {
            show: true,

            formatter: function (val) {
               return val;
            }
          }
        
        },
        title: {
          text: 'Operational Comparision(This Month)',
          floating: true,
          offsetY: 330,
          align: 'center',
          style: {
            color: '#444'
          }
        }
        };
        console.log(options)
  var chart = new ApexCharts(document.querySelector("#operational_comparision"), options);
  chart.render();







  // -------------
  // - PIE CHART -
  // -------------
  // Get context with jQuery - using jQuery's .get() method.
  // let pieChartCanvas = $("#pieChart").get(0).getContext("2d");
  // let pieChart = new Chart(pieChartCanvas);
  // let PieData = [
  //   {
  //     value: dinein_count,
  //     color: "#7367f0",
  //     highlight: "#7367f0",
  //     label: "Dine In",
  //   },
  //   {
  //     value: take_away_count,
  //     color: "#8e67f0",
  //     highlight: "#8e67f0",
  //     label: "Take Away",
  //   },
  //   {
  //     value: delivery_count,
  //     color: "#6776f0",
  //     highlight: "#6776f0",
  //     label: "Delivery",
  //   },
  // ];
  // let pieOptions = {
  //   // Boolean - Whether we should show a stroke on each segment
  //   segmentShowStroke: true,
  //   // String - The colour of each segment stroke
  //   segmentStrokeColor: "#fff",
  //   // Number - The width of each segment stroke
  //   segmentStrokeWidth: 1,
  //   // Number - The percentage of the chart that we cut out of the middle
  //   percentageInnerCutout: 50, // This is 0 for Pie charts
  //   // Number - Amount of animation steps
  //   animationSteps: 100,
  //   // String - Animation easing effect
  //   animationEasing: "easeOutBounce",
  //   // Boolean - Whether we animate the rotation of the Doughnut
  //   animateRotate: true,
  //   // Boolean - Whether we animate scaling the Doughnut from the centre
  //   animateScale: false,
  //   // Boolean - whether to make the chart responsive to window resizing
  //   responsive: true,
  //   // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
  //   maintainAspectRatio: false,
  //   // String - A legend template
  //   legendTemplate:
  //     "<ul class='<%=name.toLowerCase()%>-legend'><% for (let i=0; i<segments.length; i++){%><li><span style='background-color:<%=segments[i].fillColor%>'></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>",
  //   // String - A tooltip template
  //   tooltipTemplate: "<%=value %> <%=label%> Orders",
  // };

  var options = {
    series: [dinein_count, take_away_count, delivery_count],
    chart: {
      foreColor: '#000',
      height: 272,
      type: 'pie',
    },
    colors: ["#00b1ff", "#000000", "#ffa500"],
    // colors: ["#673ab7", "#32ab13", "#f02769"],
    labels: ['Dine In', 'Take Away', 'Delivery'],
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          height: 280
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  };
  //console.log('pie options');
//console.log(options);
  // Create pie or douhnut chart
  // You can switch between pie and douhnut using the method below.
  //pieChart.Doughnut(PieData, pieOptions);
  var chart = new ApexCharts(document.querySelector("#chart11"), options);
  chart.render();
  // -----------------
  // - END PIE CHART -
  // -----------------

  //show last 12 months sale comparison
  selectMonth(12);
  jq("#operational_coparision_range").on("click", function () {
    jq("#operation_comparision_range_fields").show();
  });
  jq("#operation_comparision_cancel").on("click", function () {
    jq("#operation_comparision_range_fields").hide();
  });

  function selectMonth(value) {
    let csrf_name_ = jq("#csrf_name_").val();
    let csrf_value_ = jq("#csrf_value_").val();
    jq.ajax({
      url: base_url + "Dashboard/comparison_sale_report_ajax_get",
      type: "get",
      datatype: "json",
      data: {
        months: value,
        csrf_name_: csrf_value_,
      },
      success: function (response) {
        let json = jq.parseJSON(response);
        google.charts.load("current", {
          packages: ["corechart", "bar"],
        });
        google.charts.setOnLoadCallback(drawStuff);

        function drawStuff() {
          let chartDiv = document.getElementById("chart_div");

          let data = "";
          let dataArray = [];
          let dataArrayValue = [];
          dataArrayValue = [];
          dataArrayValue.push("");
          dataArrayValue.push("");
          dataArray.push(dataArrayValue);
          let dataMonthArray = [];
          let dataAmountArray = [];
          jq.each(json, function (i, v) {
            window["monthName" + i] = v.month;
            window["collection" + i] = v.saleAmount;
            dataArrayValue = [];
            dataArrayValue.push(v.month);
            dataArrayValue.push(v.saleAmount);
            dataArray.push(dataArrayValue);
            dataMonthArray.push(v.month);
            dataAmountArray.push(parseInt(v.saleAmount));
          });
          console.log('dataArray');
          console.log(dataArray);
          console.log('dataArray month');
          console.log(dataMonthArray);
          console.log('dataArray Amount');
          console.log(dataAmountArray);
          data = google.visualization.arrayToDataTable(dataArray);
          // let options = {
          //   legend: {
          //     position: "none",
          //   },
          //   colors: ["#7367f0", "#7367f0", "#7367f0"],
          //   axes: {
          //     y: {
          //       all: {
          //         format: {
          //           pattern: "decimal",
          //         },
          //       },
          //     },
          //   },
          //   series: {
          //     0: {
          //       axis: "0",
          //     },
          //   },
          // };

          function drawMaterialChart() {
            let materialChart = new google.charts.Bar(chartDiv);
            console.log('data');
            console.log(data);
             console.log('options');
            console.log(options);
            console.log();
            console.log();
            materialChart.draw(data, options);
          }

          function drawClassicChart() {
            let classicChart = new google.visualization.ColumnChart(chartDiv);
            classicChart.draw(data, classicOptions);
          }
          //drawMaterialChart();

          var options = {
            series: [{
              type: 'area',
                  data: dataAmountArray,
                }],
            chart: {
              foreColor: '#000',
              height: 250,
              type: 'line',
              stacked: false,
              zoom: {
                enabled: false
              },
              toolbar: {
                show: true
              },
            },
            colors: ["#0A91CB"],
            stroke: {
              width: [0, 2, 5],
              curve: 'smooth'
            },
            plotOptions: {
              bar: {
                columnWidth: '50%'
              }
            },
            fill: {
              opacity: [0.85, 0.25, 1],
              gradient: {
                inverseColors: false,
                shade: 'light',
                type: "vertical",
                opacityFrom: 0.85,
                opacityTo: 0.55,
                stops: [0, 100, 100, 100]
              }
            },
            labels: dataMonthArray,
            markers: {
              size: 0
            },
            
            grid: {
              show: true,
              borderColor: 'rgba(255, 255, 255, 0.12)',
              strokeDashArray: 4,
            },
            yaxis: {
              
              min: 0
            },
            tooltip: {
              shared: true,
              intersect: false,
              y: {
                formatter: function (y) {
                  if (typeof y !== "undefined") {
                    return y.toFixed(0);
                  }
                  return y;
                }
              }
            }
          };


             

              var chart = new ApexCharts(document.querySelector("#chart_div"), options);
              chart.render();




        }
      },
    });
  }

  jq(document).on("change", "#outlet_id_dashboard", function () {
    //change outlet id for dashboard data change
    jq("#outlet_form").submit();
  });
});
