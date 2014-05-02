/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
//var app = {
//    // Application Constructor
//    initialize: function() {
//        this.bindEvents();
//    },
//    // Bind Event Listeners
//    //
//    // Bind any events that are required on startup. Common events are:
//    // 'load', 'deviceready', 'offline', and 'online'.
//    bindEvents: function() {
//        document.addEventListener('deviceready', this.onDeviceReady, false);
//    },
//    // deviceready Event Handler
//    //
//    // The scope of 'this' is the event. In order to call the 'receivedEvent'
//    // function, we must explicity call 'app.receivedEvent(...);'
//    onDeviceReady: function() {
//        app.receivedEvent('deviceready');
//    },
//    // Update DOM on a Received Event
//    receivedEvent: function(id) {
//        var parentElement = document.getElementById(id);
//        var listeningElement = parentElement.querySelector('.listening');
//        var receivedElement = parentElement.querySelector('.received');
//
//        listeningElement.setAttribute('style', 'display:none;');
//        receivedElement.setAttribute('style', 'display:block;');
//
//        console.log('Received Event: ' + id);
//    }
//};


$(document).ready(function(){
        var nomb;
        var ape1;
        var ape2;
        var dia;
        var mes;
        var anio;
        var i;
        var d = new Date();
        var actualYear = d.getFullYear();
        var initialYear = actualYear - 100;
        for(i=initialYear; i<=actualYear; i++){
                $('#select-choice-yearActual').append('<option value="' + i + '">' + i + '</option>');
                $('#select-choice-yearAilexin').append('<option value="' + i + '">' + i + '</option>');
                $('#select-choice-yearFree').append('<option value="' + i + '">' + i + '</option>');
        }
        for(i=1; i<=31; i++){
                $('#select-choice-dayActual').append('<option value="' + i + '">' + i + '</option>');
                $('#select-choice-dayAilexin').append('<option value="' + i + '">' + i + '</option>');
                $('#select-choice-dayFree').append('<option value="' + i + '">' + i + '</option>');
        }

});

//Convierte texto a numeros y los suma
function sumarCaracteres(string)
{
        var loSumado = 0;
        var numeroLetra = [];
        numeroLetra['a'] = 1;
        numeroLetra['j'] = 1;
        numeroLetra['s'] = 1;
        numeroLetra['b'] = 2;
        numeroLetra['k'] = 2;
        numeroLetra['t'] = 2;
        numeroLetra['c'] = 3;
        numeroLetra['l'] = 3; 
        numeroLetra['u'] = 3; 
        numeroLetra['d'] = 4; 
        numeroLetra['m'] = 4; 
        numeroLetra['v'] = 4;
        numeroLetra['e'] = 5; 
        numeroLetra['n'] = 5; 
        numeroLetra['w'] = 5;
        numeroLetra['f'] = 6; 
        numeroLetra['o'] = 6; 
        numeroLetra['x'] = 6;
        numeroLetra['g'] = 7; 
        numeroLetra['p'] = 7; 
        numeroLetra['y'] = 7;
        numeroLetra['h'] = 8; 
        numeroLetra['q'] = 8; 
        numeroLetra['z'] = 8;
        numeroLetra['i'] = 9; 
        numeroLetra['r'] = 9;

        var myString;
        myString = string.toLowerCase();  /*covertir a minusculas*/
        myString = myString.replace(/ /g,""); /*espacios en blanco por nada*/
        myString = myString.replace(/ñ/g,"n"); /*ñ por n*/
        myString = myString.replace(/á/g,"a"); //á por a
        myString = myString.replace(/e/g,"e"); //é por e
        myString = myString.replace(/í/g,"i"); //í por i
        myString = myString.replace(/ó/g,"o"); //ó por o
        myString = myString.replace(/ú/g,"u"); //ú por u
        for(var i = 0; i < myString.length; i++)
        {			
                var character = myString.charAt(i);
                loSumado+=numeroLetra[character];
        }		
        return loSumado;
}

function unDigito(loSumado, consulta)
{		
    var salida = 0;
    var cadena = String(loSumado);
	var consulta = consulta;

	switch(consulta)
	{
	case 'free':
			if(cadena == '11' || cadena == '22'){ 
				salida = cadena; 
			} else {			
				for(var e = 0; e < cadena.length; e++){			
						salida+=parseInt(cadena.charAt(e));
				}
			}
			var mySalida = String(salida);
			if(mySalida.length == '1' || mySalida == '11' || mySalida == '22'){ 
				return salida; 
			} else {
				return unDigito(salida, consulta);
			}
		break;	
	case 'ailexin':
			if(cadena == '11'){ 
				salida = cadena; 
			} else {			
				for(var e = 0; e < cadena.length; e++){			
						salida+=parseInt(cadena.charAt(e));
				}
			}
			var mySalida = String(salida);
			if(mySalida.length == '1' || mySalida == '11'){ 
				return salida; 
			} else {
				return unDigito(salida, consulta);
			}
	  break;	
	case 'actual':
			if(cadena == '11' || cadena == '22' || cadena == '33' || cadena == '44'){ 
				salida = cadena; 
			} else {			
				for(var e = 0; e < cadena.length; e++){			
						salida+=parseInt(cadena.charAt(e));
				}
			}
			var mySalida = String(salida);
			if(mySalida.length == '1' || mySalida == '11' || mySalida == '22' || cadena == '33' || cadena == '44'){ 
				return salida; 
			} else {
				return unDigito(salida, consulta);
			}
	  break;	
	case 'numeros':
	  
	  break;
	
	}    
}


