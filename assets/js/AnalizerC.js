      google.charts.load('current', {'packages':['corechart']});
      
      google.charts.setOnLoadCallback(drawChart);
      
      function drawChart() {
            var selectValue = $("#inputDeparment").val()
            var chartB = new google.visualization.AreaChart(document.getElementById('chart_brain'));
            var chartP = new google.visualization.AreaChart(document.getElementById('chart_pulse'));
            var chartV = new google.visualization.AreaChart(document.getElementById('chart_voz'));
            var chart1 = new google.visualization.AreaChart(document.getElementById('chart_div'));
            var myObj, i,counter=0,temp,temp2=0, x=[['Hora', 'Pulso Cardiaco']],y=[['Hora', 'Furia', 'Desagrado','Temor', 'Alegría', 'Tristeza']],z=[['Hora', 'Onda Cerebral']],p=[['Medición', 'Estrés']];
            var xE=[],yE=[],zE=[],pE=[];
    
            var url='http://localhost:3000';
            var _BrainData;

            var _PulseData;

            var _VozData;


            var max;     
            var data;
          /*-------------------------------DATOS BRAIN-----------------------*/
            data1 =  '[{"id":"5b68e68b2810e723a872505d","date":"2018-08-07T00:23:39.239Z","user":0,"value":35,"v":0},' +
                '{"_id":"5b68f7fa2810e723a8725096","date":"2018-08-07T01:38:02.193Z","user":0,"value":25,"v":0},' +
                '{"_id":"5b68f7fa2810e723a8725097","date":"2018-08-07T01:38:02.194Z","user":0,"value":25,"v":0},' +
                '{"_id":"5b68f7fa2810e723a8725098","date":"2018-08-07T01:38:02.196Z","user":0,"value":25,"v":0},' +
                '{"_id":"5b68f7fa2810e723a8725099","date":"2018-08-07T01:38:02.198Z","user":0,"value":25,"v":0},' +
                '{"_id":"5b68f7fa2810e723a872509a","date":"2018-08-07T01:38:02.200Z","user":0,"value":25,"v":0},' +
                '{"_id":"5b68f7fa2810e723a872509b","date":"2018-08-07T01:38:02.204Z","user":0,"value":25,"v":0},' + 
                '{"_id":"5b68f8212810e723a87250a2","date":"2018-08-07T01:38:41.988Z","user":0,"value":21,"v":0},' +
                '{"_id":"5b68f8212810e723a87250a3","date":"2018-08-07T01:38:41.989Z","user":0,"value":21,"v":0},' +
                '{"_id":"5b68f8212810e723a87250a4","date":"2018-08-07T01:38:41.991Z","user":0,"value":21,"v":0},' +
                '{"_id":"5b68f8212810e723a87250a7","date":"2018-08-07T01:38:41.996Z","user":0,"value":21,"v":0},' +
                '{"_id":"5b68f8212810e723a87250a5","date":"2018-08-07T01:38:41.993Z","user":0,"value":21,"v":0},' +
                '{"_id":"5b68f8212810e723a87250a6","date":"2018-08-07T01:38:41.994Z","user":0,"value":21,"v":0},' +
                '{"_id":"5b68f8492810e723a87250ae","date":"2018-08-07T01:39:21.792Z","user":0,"value":16,"v":0},' +
                '{"_id":"5b68f8492810e723a87250b3","date":"2018-08-07T01:39:21.800Z","user":0,"value":16,"v":0},' +
                '{"_id":"5b68f8492810e723a87250b0","date":"2018-08-07T01:39:21.795Z","user":0,"value":16,"v":0},' +
                '{"_id":"5b68f8492810e723a87250b2","date":"2018-08-07T01:39:21.798Z","user":0,"value":16,"v":0},' +
                '{"_id":"5b68f8492810e723a87250b1","date":"2018-08-07T01:39:21.796Z","user":0,"value":16,"v":0},' +
                '{"_id":"5b68f8492810e723a87250af","date":"2018-08-07T01:39:21.793Z","user":0,"value":16,"v":0},' +
                '{"_id":"5b68f8712810e723a87250ba","date":"2018-08-07T01:40:01.601Z","user":0,"value":32,"v":0},' +
                '{"_id":"5b68f8212810e723a87250a4","date":"2018-08-07T01:38:41.991Z","user":0,"value":21,"v":0},' +
                '{"_id":"5b68f8212810e723a87250a7","date":"2018-08-07T01:38:41.996Z","user":0,"value":21,"v":0},' +
                '{"_id":"5b68f8212810e723a87250a5","date":"2018-08-07T01:38:41.993Z","user":0,"value":21,"v":0},' +
                '{"_id":"5b68f8212810e723a87250a6","date":"2018-08-07T01:38:41.994Z","user":0,"value":21,"v":0},' +
                '{"_id":"5b68f8492810e723a87250ae","date":"2018-08-07T01:39:21.792Z","user":0,"value":16,"v":0},' +
                '{"_id":"5b68f8492810e723a87250b3","date":"2018-08-07T01:39:21.800Z","user":0,"value":16,"v":0},' +
                '{"_id":"5b68f8492810e723a87250b0","date":"2018-08-07T01:39:21.795Z","user":0,"value":16,"v":0},' +
                '{"_id":"5b68f8492810e723a87250b2","date":"2018-08-07T01:39:21.798Z","user":0,"value":16,"v":0},' +
                '{"_id":"5b68f8492810e723a87250b2","date":"2018-08-07T01:39:21.798Z","user":0,"value":10,"v":0},' +
                '{"_id":"5b68f8492810e723a87250b2","date":"2018-08-07T01:39:21.798Z","user":0,"value":11,"v":0},' +
                '{"_id":"5b68f8492810e723a87250b2","date":"2018-08-07T01:39:21.798Z","user":0,"value":12,"v":0},' +
                '{"_id":"5b68f8492810e723a87250b2","date":"2018-08-07T01:39:21.798Z","user":0,"value":18,"v":0},' +
                '{"_id":"5b68f8492810e723a87250b2","date":"2018-08-07T01:39:21.798Z","user":0,"value":9,"v":0},' +
                '{"_id":"5b68f8492810e723a87250b2","date":"2018-08-07T01:39:21.798Z","user":0,"value":35,"v":0},' +
                '{"_id":"5b68f8492810e723a87250b2","date":"2018-08-07T01:39:21.798Z","user":0,"value":35,"v":0},' +
                '{"_id":"5b68f8712810e723a87250bb","date":"2018-08-07T01:40:01.602Z","user":0,"value":32,"_v":0}]';
                
            data2 =  '[{"id":"5b68e68b2810e723a872505d","date":"2018-08-07T00:23:39.239Z","user":0,"value":12,"v":0},' +
                '{"_id":"5b68f7fa2810e723a8725096","date":"2018-08-07T01:38:02.193Z","user":0,"value":23,"v":0},' +
                '{"_id":"5b68f7fa2810e723a8725097","date":"2018-08-07T01:38:02.194Z","user":0,"value":22,"v":0},' +
                '{"_id":"5b68f7fa2810e723a8725098","date":"2018-08-07T01:38:02.196Z","user":0,"value":23,"v":0},' +
                '{"_id":"5b68f7fa2810e723a8725099","date":"2018-08-07T01:38:02.198Z","user":0,"value":12,"v":0},' +
                '{"_id":"5b68f7fa2810e723a872509a","date":"2018-08-07T01:38:02.200Z","user":0,"value":25,"v":0},' +
                '{"_id":"5b68f7fa2810e723a872509b","date":"2018-08-07T01:38:02.204Z","user":0,"value":30,"v":0},' + 
                '{"_id":"5b68f8212810e723a87250a2","date":"2018-08-07T01:38:41.988Z","user":0,"value":33,"v":0},' +
                '{"_id":"5b68f8212810e723a87250a3","date":"2018-08-07T01:38:41.989Z","user":0,"value":31,"v":0},' +
                '{"_id":"5b68f8212810e723a87250a4","date":"2018-08-07T01:38:41.991Z","user":0,"value":19,"v":0},' +
                '{"_id":"5b68f8212810e723a87250a7","date":"2018-08-07T01:38:41.996Z","user":0,"value":18,"v":0},' +
                '{"_id":"5b68f8212810e723a87250a5","date":"2018-08-07T01:38:41.993Z","user":0,"value":17,"v":0},' +
                '{"_id":"5b68f8212810e723a87250a6","date":"2018-08-07T01:38:41.994Z","user":0,"value":17,"v":0},' +
                '{"_id":"5b68f8492810e723a87250ae","date":"2018-08-07T01:39:21.792Z","user":0,"value":17,"v":0},' +
                '{"_id":"5b68f8492810e723a87250b3","date":"2018-08-07T01:39:21.800Z","user":0,"value":16,"v":0},' +
                '{"_id":"5b68f8492810e723a87250b0","date":"2018-08-07T01:39:21.795Z","user":0,"value":23,"v":0},' +
                '{"_id":"5b68f8492810e723a87250b2","date":"2018-08-07T01:39:21.798Z","user":0,"value":24,"v":0},' +
                '{"_id":"5b68f8492810e723a87250b1","date":"2018-08-07T01:39:21.796Z","user":0,"value":25,"v":0},' +
                '{"_id":"5b68f8492810e723a87250af","date":"2018-08-07T01:39:21.793Z","user":0,"value":26,"v":0},' +
                '{"_id":"5b68f8712810e723a87250ba","date":"2018-08-07T01:40:01.601Z","user":0,"value":32,"v":0},' +
                '{"_id":"5b68f8212810e723a87250a4","date":"2018-08-07T01:38:41.991Z","user":0,"value":21,"v":0},' +
                '{"_id":"5b68f8212810e723a87250a7","date":"2018-08-07T01:38:41.996Z","user":0,"value":21,"v":0},' +
                '{"_id":"5b68f8212810e723a87250a5","date":"2018-08-07T01:38:41.993Z","user":0,"value":18,"v":0},' +
                '{"_id":"5b68f8212810e723a87250a6","date":"2018-08-07T01:38:41.994Z","user":0,"value":21,"v":0},' +
                '{"_id":"5b68f8492810e723a87250ae","date":"2018-08-07T01:39:21.792Z","user":0,"value":16,"v":0},' +
                '{"_id":"5b68f8492810e723a87250b3","date":"2018-08-07T01:39:21.800Z","user":0,"value":20,"v":0},' +
                '{"_id":"5b68f8492810e723a87250b0","date":"2018-08-07T01:39:21.795Z","user":0,"value":16,"v":0},' +
                '{"_id":"5b68f8492810e723a87250b2","date":"2018-08-07T01:39:21.798Z","user":0,"value":20,"v":0},' +
                '{"_id":"5b68f8492810e723a87250b2","date":"2018-08-07T01:39:21.798Z","user":0,"value":12,"v":0},' +
                '{"_id":"5b68f8492810e723a87250b2","date":"2018-08-07T01:39:21.798Z","user":0,"value":11,"v":0},' +
                '{"_id":"5b68f8492810e723a87250b2","date":"2018-08-07T01:39:21.798Z","user":0,"value":10,"v":0},' +
                '{"_id":"5b68f8492810e723a87250b2","date":"2018-08-07T01:39:21.798Z","user":0,"value":14,"v":0},' +
                '{"_id":"5b68f8492810e723a87250b2","date":"2018-08-07T01:39:21.798Z","user":0,"value":8,"v":0},' +
                '{"_id":"5b68f8492810e723a87250b2","date":"2018-08-07T01:39:21.798Z","user":0,"value":8,"v":0},' +
                '{"_id":"5b68f8492810e723a87250b2","date":"2018-08-07T01:39:21.798Z","user":0,"value":10,"v":0},' +
                '{"_id":"5b68f8712810e723a87250bb","date":"2018-08-07T01:40:01.602Z","user":0,"value":9,"_v":0}]';

            data3 =  '[{"id":"5b68e68b2810e723a872505d","date":"2018-08-07T00:23:39.239Z","user":0,"value":20,"v":0},' +
                '{"_id":"5b68f7fa2810e723a8725096","date":"2018-08-07T01:38:02.193Z","user":0,"value":13,"v":0},' +
                '{"_id":"5b68f7fa2810e723a8725097","date":"2018-08-07T01:38:02.194Z","user":0,"value":14,"v":0},' +
                '{"_id":"5b68f7fa2810e723a8725098","date":"2018-08-07T01:38:02.196Z","user":0,"value":16,"v":0},' +
                '{"_id":"5b68f7fa2810e723a8725099","date":"2018-08-07T01:38:02.198Z","user":0,"value":14,"v":0},' +
                '{"_id":"5b68f7fa2810e723a872509a","date":"2018-08-07T01:38:02.200Z","user":0,"value":8,"v":0},' +
                '{"_id":"5b68f7fa2810e723a872509b","date":"2018-08-07T01:38:02.204Z","user":0,"value":8,"v":0},' + 
                '{"_id":"5b68f8212810e723a87250a2","date":"2018-08-07T01:38:41.988Z","user":0,"value":9,"v":0},' +
                '{"_id":"5b68f8212810e723a87250a3","date":"2018-08-07T01:38:41.989Z","user":0,"value":23,"v":0},' +
                '{"_id":"5b68f8212810e723a87250a4","date":"2018-08-07T01:38:41.991Z","user":0,"value":18,"v":0},' +
                '{"_id":"5b68f8212810e723a87250a7","date":"2018-08-07T01:38:41.996Z","user":0,"value":18,"v":0},' +
                '{"_id":"5b68f8212810e723a87250a5","date":"2018-08-07T01:38:41.993Z","user":0,"value":18,"v":0},' +
                '{"_id":"5b68f8212810e723a87250a6","date":"2018-08-07T01:38:41.994Z","user":0,"value":17,"v":0},' +
                '{"_id":"5b68f8492810e723a87250ae","date":"2018-08-07T01:39:21.792Z","user":0,"value":17,"v":0},' +
                '{"_id":"5b68f8492810e723a87250b3","date":"2018-08-07T01:39:21.800Z","user":0,"value":14,"v":0},' +
                '{"_id":"5b68f8492810e723a87250b0","date":"2018-08-07T01:39:21.795Z","user":0,"value":20,"v":0},' +
                '{"_id":"5b68f8492810e723a87250b2","date":"2018-08-07T01:39:21.798Z","user":0,"value":20,"v":0},' +
                '{"_id":"5b68f8492810e723a87250b1","date":"2018-08-07T01:39:21.796Z","user":0,"value":20,"v":0},' +
                '{"_id":"5b68f8492810e723a87250af","date":"2018-08-07T01:39:21.793Z","user":0,"value":15,"v":0},' +
                '{"_id":"5b68f8712810e723a87250ba","date":"2018-08-07T01:40:01.601Z","user":0,"value":25,"v":0},' +
                '{"_id":"5b68f8212810e723a87250a4","date":"2018-08-07T01:38:41.991Z","user":0,"value":20,"v":0},' +
                '{"_id":"5b68f8212810e723a87250a7","date":"2018-08-07T01:38:41.996Z","user":0,"value":21,"v":0},' +
                '{"_id":"5b68f8212810e723a87250a5","date":"2018-08-07T01:38:41.993Z","user":0,"value":17,"v":0},' +
                '{"_id":"5b68f8212810e723a87250a6","date":"2018-08-07T01:38:41.994Z","user":0,"value":18,"v":0},' +
                '{"_id":"5b68f8492810e723a87250ae","date":"2018-08-07T01:39:21.792Z","user":0,"value":19,"v":0},' +
                '{"_id":"5b68f8492810e723a87250b3","date":"2018-08-07T01:39:21.800Z","user":0,"value":20,"v":0},' +
                '{"_id":"5b68f8492810e723a87250b0","date":"2018-08-07T01:39:21.795Z","user":0,"value":7,"v":0},' +
                '{"_id":"5b68f8492810e723a87250b2","date":"2018-08-07T01:39:21.798Z","user":0,"value":25,"v":0},' +
                '{"_id":"5b68f8492810e723a87250b2","date":"2018-08-07T01:39:21.798Z","user":0,"value":12,"v":0},' +
                '{"_id":"5b68f8492810e723a87250b2","date":"2018-08-07T01:39:21.798Z","user":0,"value":26,"v":0},' +
                '{"_id":"5b68f8492810e723a87250b2","date":"2018-08-07T01:39:21.798Z","user":0,"value":12,"v":0},' +
                '{"_id":"5b68f8492810e723a87250b2","date":"2018-08-07T01:39:21.798Z","user":0,"value":13,"v":0},' +
                '{"_id":"5b68f8492810e723a87250b2","date":"2018-08-07T01:39:21.798Z","user":0,"value":8,"v":0},' +
                '{"_id":"5b68f8492810e723a87250b2","date":"2018-08-07T01:39:21.798Z","user":0,"value":22,"v":0},' +
                '{"_id":"5b68f8492810e723a87250b2","date":"2018-08-07T01:39:21.798Z","user":0,"value":22,"v":0},' +
                '{"_id":"5b68f8712810e723a87250bb","date":"2018-08-07T01:40:01.602Z","user":0,"value":9,"_v":0}]';

            if(selectValue == 0){
                data = data1;
            }else if(selectValue == 1){
                data = data2;
            }else if(selectValue == 2){
                data = data3;
            }
            

            _BrainData = JSON.parse(data);
            
            for (i in _BrainData) {


                    var dateObj = new Date(_BrainData[i].date);
          
                    var h = dateObj.getHours();
                    var m = dateObj.getMinutes();
                    var n = h + ":" + m  ;
               
                    var month = dateObj.getUTCMonth() + 1; //months from 1-12
                    var day = dateObj.getUTCDate();
                    var year = dateObj.getUTCFullYear();
  
                   var newdate = year + "/" + month + "/" + day;

                    z.push([n,_BrainData[i].value]);
                   
                    if(_BrainData[i].value > 20 ){
                        zE.push(3);
                    }
                    else if (_BrainData[i].value > 12){
                        zE.push(2);

                    }
                    else {
                        zE.push(1);

                    }
                  
             }
            var data = google.visualization.arrayToDataTable(z);
            var estresColor = '#ff00ff';
            var options = {
            title: 'Onda Cerebral',
            hAxis: {title: 'Hora ',  titleTextStyle: {color: '#333'}},
            vAxis: {minValue: 0},
            series: {
                0: { color: estresColor},
            }

        };

        
        chartB.draw(data, options);
                     
           
           
             
        /*-------------------------------DATOS PULSO-----------------------*/
        data1 = '[{"id":"5b68e63a2810e723a8725042","date":"2018-08-07T00:22:18.290Z","user":0,"value":47,"v":0},' + 
               '{"_id":"5b68e63a2810e723a8725044","date":"2018-08-07T00:22:18.302Z","user":0,"value":47,"v":0},' +
               '{"_id":"5b68e63a2810e723a8725043","date":"2018-08-07T00:22:18.294Z","user":0,"value":47,"v":0},' +
               '{"_id":"5b68e63a2810e723a8725046","date":"2018-08-07T00:22:18.312Z","user":0,"value":47,"v":0},' +
               '{"_id":"5b68e63a2810e723a8725045","date":"2018-08-07T00:22:18.306Z","user":0,"value":47,"v":0},' +
               '{"_id":"5b68e6622810e723a872504c","date":"2018-08-07T00:22:58.102Z","user":0,"value":57,"v":0},' +
               '{"_id":"5b68e6622810e723a872504d","date":"2018-08-07T00:22:58.104Z","user":0,"value":57,"v":0},' + 
               '{"_id":"5b68e6622810e723a872504e","date":"2018-08-07T00:22:58.106Z","user":0,"value":57,"v":0},' +
               '{"_id":"5b68e6622810e723a872504f","date":"2018-08-07T00:22:58.110Z","user":0,"value":57,"v":0},' +
               '{"_id":"5b68e6622810e723a8725050","date":"2018-08-07T00:22:58.112Z","user":0,"value":57,"v":0},' +
               '{"_id":"5b68e68b2810e723a8725056","date":"2018-08-07T00:23:39.137Z","user":0,"value":51,"v":0},' +
               '{"_id":"5b68e68b2810e723a8725058","date":"2018-08-07T00:23:39.140Z","user":0,"value":51,"v":0},' +
               '{"_id":"5b68e68b2810e723a872505a","date":"2018-08-07T00:23:39.143Z","user":0,"value":51,"v":0},' +
               '{"_id":"5b68e68b2810e723a8725057","date":"2018-08-07T00:23:39.138Z","user":0,"value":51,"v":0},' +
               '{"_id":"5b68e68b2810e723a8725059","date":"2018-08-07T00:23:39.142Z","user":0,"value":51,"v":0},' +
               '{"_id":"5b68f7fa2810e723a8725090","date":"2018-08-07T01:38:02.069Z","user":0,"value":37,"v":0},' +
               '{"_id":"5b68f7fa2810e723a8725092","date":"2018-08-07T01:38:02.072Z","user":0,"value":37,"v":0},' +
               '{"_id":"5b68f7fa2810e723a8725091","date":"2018-08-07T01:38:02.070Z","user":0,"value":37,"v":0},' +
               '{"_id":"5b68f7fa2810e723a8725093","date":"2018-08-07T01:38:02.074Z","user":0,"value":37,"v":0},' +
               '{"_id":"5b68f7fa2810e723a8725095","date":"2018-08-07T01:38:02.077Z","user":0,"value":37,"v":0},' +
               '{"_id":"5b68f7fa2810e723a8725094","date":"2018-08-07T01:38:02.075Z","user":0,"value":37,"v":0},' +
               '{"_id":"5b68f8212810e723a872509c","date":"2018-08-07T01:38:41.866Z","user":0,"value":50,"v":0},' +
               '{"_id":"5b68f8212810e723a872509f","date":"2018-08-07T01:38:41.871Z","user":0,"value":50,"v":0},' +
               '{"_id":"5b68f8212810e723a872509e","date":"2018-08-07T01:38:41.869Z","user":0,"value":50,"v":0},' +
               '{"_id":"5b68f8212810e723a872509d","date":"2018-08-07T01:38:41.868Z","user":0,"value":50,"v":0},' +
               '{"_id":"5b68f8212810e723a87250a1","date":"2018-08-07T01:38:41.876Z","user":0,"value":50,"v":0},' +
               '{"_id":"5b68f8212810e723a87250a0","date":"2018-08-07T01:38:41.874Z","user":0,"value":50,"v":0},' +
               '{"_id":"5b68f8492810e723a87250a8","date":"2018-08-07T01:39:21.671Z","user":0,"value":52,"v":0},' +
               '{"_id":"5b68f8492810e723a87250ad","date":"2018-08-07T01:39:21.678Z","user":0,"value":52,"v":0},' +
               '{"_id":"5b68f8492810e723a87250ab","date":"2018-08-07T01:39:21.675Z","user":0,"value":52,"v":0},' +
               '{"_id":"5b68f8492810e723a87250ac","date":"2018-08-07T01:39:21.677Z","user":0,"value":52,"v":0},' +
               '{"_id":"5b68f8492810e723a87250a9","date":"2018-08-07T01:39:21.672Z","user":0,"value":52,"v":0},' +
               '{"_id":"5b68f8492810e723a87250aa","date":"2018-08-07T01:39:21.674Z","user":0,"value":52,"v":0},' +
               '{"_id":"5b68f8712810e723a87250b4","date":"2018-08-07T01:40:01.478Z","user":0,"value":42,"v":0},' +
               '{"_id":"5b68f8712810e723a87250b9","date":"2018-08-07T01:40:01.486Z","user":0,"value":42,"v":0},' +
               '{"_id":"5b68f8712810e723a87250b6","date":"2018-08-07T01:40:01.481Z","user":0,"value":42,"_v":0}]'; 


        data2 = '[{"id":"5b68e63a2810e723a8725042","date":"2018-08-07T00:22:18.290Z","user":0,"value":33,"v":0},' + 
               '{"_id":"5b68e63a2810e723a8725044","date":"2018-08-07T00:22:18.302Z","user":0,"value":32,"v":0},' +
               '{"_id":"5b68e63a2810e723a8725043","date":"2018-08-07T00:22:18.294Z","user":0,"value":35,"v":0},' +
               '{"_id":"5b68e63a2810e723a8725046","date":"2018-08-07T00:22:18.312Z","user":0,"value":36,"v":0},' +
               '{"_id":"5b68e63a2810e723a8725045","date":"2018-08-07T00:22:18.306Z","user":0,"value":40,"v":0},' +
               '{"_id":"5b68e6622810e723a872504c","date":"2018-08-07T00:22:58.102Z","user":0,"value":44,"v":0},' +
               '{"_id":"5b68e6622810e723a872504d","date":"2018-08-07T00:22:58.104Z","user":0,"value":45,"v":0},' + 
               '{"_id":"5b68e6622810e723a872504e","date":"2018-08-07T00:22:58.106Z","user":0,"value":47,"v":0},' +
               '{"_id":"5b68e6622810e723a872504f","date":"2018-08-07T00:22:58.110Z","user":0,"value":50,"v":0},' +
               '{"_id":"5b68e6622810e723a8725050","date":"2018-08-07T00:22:58.112Z","user":0,"value":54,"v":0},' +
               '{"_id":"5b68e68b2810e723a8725056","date":"2018-08-07T00:23:39.137Z","user":0,"value":40,"v":0},' +
               '{"_id":"5b68e68b2810e723a8725058","date":"2018-08-07T00:23:39.140Z","user":0,"value":42,"v":0},' +
               '{"_id":"5b68e68b2810e723a872505a","date":"2018-08-07T00:23:39.143Z","user":0,"value":43,"v":0},' +
               '{"_id":"5b68e68b2810e723a8725057","date":"2018-08-07T00:23:39.138Z","user":0,"value":44,"v":0},' +
               '{"_id":"5b68e68b2810e723a8725059","date":"2018-08-07T00:23:39.142Z","user":0,"value":47,"v":0},' +
               '{"_id":"5b68f7fa2810e723a8725090","date":"2018-08-07T01:38:02.069Z","user":0,"value":41,"v":0},' +
               '{"_id":"5b68f7fa2810e723a8725092","date":"2018-08-07T01:38:02.072Z","user":0,"value":44,"v":0},' +
               '{"_id":"5b68f7fa2810e723a8725091","date":"2018-08-07T01:38:02.070Z","user":0,"value":54,"v":0},' +
               '{"_id":"5b68f7fa2810e723a8725093","date":"2018-08-07T01:38:02.074Z","user":0,"value":30,"v":0},' +
               '{"_id":"5b68f7fa2810e723a8725095","date":"2018-08-07T01:38:02.077Z","user":0,"value":33,"v":0},' +
               '{"_id":"5b68f7fa2810e723a8725094","date":"2018-08-07T01:38:02.075Z","user":0,"value":34,"v":0},' +
               '{"_id":"5b68f8212810e723a872509c","date":"2018-08-07T01:38:41.866Z","user":0,"value":36,"v":0},' +
               '{"_id":"5b68f8212810e723a872509f","date":"2018-08-07T01:38:41.871Z","user":0,"value":39,"v":0},' +
               '{"_id":"5b68f8212810e723a872509e","date":"2018-08-07T01:38:41.869Z","user":0,"value":37,"v":0},' +
               '{"_id":"5b68f8212810e723a872509d","date":"2018-08-07T01:38:41.868Z","user":0,"value":50,"v":0},' +
               '{"_id":"5b68f8212810e723a87250a1","date":"2018-08-07T01:38:41.876Z","user":0,"value":47,"v":0},' +
               '{"_id":"5b68f8212810e723a87250a0","date":"2018-08-07T01:38:41.874Z","user":0,"value":48,"v":0},' +
               '{"_id":"5b68f8492810e723a87250a8","date":"2018-08-07T01:39:21.671Z","user":0,"value":41,"v":0},' +
               '{"_id":"5b68f8492810e723a87250ad","date":"2018-08-07T01:39:21.678Z","user":0,"value":52,"v":0},' +
               '{"_id":"5b68f8492810e723a87250ab","date":"2018-08-07T01:39:21.675Z","user":0,"value":32,"v":0},' +
               '{"_id":"5b68f8492810e723a87250ac","date":"2018-08-07T01:39:21.677Z","user":0,"value":41,"v":0},' +
               '{"_id":"5b68f8492810e723a87250a9","date":"2018-08-07T01:39:21.672Z","user":0,"value":52,"v":0},' +
               '{"_id":"5b68f8492810e723a87250aa","date":"2018-08-07T01:39:21.674Z","user":0,"value":41,"v":0},' +
               '{"_id":"5b68f8712810e723a87250b4","date":"2018-08-07T01:40:01.478Z","user":0,"value":41,"v":0},' +
               '{"_id":"5b68f8712810e723a87250b9","date":"2018-08-07T01:40:01.486Z","user":0,"value":42,"v":0},' +
               '{"_id":"5b68f8712810e723a87250b6","date":"2018-08-07T01:40:01.481Z","user":0,"value":42,"_v":0}]'; 

        data3 = '[{"id":"5b68e63a2810e723a8725042","date":"2018-08-07T00:22:18.290Z","user":0,"value":47,"v":0},' + 
               '{"_id":"5b68e63a2810e723a8725044","date":"2018-08-07T00:22:18.302Z","user":0,"value":35,"v":0},' +
               '{"_id":"5b68e63a2810e723a8725043","date":"2018-08-07T00:22:18.294Z","user":0,"value":34,"v":0},' +
               '{"_id":"5b68e63a2810e723a8725046","date":"2018-08-07T00:22:18.312Z","user":0,"value":37,"v":0},' +
               '{"_id":"5b68e63a2810e723a8725045","date":"2018-08-07T00:22:18.306Z","user":0,"value":57,"v":0},' +
               '{"_id":"5b68e6622810e723a872504c","date":"2018-08-07T00:22:58.102Z","user":0,"value":59,"v":0},' +
               '{"_id":"5b68e6622810e723a872504d","date":"2018-08-07T00:22:58.104Z","user":0,"value":58,"v":0},' + 
               '{"_id":"5b68e6622810e723a872504e","date":"2018-08-07T00:22:58.106Z","user":0,"value":57,"v":0},' +
               '{"_id":"5b68e6622810e723a872504f","date":"2018-08-07T00:22:58.110Z","user":0,"value":58,"v":0},' +
               '{"_id":"5b68e6622810e723a8725050","date":"2018-08-07T00:22:58.112Z","user":0,"value":52,"v":0},' +
               '{"_id":"5b68e68b2810e723a8725056","date":"2018-08-07T00:23:39.137Z","user":0,"value":53,"v":0},' +
               '{"_id":"5b68e68b2810e723a8725058","date":"2018-08-07T00:23:39.140Z","user":0,"value":54,"v":0},' +
               '{"_id":"5b68e68b2810e723a872505a","date":"2018-08-07T00:23:39.143Z","user":0,"value":59,"v":0},' +
               '{"_id":"5b68e68b2810e723a8725057","date":"2018-08-07T00:23:39.138Z","user":0,"value":56,"v":0},' +
               '{"_id":"5b68e68b2810e723a8725059","date":"2018-08-07T00:23:39.142Z","user":0,"value":47,"v":0},' +
               '{"_id":"5b68f7fa2810e723a8725090","date":"2018-08-07T01:38:02.069Z","user":0,"value":45,"v":0},' +
               '{"_id":"5b68f7fa2810e723a8725092","date":"2018-08-07T01:38:02.072Z","user":0,"value":49,"v":0},' +
               '{"_id":"5b68f7fa2810e723a8725091","date":"2018-08-07T01:38:02.070Z","user":0,"value":46,"v":0},' +
               '{"_id":"5b68f7fa2810e723a8725093","date":"2018-08-07T01:38:02.074Z","user":0,"value":42,"v":0},' +
               '{"_id":"5b68f7fa2810e723a8725095","date":"2018-08-07T01:38:02.077Z","user":0,"value":43,"v":0},' +
               '{"_id":"5b68f7fa2810e723a8725094","date":"2018-08-07T01:38:02.075Z","user":0,"value":42,"v":0},' +
               '{"_id":"5b68f8212810e723a872509c","date":"2018-08-07T01:38:41.866Z","user":0,"value":47,"v":0},' +
               '{"_id":"5b68f8212810e723a872509f","date":"2018-08-07T01:38:41.871Z","user":0,"value":49,"v":0},' +
               '{"_id":"5b68f8212810e723a872509e","date":"2018-08-07T01:38:41.869Z","user":0,"value":51,"v":0},' +
               '{"_id":"5b68f8212810e723a872509d","date":"2018-08-07T01:38:41.868Z","user":0,"value":50,"v":0},' +
               '{"_id":"5b68f8212810e723a87250a1","date":"2018-08-07T01:38:41.876Z","user":0,"value":50,"v":0},' +
               '{"_id":"5b68f8212810e723a87250a0","date":"2018-08-07T01:38:41.874Z","user":0,"value":50,"v":0},' +
               '{"_id":"5b68f8492810e723a87250a8","date":"2018-08-07T01:39:21.671Z","user":0,"value":53,"v":0},' +
               '{"_id":"5b68f8492810e723a87250ad","date":"2018-08-07T01:39:21.678Z","user":0,"value":51,"v":0},' +
               '{"_id":"5b68f8492810e723a87250ab","date":"2018-08-07T01:39:21.675Z","user":0,"value":52,"v":0},' +
               '{"_id":"5b68f8492810e723a87250ac","date":"2018-08-07T01:39:21.677Z","user":0,"value":54,"v":0},' +
               '{"_id":"5b68f8492810e723a87250a9","date":"2018-08-07T01:39:21.672Z","user":0,"value":55,"v":0},' +
               '{"_id":"5b68f8492810e723a87250aa","date":"2018-08-07T01:39:21.674Z","user":0,"value":52,"v":0},' +
               '{"_id":"5b68f8712810e723a87250b4","date":"2018-08-07T01:40:01.478Z","user":0,"value":40,"v":0},' +
               '{"_id":"5b68f8712810e723a87250b9","date":"2018-08-07T01:40:01.486Z","user":0,"value":42,"v":0},' +
               '{"_id":"5b68f8712810e723a87250b6","date":"2018-08-07T01:40:01.481Z","user":0,"value":46,"_v":0}]'; 

        if(selectValue == 0){
            data = data1;
        }else if(selectValue == 1){
            data = data2;
        }else if(selectValue == 2){
            data = data3;
        }

        _PulseData = JSON.parse(data);
        
        for (i in _PulseData) {


                var dateObj = new Date(_PulseData[i].date);
      
                var h = dateObj.getHours();
                var m = dateObj.getMinutes();
                var n = h + ":" + m  ;
           
                var month = dateObj.getUTCMonth() + 1; //months from 1-12
                var day = dateObj.getUTCDate();
                var year = dateObj.getUTCFullYear();

               var newdate = year + "/" + month + "/" + day;

                x.push([n,_PulseData[i].value]);
               
                if(_PulseData[i].value > 50 ){
                    if(_PulseData[i].value < 80){
                        xE.push(1);

                    }
                    else if (_PulseData[i].value> 80){
                        if(_PulseData[i].value < 100){
                            xE.push(2);
                        }
                        else {
                             xE.push(3);
                        }
                    }
                    else {
                        xE.push(1);
                    }
            }
            else {
                 xE.push(1);
            }
              
         }

           var data = google.visualization.arrayToDataTable(x);
        var estresColor = '#0000ff';
        var options = {
          title: 'Pulso Cardiaco',
          hAxis: {title: 'Hora',  titleTextStyle: {color: '#333'}},
          vAxis: {minValue: 0},
         series: {
            0: { color: estresColor},
          }

        };

        
        chartP.draw(data, options);

         /*-------------------------------DATOS VOICE-----------------------*/    


        data1 =  '[{"_id":"5b678a9485235d5be8e58633","date":"2018-08-05T23:39:00.369Z","user":0,"value":[{"_id":"5b678a9485235d5be8e58638","score":{"$numberDecimal":"0.1"},"tone_id":"anger","tone_name":"Anger"},{"_id":"5b678a9485235d5be8e58637","score":{"$numberDecimal":"0.002"},"tone_id":"disgust","tone_name":"Disgust"},{"_id":"5b678a9485235d5be8e58636","score":{"$numberDecimal":"0"},"tone_id":"fear","tone_name":"Fear"},{"_id":"5b678a9485235d5be8e58635","score":{"$numberDecimal":"0.03"},"tone_id":"joy","tone_name":"Joy"},{"_id":"5b678a9485235d5be8e58634","score":{"$numberDecimal":"0.3"},"tone_id":"sadness","tone_name":"Sadness"}],"__v":0},' +
                '{"_id":"5b678ac185235d5be8e58639","date":"2018-08-05T23:39:45.971Z","user":0,"value":[{"_id":"5b678ac185235d5be8e5863e","score":{"$numberDecimal":"0.4"},"tone_id":"anger","tone_name":"Anger"},{"_id":"5b678ac185235d5be8e5863d","score":{"$numberDecimal":"0.087"},"tone_id":"disgust","tone_name":"Disgust"},{"_id":"5b678ac185235d5be8e5863c","score":{"$numberDecimal":"0.230"},"tone_id":"fear","tone_name":"Fear"},{"_id":"5b678ac185235d5be8e5863b","score":{"$numberDecimal":"0.1"},"tone_id":"joy","tone_name":"Joy"},{"_id":"5b678ac185235d5be8e5863a","score":{"$numberDecimal":"0.612"},"tone_id":"sadness","tone_name":"Sadness"}],"__v":0},' +
                '{"_id":"5b678ad585235d5be8e5863f","date":"2018-08-05T23:40:05.364Z","user":0,"value":[{"_id":"5b678ad585235d5be8e58644","score":{"$numberDecimal":"0.045405"},"tone_id":"anger","tone_name":"Anger"},{"_id":"5b678ad585235d5be8e58643","score":{"$numberDecimal":"0.012664"},"tone_id":"disgust","tone_name":"Disgust"},{"_id":"5b678ad585235d5be8e58642","score":{"$numberDecimal":"0.046554"},"tone_id":"fear","tone_name":"Fear"},{"_id":"5b678ad585235d5be8e58641","score":{"$numberDecimal":"0.767385"},"tone_id":"joy","tone_name":"Joy"},{"_id":"5b678ad585235d5be8e58640","score":{"$numberDecimal":"0.086272"},"tone_id":"sadness","tone_name":"Sadness"}],"__v":0},' +
                '{"_id":"5b678aec85235d5be8e58645","date":"2018-08-05T23:40:28.208Z","user":0,"value":[{"_id":"5b678aec85235d5be8e5864a","score":{"$numberDecimal":"0.040183"},"tone_id":"anger","tone_name":"Anger"},{"_id":"5b678aec85235d5be8e58649","score":{"$numberDecimal":"0.272571"},"tone_id":"disgust","tone_name":"Disgust"},{"_id":"5b678aec85235d5be8e58648","score":{"$numberDecimal":"0.13883"},"tone_id":"fear","tone_name":"Fear"},{"_id":"5b678aec85235d5be8e58647","score":{"$numberDecimal":"0.346992"},"tone_id":"joy","tone_name":"Joy"},{"_id":"5b678aec85235d5be8e58646","score":{"$numberDecimal":"0.04527"},"tone_id":"sadness","tone_name":"Sadness"}],"__v":0},' +
                '{"_id":"5b678b0185235d5be8e5864b","date":"2018-08-05T23:40:49.383Z","user":0,"value":[{"_id":"5b678b0185235d5be8e58650","score":{"$numberDecimal":"0.0145"},"tone_id":"anger","tone_name":"Anger"},{"_id":"5b678b0185235d5be8e5864f","score":{"$numberDecimal":"0.410"},"tone_id":"disgust","tone_name":"Disgust"},{"_id":"5b678b0185235d5be8e5864e","score":{"$numberDecimal":"0.500"},"tone_id":"fear","tone_name":"Fear"},{"_id":"5b678b0185235d5be8e5864d","score":{"$numberDecimal":"0.0123"},"tone_id":"joy","tone_name":"Joy"},{"_id":"5b678b0185235d5be8e5864c","score":{"$numberDecimal":"0"},"tone_id":"sadness","tone_name":"Sadness"}],"__v":0},' +
                '{"_id":"5b678b2f85235d5be8e58651","date":"2018-08-05T23:41:35.342Z","user":0,"value":[{"_id":"5b678b2f85235d5be8e58656","score":{"$numberDecimal":"0.346209"},"tone_id":"anger","tone_name":"Anger"},{"_id":"5b678b2f85235d5be8e58655","score":{"$numberDecimal":"0.195535"},"tone_id":"disgust","tone_name":"Disgust"},{"_id":"5b678b2f85235d5be8e58654","score":{"$numberDecimal":"0.481698"},"tone_id":"fear","tone_name":"Fear"},{"_id":"5b678b2f85235d5be8e58653","score":{"$numberDecimal":"0.052155"},"tone_id":"joy","tone_name":"Joy"},{"_id":"5b678b2f85235d5be8e58652","score":{"$numberDecimal":"0.227284"},"tone_id":"sadness","tone_name":"Sadness"}],"__v":0},' +
                '{"_id":"5b678b4185235d5be8e58657","date":"2018-08-05T23:41:53.454Z","user":0,"value":[{"_id":"5b678b4185235d5be8e5865c","score":{"$numberDecimal":"0"},"tone_id":"anger","tone_name":"Anger"},{"_id":"5b678b4185235d5be8e5865b","score":{"$numberDecimal":"0"},"tone_id":"disgust","tone_name":"Disgust"},{"_id":"5b678b4185235d5be8e5865a","score":{"$numberDecimal":"0.123"},"tone_id":"fear","tone_name":"Fear"},{"_id":"5b678b4185235d5be8e58659","score":{"$numberDecimal":"0.1245"},"tone_id":"joy","tone_name":"Joy"},{"_id":"5b678b4185235d5be8e58658","score":{"$numberDecimal":"0.003"},"tone_id":"sadness","tone_name":"Sadness"}],"__v":0},' +
                '{"_id":"5b678b5785235d5be8e5865d","date":"2018-08-05T23:42:15.795Z","user":0,"value":[{"_id":"5b678b5785235d5be8e58662","score":{"$numberDecimal":"0"},"tone_id":"anger","tone_name":"Anger"},{"_id":"5b678b5785235d5be8e58661","score":{"$numberDecimal":"0"},"tone_id":"disgust","tone_name":"Disgust"},{"_id":"5b678b5785235d5be8e58660","score":{"$numberDecimal":"0.542"},"tone_id":"fear","tone_name":"Fear"},{"_id":"5b678b5785235d5be8e5865f","score":{"$numberDecimal":"0.010"},"tone_id":"joy","tone_name":"Joy"},{"_id":"5b678b5785235d5be8e5865e","score":{"$numberDecimal":"0.012"},"tone_id":"sadness","tone_name":"Sadness"}],"__v":0},' +
                '{"_id":"5b678b6d85235d5be8e58663","date":"2018-08-05T23:42:37.109Z","user":0,"value":[{"_id":"5b678b6d85235d5be8e58668","score":{"$numberDecimal":"0"},"tone_id":"anger","tone_name":"Anger"},{"_id":"5b678b6d85235d5be8e58667","score":{"$numberDecimal":"0"},"tone_id":"disgust","tone_name":"Disgust"},{"_id":"5b678b6d85235d5be8e58666","score":{"$numberDecimal":"0.3521"},"tone_id":"fear","tone_name":"Fear"},{"_id":"5b678b6d85235d5be8e58665","score":{"$numberDecimal":"0.880435"},"tone_id":"joy","tone_name":"Joy"},{"_id":"5b678b6d85235d5be8e58664","score":{"$numberDecimal":"0.122"},"tone_id":"sadness","tone_name":"Sadness"}],"__v":0},' +
                '{"_id":"5b678b8485235d5be8e58669","date":"2018-08-05T23:43:00.349Z","user":0,"value":[{"_id":"5b678b8485235d5be8e5866e","score":{"$numberDecimal":"0"},"tone_id":"anger","tone_name":"Anger"},{"_id":"5b678b8485235d5be8e5866d","score":{"$numberDecimal":"0"},"tone_id":"disgust","tone_name":"Disgust"},{"_id":"5b678b8485235d5be8e5866c","score":{"$numberDecimal":"0.785"},"tone_id":"fear","tone_name":"Fear"},{"_id":"5b678b8485235d5be8e5866b","score":{"$numberDecimal":"0.125"},"tone_id":"joy","tone_name":"Joy"},{"_id":"5b678b8485235d5be8e5866a","score":{"$numberDecimal":"0"},"tone_id":"sadness","tone_name":"Sadness"}],"__v":0},' +
                '{"_id":"5b678b9a85235d5be8e5866f","date":"2018-08-05T23:43:22.972Z","user":0,"value":[{"_id":"5b678b9a85235d5be8e58674","score":{"$numberDecimal":"0.00728"},"tone_id":"anger","tone_name":"Anger"},{"_id":"5b678b9a85235d5be8e58673","score":{"$numberDecimal":"0.005579"},"tone_id":"disgust","tone_name":"Disgust"},{"_id":"5b678b9a85235d5be8e58672","score":{"$numberDecimal":"0.011532"},"tone_id":"fear","tone_name":"Fear"},{"_id":"5b678b9a85235d5be8e58671","score":{"$numberDecimal":"0.928842"},"tone_id":"joy","tone_name":"Joy"},{"_id":"5b678b9a85235d5be8e58670","score":{"$numberDecimal":"0.007531"},"tone_id":"sadness","tone_name":"Sadness"}],"__v":0},' +
                '{"_id":"5b678bae85235d5be8e58675","date":"2018-08-05T23:43:42.180Z","user":0,"value":[{"_id":"5b678bae85235d5be8e5867a","score":{"$numberDecimal":"0"},"tone_id":"anger","tone_name":"Anger"},{"_id":"5b678bae85235d5be8e58679","score":{"$numberDecimal":"0"},"tone_id":"disgust","tone_name":"Disgust"},{"_id":"5b678bae85235d5be8e58678","score":{"$numberDecimal":"0.012"},"tone_id":"fear","tone_name":"Fear"},{"_id":"5b678bae85235d5be8e58677","score":{"$numberDecimal":"0.421"},"tone_id":"joy","tone_name":"Joy"},{"_id":"5b678bae85235d5be8e58676","score":{"$numberDecimal":"0"},"tone_id":"sadness","tone_name":"Sadness"}],"__v":0},' +
                '{"_id":"5b678bc385235d5be8e5867b","date":"2018-08-05T23:44:03.920Z","user":0,"value":[{"_id":"5b678bc385235d5be8e58680","score":{"$numberDecimal":"0"},"tone_id":"anger","tone_name":"Anger"},{"_id":"5b678bc385235d5be8e5867f","score":{"$numberDecimal":"0"},"tone_id":"disgust","tone_name":"Disgust"},{"_id":"5b678bc385235d5be8e5867e","score":{"$numberDecimal":"0.0235"},"tone_id":"fear","tone_name":"Fear"},{"_id":"5b678bc385235d5be8e5867d","score":{"$numberDecimal":"0.2356"},"tone_id":"joy","tone_name":"Joy"},{"_id":"5b678bc385235d5be8e5867c","score":{"$numberDecimal":"0"},"tone_id":"sadness","tone_name":"Sadness"}],"__v":0},' +
                '{"_id":"5b67925b6045c244306b8def","date":"2018-08-06T00:12:11.320Z","user":0,"value":[{"_id":"5b67925b6045c244306b8df4","score":{"$numberDecimal":"0"},"tone_id":"anger","tone_name":"Anger"},{"_id":"5b67925b6045c244306b8df3","score":{"$numberDecimal":"0"},"tone_id":"disgust","tone_name":"Disgust"},{"_id":"5b67925b6045c244306b8df2","score":{"$numberDecimal":"0.0123"},"tone_id":"fear","tone_name":"Fear"},{"_id":"5b67925b6045c244306b8df1","score":{"$numberDecimal":"0.3214"},"tone_id":"joy","tone_name":"Joy"},{"_id":"5b67925b6045c244306b8df0","score":{"$numberDecimal":"0"},"tone_id":"sadness","tone_name":"Sadness"}],"__v":0}]';

        data2 =  '[{"_id":"5b678a9485235d5be8e58633","date":"2018-08-05T23:39:00.369Z","user":0,"value":[{"_id":"5b678a9485235d5be8e58638","score":{"$numberDecimal":"0"},"tone_id":"anger","tone_name":"Anger"},{"_id":"5b678a9485235d5be8e58637","score":{"$numberDecimal":"0"},"tone_id":"disgust","tone_name":"Disgust"},{"_id":"5b678a9485235d5be8e58636","score":{"$numberDecimal":"0"},"tone_id":"fear","tone_name":"Fear"},{"_id":"5b678a9485235d5be8e58635","score":{"$numberDecimal":"0"},"tone_id":"joy","tone_name":"Joy"},{"_id":"5b678a9485235d5be8e58634","score":{"$numberDecimal":"0"},"tone_id":"sadness","tone_name":"Sadness"}],"__v":0},' +
                '{"_id":"5b678ac185235d5be8e58639","date":"2018-08-05T23:39:45.971Z","user":0,"value":[{"_id":"5b678ac185235d5be8e5863e","score":{"$numberDecimal":"0"},"tone_id":"anger","tone_name":"Anger"},{"_id":"5b678ac185235d5be8e5863d","score":{"$numberDecimal":"0"},"tone_id":"disgust","tone_name":"Disgust"},{"_id":"5b678ac185235d5be8e5863c","score":{"$numberDecimal":"0"},"tone_id":"fear","tone_name":"Fear"},{"_id":"5b678ac185235d5be8e5863b","score":{"$numberDecimal":"0"},"tone_id":"joy","tone_name":"Joy"},{"_id":"5b678ac185235d5be8e5863a","score":{"$numberDecimal":"0"},"tone_id":"sadness","tone_name":"Sadness"}],"__v":0},' +
                '{"_id":"5b678ad585235d5be8e5863f","date":"2018-08-05T23:40:05.364Z","user":0,"value":[{"_id":"5b678ad585235d5be8e58644","score":{"$numberDecimal":"0.045405"},"tone_id":"anger","tone_name":"Anger"},{"_id":"5b678ad585235d5be8e58643","score":{"$numberDecimal":"0.012664"},"tone_id":"disgust","tone_name":"Disgust"},{"_id":"5b678ad585235d5be8e58642","score":{"$numberDecimal":"0.046554"},"tone_id":"fear","tone_name":"Fear"},{"_id":"5b678ad585235d5be8e58641","score":{"$numberDecimal":"0.767385"},"tone_id":"joy","tone_name":"Joy"},{"_id":"5b678ad585235d5be8e58640","score":{"$numberDecimal":"0.086272"},"tone_id":"sadness","tone_name":"Sadness"}],"__v":0},' +
                '{"_id":"5b678aec85235d5be8e58645","date":"2018-08-05T23:40:28.208Z","user":0,"value":[{"_id":"5b678aec85235d5be8e5864a","score":{"$numberDecimal":"0.090183"},"tone_id":"anger","tone_name":"Anger"},{"_id":"5b678aec85235d5be8e58649","score":{"$numberDecimal":"0.072571"},"tone_id":"disgust","tone_name":"Disgust"},{"_id":"5b678aec85235d5be8e58648","score":{"$numberDecimal":"0.13883"},"tone_id":"fear","tone_name":"Fear"},{"_id":"5b678aec85235d5be8e58647","score":{"$numberDecimal":"0.146992"},"tone_id":"joy","tone_name":"Joy"},{"_id":"5b678aec85235d5be8e58646","score":{"$numberDecimal":"0.164527"},"tone_id":"sadness","tone_name":"Sadness"}],"__v":0},' +
                '{"_id":"5b678b0185235d5be8e5864b","date":"2018-08-05T23:40:49.383Z","user":0,"value":[{"_id":"5b678b0185235d5be8e58650","score":{"$numberDecimal":"0"},"tone_id":"anger","tone_name":"Anger"},{"_id":"5b678b0185235d5be8e5864f","score":{"$numberDecimal":"0"},"tone_id":"disgust","tone_name":"Disgust"},{"_id":"5b678b0185235d5be8e5864e","score":{"$numberDecimal":"0"},"tone_id":"fear","tone_name":"Fear"},{"_id":"5b678b0185235d5be8e5864d","score":{"$numberDecimal":"0"},"tone_id":"joy","tone_name":"Joy"},{"_id":"5b678b0185235d5be8e5864c","score":{"$numberDecimal":"0"},"tone_id":"sadness","tone_name":"Sadness"}],"__v":0},' +
                '{"_id":"5b678b2f85235d5be8e58651","date":"2018-08-05T23:41:35.342Z","user":0,"value":[{"_id":"5b678b2f85235d5be8e58656","score":{"$numberDecimal":"0.146209"},"tone_id":"anger","tone_name":"Anger"},{"_id":"5b678b2f85235d5be8e58655","score":{"$numberDecimal":"0.095535"},"tone_id":"disgust","tone_name":"Disgust"},{"_id":"5b678b2f85235d5be8e58654","score":{"$numberDecimal":"0.181698"},"tone_id":"fear","tone_name":"Fear"},{"_id":"5b678b2f85235d5be8e58653","score":{"$numberDecimal":"0.052155"},"tone_id":"joy","tone_name":"Joy"},{"_id":"5b678b2f85235d5be8e58652","score":{"$numberDecimal":"0.227284"},"tone_id":"sadness","tone_name":"Sadness"}],"__v":0},' +
                '{"_id":"5b678b4185235d5be8e58657","date":"2018-08-05T23:41:53.454Z","user":0,"value":[{"_id":"5b678b4185235d5be8e5865c","score":{"$numberDecimal":"0"},"tone_id":"anger","tone_name":"Anger"},{"_id":"5b678b4185235d5be8e5865b","score":{"$numberDecimal":"0"},"tone_id":"disgust","tone_name":"Disgust"},{"_id":"5b678b4185235d5be8e5865a","score":{"$numberDecimal":"0"},"tone_id":"fear","tone_name":"Fear"},{"_id":"5b678b4185235d5be8e58659","score":{"$numberDecimal":"0"},"tone_id":"joy","tone_name":"Joy"},{"_id":"5b678b4185235d5be8e58658","score":{"$numberDecimal":"0"},"tone_id":"sadness","tone_name":"Sadness"}],"__v":0},' +
                '{"_id":"5b678b5785235d5be8e5865d","date":"2018-08-05T23:42:15.795Z","user":0,"value":[{"_id":"5b678b5785235d5be8e58662","score":{"$numberDecimal":"0"},"tone_id":"anger","tone_name":"Anger"},{"_id":"5b678b5785235d5be8e58661","score":{"$numberDecimal":"0"},"tone_id":"disgust","tone_name":"Disgust"},{"_id":"5b678b5785235d5be8e58660","score":{"$numberDecimal":"0"},"tone_id":"fear","tone_name":"Fear"},{"_id":"5b678b5785235d5be8e5865f","score":{"$numberDecimal":"0"},"tone_id":"joy","tone_name":"Joy"},{"_id":"5b678b5785235d5be8e5865e","score":{"$numberDecimal":"0"},"tone_id":"sadness","tone_name":"Sadness"}],"__v":0},' +
                '{"_id":"5b678b6d85235d5be8e58663","date":"2018-08-05T23:42:37.109Z","user":0,"value":[{"_id":"5b678b6d85235d5be8e58668","score":{"$numberDecimal":"0"},"tone_id":"anger","tone_name":"Anger"},{"_id":"5b678b6d85235d5be8e58667","score":{"$numberDecimal":"0"},"tone_id":"disgust","tone_name":"Disgust"},{"_id":"5b678b6d85235d5be8e58666","score":{"$numberDecimal":"0"},"tone_id":"fear","tone_name":"Fear"},{"_id":"5b678b6d85235d5be8e58665","score":{"$numberDecimal":"0.880435"},"tone_id":"joy","tone_name":"Joy"},{"_id":"5b678b6d85235d5be8e58664","score":{"$numberDecimal":"0"},"tone_id":"sadness","tone_name":"Sadness"}],"__v":0},' +
                '{"_id":"5b678b8485235d5be8e58669","date":"2018-08-05T23:43:00.349Z","user":0,"value":[{"_id":"5b678b8485235d5be8e5866e","score":{"$numberDecimal":"0"},"tone_id":"anger","tone_name":"Anger"},{"_id":"5b678b8485235d5be8e5866d","score":{"$numberDecimal":"0"},"tone_id":"disgust","tone_name":"Disgust"},{"_id":"5b678b8485235d5be8e5866c","score":{"$numberDecimal":"0"},"tone_id":"fear","tone_name":"Fear"},{"_id":"5b678b8485235d5be8e5866b","score":{"$numberDecimal":"0"},"tone_id":"joy","tone_name":"Joy"},{"_id":"5b678b8485235d5be8e5866a","score":{"$numberDecimal":"0"},"tone_id":"sadness","tone_name":"Sadness"}],"__v":0},' +
                '{"_id":"5b678b9a85235d5be8e5866f","date":"2018-08-05T23:43:22.972Z","user":0,"value":[{"_id":"5b678b9a85235d5be8e58674","score":{"$numberDecimal":"0.00728"},"tone_id":"anger","tone_name":"Anger"},{"_id":"5b678b9a85235d5be8e58673","score":{"$numberDecimal":"0.005579"},"tone_id":"disgust","tone_name":"Disgust"},{"_id":"5b678b9a85235d5be8e58672","score":{"$numberDecimal":"0.011532"},"tone_id":"fear","tone_name":"Fear"},{"_id":"5b678b9a85235d5be8e58671","score":{"$numberDecimal":"0.928842"},"tone_id":"joy","tone_name":"Joy"},{"_id":"5b678b9a85235d5be8e58670","score":{"$numberDecimal":"0.007531"},"tone_id":"sadness","tone_name":"Sadness"}],"__v":0},' +
                '{"_id":"5b678bae85235d5be8e58675","date":"2018-08-05T23:43:42.180Z","user":0,"value":[{"_id":"5b678bae85235d5be8e5867a","score":{"$numberDecimal":"0"},"tone_id":"anger","tone_name":"Anger"},{"_id":"5b678bae85235d5be8e58679","score":{"$numberDecimal":"0"},"tone_id":"disgust","tone_name":"Disgust"},{"_id":"5b678bae85235d5be8e58678","score":{"$numberDecimal":"0"},"tone_id":"fear","tone_name":"Fear"},{"_id":"5b678bae85235d5be8e58677","score":{"$numberDecimal":"0"},"tone_id":"joy","tone_name":"Joy"},{"_id":"5b678bae85235d5be8e58676","score":{"$numberDecimal":"0"},"tone_id":"sadness","tone_name":"Sadness"}],"__v":0},' +
                '{"_id":"5b678bc385235d5be8e5867b","date":"2018-08-05T23:44:03.920Z","user":0,"value":[{"_id":"5b678bc385235d5be8e58680","score":{"$numberDecimal":"0"},"tone_id":"anger","tone_name":"Anger"},{"_id":"5b678bc385235d5be8e5867f","score":{"$numberDecimal":"0"},"tone_id":"disgust","tone_name":"Disgust"},{"_id":"5b678bc385235d5be8e5867e","score":{"$numberDecimal":"0"},"tone_id":"fear","tone_name":"Fear"},{"_id":"5b678bc385235d5be8e5867d","score":{"$numberDecimal":"0"},"tone_id":"joy","tone_name":"Joy"},{"_id":"5b678bc385235d5be8e5867c","score":{"$numberDecimal":"0"},"tone_id":"sadness","tone_name":"Sadness"}],"__v":0},' +
                '{"_id":"5b67925b6045c244306b8def","date":"2018-08-06T00:12:11.320Z","user":0,"value":[{"_id":"5b67925b6045c244306b8df4","score":{"$numberDecimal":"0"},"tone_id":"anger","tone_name":"Anger"},{"_id":"5b67925b6045c244306b8df3","score":{"$numberDecimal":"0"},"tone_id":"disgust","tone_name":"Disgust"},{"_id":"5b67925b6045c244306b8df2","score":{"$numberDecimal":"0"},"tone_id":"fear","tone_name":"Fear"},{"_id":"5b67925b6045c244306b8df1","score":{"$numberDecimal":"0"},"tone_id":"joy","tone_name":"Joy"},{"_id":"5b67925b6045c244306b8df0","score":{"$numberDecimal":"0"},"tone_id":"sadness","tone_name":"Sadness"}],"__v":0}]';

        data3 =  '[{"_id":"5b678a9485235d5be8e58633","date":"2018-08-05T23:39:00.369Z","user":0,"value":[{"_id":"5b678a9485235d5be8e58638","score":{"$numberDecimal":"0"},"tone_id":"anger","tone_name":"Anger"},{"_id":"5b678a9485235d5be8e58637","score":{"$numberDecimal":"0"},"tone_id":"disgust","tone_name":"Disgust"},{"_id":"5b678a9485235d5be8e58636","score":{"$numberDecimal":"0"},"tone_id":"fear","tone_name":"Fear"},{"_id":"5b678a9485235d5be8e58635","score":{"$numberDecimal":"0"},"tone_id":"joy","tone_name":"Joy"},{"_id":"5b678a9485235d5be8e58634","score":{"$numberDecimal":"0"},"tone_id":"sadness","tone_name":"Sadness"}],"__v":0},' +
                '{"_id":"5b678ac185235d5be8e58639","date":"2018-08-05T23:39:45.971Z","user":0,"value":[{"_id":"5b678ac185235d5be8e5863e","score":{"$numberDecimal":"0"},"tone_id":"anger","tone_name":"Anger"},{"_id":"5b678ac185235d5be8e5863d","score":{"$numberDecimal":"0"},"tone_id":"disgust","tone_name":"Disgust"},{"_id":"5b678ac185235d5be8e5863c","score":{"$numberDecimal":"0"},"tone_id":"fear","tone_name":"Fear"},{"_id":"5b678ac185235d5be8e5863b","score":{"$numberDecimal":"0"},"tone_id":"joy","tone_name":"Joy"},{"_id":"5b678ac185235d5be8e5863a","score":{"$numberDecimal":"0"},"tone_id":"sadness","tone_name":"Sadness"}],"__v":0},' +
                '{"_id":"5b678ad585235d5be8e5863f","date":"2018-08-05T23:40:05.364Z","user":0,"value":[{"_id":"5b678ad585235d5be8e58644","score":{"$numberDecimal":"0.045405"},"tone_id":"anger","tone_name":"Anger"},{"_id":"5b678ad585235d5be8e58643","score":{"$numberDecimal":"0.712664"},"tone_id":"disgust","tone_name":"Disgust"},{"_id":"5b678ad585235d5be8e58642","score":{"$numberDecimal":"0.046554"},"tone_id":"fear","tone_name":"Fear"},{"_id":"5b678ad585235d5be8e58641","score":{"$numberDecimal":"0.767385"},"tone_id":"joy","tone_name":"Joy"},{"_id":"5b678ad585235d5be8e58640","score":{"$numberDecimal":"0.086272"},"tone_id":"sadness","tone_name":"Sadness"}],"__v":0},' +
                '{"_id":"5b678aec85235d5be8e58645","date":"2018-08-05T23:40:28.208Z","user":0,"value":[{"_id":"5b678aec85235d5be8e5864a","score":{"$numberDecimal":"0.090183"},"tone_id":"anger","tone_name":"Anger"},{"_id":"5b678aec85235d5be8e58649","score":{"$numberDecimal":"0.172571"},"tone_id":"disgust","tone_name":"Disgust"},{"_id":"5b678aec85235d5be8e58648","score":{"$numberDecimal":"0.13883"},"tone_id":"fear","tone_name":"Fear"},{"_id":"5b678aec85235d5be8e58647","score":{"$numberDecimal":"0.146992"},"tone_id":"joy","tone_name":"Joy"},{"_id":"5b678aec85235d5be8e58646","score":{"$numberDecimal":"0.164527"},"tone_id":"sadness","tone_name":"Sadness"}],"__v":0},' +
                '{"_id":"5b678b0185235d5be8e5864b","date":"2018-08-05T23:40:49.383Z","user":0,"value":[{"_id":"5b678b0185235d5be8e58650","score":{"$numberDecimal":"0"},"tone_id":"anger","tone_name":"Anger"},{"_id":"5b678b0185235d5be8e5864f","score":{"$numberDecimal":"0.4789"},"tone_id":"disgust","tone_name":"Disgust"},{"_id":"5b678b0185235d5be8e5864e","score":{"$numberDecimal":"0"},"tone_id":"fear","tone_name":"Fear"},{"_id":"5b678b0185235d5be8e5864d","score":{"$numberDecimal":"0"},"tone_id":"joy","tone_name":"Joy"},{"_id":"5b678b0185235d5be8e5864c","score":{"$numberDecimal":"0"},"tone_id":"sadness","tone_name":"Sadness"}],"__v":0},' +
                '{"_id":"5b678b2f85235d5be8e58651","date":"2018-08-05T23:41:35.342Z","user":0,"value":[{"_id":"5b678b2f85235d5be8e58656","score":{"$numberDecimal":"0.146209"},"tone_id":"anger","tone_name":"Anger"},{"_id":"5b678b2f85235d5be8e58655","score":{"$numberDecimal":"0.095535"},"tone_id":"disgust","tone_name":"Disgust"},{"_id":"5b678b2f85235d5be8e58654","score":{"$numberDecimal":"0.181698"},"tone_id":"fear","tone_name":"Fear"},{"_id":"5b678b2f85235d5be8e58653","score":{"$numberDecimal":"0.052155"},"tone_id":"joy","tone_name":"Joy"},{"_id":"5b678b2f85235d5be8e58652","score":{"$numberDecimal":"0.227284"},"tone_id":"sadness","tone_name":"Sadness"}],"__v":0},' +
                '{"_id":"5b678b4185235d5be8e58657","date":"2018-08-05T23:41:53.454Z","user":0,"value":[{"_id":"5b678b4185235d5be8e5865c","score":{"$numberDecimal":"0"},"tone_id":"anger","tone_name":"Anger"},{"_id":"5b678b4185235d5be8e5865b","score":{"$numberDecimal":"0"},"tone_id":"disgust","tone_name":"Disgust"},{"_id":"5b678b4185235d5be8e5865a","score":{"$numberDecimal":"0.123"},"tone_id":"fear","tone_name":"Fear"},{"_id":"5b678b4185235d5be8e58659","score":{"$numberDecimal":"0"},"tone_id":"joy","tone_name":"Joy"},{"_id":"5b678b4185235d5be8e58658","score":{"$numberDecimal":"0"},"tone_id":"sadness","tone_name":"Sadness"}],"__v":0},' +
                '{"_id":"5b678b5785235d5be8e5865d","date":"2018-08-05T23:42:15.795Z","user":0,"value":[{"_id":"5b678b5785235d5be8e58662","score":{"$numberDecimal":"0"},"tone_id":"anger","tone_name":"Anger"},{"_id":"5b678b5785235d5be8e58661","score":{"$numberDecimal":"0.578"},"tone_id":"disgust","tone_name":"Disgust"},{"_id":"5b678b5785235d5be8e58660","score":{"$numberDecimal":"0"},"tone_id":"fear","tone_name":"Fear"},{"_id":"5b678b5785235d5be8e5865f","score":{"$numberDecimal":"0"},"tone_id":"joy","tone_name":"Joy"},{"_id":"5b678b5785235d5be8e5865e","score":{"$numberDecimal":"0"},"tone_id":"sadness","tone_name":"Sadness"}],"__v":0},' +
                '{"_id":"5b678b6d85235d5be8e58663","date":"2018-08-05T23:42:37.109Z","user":0,"value":[{"_id":"5b678b6d85235d5be8e58668","score":{"$numberDecimal":"0"},"tone_id":"anger","tone_name":"Anger"},{"_id":"5b678b6d85235d5be8e58667","score":{"$numberDecimal":"0"},"tone_id":"disgust","tone_name":"Disgust"},{"_id":"5b678b6d85235d5be8e58666","score":{"$numberDecimal":"0"},"tone_id":"fear","tone_name":"Fear"},{"_id":"5b678b6d85235d5be8e58665","score":{"$numberDecimal":"0.880435"},"tone_id":"joy","tone_name":"Joy"},{"_id":"5b678b6d85235d5be8e58664","score":{"$numberDecimal":"0"},"tone_id":"sadness","tone_name":"Sadness"}],"__v":0},' +
                '{"_id":"5b678b8485235d5be8e58669","date":"2018-08-05T23:43:00.349Z","user":0,"value":[{"_id":"5b678b8485235d5be8e5866e","score":{"$numberDecimal":"0"},"tone_id":"anger","tone_name":"Anger"},{"_id":"5b678b8485235d5be8e5866d","score":{"$numberDecimal":"0"},"tone_id":"disgust","tone_name":"Disgust"},{"_id":"5b678b8485235d5be8e5866c","score":{"$numberDecimal":"0.452"},"tone_id":"fear","tone_name":"Fear"},{"_id":"5b678b8485235d5be8e5866b","score":{"$numberDecimal":"0"},"tone_id":"joy","tone_name":"Joy"},{"_id":"5b678b8485235d5be8e5866a","score":{"$numberDecimal":"0"},"tone_id":"sadness","tone_name":"Sadness"}],"__v":0},' +
                '{"_id":"5b678b9a85235d5be8e5866f","date":"2018-08-05T23:43:22.972Z","user":0,"value":[{"_id":"5b678b9a85235d5be8e58674","score":{"$numberDecimal":"0.00728"},"tone_id":"anger","tone_name":"Anger"},{"_id":"5b678b9a85235d5be8e58673","score":{"$numberDecimal":"0.005579"},"tone_id":"disgust","tone_name":"Disgust"},{"_id":"5b678b9a85235d5be8e58672","score":{"$numberDecimal":"0.011532"},"tone_id":"fear","tone_name":"Fear"},{"_id":"5b678b9a85235d5be8e58671","score":{"$numberDecimal":"0.928842"},"tone_id":"joy","tone_name":"Joy"},{"_id":"5b678b9a85235d5be8e58670","score":{"$numberDecimal":"0.007531"},"tone_id":"sadness","tone_name":"Sadness"}],"__v":0},' +
                '{"_id":"5b678bae85235d5be8e58675","date":"2018-08-05T23:43:42.180Z","user":0,"value":[{"_id":"5b678bae85235d5be8e5867a","score":{"$numberDecimal":"0"},"tone_id":"anger","tone_name":"Anger"},{"_id":"5b678bae85235d5be8e58679","score":{"$numberDecimal":"0"},"tone_id":"disgust","tone_name":"Disgust"},{"_id":"5b678bae85235d5be8e58678","score":{"$numberDecimal":"0.784"},"tone_id":"fear","tone_name":"Fear"},{"_id":"5b678bae85235d5be8e58677","score":{"$numberDecimal":"0"},"tone_id":"joy","tone_name":"Joy"},{"_id":"5b678bae85235d5be8e58676","score":{"$numberDecimal":"0"},"tone_id":"sadness","tone_name":"Sadness"}],"__v":0},' +
                '{"_id":"5b678bc385235d5be8e5867b","date":"2018-08-05T23:44:03.920Z","user":0,"value":[{"_id":"5b678bc385235d5be8e58680","score":{"$numberDecimal":"0"},"tone_id":"anger","tone_name":"Anger"},{"_id":"5b678bc385235d5be8e5867f","score":{"$numberDecimal":"0.012"},"tone_id":"disgust","tone_name":"Disgust"},{"_id":"5b678bc385235d5be8e5867e","score":{"$numberDecimal":"0.013"},"tone_id":"fear","tone_name":"Fear"},{"_id":"5b678bc385235d5be8e5867d","score":{"$numberDecimal":"0"},"tone_id":"joy","tone_name":"Joy"},{"_id":"5b678bc385235d5be8e5867c","score":{"$numberDecimal":"0"},"tone_id":"sadness","tone_name":"Sadness"}],"__v":0},' +
                '{"_id":"5b67925b6045c244306b8def","date":"2018-08-06T00:12:11.320Z","user":0,"value":[{"_id":"5b67925b6045c244306b8df4","score":{"$numberDecimal":"0"},"tone_id":"anger","tone_name":"Anger"},{"_id":"5b67925b6045c244306b8df3","score":{"$numberDecimal":"0.127"},"tone_id":"disgust","tone_name":"Disgust"},{"_id":"5b67925b6045c244306b8df2","score":{"$numberDecimal":"0.023"},"tone_id":"fear","tone_name":"Fear"},{"_id":"5b67925b6045c244306b8df1","score":{"$numberDecimal":"0"},"tone_id":"joy","tone_name":"Joy"},{"_id":"5b67925b6045c244306b8df0","score":{"$numberDecimal":"0"},"tone_id":"sadness","tone_name":"Sadness"}],"__v":0}]';    
        
        if(selectValue == 0){
            data = data1;
        }else if(selectValue == 1){
            data = data2;
        }else if(selectValue == 2){
            data = data3;
        }
        _VozData = JSON.parse(data);

        
        
        
        for (i in _VozData) {
                var dateObj = new Date(_VozData[i].date);
      
                var h = dateObj.getHours();
                var m = dateObj.getMinutes();
                var n = h + ":" + m  ;
           
                var month = dateObj.getUTCMonth() + 1; //months from 1-12
                var day = dateObj.getUTCDate();
                var year = dateObj.getUTCFullYear();

               var newdate = year + "/" + month + "/" + day;

                y.push([n,parseFloat(_VozData[i].value[0].score.$numberDecimal),parseFloat(_VozData[i].value[1].score.$numberDecimal),parseFloat(_VozData[i].value[2].score.$numberDecimal),parseFloat(_VozData[i].value[3].score.$numberDecimal),parseFloat(_VozData[i].value[4].score.$numberDecimal)]);
              

                if(Math.round(parseFloat(_VozData[i].value[3].score.$numberDecimal)) > Math.round(((parseFloat(_VozData[i].value[0].score.$numberDecimal)+parseFloat(_VozData[i].value[1].score.$numberDecimal)+parseFloat(_VozData[i].value[2].score.$numberDecimal)+parseFloat(_VozData[i].value[4].score.$numberDecimal))/4) )){
                    yE.push(1);
                }
                else if (Math.round(parseFloat(_VozData[i].value[3].score.$numberDecimal)) < Math.round(((parseFloat(_VozData[i].value[0].score.$numberDecimal)+parseFloat(_VozData[i].value[1].score.$numberDecimal)+parseFloat(_VozData[i].value[2].score.$numberDecimal)+parseFloat(_VozData[i].value[4].score.$numberDecimal))/4) )){
                    yE.push(3);

                }
                else {
                    yE.push(2);

                }
                
              
         }
                      
        var data = google.visualization.arrayToDataTable(y);
        var furia = '#ff0000';
        var desagrado = '#00ff00';
        var temor = '#e600e6';
        var alegria = '#ffff00';
        var tristeza = '#0000ff';
        var options = {
          title: 'Emociones',
          hAxis: {title: 'Hora ',  titleTextStyle: {color: '#333'}},
          vAxis: {minValue: 0},
         series: {
            0: { color: furia},
            1: { color: desagrado},
            2: { color: temor},
            3: { color: alegria},
            4: { color: tristeza},
          }

        };

        
        chartV.draw(data, options);



        if(xE.length > yE.length){
                if(xE.length > zE.length){
                    max = xE.length;
                }
                else {
                    max = zE.length;
                }

            }
            else if(yE.length > zE.length){
                max = yE.length;

            }
            else {
                 max = zE.length;

            }
            

              for (i = 0; i < max; i++) {
                if(xE.length > i){
                    if(yE.length > i){
                        if(zE.length > i){
                             temp = xE[i] + yE[i] + zE[i];
                        }
                        else {
                             temp = xE[i] + yE[i]; 
                        }
                      
                    }
                    else if(zE.length > i){
                             temp = xE[i] + zE[i];
                        }
                    else{
                        temp = xE[i];
                    }

                }
                else if(yE.length > i){
                    if(xE.length > i){
                        if(zE.length > i){
                             temp = yE[i] + xE[i] + zE[i];
                        }
                        else {
                            temp = yE[i] + xE[i];
                        }
                        
                    }
                    else if(zE.length > i){
                             temp = yE[i] + zE[i];
                        }
                    else{
                        temp = yE[i];
                    }

                }
                else {
                      temp = zE[i];

                }
                
                temp= Math.round(temp/3);
                temp2 = temp2 + temp;

                p.push([i,temp]);
                counter = counter + 1;
    
            }

           
                      
            temp2 = Math.round(temp2 / counter);
            var titleEstres1 = 'NIVEL DE ESTRÉS ALTO';
            var estresColor1 = '#ff0000';
            if(temp2 == 1){
                estresColor1 = '#00ff00';
                titleEstres1 = 'NIVEL DE ESTRÉS CONTROLADO';
            }
            else if (temp2 == 2){
                estresColor1 = '#ffff00';
                titleEstres1 = 'NIVEL DE ESTRÉS RIESGOSO';
            }
            else {
                estresColor1= '#ff0000';
                titleEstres1 = 'NIVEL DE ESTRÉS ALTO';
            }
        
        var data1 = google.visualization.arrayToDataTable(p);
     
        var options1 = {
          title: titleEstres1,
          hAxis: {title: 'Medición',  titleTextStyle: {color: '#333'}},
          vAxis: {minValue: 0},
         series: {
            0: { color: estresColor1},
          }

        };

        
        chart1.draw(data1, options1);
                     



      
      }