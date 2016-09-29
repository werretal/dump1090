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
function drawrestrict2() {
				
var sectorrestrict46 = [
  new google.maps.LatLng(52.71806,7.06361),
  new google.maps.LatLng(52.68333,7.25278),
  new google.maps.LatLng(52.49194,7.29667),
              new google.maps.LatLng(52.49194,7.29667)];
              var poyrestrict46 = new google.maps.Polyline({
  							path: sectorrestrict46,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var sectorrestrict47 = [
  new google.maps.LatLng(52.43333,7.06389),
new google.maps.LatLng(52.43333,7.06083),
  new google.maps.LatLng(52.66639,7.0575),
new google.maps.LatLng(52.71806,7.06361)];
var poyrestrict47 = new google.maps.Polyline({
  							path: sectorrestrict47,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorrestrict48 = [
  new google.maps.LatLng(53.61944,12.14722),
  new google.maps.LatLng(53.61944,12.20278),
  new google.maps.LatLng(53.58333,12.20278),
  new google.maps.LatLng(53.58333,12.14722),
new google.maps.LatLng(53.61944,12.14722)];
var poyrestrict48 = new google.maps.Polyline({
  							path: sectorrestrict48,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorrestrict49 = [
  new google.maps.LatLng(50.61111,13.14167),
  new google.maps.LatLng(50.61111,13.175),
  new google.maps.LatLng(50.56944,13.2),
  new google.maps.LatLng(50.56944,13.15),
new google.maps.LatLng(50.61111,13.14167)];
var poyrestrict49 = new google.maps.Polyline({
  							path: sectorrestrict49,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorrestrict50 = [
  new google.maps.LatLng(52.58333,14.26111),
  new google.maps.LatLng(52.58333,14.31667),
  new google.maps.LatLng(52.575,14.31667),
  new google.maps.LatLng(52.55556,14.28333),
  new google.maps.LatLng(52.56111,14.26111),
new google.maps.LatLng(52.58333,14.26111)];
var poyrestrict50 = new google.maps.Polyline({
  							path: sectorrestrict50,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorrestrict51 = [
  new google.maps.LatLng(53.46111,11.09722),
  new google.maps.LatLng(53.45,11.15),
  new google.maps.LatLng(53.43333,11.13611),
  new google.maps.LatLng(53.44444,11.08333),
new google.maps.LatLng(53.46111,11.09722)];
var poyrestrict51 = new google.maps.Polyline({
  							path: sectorrestrict51,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorrestrict52 = [
  new google.maps.LatLng(51.34722,11.075),
  new google.maps.LatLng(51.325,11.125),
  new google.maps.LatLng(51.31111,11.10278),
  new google.maps.LatLng(51.33889,11.05833),
new google.maps.LatLng(51.34722,11.075)];
var poyrestrict52 = new google.maps.Polyline({
  							path: sectorrestrict52,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorrestrict53 = [
  new google.maps.LatLng(52.70833,12.08056),
  new google.maps.LatLng(52.70833,12.13056),
  new google.maps.LatLng(52.65,12.22778),
  new google.maps.LatLng(52.65278,12.33611),
  new google.maps.LatLng(52.63889,12.33333),
  new google.maps.LatLng(52.6,12.21944),
  new google.maps.LatLng(52.6,12.11667),
  new google.maps.LatLng(52.64444,12.07778),
  new google.maps.LatLng(52.66389,12.06944),
new google.maps.LatLng(52.70833,12.08056)];
var poyrestrict53 = new google.maps.Polyline({
  							path: sectorrestrict53,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorrestrict54 = [
  new google.maps.LatLng(51.38333,10.9),
  new google.maps.LatLng(51.39444,10.95833),
  new google.maps.LatLng(51.37056,10.96861),
  new google.maps.LatLng(51.3675,10.9),
new google.maps.LatLng(51.38333,10.9)];
var poyrestrict54 = new google.maps.Polyline({
  							path: sectorrestrict54,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorrestrict55 = [
  new google.maps.LatLng(52.29167,12.67778),
  new google.maps.LatLng(52.29167,12.82028),
  new google.maps.LatLng(52.28194,12.83611),
  new google.maps.LatLng(52.22222,12.83611),
  new google.maps.LatLng(52.21111,12.81111),
  new google.maps.LatLng(52.21111,12.76111),
  new google.maps.LatLng(52.23472,12.69444),
new google.maps.LatLng(52.29167,12.67778)];
var poyrestrict55 = new google.maps.Polyline({
  							path: sectorrestrict55,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorrestrict56 = [
  new google.maps.LatLng(53.675,14.05),
  new google.maps.LatLng(53.7,14.2),
  new google.maps.LatLng(53.66806,14.21944),
  new google.maps.LatLng(53.57222,14.21944),
  new google.maps.LatLng(53.56667,14.05),
  new google.maps.LatLng(53.58333,14),
new google.maps.LatLng(53.675,14.05)];
var poyrestrict56 = new google.maps.Polyline({
  							path: sectorrestrict56,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorrestrict57 = [
  new google.maps.LatLng(51.72444,12.99778),
  new google.maps.LatLng(51.72306,13.05833),
  new google.maps.LatLng(51.73417,13.05833),
  new google.maps.LatLng(51.74,13.13861),
  new google.maps.LatLng(51.71917,13.16778),
  new google.maps.LatLng(51.71806,13.2),
  new google.maps.LatLng(51.65,13.2),
  new google.maps.LatLng(51.58333,13.11667),
  new google.maps.LatLng(51.58333,13),
new google.maps.LatLng(51.72444,12.99778)];
var poyrestrict57 = new google.maps.Polyline({
  							path: sectorrestrict57,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorrestrict58 = [
  new google.maps.LatLng(50.76667,10.20833),
  new google.maps.LatLng(50.79167,10.25),
  new google.maps.LatLng(50.775,10.29167),
  new google.maps.LatLng(50.74167,10.225),
new google.maps.LatLng(50.76667,10.20833)];
var poyrestrict58 = new google.maps.Polyline({
  							path: sectorrestrict58,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorrestrict59 = [
  new google.maps.LatLng(51.41111,14.95889),
  new google.maps.LatLng(51.41139,14.95917),
  new google.maps.LatLng(51.41167,14.96),
  new google.maps.LatLng(51.41222,14.96222),
  new google.maps.LatLng(51.41278,14.96389),
  new google.maps.LatLng(51.41611,14.96694),
  new google.maps.LatLng(51.41806,14.96778),
  new google.maps.LatLng(51.41889,14.9675),
  new google.maps.LatLng(51.42194,14.96639),
  new google.maps.LatLng(51.42333,14.96556),
  new google.maps.LatLng(51.42444,14.96583),
  new google.maps.LatLng(51.42583,14.96694),
  new google.maps.LatLng(51.42694,14.96639),
  new google.maps.LatLng(51.4275,14.96556),
  new google.maps.LatLng(51.43,14.96083),
  new google.maps.LatLng(51.43083,14.96),
  new google.maps.LatLng(51.43194,14.96),
  new google.maps.LatLng(51.43306,14.96111),
  new google.maps.LatLng(51.43361,14.96222),
  new google.maps.LatLng(51.43444,14.96472),
  new google.maps.LatLng(51.43389,14.96694),
  new google.maps.LatLng(51.43278,14.96861),
  new google.maps.LatLng(51.43278,14.97),
  new google.maps.LatLng(51.43306,14.97083),
  new google.maps.LatLng(51.43694,14.97361),
  new google.maps.LatLng(51.43833,14.97417),
  new google.maps.LatLng(51.44222,14.97444),
  new google.maps.LatLng(51.44333,14.97333),
  new google.maps.LatLng(51.44639,14.96806),
  new google.maps.LatLng(51.44944,14.96556),
  new google.maps.LatLng(51.45306,14.96417),
  new google.maps.LatLng(51.45472,14.96278),
  new google.maps.LatLng(51.45806,14.95833),
  new google.maps.LatLng(51.46,14.95639),
  new google.maps.LatLng(51.46111,14.95639),
  new google.maps.LatLng(51.46333,14.95722),
  new google.maps.LatLng(51.46389,14.95694),
  new google.maps.LatLng(51.47111,14.95083),
  new google.maps.LatLng(51.47194,14.94944),
  new google.maps.LatLng(51.47306,14.94528),
  new google.maps.LatLng(51.47333,14.94111),
  new google.maps.LatLng(51.47361,14.93306),
  new google.maps.LatLng(51.47333,14.92667),
  new google.maps.LatLng(51.47417,14.92556),
  new google.maps.LatLng(51.47472,14.925),
  new google.maps.LatLng(51.47861,14.92611),
  new google.maps.LatLng(51.48028,14.92583),
  new google.maps.LatLng(51.48167,14.92444),
  new google.maps.LatLng(51.48278,14.92111),
  new google.maps.LatLng(51.48417,14.91472)];
    var poyrestrict59 = new google.maps.Polyline({
  							path: sectorrestrict59,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var sectorrestrict60 = [
    new google.maps.LatLng(51.48417,14.91472),
  new google.maps.LatLng(51.48444,14.9075),
  new google.maps.LatLng(51.48306,14.90389),
  new google.maps.LatLng(51.4825,14.90167),
  new google.maps.LatLng(51.48222,14.89917),
  new google.maps.LatLng(51.48278,14.89694),
  new google.maps.LatLng(51.48361,14.895),
  new google.maps.LatLng(51.48639,14.89083),
  new google.maps.LatLng(51.48778,14.88972),
  new google.maps.LatLng(51.48806,14.885),
  new google.maps.LatLng(51.48778,14.88306),
  new google.maps.LatLng(51.4875,14.88083),
  new google.maps.LatLng(51.48639,14.87889),
  new google.maps.LatLng(51.48556,14.87667),
  new google.maps.LatLng(51.485,14.87417),
  new google.maps.LatLng(51.485,14.87278),
  new google.maps.LatLng(51.48528,14.87111),
  new google.maps.LatLng(51.48639,14.86917),
  new google.maps.LatLng(51.48972,14.86694),
  new google.maps.LatLng(51.49083,14.86556),
  new google.maps.LatLng(51.49111,14.86472),
  new google.maps.LatLng(51.49111,14.86083),
  new google.maps.LatLng(51.49083,14.85917),
  new google.maps.LatLng(51.48972,14.85278),
  new google.maps.LatLng(51.49056,14.85139),
  new google.maps.LatLng(51.49417,14.84528),
  new google.maps.LatLng(51.495,14.84444),
  new google.maps.LatLng(51.49611,14.84083),
  new google.maps.LatLng(51.5,14.83556),
  new google.maps.LatLng(51.47,14.69556),
  new google.maps.LatLng(51.435,14.73389),
  new google.maps.LatLng(51.42667,14.75278),
  new google.maps.LatLng(51.41111,14.76583),
  new google.maps.LatLng(51.41111,14.95861),
new google.maps.LatLng(51.41111,14.95889)];
var poyrestrict60 = new google.maps.Polyline({
  							path: sectorrestrict60,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorrestrict61 = [
  new google.maps.LatLng(51.47,14.69556),
  new google.maps.LatLng(51.435,14.73389),
  new google.maps.LatLng(51.42667,14.75278),
  new google.maps.LatLng(51.41111,14.76583),
  new google.maps.LatLng(51.41111,14.74667),
  new google.maps.LatLng(51.41778,14.73722),
  new google.maps.LatLng(51.41778,14.65417),
  new google.maps.LatLng(51.43111,14.65417),
  new google.maps.LatLng(51.46111,14.65417),
new google.maps.LatLng(51.47,14.69556)];
var poyrestrict61 = new google.maps.Polyline({
  							path: sectorrestrict61,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorrestrict62 = [
  new google.maps.LatLng(51.48667,14.45333),
  new google.maps.LatLng(51.46111,14.65417),
  new google.maps.LatLng(51.43111,14.65417),
  new google.maps.LatLng(51.43889,14.60722),
  new google.maps.LatLng(51.43611,14.545),
  new google.maps.LatLng(51.42056,14.50944),
  new google.maps.LatLng(51.45,14.50778),
new google.maps.LatLng(51.48667,14.45333)];
var poyrestrict62 = new google.maps.Polyline({
  							path: sectorrestrict62,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorrestrict63 = [
  new google.maps.LatLng(51.48667,14.45333),
  new google.maps.LatLng(51.45,14.50778),
  new google.maps.LatLng(51.42056,14.50944),
  new google.maps.LatLng(51.46667,14.4),
  new google.maps.LatLng(51.48333,14.41667),
new google.maps.LatLng(51.48667,14.45333)];
var poyrestrict63 = new google.maps.Polyline({
  							path: sectorrestrict63,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorrestrict64 = [
  new google.maps.LatLng(52.85,10.32778),
  new google.maps.LatLng(52.75611,10.28194),
  new google.maps.LatLng(52.75611,10.26722),
  new google.maps.LatLng(52.85,10.25),
new google.maps.LatLng(52.85,10.32778)];
var poyrestrict64 = new google.maps.Polyline({
  							path: sectorrestrict64,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorrestrict65 = [
  new google.maps.LatLng(54.03333,8.85),
  new google.maps.LatLng(53.98333,8.74167),
  new google.maps.LatLng(54.03333,8.08333),
  new google.maps.LatLng(54.14167,8.08333),
  new google.maps.LatLng(54.24167,8.38333),
  new google.maps.LatLng(54.20833,8.7),
  new google.maps.LatLng(54.10806,8.87306),
  new google.maps.LatLng(54.11667,8.73333),
  new google.maps.LatLng(54.06667,8.73333),
new google.maps.LatLng(54.03333,8.85)];
var poyrestrict65 = new google.maps.Polyline({
  							path: sectorrestrict65,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorrestrict66 = [
  new google.maps.LatLng(51.83278,8.85111),
  new google.maps.LatLng(51.83278,8.74444),
  new google.maps.LatLng(51.76611,8.74444),
  new google.maps.LatLng(51.76611,8.79056),
new google.maps.LatLng(51.83278,8.85111)];
var poyrestrict66 = new google.maps.Polyline({
  							path: sectorrestrict66,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorrestrict67 = [
  new google.maps.LatLng(50.84444,10.875),
  new google.maps.LatLng(50.81667,10.88611),
  new google.maps.LatLng(50.80833,10.84167),
new google.maps.LatLng(50.84444,10.875)];
var poyrestrict67 = new google.maps.Polyline({
  							path: sectorrestrict67,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorrestrict68 = [
  new google.maps.LatLng(50.88056,10.73056),
  new google.maps.LatLng(50.84444,10.875),
  new google.maps.LatLng(50.80833,10.84167),
  new google.maps.LatLng(50.8125,10.78333),
  new google.maps.LatLng(50.85833,10.72222),
new google.maps.LatLng(50.88056,10.73056)];
var poyrestrict68 = new google.maps.Polyline({
  							path: sectorrestrict68,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorrestrict69 = [
  new google.maps.LatLng(52.18611,12.15417),
  new google.maps.LatLng(52.20556,12.19306),
  new google.maps.LatLng(52.20556,12.3),
  new google.maps.LatLng(52.12222,12.29722),
  new google.maps.LatLng(52.09444,12.26528),
  new google.maps.LatLng(52.1,12.225),
  new google.maps.LatLng(52.12361,12.13889),
new google.maps.LatLng(52.18611,12.15417)];
var poyrestrict69 = new google.maps.Polyline({
  							path: sectorrestrict69,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorrestrict70 = [
  new google.maps.LatLng(52.54306,11.63333),
  new google.maps.LatLng(52.45,11.70833),
  new google.maps.LatLng(52.4125,11.625),
  new google.maps.LatLng(52.35,11.60972),
  new google.maps.LatLng(52.27778,11.53889),
  new google.maps.LatLng(52.27778,11.46111),
  new google.maps.LatLng(52.3,11.42222),
  new google.maps.LatLng(52.42917,11.5),
  new google.maps.LatLng(52.52083,11.46667),
new google.maps.LatLng(52.54306,11.63333)];
var poyrestrict70 = new google.maps.Polyline({
  							path: sectorrestrict70,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorrestrict71 = [
  new google.maps.LatLng(48.20833,8.9),
  new google.maps.LatLng(48.20833,8.95),
  new google.maps.LatLng(48.11667,8.95),
  new google.maps.LatLng(48.11667,9.1),
  new google.maps.LatLng(48.08333,9.1),
  new google.maps.LatLng(48.08333,8.9),
new google.maps.LatLng(48.20833,8.9)];
var poyrestrict71 = new google.maps.Polyline({
  							path: sectorrestrict71,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorrestrict72 = [
  new google.maps.LatLng(52.20278,13.94639),
  new google.maps.LatLng(52.20278,13.9875),
  new google.maps.LatLng(52.15778,13.98833),
  new google.maps.LatLng(52.15722,13.94778),
new google.maps.LatLng(52.20278,13.94639)];
var poyrestrict72 = new google.maps.Polyline({
  							path: sectorrestrict72,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorrestrict73 = [
  new google.maps.LatLng(54.75,10.15667),
  new google.maps.LatLng(54.59306,10.34),
  new google.maps.LatLng(54.54417,10.52694),
  new google.maps.LatLng(54.5,10.41667),
  new google.maps.LatLng(54.49167,10.28333),
  new google.maps.LatLng(54.56667,10.13333),
  new google.maps.LatLng(54.68333,10.13333),
  new google.maps.LatLng(54.70833,10.10833),
new google.maps.LatLng(54.75,10.15667)];
var poyrestrict73 = new google.maps.Polyline({
  							path: sectorrestrict73,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorrestrict74 = [
  new google.maps.LatLng(52.21389,12.075),
  new google.maps.LatLng(52.23889,12.26944),
  new google.maps.LatLng(52.20556,12.3),
  new google.maps.LatLng(52.20556,12.19306),
  new google.maps.LatLng(52.18611,12.15417),
  new google.maps.LatLng(52.12361,12.13889),
  new google.maps.LatLng(52.15833,12.03056),
new google.maps.LatLng(52.21389,12.075)];
var poyrestrict74 = new google.maps.Polyline({
  							path: sectorrestrict74,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorrestrict75 = [
  new google.maps.LatLng(52.20556,12.3),
  new google.maps.LatLng(52.1875,12.325),
  new google.maps.LatLng(52.08889,12.325),
  new google.maps.LatLng(52.09444,12.26528),
  new google.maps.LatLng(52.12222,12.29722),
new google.maps.LatLng(52.20556,12.3)];
var poyrestrict75 = new google.maps.Polyline({
  							path: sectorrestrict75,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorrestrict76 = [
  new google.maps.LatLng(53.03889,9.99167),
  new google.maps.LatLng(52.97778,10.175),
  new google.maps.LatLng(52.95,10.16667),
  new google.maps.LatLng(52.9,10.125),
  new google.maps.LatLng(52.81667,9.95),
  new google.maps.LatLng(52.91667,9.925),
  new google.maps.LatLng(52.95,9.88333),
  new google.maps.LatLng(53,9.91667),
new google.maps.LatLng(53.03889,9.99167)];
var poyrestrict76 = new google.maps.Polyline({
  							path: sectorrestrict76,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorrestrict77 = [
  new google.maps.LatLng(52.95,7.89694),
  new google.maps.LatLng(52.81083,7.90111),
  new google.maps.LatLng(52.7,7.4),
  new google.maps.LatLng(52.88333,7.54167),
  new google.maps.LatLng(52.95,7.6),
new google.maps.LatLng(52.95,7.89694)];
var poyrestrict77 = new google.maps.Polyline({
  							path: sectorrestrict77,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorrestrict78 = [
  new google.maps.LatLng(47.70972,11.19444),
  new google.maps.LatLng(47.73583,11.07167),
  new google.maps.LatLng(47.76667,11.07167),
  new google.maps.LatLng(47.76667,11.13333),
  new google.maps.LatLng(47.72778,11.16389),
  new google.maps.LatLng(47.72778,11.19444),
new google.maps.LatLng(47.70972,11.19444)];
var poyrestrict78 = new google.maps.Polyline({
  							path: sectorrestrict78,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorrestrict79 = [
  new google.maps.LatLng(52.3775,13.1375),
              new google.maps.LatLng(52.3775,13.1375)];
              var poyrestrict79 = new google.maps.Polyline({
  							path: sectorrestrict79,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var sectorrestrict80 = [
  new google.maps.LatLng(52.40917,13.18389),
new google.maps.LatLng(52.38556,13.14083),
new google.maps.LatLng(52.3775,13.1375)];
var poyrestrict80 = new google.maps.Polyline({
  							path: sectorrestrict80,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorrestrict81 = [
  new google.maps.LatLng(49.69056,11.6025),
  new google.maps.LatLng(49.61667,11.64222),
  new google.maps.LatLng(49.61667,11.61667),
  new google.maps.LatLng(49.63333,11.56667),
  new google.maps.LatLng(49.66667,11.56667),
new google.maps.LatLng(49.69056,11.6025)];
var poyrestrict81 = new google.maps.Polyline({
  							path: sectorrestrict81,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorrestrict82 = [
  new google.maps.LatLng(51.05778,9.58222),
  new google.maps.LatLng(50.94472,9.75389),
  new google.maps.LatLng(50.86667,9.625),
  new google.maps.LatLng(50.86722,9.38528),
  new google.maps.LatLng(50.93639,9.4),
new google.maps.LatLng(51.05778,9.58222)];
var poyrestrict82 = new google.maps.Polyline({
  							path: sectorrestrict82,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorrestrict83 = [
  new google.maps.LatLng(54.43333,10.88333),
  new google.maps.LatLng(54.49583,10.98333),
  new google.maps.LatLng(54.43333,10.98333),
  new google.maps.LatLng(54.38333,10.95),
  new google.maps.LatLng(54.35833,10.95),
  new google.maps.LatLng(54.31667,10.88333),
  new google.maps.LatLng(54.325,10.88333),
new google.maps.LatLng(54.43333,10.88333)];
var poyrestrict83 = new google.maps.Polyline({
  							path: sectorrestrict83,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorrestrict84 = [
  new google.maps.LatLng(54.25,10.68333),
  new google.maps.LatLng(54.325,10.88333),
  new google.maps.LatLng(54.31667,10.88333),
  new google.maps.LatLng(54.23333,10.75),
new google.maps.LatLng(54.25,10.68333)];
var poyrestrict84 = new google.maps.Polyline({
  							path: sectorrestrict84,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorrestrict85 = [
  new google.maps.LatLng(54.41667,10.5),
  new google.maps.LatLng(54.41667,10.66667),
  new google.maps.LatLng(54.33333,10.66667),
  new google.maps.LatLng(54.33333,10.56667),
  new google.maps.LatLng(54.375,10.5),
new google.maps.LatLng(54.41667,10.5)];
var poyrestrict85 = new google.maps.Polyline({
  							path: sectorrestrict85,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorrestrict86 = [
  new google.maps.LatLng(48.71056,11.37278),
  new google.maps.LatLng(48.77806,11.62861),
              new google.maps.LatLng(48.77806,11.62861)];
              var poyrestrict86 = new google.maps.Polyline({
  							path: sectorrestrict86,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var sectorrestrict87 = [
  new google.maps.LatLng(48.67472,11.66528),
new google.maps.LatLng(48.61944,11.44556),
  new google.maps.LatLng(48.62917,11.4),
new google.maps.LatLng(48.71056,11.37278)];
var poyrestrict87 = new google.maps.Polyline({
  							path: sectorrestrict87,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorrestrict88 = [
  new google.maps.LatLng(54.61444,9.77139),
  new google.maps.LatLng(54.465,9.82472),
  new google.maps.LatLng(54.3675,9.23278),
  new google.maps.LatLng(54.49028,9.17278),
  new google.maps.LatLng(54.57139,9.26917),
  new google.maps.LatLng(54.62417,9.58889),
new google.maps.LatLng(54.61444,9.77139)];
var poyrestrict88 = new google.maps.Polyline({
  							path: sectorrestrict88,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorrestrict89 = [
  new google.maps.LatLng(53.16833,7.89028),
  new google.maps.LatLng(53.20556,8.31944),
  new google.maps.LatLng(52.7375,8.57083),
  new google.maps.LatLng(52.7175,7.90389),
new google.maps.LatLng(53.16833,7.89028)];
var poyrestrict89 = new google.maps.Polyline({
  							path: sectorrestrict89,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorrestrict90 = [
  new google.maps.LatLng(52.70611,7.565),
  new google.maps.LatLng(52.7175,7.90389),
  new google.maps.LatLng(52.7375,8.57083),
  new google.maps.LatLng(52.39167,8.19167),
  new google.maps.LatLng(52.28333,8),
  new google.maps.LatLng(52.26472,7.62222),
new google.maps.LatLng(52.70611,7.565)];
var poyrestrict90 = new google.maps.Polyline({
  							path: sectorrestrict90,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorrestrict91 = [
  new google.maps.LatLng(52.68694,7.05972),
  new google.maps.LatLng(52.70611,7.565),
  new google.maps.LatLng(52.26472,7.62222),
  new google.maps.LatLng(52.23722,7.06306),
  new google.maps.LatLng(52.39333,7.06111),
  new google.maps.LatLng(52.66639,7.0575),
new google.maps.LatLng(52.68694,7.05972)];
var poyrestrict91 = new google.maps.Polyline({
  							path: sectorrestrict91,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				

}