function unDigitoFin(loSumado, consulta){	
    var salida = 0;
    var cadena = String(loSumado);
	var consulta = consulta;

	for(var e = 0; e < cadena.length; e++){			
			salida+=parseInt(cadena.charAt(e));
	}
	var mySalida = String(salida);
	if(mySalida.length == '1'){ 
		return salida; 
	} else {
		return unDigitoFin(salida, consulta);
	}
}

$('#miFormFree').submit(function() {

        var nomb 	= $('#nameFree').val();
        var pate 	= $('#apellido1Free').val();
        var mate 	= $('#apellido2Free').val();
        var mes 	= $('#select-choice-monthFree').val();
        var dia 	= $('#select-choice-dayFree').val();
        var anio 	= $('#select-choice-yearFree').val();
		var consulta= 'free';

        var nombSum = sumarCaracteres(nomb);
        var pateSum = sumarCaracteres(pate);
        var mateSum = sumarCaracteres(mate);
        nombSum     = String(nombSum);
        pateSum     = String(pateSum);
        mateSum     = String(mateSum);
        var nomCompletoSum  = unDigito(nombSum+pateSum+mateSum, consulta);

        var mesSum  = unDigito(mes, consulta);
        var diaSum  = unDigito(dia, consulta);
        var anioSum = unDigito(anio, consulta);

        var fechaNacimientoSum = unDigito(mes+dia+anio, consulta);
        var fechaNacimientoNombCompletoSum = unDigito(nombSum+pateSum+mateSum+mes+dia+anio, consulta);

        $.getJSON("arreglos.json",
        function(json){
                var html = '';
                        html += '<br><b>Tu vibración numérica ('+nomCompletoSum+'): </b><br>'+json.sig_nombre[nomCompletoSum];
                        html += '<br><b>Tu destino ('+fechaNacimientoSum+'): </b><br>'+json.sig_nacimiento[fechaNacimientoSum];
                        html += '<br><b>Tu poder personal ('+fechaNacimientoNombCompletoSum+'): </b><br>'+json.sig_poder_personal[fechaNacimientoNombCompletoSum];
                        $('#contenedorFree').html(html);
                return false;
        }
    );
        return false;
});

$('#miFormAilexin').submit(function() {

        var mes     = $('#select-choice-monthAilexin').val();
        var dia     = $('#select-choice-dayAilexin').val();
        var anio    = $('#select-choice-yearAilexin').val();
		var consulta= 'ailexin';

        var mesSum  = unDigito(mes, consulta);
        var diaSum  = unDigito(dia, consulta);
		var anio2f 	= anio.substring(2,4);
		var anio2fSum = unDigito(anio2f, consulta);
        var anioSum = unDigito(anio, consulta);
        var fechaNacimientoSum = unDigito(mes+dia+anio, consulta);

        $.getJSON("ailexin.json",
        function(json){
                var html = '';
                        html += '<br><b>El Alma ('+diaSum+'): </b><br>'+json.sig_alma['concepto']+'</b><br>'+json.sig_alma[diaSum]+'<br>';
                        html += '<br><b>La Personalidad ('+mesSum+'): </b><br>'+json.sig_personalidad['concepto']+'</b><br>'+json.sig_personalidad[mesSum]+'<br>';
                        html += '<br><b>El Regalo de Dios ('+anio2fSum+'): </b><br>'+json.sig_regaloDeDios['concepto']+'</b><br>'+json.sig_regaloDeDios[anio2fSum]+'<br>';
                        html += '<br><b>En Vida pasada ('+anioSum+'): </b><br>'+json.sig_vidaPasada['concepto']+'</b><br>'+json.sig_vidaPasada[anioSum]+'<br>';
                        html += '<br><b>La Misión ('+fechaNacimientoSum+'): </b><br>'+json.sig_mision['concepto']+'</b><br>'+json.sig_mision[fechaNacimientoSum]+'<br>';
                        $('#contenedorAilexin').html(html);
                return false;
        }
    );
        return false;
});

