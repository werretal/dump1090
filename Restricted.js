// -*- mode: javascript; indent-tabs-mode: nil; c-basic-offset: 8 -*-
"use strict";

function drawedrsCircle(lng,lat,rayon,coul,lar,deb,fin) {
      if (fin<deb) fin+=360;
      var rdeb = ((-1*deb)+90)*d2r;
      var rfin = ((-1*fin)+90)*d2r;
      var Clat = (rayon/3437)*r2d;   //  using 3437 Nm as earth's radius
      var Clng = Clat/Math.cos(lat*d2r);
      var Cpoints = [];
      var pas = 1/16;
        for (var i=rdeb; i >= rfin; i=i-pas) {
          Cx = lng + (Clng * Math.cos(i));
          Cy = lat + (Clat * Math.sin(i));
          Cpoints.push(new google.maps.LatLng(Cy,Cx));
          };
        if (i!=rfin)
          {
          Cx = lng + (Clng * Math.cos(rfin));
          Cy = lat + (Clat * Math.sin(rfin));
          Cpoints.push(new google.maps.LatLng(Cy,Cx));
          }
      var pl = new google.maps.Polyline({
  							path: Cpoints,
  							map: GoogleMap,
  							strokeColor: coul,
  							strokeOpacity: 1.0,
  							strokeWeight: lar,
  							geodesic: true
								});

}


