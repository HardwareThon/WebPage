      google.charts.load('current', {'packages':['corechart']});
      
      google.charts.setOnLoadCallback(drawChart);
      
      function drawChart() {
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
            $.ajax({
                type: "GET",
                url: url + '/getBrain',
                contentType: "application/json; charset=utf-8",
                datatype: "json",
                success: function(data) {
                    _BrainData = data;
                    
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
                     
                },
                error: function() {
                    alert('Error al cargar la información');
                }
            });
             
           $.ajax({
                type: "GET",
                url: url + '/getPulse',
                contentType: "application/json; charset=utf-8",
                datatype: "json",
                success: function(data) {
                    _PulseData = data;
                    
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
                     
                },
                error: function() {
                    alert('Error al cargar la información');
                }
            });
            

                $.ajax({
                type: "GET",
                url: url + '/getVoice',
                contentType: "application/json; charset=utf-8",
                datatype: "json",
                success: function(data) {
                    /*alert(JSON.stringify(data));*/
                    _VozData = data;

                    
                    
                    
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
                     
                },
                error: function() {
                    alert('Error al cargar la información');
                }


            
                
            });



      setInterval(drawChart, 10000);
      }