$('#miFormActual').submit(function() {

        var nomb    = $('#nameActual').val();
        var mes     = $('#select-choice-monthActual').val();
        var dia     = $('#select-choice-dayActual').val();
        var anio    = $('#select-choice-yearActual').val();
		var consulta= 'actual';
		var nomCompletoSumFin = '';
		var fechaNacimientoSumFin = '';

        var nombSum = sumarCaracteres(nomb);
        nombSum     = String(nombSum);
        var nomCompletoSum      = unDigito(nombSum, consulta);
		nomCompletoSum = String(nomCompletoSum);
		if(nomCompletoSum.length == '2'){
			nomCompletoSumFin = unDigitoFin(nombSum, consulta);
		}

        var fechaNacimientoSum  = unDigito(mes+dia+anio, consulta);
		fechaNacimientoSum = String(fechaNacimientoSum);
		if(fechaNacimientoSum.length == '2'){
			fechaNacimientoSumFin = unDigitoFin(mes+dia+anio, consulta);
		}

        $.getJSON("actual.json",
        function(json){
                var html = '';
					if(nomCompletoSumFin !== ''){
                    html += '<br><b>Tu vibración Interna ('+nomCompletoSumFin+'): </b><br>'+json.sig_simbolo[nomCompletoSumFin]+'<br><br>'+json.sig_interna[nomCompletoSumFin]+'<br>';					
					html += '<br><b>Tu Número Maestro para vibración Interna ('+nomCompletoSum+'): </b><br>'+json.sig_simbolo[nomCompletoSum]+'<br><br>'+json.sig_interna[nomCompletoSum]+'<br>';
					} else {
					html += '<br><b>Tu vibración Interna ('+nomCompletoSum+'): </b><br>'+json.sig_simbolo[nomCompletoSum]+'<br><br>'+json.sig_interna[nomCompletoSum]+'<br>';
					}

					if(fechaNacimientoSumFin !== ''){
                    	html += '<br><b>Tu vibración Karmica ('+fechaNacimientoSumFin+'): </b><br>'+json.sig_simbolo[fechaNacimientoSumFin]+'<br><br>'+json.sig_karmica[fechaNacimientoSumFin]+'<br>';
						if(fechaNacimientoSum == '11' || fechaNacimientoSum == '22' || fechaNacimientoSum == '33' || fechaNacimientoSum == '44'){
							html += '<br><b>Tu Número Maestro para vibración Karmica ('+fechaNacimientoSum+'): </b><br>'+json.sig_simbolo[fechaNacimientoSum]+'<br><br>'+json.sig_karmica[fechaNacimientoSum]+'<br>';
						} else {
							html += '<br><b>Tu Número Karmico para vibración Karmica ('+nomCompletoSum+'): </b><br>'+json.sig_simbolo[nomCompletoSum]+'<br><br>'+json.sig_karmica[nomCompletoSum]+'<br>';
						}
					} else {
						html += '<br><b>Tu vibración Karmica ('+fechaNacimientoSum+'): </b><br>'+json.sig_simbolo[fechaNacimientoSum]+'<br><br>'+json.sig_karmica[fechaNacimientoSum]+'<br>';
					}
                    $('#contenedorActual').html(html);
                return false;
        }
    );
        return false;
});


$('#miFormNum').submit(function() {

    var num1 = 0;
    var num2 = 0;
    num1     = $('#select-choice-Num1').val();
    num2     = $('#select-choice-Num2').val();
    var consulta = 'numero';
    var losNumeros = '';
    if(num1<num2){
        losNumeros = num1+'-'+num2;
    } else if(num1>num2) {
        losNumeros = num2+'-'+num1;
    } else {
        losNumeros = 'iguales';
    }

    $.getJSON("numeros.json",
    function(json){
            var html = '';
                    if(losNumeros !== 'iguales'){
                        html += '<br><b>La Combinacion de los numeros ('+losNumeros+') representa: </b><br>'+json.sig_numeros[losNumeros];
                    } else {
                        html += '<br>Los Números a escoger deben ser diferentes entre si .<b></b>';
                    }
                    
                    $('#contenedorNum').html(html);
            return false;
        }
    );
    return false;
});


$('#miFormSig').submit(function() {

    var num1    = $('input:radio[name=radio-choice-n]:checked').val();
    var consulta= 'significa';
    var dig     = num1.length;
    var clave   = num1.substring(0,1);
    var num     = 0;
    if(dig == 2){ 
        num = num1.substring(1,2);
    } else {        
        num = num1.substring(1,3);
    }

    $.getJSON("actual.json",
    function(json){
            var html = '';
                    if(clave == 'o' || clave == 'm'){
                        html += '<b>El numeros ('+num+') simboliza: </b><br>'+json.sig_simbolo[num];
                    } else if(clave == 'k') {
                        html += '<b>El Número ('+num+') karmico simboliza .</b><br>'+json.sig_karmica[num];
                    }
                    $('#contenedorSig').html(html);
            return false;
        }
    );
    return false;
});