//Draw airspaces
function drawrestrict() {


var sectorrestrict1 = [
  new google.maps.LatLng(50.11667,9.80556),
  new google.maps.LatLng(50.11667,9.93333),
  new google.maps.LatLng(50.03333,9.93333),
  new google.maps.LatLng(50.03333,9.80556),
new google.maps.LatLng(50.11667,9.80556)];
var poyrestrict1 = new google.maps.Polyline({
  							path: sectorrestrict1,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorrestrict2 = [
  new google.maps.LatLng(49.36667,11.71667),
  new google.maps.LatLng(49.31667,11.83333),
  new google.maps.LatLng(49.28333,11.95),
  new google.maps.LatLng(49.25,12.03333),
  new google.maps.LatLng(49.2,12.01667),
  new google.maps.LatLng(49.16667,11.96667),
  new google.maps.LatLng(49.2,11.75),
  new google.maps.LatLng(49.2,11.68889),
  new google.maps.LatLng(49.25,11.64),
  new google.maps.LatLng(49.28333,11.63333),
  new google.maps.LatLng(49.33333,11.66667),
new google.maps.LatLng(49.36667,11.71667)];
var poyrestrict2 = new google.maps.Polyline({
  							path: sectorrestrict2,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorrestrict3 = [
  new google.maps.LatLng(49.25,11.64),
  new google.maps.LatLng(49.2,11.68889),
  new google.maps.LatLng(49.2,11.65),
new google.maps.LatLng(49.25,11.64)];
var poyrestrict3 = new google.maps.Polyline({
  							path: sectorrestrict3,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorrestrict4 = [
  new google.maps.LatLng(52.7,7.29417),
  new google.maps.LatLng(52.72417,7.26639),
  new google.maps.LatLng(52.93333,7.40833),
  new google.maps.LatLng(52.88333,7.54167),
  new google.maps.LatLng(52.7,7.4),
new google.maps.LatLng(52.7,7.29417)];
var poyrestrict4 = new google.maps.Polyline({
  							path: sectorrestrict4,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorrestrict5 = [
  new google.maps.LatLng(52.93333,7.40833),
  new google.maps.LatLng(52.96667,7.43333),
  new google.maps.LatLng(52.95,7.6),
  new google.maps.LatLng(52.88333,7.54167),
new google.maps.LatLng(52.93333,7.40833)];
var poyrestrict5 = new google.maps.Polyline({
  							path: sectorrestrict5,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorrestrict6 = [
  new google.maps.LatLng(54.11667,8.73333),
  new google.maps.LatLng(54.1,9),
  new google.maps.LatLng(54.01667,9.01667),
  new google.maps.LatLng(54.03333,8.85),
  new google.maps.LatLng(54.06667,8.73333),
new google.maps.LatLng(54.11667,8.73333)];
var poyrestrict6 = new google.maps.Polyline({
  							path: sectorrestrict6,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorrestrict7 = [
  new google.maps.LatLng(49.29806,12.40167),
  new google.maps.LatLng(48.9675,12.16806),
  new google.maps.LatLng(48.81611,11.94556),
              new google.maps.LatLng(48.81611,11.94556)];
              var poyrestrict7 = new google.maps.Polyline({
  							path: sectorrestrict7,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var sectorrestrict8 = [
  new google.maps.LatLng(48.86,11.74167),
new google.maps.LatLng(49.22583,11.56306),
  new google.maps.LatLng(49.28333,11.63333),
  new google.maps.LatLng(49.33333,11.66667),
  new google.maps.LatLng(49.43444,11.81889),
new google.maps.LatLng(49.29806,12.40167)];
var poyrestrict8 = new google.maps.Polyline({
  							path: sectorrestrict8,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorrestrict9 = [
  new google.maps.LatLng(49.75,11.73333),
  new google.maps.LatLng(49.75,11.83333),
  new google.maps.LatLng(49.71667,11.91667),
  new google.maps.LatLng(49.68333,11.96667),
  new google.maps.LatLng(49.65,11.95),
  new google.maps.LatLng(49.61667,11.91667),
  new google.maps.LatLng(49.61667,11.64222),
  new google.maps.LatLng(49.69056,11.6025),
  new google.maps.LatLng(49.73333,11.66667),
new google.maps.LatLng(49.75,11.73333)];
var poyrestrict9 = new google.maps.Polyline({
  							path: sectorrestrict9,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorrestrict10 = [
  new google.maps.LatLng(47.86667,10.78333),
  new google.maps.LatLng(47.86667,10.93333),
  new google.maps.LatLng(47.80833,10.93333),
  new google.maps.LatLng(47.80833,10.78333),
new google.maps.LatLng(47.86667,10.78333)];
var poyrestrict10 = new google.maps.Polyline({
  							path: sectorrestrict10,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorrestrict11 = [
  new google.maps.LatLng(50.89444,9.41111),
  new google.maps.LatLng(50.91667,9.475),
  new google.maps.LatLng(50.90694,9.49722),
  new google.maps.LatLng(50.88472,9.49722),
  new google.maps.LatLng(50.86944,9.4375),
  new google.maps.LatLng(50.86944,9.40278),
new google.maps.LatLng(50.89444,9.41111)];
var poyrestrict11 = new google.maps.Polyline({
  							path: sectorrestrict11,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorrestrict12 = [
  new google.maps.LatLng(49.66667,7.11667),
  new google.maps.LatLng(49.7,7.28333),
  new google.maps.LatLng(49.70556,7.51667),
  new google.maps.LatLng(49.6,7.51667),
  new google.maps.LatLng(49.51667,7.33333),
  new google.maps.LatLng(49.58333,7.2),
new google.maps.LatLng(49.66667,7.11667)];
var poyrestrict12 = new google.maps.Polyline({
  							path: sectorrestrict12,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorrestrict13 = [
  new google.maps.LatLng(54.5,10.41667),
  new google.maps.LatLng(54.54417,10.52694),
  new google.maps.LatLng(54.51083,10.65333),
  new google.maps.LatLng(54.54222,10.88333),
  new google.maps.LatLng(54.43333,10.88333),
  new google.maps.LatLng(54.41667,10.83333),
  new google.maps.LatLng(54.41667,10.66667),
  new google.maps.LatLng(54.33333,10.66667),
  new google.maps.LatLng(54.25528,10.66667),
  new google.maps.LatLng(54.33333,10.41667),
new google.maps.LatLng(54.5,10.41667)];
var poyrestrict13 = new google.maps.Polyline({
  							path: sectorrestrict13,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorrestrict14 = [
  new google.maps.LatLng(54.41667,10.66667),
  new google.maps.LatLng(54.41667,10.83333),
  new google.maps.LatLng(54.43333,10.88333),
  new google.maps.LatLng(54.325,10.88333),
  new google.maps.LatLng(54.25,10.68333),
  new google.maps.LatLng(54.25528,10.66667),
  new google.maps.LatLng(54.33333,10.66667),
new google.maps.LatLng(54.41667,10.66667)];
var poyrestrict14 = new google.maps.Polyline({
  							path: sectorrestrict14,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorrestrict15 = [
  new google.maps.LatLng(52.61806,10.7),
  new google.maps.LatLng(52.62361,10.76667),
  new google.maps.LatLng(52.59306,10.78333),
  new google.maps.LatLng(52.58111,10.76944),
  new google.maps.LatLng(52.58111,10.75417),
  new google.maps.LatLng(52.60417,10.69028),
new google.maps.LatLng(52.61806,10.7)];
var poyrestrict15 = new google.maps.Polyline({
  							path: sectorrestrict15,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorrestrict16 = [
  new google.maps.LatLng(50.42778,9.78889),
  new google.maps.LatLng(50.42222,9.95),
  new google.maps.LatLng(50.33194,9.87222),
  new google.maps.LatLng(50.33194,9.78889),
new google.maps.LatLng(50.42778,9.78889)];
var poyrestrict16 = new google.maps.Polyline({
  							path: sectorrestrict16,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorrestrict17 = [
  new google.maps.LatLng(51.75833,8.68333),
  new google.maps.LatLng(51.88333,8.68333),
  new google.maps.LatLng(51.91667,8.75833),
  new google.maps.LatLng(51.91667,8.80833),
  new google.maps.LatLng(51.9,8.86667),
  new google.maps.LatLng(51.85,8.86667),
  new google.maps.LatLng(51.83278,8.85111),
  new google.maps.LatLng(51.83278,8.74444),
  new google.maps.LatLng(51.76611,8.74444),
  new google.maps.LatLng(51.76611,8.79056),
  new google.maps.LatLng(51.75833,8.78333),
new google.maps.LatLng(51.75833,8.68333)];
var poyrestrict17 = new google.maps.Polyline({
  							path: sectorrestrict17,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorrestrict18 = [
  new google.maps.LatLng(54.85,9.51667),
  new google.maps.LatLng(54.6,9.71667),
  new google.maps.LatLng(54.26667,9.64167),
  new google.maps.LatLng(53.58056,8.93889),
  new google.maps.LatLng(53.40417,8.46667),
  new google.maps.LatLng(53.3,7.19167),
  new google.maps.LatLng(53.31667,7.025),
  new google.maps.LatLng(53.82778,7.63333),
  new google.maps.LatLng(53.88333,8.16667),
  new google.maps.LatLng(54.13333,8.56667),
  new google.maps.LatLng(54.28333,8.45833),
  new google.maps.LatLng(54.65,8.2),
  new google.maps.LatLng(54.73333,8.18333),
  new google.maps.LatLng(54.93333,8.21667),
  new google.maps.LatLng(55.06667,8.33333),
new google.maps.LatLng(54.85,9.51667)];
var poyrestrict18 = new google.maps.Polyline({
  							path: sectorrestrict18,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorrestrict19 = [
  new google.maps.LatLng(53.10861,7.20222),
  new google.maps.LatLng(53.16833,7.89028),
  new google.maps.LatLng(52.7175,7.90389),
  new google.maps.LatLng(52.70611,7.565),
  new google.maps.LatLng(52.68694,7.05972),
new google.maps.LatLng(53.10861,7.20222)];
var poyrestrict19 = new google.maps.Polyline({
  							path: sectorrestrict19,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorrestrict20 = [
  new google.maps.LatLng(52.12222,8.31111),
  new google.maps.LatLng(52.13833,8.94444),
  new google.maps.LatLng(51.58333,8.94444),
  new google.maps.LatLng(51.5,8.88333),
  new google.maps.LatLng(51.50556,8.125),
  new google.maps.LatLng(51.6,8.01667),
  new google.maps.LatLng(51.81667,7.86667),
new google.maps.LatLng(52.12222,8.31111)];
var poyrestrict20 = new google.maps.Polyline({
  							path: sectorrestrict20,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorrestrict21 = [
  new google.maps.LatLng(50.59389,6.24639),
  new google.maps.LatLng(50.59361,6.24611),
  new google.maps.LatLng(50.59278,6.245),
  new google.maps.LatLng(50.59139,6.24361),
  new google.maps.LatLng(50.59,6.24278),
  new google.maps.LatLng(50.58778,6.24139),
  new google.maps.LatLng(50.58694,6.24083),
  new google.maps.LatLng(50.58778,6.23861),
  new google.maps.LatLng(50.58917,6.23333),
  new google.maps.LatLng(50.59028,6.22889),
  new google.maps.LatLng(50.59056,6.22528),
  new google.maps.LatLng(50.58972,6.22472),
  new google.maps.LatLng(50.58917,6.22444),
  new google.maps.LatLng(50.58889,6.22417),
  new google.maps.LatLng(50.58861,6.22417),
  new google.maps.LatLng(50.58806,6.22389),
  new google.maps.LatLng(50.58778,6.22306),
  new google.maps.LatLng(50.58722,6.22278),
  new google.maps.LatLng(50.58694,6.2225),
  new google.maps.LatLng(50.58667,6.2225),
  new google.maps.LatLng(50.58583,6.2225),
  new google.maps.LatLng(50.58528,6.2225),
  new google.maps.LatLng(50.58472,6.22222),
  new google.maps.LatLng(50.58472,6.22222),
  new google.maps.LatLng(50.58444,6.22194),
  new google.maps.LatLng(50.58417,6.22167),
  new google.maps.LatLng(50.58389,6.22111),
  new google.maps.LatLng(50.58333,6.22083),
  new google.maps.LatLng(50.58306,6.22056),
  new google.maps.LatLng(50.58278,6.22028),
  new google.maps.LatLng(50.58222,6.21972),
  new google.maps.LatLng(50.58167,6.21944),
  new google.maps.LatLng(50.58139,6.21917),
  new google.maps.LatLng(50.58111,6.21861),
  new google.maps.LatLng(50.58083,6.21806),
  new google.maps.LatLng(50.58083,6.2175),
  new google.maps.LatLng(50.58056,6.21722),
  new google.maps.LatLng(50.58028,6.21694),
  new google.maps.LatLng(50.58,6.21667),
  new google.maps.LatLng(50.57972,6.21611),
  new google.maps.LatLng(50.57944,6.21556),
  new google.maps.LatLng(50.57917,6.215),
  new google.maps.LatLng(50.57889,6.21444),
  new google.maps.LatLng(50.57889,6.21417),
  new google.maps.LatLng(50.57861,6.21389),
  new google.maps.LatLng(50.57861,6.21361),
  new google.maps.LatLng(50.57833,6.21333),
  new google.maps.LatLng(50.57722,6.21),
  new google.maps.LatLng(50.57639,6.20806),
  new google.maps.LatLng(50.57611,6.20778)];
    var poyrestrict21 = new google.maps.Polyline({
  							path: sectorrestrict21,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var sectorrestrict22 = [
    new google.maps.LatLng(50.57611,6.20778),
  new google.maps.LatLng(50.57611,6.2075),
  new google.maps.LatLng(50.57611,6.20639),
  new google.maps.LatLng(50.575,6.20611),
  new google.maps.LatLng(50.57472,6.20667),
  new google.maps.LatLng(50.57361,6.20583),
  new google.maps.LatLng(50.57361,6.20528),
  new google.maps.LatLng(50.57306,6.20528),
  new google.maps.LatLng(50.57222,6.20361),
  new google.maps.LatLng(50.57167,6.20361),
  new google.maps.LatLng(50.57111,6.20444),
  new google.maps.LatLng(50.56917,6.20306),
  new google.maps.LatLng(50.56556,6.19194),
  new google.maps.LatLng(50.56611,6.18944),
  new google.maps.LatLng(50.56528,6.18889),
  new google.maps.LatLng(50.56472,6.18917),
  new google.maps.LatLng(50.56444,6.18917),
  new google.maps.LatLng(50.56444,6.18889),
  new google.maps.LatLng(50.56444,6.18861),
  new google.maps.LatLng(50.56444,6.18806),
  new google.maps.LatLng(50.56444,6.1875),
  new google.maps.LatLng(50.56444,6.18694),
  new google.maps.LatLng(50.56444,6.18667),
  new google.maps.LatLng(50.56417,6.18639),
  new google.maps.LatLng(50.56389,6.18611),
  new google.maps.LatLng(50.56333,6.18611),
  new google.maps.LatLng(50.56333,6.18583),
  new google.maps.LatLng(50.56306,6.18528),
  new google.maps.LatLng(50.56306,6.185),
  new google.maps.LatLng(50.56306,6.18472),
  new google.maps.LatLng(50.56306,6.18444),
  new google.maps.LatLng(50.5625,6.18417),
  new google.maps.LatLng(50.56222,6.18389),
  new google.maps.LatLng(50.56194,6.18361),
  new google.maps.LatLng(50.56194,6.18361),
  new google.maps.LatLng(50.56167,6.18222),
  new google.maps.LatLng(50.56083,6.18139),
  new google.maps.LatLng(50.56028,6.18),
  new google.maps.LatLng(50.56,6.17972),
  new google.maps.LatLng(50.55972,6.17944),
  new google.maps.LatLng(50.55944,6.17917),
  new google.maps.LatLng(50.55944,6.17861),
  new google.maps.LatLng(50.55917,6.17833),
  new google.maps.LatLng(50.55889,6.17806),
  new google.maps.LatLng(50.55889,6.17778),
  new google.maps.LatLng(50.55861,6.1775),
  new google.maps.LatLng(50.55861,6.17694),
  new google.maps.LatLng(50.55833,6.17639),
  new google.maps.LatLng(50.55806,6.17611),
  new google.maps.LatLng(50.55806,6.17583),
  new google.maps.LatLng(50.55806,6.17556)];
    var poyrestrict22 = new google.maps.Polyline({
  							path: sectorrestrict22,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var sectorrestrict23 = [
    new google.maps.LatLng(50.55806,6.17556),
  new google.maps.LatLng(50.55806,6.175),
  new google.maps.LatLng(50.55778,6.17472),
  new google.maps.LatLng(50.5575,6.17444),
  new google.maps.LatLng(50.55639,6.17417),
  new google.maps.LatLng(50.55611,6.17611),
  new google.maps.LatLng(50.55389,6.17833),
  new google.maps.LatLng(50.54167,6.17806),
  new google.maps.LatLng(50.54167,6.17917),
  new google.maps.LatLng(50.54139,6.17944),
  new google.maps.LatLng(50.54111,6.18028),
  new google.maps.LatLng(50.54111,6.18111),
  new google.maps.LatLng(50.54139,6.18194),
  new google.maps.LatLng(50.54139,6.1825),
  new google.maps.LatLng(50.54139,6.18306),
  new google.maps.LatLng(50.54139,6.18389),
  new google.maps.LatLng(50.54167,6.18444),
  new google.maps.LatLng(50.54167,6.18472),
  new google.maps.LatLng(50.54056,6.18861),
  new google.maps.LatLng(50.54,6.18889),
  new google.maps.LatLng(50.53972,6.18917),
  new google.maps.LatLng(50.53944,6.18944),
  new google.maps.LatLng(50.53917,6.18972),
  new google.maps.LatLng(50.53861,6.19056),
  new google.maps.LatLng(50.53833,6.19139),
  new google.maps.LatLng(50.53806,6.19194),
  new google.maps.LatLng(50.5375,6.19278),
  new google.maps.LatLng(50.53694,6.19361),
  new google.maps.LatLng(50.53667,6.19472),
  new google.maps.LatLng(50.53611,6.19583),
  new google.maps.LatLng(50.53639,6.19722),
  new google.maps.LatLng(50.53583,6.19778),
  new google.maps.LatLng(50.53528,6.19806),
  new google.maps.LatLng(50.53444,6.19778),
  new google.maps.LatLng(50.53361,6.19722),
  new google.maps.LatLng(50.53278,6.19639),
  new google.maps.LatLng(50.53167,6.19611),
  new google.maps.LatLng(50.53111,6.19611),
  new google.maps.LatLng(50.53111,6.19528),
  new google.maps.LatLng(50.53111,6.19417),
  new google.maps.LatLng(50.53083,6.19361),
  new google.maps.LatLng(50.53083,6.19306),
  new google.maps.LatLng(50.53111,6.19306),
  new google.maps.LatLng(50.53083,6.19222),
  new google.maps.LatLng(50.53083,6.19194),
  new google.maps.LatLng(50.53056,6.19167),
  new google.maps.LatLng(50.53,6.19083),
  new google.maps.LatLng(50.52944,6.19028),
  new google.maps.LatLng(50.52917,6.18972),
  new google.maps.LatLng(50.52806,6.18861),
  new google.maps.LatLng(50.5275,6.18778)];
    var poyrestrict23 = new google.maps.Polyline({
  							path: sectorrestrict23,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var sectorrestrict24 = [
    new google.maps.LatLng(50.5275,6.18778),
  new google.maps.LatLng(50.52722,6.1875),
  new google.maps.LatLng(50.52722,6.18722),
  new google.maps.LatLng(50.52667,6.18722),
  new google.maps.LatLng(50.52639,6.18722),
  new google.maps.LatLng(50.52611,6.1875),
  new google.maps.LatLng(50.52556,6.18833),
  new google.maps.LatLng(50.525,6.18889),
  new google.maps.LatLng(50.52472,6.18972),
  new google.maps.LatLng(50.52444,6.19),
  new google.maps.LatLng(50.52417,6.19028),
  new google.maps.LatLng(50.52389,6.19056),
  new google.maps.LatLng(50.52361,6.19056),
  new google.maps.LatLng(50.52306,6.19056),
  new google.maps.LatLng(50.5225,6.19056),
  new google.maps.LatLng(50.52222,6.19111),
  new google.maps.LatLng(50.52167,6.19167),
  new google.maps.LatLng(50.52111,6.19194),
  new google.maps.LatLng(50.52111,6.19222),
  new google.maps.LatLng(50.52111,6.1925),
  new google.maps.LatLng(50.52111,6.19306),
  new google.maps.LatLng(50.52111,6.19361),
  new google.maps.LatLng(50.52111,6.19417),
  new google.maps.LatLng(50.52139,6.19472),
  new google.maps.LatLng(50.52111,6.19528),
  new google.maps.LatLng(50.52111,6.19583),
  new google.maps.LatLng(50.52139,6.19583),
  new google.maps.LatLng(50.52139,6.19611),
  new google.maps.LatLng(50.52139,6.19667),
  new google.maps.LatLng(50.52139,6.19722),
  new google.maps.LatLng(50.52139,6.19778),
  new google.maps.LatLng(50.52139,6.19806),
  new google.maps.LatLng(50.52139,6.19889),
  new google.maps.LatLng(50.52139,6.19917),
  new google.maps.LatLng(50.52139,6.19944),
  new google.maps.LatLng(50.52139,6.2),
  new google.maps.LatLng(50.52111,6.2),
  new google.maps.LatLng(50.52111,6.20028),
  new google.maps.LatLng(50.52111,6.20083),
  new google.maps.LatLng(50.52083,6.20111),
  new google.maps.LatLng(50.52083,6.20167),
  new google.maps.LatLng(50.52083,6.20222),
  new google.maps.LatLng(50.52083,6.20306),
  new google.maps.LatLng(50.52111,6.20389),
  new google.maps.LatLng(50.52111,6.20417),
  new google.maps.LatLng(50.52083,6.20444),
  new google.maps.LatLng(50.52083,6.20472),
  new google.maps.LatLng(50.52083,6.20528),
  new google.maps.LatLng(50.52111,6.20583),
  new google.maps.LatLng(50.52028,6.20639),
  new google.maps.LatLng(50.52028,6.20667)];
    var poyrestrict24 = new google.maps.Polyline({
  							path: sectorrestrict24,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var sectorrestrict25 = [
    new google.maps.LatLng(50.52028,6.20667),
  new google.maps.LatLng(50.52028,6.20667),
  new google.maps.LatLng(50.52,6.20667),
  new google.maps.LatLng(50.51972,6.20667),
  new google.maps.LatLng(50.51889,6.20694),
  new google.maps.LatLng(50.51833,6.2075),
  new google.maps.LatLng(50.51778,6.20778),
  new google.maps.LatLng(50.51722,6.20833),
  new google.maps.LatLng(50.51694,6.20917),
  new google.maps.LatLng(50.51667,6.20972),
  new google.maps.LatLng(50.51639,6.21056),
  new google.maps.LatLng(50.51639,6.21111),
  new google.maps.LatLng(50.51611,6.21167),
  new google.maps.LatLng(50.51583,6.21194),
  new google.maps.LatLng(50.51556,6.21222),
  new google.maps.LatLng(50.51472,6.20917),
  new google.maps.LatLng(50.51306,6.21028),
  new google.maps.LatLng(50.51333,6.21111),
  new google.maps.LatLng(50.51278,6.21139),
  new google.maps.LatLng(50.51306,6.21333),
  new google.maps.LatLng(50.51278,6.21333),
  new google.maps.LatLng(50.5125,6.21333),
  new google.maps.LatLng(50.51222,6.21333),
  new google.maps.LatLng(50.51222,6.21333),
  new google.maps.LatLng(50.51194,6.21361),
  new google.maps.LatLng(50.51194,6.21333),
  new google.maps.LatLng(50.51167,6.21333),
  new google.maps.LatLng(50.51139,6.21361),
  new google.maps.LatLng(50.51139,6.21361),
  new google.maps.LatLng(50.51083,6.21389),
  new google.maps.LatLng(50.51056,6.21444),
  new google.maps.LatLng(50.51028,6.21472),
  new google.maps.LatLng(50.51,6.21472),
  new google.maps.LatLng(50.51,6.215),
  new google.maps.LatLng(50.50972,6.215),
  new google.maps.LatLng(50.50917,6.215),
  new google.maps.LatLng(50.50889,6.21528),
  new google.maps.LatLng(50.50861,6.21528),
  new google.maps.LatLng(50.50861,6.21556),
  new google.maps.LatLng(50.50833,6.21556),
  new google.maps.LatLng(50.50833,6.21583),
  new google.maps.LatLng(50.50833,6.21611),
  new google.maps.LatLng(50.50806,6.21639),
  new google.maps.LatLng(50.50778,6.21639),
  new google.maps.LatLng(50.50722,6.21667),
  new google.maps.LatLng(50.50694,6.21667),
  new google.maps.LatLng(50.50667,6.21722),
  new google.maps.LatLng(50.50639,6.2175),
  new google.maps.LatLng(50.50639,6.2175),
  new google.maps.LatLng(50.50611,6.21778),
  new google.maps.LatLng(50.50611,6.21778)];
    var poyrestrict25 = new google.maps.Polyline({
  							path: sectorrestrict25,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var sectorrestrict26 = [
    new google.maps.LatLng(50.50611,6.21778),
  new google.maps.LatLng(50.50583,6.21778),
  new google.maps.LatLng(50.50583,6.21806),
  new google.maps.LatLng(50.50583,6.21833),
  new google.maps.LatLng(50.50583,6.21889),
  new google.maps.LatLng(50.50583,6.21917),
  new google.maps.LatLng(50.50556,6.21944),
  new google.maps.LatLng(50.50528,6.22),
  new google.maps.LatLng(50.505,6.22),
  new google.maps.LatLng(50.50472,6.22),
  new google.maps.LatLng(50.50444,6.22),
  new google.maps.LatLng(50.50417,6.22),
  new google.maps.LatLng(50.50389,6.22028),
  new google.maps.LatLng(50.50389,6.22028),
  new google.maps.LatLng(50.50361,6.22056),
  new google.maps.LatLng(50.50333,6.22056),
  new google.maps.LatLng(50.50306,6.22083),
  new google.maps.LatLng(50.50306,6.22111),
  new google.maps.LatLng(50.50278,6.22111),
  new google.maps.LatLng(50.5025,6.22139),
  new google.maps.LatLng(50.50222,6.22167),
  new google.maps.LatLng(50.50194,6.22222),
  new google.maps.LatLng(50.50167,6.2225),
  new google.maps.LatLng(50.50139,6.2225),
  new google.maps.LatLng(50.50111,6.22278),
  new google.maps.LatLng(50.50056,6.2225),
  new google.maps.LatLng(50.50028,6.2225),
  new google.maps.LatLng(50.5,6.22222),
  new google.maps.LatLng(50.49972,6.22194),
  new google.maps.LatLng(50.49944,6.22167),
  new google.maps.LatLng(50.49972,6.22139),
  new google.maps.LatLng(50.49861,6.22),
  new google.maps.LatLng(50.49778,6.22139),
  new google.maps.LatLng(50.49778,6.22194),
  new google.maps.LatLng(50.49528,6.22417),
  new google.maps.LatLng(50.495,6.22472),
  new google.maps.LatLng(50.495,6.225),
  new google.maps.LatLng(50.49472,6.22556),
  new google.maps.LatLng(50.49472,6.22611),
  new google.maps.LatLng(50.49444,6.22639),
  new google.maps.LatLng(50.49528,6.22694),
  new google.maps.LatLng(50.495,6.2275),
  new google.maps.LatLng(50.49556,6.22806),
  new google.maps.LatLng(50.49556,6.22806),
  new google.maps.LatLng(50.49583,6.22833),
  new google.maps.LatLng(50.49639,6.22889),
  new google.maps.LatLng(50.49667,6.22917),
  new google.maps.LatLng(50.49722,6.22972),
  new google.maps.LatLng(50.4975,6.23028),
  new google.maps.LatLng(50.4975,6.23056),
  new google.maps.LatLng(50.4975,6.23056)];
    var poyrestrict26 = new google.maps.Polyline({
  							path: sectorrestrict26,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var sectorrestrict27 = [
    new google.maps.LatLng(50.4975,6.23056),
  new google.maps.LatLng(50.4975,6.23111),
  new google.maps.LatLng(50.4975,6.23139),
  new google.maps.LatLng(50.49778,6.23194),
  new google.maps.LatLng(50.49778,6.23222),
  new google.maps.LatLng(50.49806,6.23306),
  new google.maps.LatLng(50.49778,6.23333),
  new google.maps.LatLng(50.49778,6.23361),
  new google.maps.LatLng(50.49778,6.23361),
  new google.maps.LatLng(50.49806,6.23389),
  new google.maps.LatLng(50.49806,6.23389),
  new google.maps.LatLng(50.49833,6.23417),
  new google.maps.LatLng(50.49833,6.23472),
  new google.maps.LatLng(50.49861,6.23556),
  new google.maps.LatLng(50.49861,6.23611),
  new google.maps.LatLng(50.49833,6.23694),
  new google.maps.LatLng(50.49861,6.23778),
  new google.maps.LatLng(50.49861,6.23806),
  new google.maps.LatLng(50.49861,6.23861),
  new google.maps.LatLng(50.49889,6.23889),
  new google.maps.LatLng(50.49917,6.24111),
  new google.maps.LatLng(50.49889,6.24167),
  new google.maps.LatLng(50.49972,6.24194),
  new google.maps.LatLng(50.5,6.24306),
  new google.maps.LatLng(50.50056,6.24417),
  new google.maps.LatLng(50.50139,6.24556),
  new google.maps.LatLng(50.50167,6.24639),
  new google.maps.LatLng(50.50222,6.2475),
  new google.maps.LatLng(50.50278,6.24917),
  new google.maps.LatLng(50.50306,6.24917),
  new google.maps.LatLng(50.50333,6.25028),
  new google.maps.LatLng(50.50361,6.25194),
  new google.maps.LatLng(50.50306,6.25333),
  new google.maps.LatLng(50.50278,6.25389),
  new google.maps.LatLng(50.50278,6.25389),
  new google.maps.LatLng(50.50194,6.25417),
  new google.maps.LatLng(50.50167,6.25444),
  new google.maps.LatLng(50.50139,6.25472),
  new google.maps.LatLng(50.50139,6.25444),
  new google.maps.LatLng(50.50111,6.25444),
  new google.maps.LatLng(50.50083,6.25444),
  new google.maps.LatLng(50.50056,6.25444),
  new google.maps.LatLng(50.50028,6.25444),
  new google.maps.LatLng(50.50028,6.25444),
  new google.maps.LatLng(50.5,6.25444),
  new google.maps.LatLng(50.50028,6.25472),
  new google.maps.LatLng(50.50028,6.25472),
  new google.maps.LatLng(50.5,6.25472),
  new google.maps.LatLng(50.5,6.25472),
  new google.maps.LatLng(50.49972,6.25472),
  new google.maps.LatLng(50.49972,6.25444)];
    var poyrestrict27 = new google.maps.Polyline({
  							path: sectorrestrict27,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var sectorrestrict28 = [
    new google.maps.LatLng(50.49972,6.25444),
  new google.maps.LatLng(50.49944,6.25444),
  new google.maps.LatLng(50.49944,6.25472),
  new google.maps.LatLng(50.49917,6.25472),
  new google.maps.LatLng(50.49917,6.255),
  new google.maps.LatLng(50.49917,6.25528),
  new google.maps.LatLng(50.49917,6.25583),
  new google.maps.LatLng(50.49917,6.25639),
  new google.maps.LatLng(50.49917,6.25694),
  new google.maps.LatLng(50.49917,6.2575),
  new google.maps.LatLng(50.49944,6.25778),
  new google.maps.LatLng(50.49944,6.25861),
  new google.maps.LatLng(50.49944,6.25917),
  new google.maps.LatLng(50.49917,6.25972),
  new google.maps.LatLng(50.49889,6.26056),
  new google.maps.LatLng(50.49889,6.26111),
  new google.maps.LatLng(50.49889,6.26167),
  new google.maps.LatLng(50.49889,6.26194),
  new google.maps.LatLng(50.49889,6.26222),
  new google.maps.LatLng(50.49917,6.2625),
  new google.maps.LatLng(50.49944,6.26278),
  new google.maps.LatLng(50.49972,6.26306),
  new google.maps.LatLng(50.49972,6.26333),
  new google.maps.LatLng(50.5,6.26333),
  new google.maps.LatLng(50.50028,6.26361),
  new google.maps.LatLng(50.50056,6.26417),
  new google.maps.LatLng(50.50083,6.26444),
  new google.maps.LatLng(50.50111,6.26472),
  new google.maps.LatLng(50.50139,6.26528),
  new google.maps.LatLng(50.50167,6.26556),
  new google.maps.LatLng(50.50194,6.26583),
  new google.maps.LatLng(50.5025,6.26611),
  new google.maps.LatLng(50.50278,6.26667),
  new google.maps.LatLng(50.50306,6.26722),
  new google.maps.LatLng(50.50333,6.26778),
  new google.maps.LatLng(50.50361,6.26806),
  new google.maps.LatLng(50.50417,6.26889),
  new google.maps.LatLng(50.50472,6.26972),
  new google.maps.LatLng(50.50389,6.27139),
  new google.maps.LatLng(50.50361,6.2725),
  new google.maps.LatLng(50.50306,6.27333),
  new google.maps.LatLng(50.50222,6.27472),
  new google.maps.LatLng(50.5025,6.27528),
  new google.maps.LatLng(50.5025,6.27583),
  new google.maps.LatLng(50.50278,6.27667),
  new google.maps.LatLng(50.50306,6.2775),
  new google.maps.LatLng(50.50306,6.27833),
  new google.maps.LatLng(50.50306,6.27889),
  new google.maps.LatLng(50.50306,6.27944),
  new google.maps.LatLng(50.50333,6.28),
  new google.maps.LatLng(50.50333,6.28056)];
    var poyrestrict28 = new google.maps.Polyline({
  							path: sectorrestrict28,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var sectorrestrict29 = [
    new google.maps.LatLng(50.50333,6.28056),
  new google.maps.LatLng(50.50333,6.28139),
  new google.maps.LatLng(50.50167,6.28278),
  new google.maps.LatLng(50.50028,6.28389),
  new google.maps.LatLng(50.49889,6.28472),
  new google.maps.LatLng(50.49889,6.285),
  new google.maps.LatLng(50.49861,6.28917),
  new google.maps.LatLng(50.49833,6.29083),
  new google.maps.LatLng(50.49806,6.2925),
  new google.maps.LatLng(50.49806,6.29389),
  new google.maps.LatLng(50.49806,6.29528),
  new google.maps.LatLng(50.49806,6.29611),
  new google.maps.LatLng(50.49806,6.29639),
  new google.maps.LatLng(50.49778,6.29667),
  new google.maps.LatLng(50.4975,6.2975),
  new google.maps.LatLng(50.49778,6.29806),
  new google.maps.LatLng(50.49833,6.29861),
  new google.maps.LatLng(50.49833,6.29889),
  new google.maps.LatLng(50.49889,6.30083),
  new google.maps.LatLng(50.49917,6.30139),
  new google.maps.LatLng(50.49944,6.30194),
  new google.maps.LatLng(50.49972,6.30222),
  new google.maps.LatLng(50.49972,6.3025),
  new google.maps.LatLng(50.49972,6.3025),
  new google.maps.LatLng(50.49944,6.3025),
  new google.maps.LatLng(50.49917,6.30278),
  new google.maps.LatLng(50.49917,6.30278),
  new google.maps.LatLng(50.49944,6.30306),
  new google.maps.LatLng(50.49944,6.30306),
  new google.maps.LatLng(50.49972,6.30333),
  new google.maps.LatLng(50.49972,6.30361),
  new google.maps.LatLng(50.50028,6.30472),
  new google.maps.LatLng(50.50056,6.30583),
  new google.maps.LatLng(50.50083,6.30667),
  new google.maps.LatLng(50.50111,6.3075),
  new google.maps.LatLng(50.50111,6.30833),
  new google.maps.LatLng(50.50139,6.30917),
  new google.maps.LatLng(50.50056,6.31083),
  new google.maps.LatLng(50.5,6.31194),
  new google.maps.LatLng(50.49944,6.31278),
  new google.maps.LatLng(50.49944,6.31333),
  new google.maps.LatLng(50.49944,6.31389),
  new google.maps.LatLng(50.49917,6.31417),
  new google.maps.LatLng(50.49917,6.31417),
  new google.maps.LatLng(50.49889,6.31417),
  new google.maps.LatLng(50.49889,6.31417),
  new google.maps.LatLng(50.49861,6.31389),
  new google.maps.LatLng(50.49806,6.31417),
  new google.maps.LatLng(50.49778,6.31444),
  new google.maps.LatLng(50.4975,6.31472),
  new google.maps.LatLng(50.49722,6.315)];
    var poyrestrict29 = new google.maps.Polyline({
  							path: sectorrestrict29,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var sectorrestrict30 = [
    new google.maps.LatLng(50.49722,6.315),
  new google.maps.LatLng(50.49722,6.31528),
  new google.maps.LatLng(50.49667,6.31611),
  new google.maps.LatLng(50.49667,6.31639),
  new google.maps.LatLng(50.49639,6.31667),
  new google.maps.LatLng(50.49583,6.31778),
  new google.maps.LatLng(50.495,6.32),
  new google.maps.LatLng(50.49472,6.32111),
  new google.maps.LatLng(50.495,6.32194),
  new google.maps.LatLng(50.49417,6.3225),
  new google.maps.LatLng(50.49389,6.32278),
  new google.maps.LatLng(50.49389,6.32361),
  new google.maps.LatLng(50.49361,6.32417),
  new google.maps.LatLng(50.49361,6.32528),
  new google.maps.LatLng(50.49361,6.32667),
  new google.maps.LatLng(50.49333,6.32806),
  new google.maps.LatLng(50.49306,6.32889),
  new google.maps.LatLng(50.49306,6.32972),
  new google.maps.LatLng(50.49278,6.33028),
  new google.maps.LatLng(50.49278,6.33111),
  new google.maps.LatLng(50.4925,6.33194),
  new google.maps.LatLng(50.49222,6.3325),
  new google.maps.LatLng(50.49194,6.33278),
  new google.maps.LatLng(50.49167,6.33306),
  new google.maps.LatLng(50.49139,6.33306),
  new google.maps.LatLng(50.49111,6.33306),
  new google.maps.LatLng(50.49083,6.33306),
  new google.maps.LatLng(50.49056,6.33361),
  new google.maps.LatLng(50.49028,6.33389),
  new google.maps.LatLng(50.49,6.33417),
  new google.maps.LatLng(50.48944,6.33444),
  new google.maps.LatLng(50.48944,6.33472),
  new google.maps.LatLng(50.48917,6.33472),
  new google.maps.LatLng(50.48917,6.33472),
  new google.maps.LatLng(50.48917,6.335),
  new google.maps.LatLng(50.48917,6.33528),
  new google.maps.LatLng(50.48917,6.33611),
  new google.maps.LatLng(50.48889,6.33667),
  new google.maps.LatLng(50.48889,6.33722),
  new google.maps.LatLng(50.48917,6.33778),
  new google.maps.LatLng(50.48944,6.33861),
  new google.maps.LatLng(50.48944,6.33944),
  new google.maps.LatLng(50.48944,6.34),
  new google.maps.LatLng(50.48944,6.34083),
  new google.maps.LatLng(50.48944,6.34139),
  new google.maps.LatLng(50.48944,6.34222),
  new google.maps.LatLng(50.48944,6.34278),
  new google.maps.LatLng(50.48944,6.34361),
  new google.maps.LatLng(50.48917,6.34444),
  new google.maps.LatLng(50.48917,6.345),
  new google.maps.LatLng(50.48917,6.34528)];
    var poyrestrict30 = new google.maps.Polyline({
  							path: sectorrestrict30,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var sectorrestrict31 = [
    new google.maps.LatLng(50.48917,6.34528),
  new google.maps.LatLng(50.48917,6.34611),
  new google.maps.LatLng(50.48917,6.34639),
  new google.maps.LatLng(50.48917,6.34694),
  new google.maps.LatLng(50.48917,6.34722),
  new google.maps.LatLng(50.48917,6.3475),
  new google.maps.LatLng(50.48917,6.34778),
  new google.maps.LatLng(50.48917,6.34806),
  new google.maps.LatLng(50.48889,6.34861),
  new google.maps.LatLng(50.48889,6.34889),
  new google.maps.LatLng(50.48889,6.34917),
  new google.maps.LatLng(50.48861,6.34944),
  new google.maps.LatLng(50.48861,6.34972),
  new google.maps.LatLng(50.48861,6.35),
  new google.maps.LatLng(50.48861,6.35028),
  new google.maps.LatLng(50.48833,6.35083),
  new google.maps.LatLng(50.48833,6.35083),
  new google.maps.LatLng(50.48833,6.35111),
  new google.maps.LatLng(50.48806,6.35111),
  new google.maps.LatLng(50.48778,6.35056),
  new google.maps.LatLng(50.48778,6.35028),
  new google.maps.LatLng(50.48778,6.35),
  new google.maps.LatLng(50.48778,6.34972),
  new google.maps.LatLng(50.4875,6.34972),
  new google.maps.LatLng(50.48722,6.34972),
  new google.maps.LatLng(50.48722,6.34944),
  new google.maps.LatLng(50.48722,6.34889),
  new google.maps.LatLng(50.48694,6.34861),
  new google.maps.LatLng(50.48694,6.34806),
  new google.maps.LatLng(50.48694,6.34806),
  new google.maps.LatLng(50.48667,6.3475),
  new google.maps.LatLng(50.48667,6.34722),
  new google.maps.LatLng(50.48639,6.34667),
  new google.maps.LatLng(50.48639,6.34639),
  new google.maps.LatLng(50.48611,6.34611),
  new google.maps.LatLng(50.48583,6.34556),
  new google.maps.LatLng(50.48528,6.345),
  new google.maps.LatLng(50.485,6.34472),
  new google.maps.LatLng(50.48472,6.34444),
  new google.maps.LatLng(50.48472,6.34417),
  new google.maps.LatLng(50.48444,6.34361),
  new google.maps.LatLng(50.48417,6.34306),
  new google.maps.LatLng(50.48389,6.3425),
  new google.maps.LatLng(50.48361,6.34194),
  new google.maps.LatLng(50.48361,6.34194),
  new google.maps.LatLng(50.48333,6.34167),
  new google.maps.LatLng(50.48333,6.34167),
  new google.maps.LatLng(50.48306,6.34167),
  new google.maps.LatLng(50.48306,6.34139),
  new google.maps.LatLng(50.48278,6.34111),
  new google.maps.LatLng(50.48278,6.34111)];
    var poyrestrict31 = new google.maps.Polyline({
  							path: sectorrestrict31,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var sectorrestrict32 = [
    new google.maps.LatLng(50.48278,6.34111),
  new google.maps.LatLng(50.48278,6.34111),
  new google.maps.LatLng(50.4825,6.34111),
  new google.maps.LatLng(50.4825,6.34111),
  new google.maps.LatLng(50.48222,6.34111),
  new google.maps.LatLng(50.48194,6.34111),
  new google.maps.LatLng(50.48167,6.34111),
  new google.maps.LatLng(50.48139,6.34111),
  new google.maps.LatLng(50.48111,6.34111),
  new google.maps.LatLng(50.48111,6.34111),
  new google.maps.LatLng(50.48083,6.34083),
  new google.maps.LatLng(50.48056,6.34111),
  new google.maps.LatLng(50.48028,6.34111),
  new google.maps.LatLng(50.48,6.34111),
  new google.maps.LatLng(50.47972,6.34111),
  new google.maps.LatLng(50.47944,6.34111),
  new google.maps.LatLng(50.47917,6.34139),
  new google.maps.LatLng(50.47917,6.34139),
  new google.maps.LatLng(50.47889,6.34139),
  new google.maps.LatLng(50.47861,6.34139),
  new google.maps.LatLng(50.47833,6.34139),
  new google.maps.LatLng(50.47833,6.34139),
  new google.maps.LatLng(50.47806,6.34139),
  new google.maps.LatLng(50.47806,6.34111),
  new google.maps.LatLng(50.47778,6.34111),
  new google.maps.LatLng(50.47778,6.34111),
  new google.maps.LatLng(50.4775,6.34111),
  new google.maps.LatLng(50.4775,6.34111),
  new google.maps.LatLng(50.47722,6.34083),
  new google.maps.LatLng(50.47722,6.34056),
  new google.maps.LatLng(50.47694,6.34056),
  new google.maps.LatLng(50.47694,6.34056),
  new google.maps.LatLng(50.47694,6.34056),
  new google.maps.LatLng(50.47667,6.34056),
  new google.maps.LatLng(50.47667,6.34028),
  new google.maps.LatLng(50.47667,6.34028),
  new google.maps.LatLng(50.47639,6.34),
  new google.maps.LatLng(50.47639,6.34),
  new google.maps.LatLng(50.47611,6.33972),
  new google.maps.LatLng(50.47611,6.33972),
  new google.maps.LatLng(50.47583,6.33944),
  new google.maps.LatLng(50.47583,6.33944),
  new google.maps.LatLng(50.47583,6.33917),
  new google.maps.LatLng(50.47583,6.33917),
  new google.maps.LatLng(50.47556,6.33889),
  new google.maps.LatLng(50.47556,6.33889),
  new google.maps.LatLng(50.47556,6.33861),
  new google.maps.LatLng(50.47528,6.33833),
  new google.maps.LatLng(50.47528,6.33833),
  new google.maps.LatLng(50.47528,6.33806),
  new google.maps.LatLng(50.475,6.33806)];
    var poyrestrict32 = new google.maps.Polyline({
  							path: sectorrestrict32,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var sectorrestrict33 = [
    new google.maps.LatLng(50.475,6.33806),
  new google.maps.LatLng(50.47472,6.33778),
  new google.maps.LatLng(50.47472,6.3375),
  new google.maps.LatLng(50.47472,6.3375),
  new google.maps.LatLng(50.47444,6.33778),
  new google.maps.LatLng(50.47417,6.33806),
  new google.maps.LatLng(50.47417,6.33806),
  new google.maps.LatLng(50.47389,6.33806),
  new google.maps.LatLng(50.47361,6.33806),
  new google.maps.LatLng(50.47333,6.33806),
  new google.maps.LatLng(50.47333,6.33778),
  new google.maps.LatLng(50.47333,6.3375),
  new google.maps.LatLng(50.47333,6.3375),
  new google.maps.LatLng(50.47333,6.33778),
  new google.maps.LatLng(50.47333,6.33778),
  new google.maps.LatLng(50.47333,6.33778),
  new google.maps.LatLng(50.47306,6.33806),
  new google.maps.LatLng(50.47306,6.33806),
  new google.maps.LatLng(50.47278,6.33806),
  new google.maps.LatLng(50.47278,6.33778),
  new google.maps.LatLng(50.4725,6.33806),
  new google.maps.LatLng(50.4725,6.33833),
  new google.maps.LatLng(50.47222,6.33833),
  new google.maps.LatLng(50.47222,6.33861),
  new google.maps.LatLng(50.47222,6.33861),
  new google.maps.LatLng(50.47222,6.33889),
  new google.maps.LatLng(50.47194,6.33944),
  new google.maps.LatLng(50.47194,6.33972),
  new google.maps.LatLng(50.47194,6.34),
  new google.maps.LatLng(50.47194,6.34),
  new google.maps.LatLng(50.47194,6.34056),
  new google.maps.LatLng(50.47194,6.34083),
  new google.maps.LatLng(50.47194,6.34111),
  new google.maps.LatLng(50.47194,6.34139),
  new google.maps.LatLng(50.47167,6.34167),
  new google.maps.LatLng(50.47139,6.34167),
  new google.maps.LatLng(50.47111,6.34194),
  new google.maps.LatLng(50.47083,6.34222),
  new google.maps.LatLng(50.47056,6.3425),
  new google.maps.LatLng(50.47028,6.3425),
  new google.maps.LatLng(50.47,6.34278),
  new google.maps.LatLng(50.47,6.34306),
  new google.maps.LatLng(50.46972,6.34306),
  new google.maps.LatLng(50.46944,6.34306),
  new google.maps.LatLng(50.46944,6.34306),
  new google.maps.LatLng(50.46944,6.34333),
  new google.maps.LatLng(50.46917,6.34333),
  new google.maps.LatLng(50.46917,6.34333),
  new google.maps.LatLng(50.46889,6.34361),
  new google.maps.LatLng(50.46889,6.34389),
  new google.maps.LatLng(50.46861,6.34389)];
    var poyrestrict33 = new google.maps.Polyline({
  							path: sectorrestrict33,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var sectorrestrict34 = [
    new google.maps.LatLng(50.46861,6.34389),
  new google.maps.LatLng(50.46833,6.34361),
  new google.maps.LatLng(50.46778,6.34333),
  new google.maps.LatLng(50.4675,6.34306),
  new google.maps.LatLng(50.46694,6.34278),
  new google.maps.LatLng(50.46667,6.34278),
  new google.maps.LatLng(50.46639,6.3425),
  new google.maps.LatLng(50.46583,6.34222),
  new google.maps.LatLng(50.46556,6.34194),
  new google.maps.LatLng(50.46528,6.34167),
  new google.maps.LatLng(50.465,6.34167),
  new google.maps.LatLng(50.46472,6.34167),
  new google.maps.LatLng(50.46444,6.34139),
  new google.maps.LatLng(50.46444,6.34111),
  new google.maps.LatLng(50.46417,6.34111),
  new google.maps.LatLng(50.46389,6.34083),
  new google.maps.LatLng(50.46333,6.34056),
  new google.maps.LatLng(50.46306,6.34028),
  new google.maps.LatLng(50.46278,6.34028),
  new google.maps.LatLng(50.46222,6.34056),
  new google.maps.LatLng(50.46194,6.34111),
  new google.maps.LatLng(50.46167,6.34167),
  new google.maps.LatLng(50.46139,6.34194),
  new google.maps.LatLng(50.46139,6.3425),
  new google.maps.LatLng(50.46111,6.34306),
  new google.maps.LatLng(50.46083,6.34333),
  new google.maps.LatLng(50.46056,6.34389),
  new google.maps.LatLng(50.46028,6.34417),
  new google.maps.LatLng(50.46,6.34444),
  new google.maps.LatLng(50.45944,6.34472),
  new google.maps.LatLng(50.45944,6.345),
  new google.maps.LatLng(50.45889,6.34556),
  new google.maps.LatLng(50.45889,6.34583),
  new google.maps.LatLng(50.45889,6.34639),
  new google.maps.LatLng(50.45861,6.34694),
  new google.maps.LatLng(50.45861,6.34778),
  new google.maps.LatLng(50.45861,6.34833),
  new google.maps.LatLng(50.45833,6.34861),
  new google.maps.LatLng(50.45806,6.34889),
  new google.maps.LatLng(50.4575,6.34917),
  new google.maps.LatLng(50.45722,6.34944),
  new google.maps.LatLng(50.45694,6.34972),
  new google.maps.LatLng(50.45667,6.35028),
  new google.maps.LatLng(50.45667,6.35083),
  new google.maps.LatLng(50.45667,6.35139),
  new google.maps.LatLng(50.45639,6.35167),
  new google.maps.LatLng(50.45639,6.35222),
  new google.maps.LatLng(50.45611,6.3525),
  new google.maps.LatLng(50.45611,6.35306),
  new google.maps.LatLng(50.45611,6.35361),
  new google.maps.LatLng(50.45611,6.35417)];
    var poyrestrict34 = new google.maps.Polyline({
  							path: sectorrestrict34,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var sectorrestrict35 = [
    new google.maps.LatLng(50.45611,6.35417),
  new google.maps.LatLng(50.45611,6.35472),
  new google.maps.LatLng(50.45611,6.35528),
  new google.maps.LatLng(50.45639,6.35583),
  new google.maps.LatLng(50.45639,6.35611),
  new google.maps.LatLng(50.45667,6.35667),
  new google.maps.LatLng(50.45639,6.35722),
  new google.maps.LatLng(50.45611,6.35778),
  new google.maps.LatLng(50.45556,6.35833),
  new google.maps.LatLng(50.45528,6.35889),
  new google.maps.LatLng(50.455,6.35944),
  new google.maps.LatLng(50.45472,6.36),
  new google.maps.LatLng(50.45444,6.36056),
  new google.maps.LatLng(50.45444,6.36111),
  new google.maps.LatLng(50.45417,6.36194),
  new google.maps.LatLng(50.45417,6.3625),
  new google.maps.LatLng(50.45389,6.36306),
  new google.maps.LatLng(50.45417,6.36389),
  new google.maps.LatLng(50.45417,6.36472),
  new google.maps.LatLng(50.45444,6.36583),
  new google.maps.LatLng(50.45472,6.3675),
  new google.maps.LatLng(50.455,6.36833),
  new google.maps.LatLng(50.45528,6.36944),
  new google.maps.LatLng(50.45528,6.37056),
  new google.maps.LatLng(50.45556,6.37194),
  new google.maps.LatLng(50.45528,6.37222),
  new google.maps.LatLng(50.45444,6.37278),
  new google.maps.LatLng(50.45389,6.37306),
  new google.maps.LatLng(50.45361,6.37361),
  new google.maps.LatLng(50.45306,6.37389),
  new google.maps.LatLng(50.4525,6.37417),
  new google.maps.LatLng(50.45222,6.37444),
  new google.maps.LatLng(50.45167,6.37444),
  new google.maps.LatLng(50.45111,6.37472),
  new google.maps.LatLng(50.45056,6.375),
  new google.maps.LatLng(50.45,6.375),
  new google.maps.LatLng(50.44944,6.37528),
  new google.maps.LatLng(50.44917,6.37556),
  new google.maps.LatLng(50.44861,6.37556),
  new google.maps.LatLng(50.44806,6.37583),
  new google.maps.LatLng(50.4475,6.37583),
  new google.maps.LatLng(50.44722,6.37583),
  new google.maps.LatLng(50.44722,6.37583),
  new google.maps.LatLng(50.44556,6.37639),
  new google.maps.LatLng(50.44444,6.37667),
  new google.maps.LatLng(50.44306,6.37694),
  new google.maps.LatLng(50.44167,6.37722),
  new google.maps.LatLng(50.44028,6.3775),
  new google.maps.LatLng(50.43972,6.37639),
  new google.maps.LatLng(50.43944,6.3775),
  new google.maps.LatLng(50.43833,6.3775)];
    var poyrestrict35 = new google.maps.Polyline({
  							path: sectorrestrict35,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var sectorrestrict36 = [
    new google.maps.LatLng(50.43833,6.3775),
  new google.maps.LatLng(50.43667,6.37722),
  new google.maps.LatLng(50.43417,6.37639),
  new google.maps.LatLng(50.4325,6.37611),
  new google.maps.LatLng(50.4325,6.37611),
  new google.maps.LatLng(50.43333,6.38333),
  new google.maps.LatLng(50.48611,6.40833),
  new google.maps.LatLng(50.59389,6.24639),
new google.maps.LatLng(50.59389,6.24639)];
var poyrestrict36 = new google.maps.Polyline({
  							path: sectorrestrict36,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorrestrict37 = [
  new google.maps.LatLng(48.20833,8.95),
  new google.maps.LatLng(48.20833,9.1),
  new google.maps.LatLng(48.11667,9.1),
  new google.maps.LatLng(48.11667,8.95),
new google.maps.LatLng(48.20833,8.95)];
var poyrestrict37 = new google.maps.Polyline({
  							path: sectorrestrict37,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorrestrict38 = [
  new google.maps.LatLng(54.56667,10.13333),
  new google.maps.LatLng(54.49167,10.28333),
  new google.maps.LatLng(54.48,10.08333),
  new google.maps.LatLng(54.48,10.03333),
  new google.maps.LatLng(54.5,10.01667),
new google.maps.LatLng(54.56667,10.13333)];
var poyrestrict38 = new google.maps.Polyline({
  							path: sectorrestrict38,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorrestrict39 = [
  new google.maps.LatLng(54.70361,10.04139),
  new google.maps.LatLng(54.70417,10.04861),
  new google.maps.LatLng(54.51667,10),
  new google.maps.LatLng(54.61667,9.91667),
new google.maps.LatLng(54.70361,10.04139)];
var poyrestrict39 = new google.maps.Polyline({
  							path: sectorrestrict39,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorrestrict40 = [
  new google.maps.LatLng(54.70833,10.10833),
  new google.maps.LatLng(54.68333,10.13333),
  new google.maps.LatLng(54.56667,10.13333),
  new google.maps.LatLng(54.5,10.01667),
  new google.maps.LatLng(54.51667,10),
  new google.maps.LatLng(54.70417,10.04861),
new google.maps.LatLng(54.70833,10.10833)];
var poyrestrict40 = new google.maps.Polyline({
  							path: sectorrestrict40,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorrestrict41 = [
  new google.maps.LatLng(52.91667,9.925),
  new google.maps.LatLng(52.81667,9.95),
  new google.maps.LatLng(52.75,9.96667),
  new google.maps.LatLng(52.71389,9.96944),
  new google.maps.LatLng(52.71528,9.84861),
  new google.maps.LatLng(52.70972,9.73972),
  new google.maps.LatLng(52.7325,9.69306),
  new google.maps.LatLng(52.76667,9.66667),
  new google.maps.LatLng(52.85,9.7),
  new google.maps.LatLng(52.91667,9.8),
  new google.maps.LatLng(52.95,9.88333),
new google.maps.LatLng(52.91667,9.925)];
var poyrestrict41 = new google.maps.Polyline({
  							path: sectorrestrict41,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorrestrict42 = [
  new google.maps.LatLng(53.09167,10.1),
  new google.maps.LatLng(53.05,10.26667),
  new google.maps.LatLng(53,10.26667),
  new google.maps.LatLng(52.97778,10.175),
  new google.maps.LatLng(53.03889,9.99167),
new google.maps.LatLng(53.09167,10.1)];
var poyrestrict42 = new google.maps.Polyline({
  							path: sectorrestrict42,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorrestrict43 = [
  new google.maps.LatLng(51.78333,7.21667),
  new google.maps.LatLng(51.78333,7.35),
  new google.maps.LatLng(51.73333,7.35),
  new google.maps.LatLng(51.73333,7.21667),
new google.maps.LatLng(51.78333,7.21667)];
var poyrestrict43 = new google.maps.Polyline({
  							path: sectorrestrict43,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorrestrict44 = [
  new google.maps.LatLng(47.66667,12.76667),
  new google.maps.LatLng(47.68333,12.76667),
  new google.maps.LatLng(47.68333,12.88333),
  new google.maps.LatLng(47.61667,12.88333),
  new google.maps.LatLng(47.61667,12.83333),
new google.maps.LatLng(47.66667,12.76667)];
var poyrestrict44 = new google.maps.Polyline({
  							path: sectorrestrict44,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorrestrict45 = [
  new google.maps.LatLng(53,10.25),
  new google.maps.LatLng(53,10.30833),
  new google.maps.LatLng(52.93333,10.30833),
  new google.maps.LatLng(52.93333,10.32778),
  new google.maps.LatLng(52.85,10.32778),
  new google.maps.LatLng(52.85,10.25),
new google.maps.LatLng(53,10.25)];
var poyrestrict45 = new google.maps.Polyline({
  							path: sectorrestrict45,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
  
drawedrsCircle(9.37778,49.2875,1.0,"#FA2165",1,0,360);
drawedrsCircle(7.16667,51.80833,2.5,"#FA2165",1,0,360);
drawedrsCircle(12.87667,49.14667,1.35,"#FA2165",1,0,360);
drawedrsCircle(11.8,48.75,6.9885123594219,"#FA2165",1,341,55);
drawedrsCircle(9.92417,54.33333,1.3,"#FA2165",1,0,360);
drawedrsCircle(9.195,50.68083,2.0,"#FA2165",1,0,360);
drawedrsCircle(6.41667,50.9,2.0,"#FA2165",1,0,360);
drawedrsCircle(8.43389,49.09833,2.0,"#FA2165",1,0,360);
drawedrsCircle(11.8,48.75,7.0,"#FA2165",1,0,360);
drawedrsCircle(7.2,52.43333,5.0,"#FA2165",1,0,360);
drawedrsCircle(7.2,52.43333,4.9849439535548,"#FA2165",1,270,45);
drawedrsCircle(10.30556,50.96528,1.0,"#FA2165",1,0,360);
drawedrsCircle(11.27944,48.08639,0.8,"#FA2165",1,0,360);
drawedrsCircle(11.20833,48.56972,1.7,"#FA2165",1,0,360);
drawedrsCircle(13.40667,52.10333,1.5,"#FA2165",1,0,360);
drawedrsCircle(7.6125,49.23833,1.0,"#FA2165",1,0,360);
drawedrsCircle(11.67444,48.26861,0.8,"#FA2165",1,0,360);
drawedrsCircle(10.41944,53.40694,1.1,"#FA2165",1,0,360);
drawedrsCircle(13.12944,52.41056,2.0052090633166,"#FA2165",1,172,92);
drawedrsCircle(8.41556,49.70944,0.8,"#FA2165",1,0,360);
drawedrsCircle(9.345,53.85222,0.8,"#FA2165",1,0,360);
drawedrsCircle(9.20306,53.8925,0.8,"#FA2165",1,0,360);
drawedrsCircle(7.32111,52.47194,0.8,"#FA2165",1,0,360);
drawedrsCircle(10.18417,49.98389,0.8,"#FA2165",1,0,360);
drawedrsCircle(9.41139,52.03639,0.8,"#FA2165",1,0,360);
drawedrsCircle(10.40278,48.515,0.8,"#FA2165",1,0,360);
drawedrsCircle(12.29722,48.60722,0.8,"#FA2165",1,0,360);
drawedrsCircle(9.1725,49.04028,0.8,"#FA2165",1,0,360);
drawedrsCircle(9.07611,49.36472,0.8,"#FA2165",1,0,360);
drawedrsCircle(8.43806,49.25417,0.8,"#FA2165",1,0,360);
drawedrsCircle(8.47778,53.42917,0.8,"#FA2165",1,0,360);
drawedrsCircle(13.37611,52.51861,3.0,"#FA2165",1,0,360);
drawedrsCircle(11.8,48.75,6.9836003940029,"#FA2165",1,230,284);
drawedrsCircle(13.10111,52.9725,1.5,"#FA2165",1,0,360);

}
