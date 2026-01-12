//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=1;
var score=0; scoreMax=5; scoreInc=5; scoreDec=5;
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime; var tiAudio=false;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fDefs="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk=""; messageTime=""; messageError=""; messageErrorG=""; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="cC5BY3RpdmlkYWQ="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var col=0; row=0; writeDir=0;
var cw=[["QQ==","UA==","Ug==","RQ==","Tg==","RA==","SQ==","Wg==","QQ==","Sg==","RQ=="],["Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og=="],["SQ==","Tg==","VA==","RQ==","Ug==","QQ==","Qw==","VA==","SQ==","Vg==","Tw=="],["Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og=="],["RQ==","Vg==","QQ==","TA==","VQ==","QQ==","Qw==","SQ==","Tw==","Tg==","Og=="],["Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og=="],["Qw==","Tw==","Tg==","VA==","RQ==","Tg==","SQ==","RA==","Tw==","Og==","Og=="],["Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Vg==","Og==","Og=="],["QQ==","Ug==","RA==","Tw==","Ug==","QQ==","Og==","Og==","QQ==","Og==","Og=="],["TQ==","SQ==","RA==","Tw==","QQ==","Og==","Og==","Og==","Og==","Og==","Og=="]];
var x1=[1,1,1,1,9];
var y1=[5,7,9,10,7];
var x2=[10,9,6,5,9];
var y2=[5,7,9,10,9];
var imaCW=["","","","",""];
var audioCW=["","","","",""];
var defCW=["Proceso para valorar el logro de los aprendizajes.","Conjunto de saberes que se desarrollan en un proceso educativo.","Herramienta de autor utilizada para crear actividades educativas.","Modelo de diseño instruccional centrado en el aprendizaje activo.","Recurso digital diseñado para facilitar el aprendizaje autónomo."];
var altCW=["","","","",""];
var colNum=11;
var rowNum=10;
