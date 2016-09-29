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
function drawclassc() {


var sectorclassc1 = [
  new google.maps.LatLng(48.43056,11.14611),
  new google.maps.LatLng(48.52722,12.38278),
              new google.maps.LatLng(48.52722,12.38278)];
              var polyclassc1 = new google.maps.Polyline({
  							path: sectorclassc1,
  							map: GoogleMap,
  							strokeColor: "#21A6FA",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var sectorclassc2 = [
  new google.maps.LatLng(48.27639,12.42472),
new google.maps.LatLng(48.18,11.19194),
              new google.maps.LatLng(48.18,11.19194)];
              var polyclassc2 = new google.maps.Polyline({
  							path: sectorclassc2,
  							map: GoogleMap,
  							strokeColor: "#21A6FA",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var sectorclassc3 = [ new google.maps.LatLng(48.43056,11.14611), new google.maps.LatLng(48.43056,11.14611) ];
              var polyclassc3 = new google.maps.Polyline({
  							path: sectorclassc3,
  							map: GoogleMap,
  							strokeColor: "#21A6FA",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  
              
var sectorclassc4 = [
  new google.maps.LatLng(48.51361,11.18111),
  new google.maps.LatLng(48.60111,12.32083),
              new google.maps.LatLng(48.60111,12.32083)];
              var polyclassc4 = new google.maps.Polyline({
  							path: sectorclassc4,
  							map: GoogleMap,
  							strokeColor: "#21A6FA",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var sectorclassc5 = [
  new google.maps.LatLng(48.52722,12.38278),
new google.maps.LatLng(48.43056,11.14611),
              new google.maps.LatLng(48.43056,11.14611)];
              var polyclassc5 = new google.maps.Polyline({
  							path: sectorclassc5,
  							map: GoogleMap,
  							strokeColor: "#21A6FA",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var sectorclassc6 = [ new google.maps.LatLng(48.51361,11.18111), new google.maps.LatLng(48.51361,11.18111) ];
              var polyclassc6 = new google.maps.Polyline({
  							path: sectorclassc6,
  							map: GoogleMap,
  							strokeColor: "#21A6FA",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  
              
var sectorclassc7 = [
  new google.maps.LatLng(48.57861,11.11444),
  new google.maps.LatLng(48.67472,12.36333),
              new google.maps.LatLng(48.67472,12.36333)];
              var polyclassc7 = new google.maps.Polyline({
  							path: sectorclassc7,
  							map: GoogleMap,
  							strokeColor: "#21A6FA",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var sectorclassc8 = [
  new google.maps.LatLng(48.12861,12.45389),
new google.maps.LatLng(48.03222,11.21361),
              new google.maps.LatLng(48.03222,11.21361)];
              var polyclassc8 = new google.maps.Polyline({
  							path: sectorclassc8,
  							map: GoogleMap,
  							strokeColor: "#21A6FA",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var sectorclassc9 = [ new google.maps.LatLng(48.57861,11.11444), new google.maps.LatLng(48.57861,11.11444) ];
              var polyclassc9 = new google.maps.Polyline({
  							path: sectorclassc9,
  							map: GoogleMap,
  							strokeColor: "#21A6FA",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  
              
var sectorclassc10 = [
  new google.maps.LatLng(50.06111,8.12889),
  new google.maps.LatLng(50.14278,8.46389),
  new google.maps.LatLng(50.23889,8.86556),
  new google.maps.LatLng(50.04,8.97389),
  new google.maps.LatLng(49.80028,8.57889),
  new google.maps.LatLng(49.79889,8.47278),
  new google.maps.LatLng(49.85833,8.24444),
  new google.maps.LatLng(49.96722,8.1825),
new google.maps.LatLng(50.06111,8.12889)];
var polyclassc10 = new google.maps.Polyline({
  							path: sectorclassc10,
  							map: GoogleMap,
  							strokeColor: "#21A6FA",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorclassc11 = [
  new google.maps.LatLng(50.075,7.975),
  new google.maps.LatLng(50.31167,8.95444),
  new google.maps.LatLng(50.37472,9.22306),
  new google.maps.LatLng(50.01611,9.42972),
  new google.maps.LatLng(49.93222,9.24111),
  new google.maps.LatLng(49.73972,8.81417),
  new google.maps.LatLng(49.73694,8.61306),
  new google.maps.LatLng(49.73389,8.39333),
  new google.maps.LatLng(49.76917,7.87194),
  new google.maps.LatLng(49.83222,7.69583),
new google.maps.LatLng(50.075,7.975)];
var polyclassc11 = new google.maps.Polyline({
  							path: sectorclassc11,
  							map: GoogleMap,
  							strokeColor: "#21A6FA",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorclassc12 = [
  new google.maps.LatLng(49.73694,8.61306),
  new google.maps.LatLng(49.68694,8.60639),
  new google.maps.LatLng(49.66278,8.1675),
  new google.maps.LatLng(49.76917,7.87194),
  new google.maps.LatLng(49.73389,8.39333),
new google.maps.LatLng(49.73694,8.61306)];
var polyclassc12 = new google.maps.Polyline({
  							path: sectorclassc12,
  							map: GoogleMap,
  							strokeColor: "#21A6FA",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorclassc13 = [
  new google.maps.LatLng(50.14667,7.99889),
  new google.maps.LatLng(50.35972,8.88111),
  new google.maps.LatLng(50.31167,8.95444),
  new google.maps.LatLng(50.075,7.975),
new google.maps.LatLng(50.14667,7.99889)];
var polyclassc13 = new google.maps.Polyline({
  							path: sectorclassc13,
  							map: GoogleMap,
  							strokeColor: "#21A6FA",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorclassc14 = [
  new google.maps.LatLng(49.93222,9.24111),
  new google.maps.LatLng(49.74306,9.21611),
  new google.maps.LatLng(49.73972,8.81417),
new google.maps.LatLng(49.93222,9.24111)];
var polyclassc14 = new google.maps.Polyline({
  							path: sectorclassc14,
  							map: GoogleMap,
  							strokeColor: "#21A6FA",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorclassc15 = [
  new google.maps.LatLng(50.19417,7.68028),
  new google.maps.LatLng(50.26583,8.03889),
  new google.maps.LatLng(50.14667,7.99889),
  new google.maps.LatLng(50.075,7.975),
  new google.maps.LatLng(49.83222,7.69583),
new google.maps.LatLng(50.19417,7.68028)];
var polyclassc15 = new google.maps.Polyline({
  							path: sectorclassc15,
  							map: GoogleMap,
  							strokeColor: "#21A6FA",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorclassc16 = [
  new google.maps.LatLng(50.46306,9.065),
  new google.maps.LatLng(50.52028,9.37083),
  new google.maps.LatLng(50.51083,9.48611),
  new google.maps.LatLng(50.45306,9.58361),
  new google.maps.LatLng(49.92417,9.70472),
  new google.maps.LatLng(49.75556,9.515),
  new google.maps.LatLng(49.74306,9.21611),
  new google.maps.LatLng(49.93222,9.24111),
  new google.maps.LatLng(50.01611,9.42972),
  new google.maps.LatLng(50.37472,9.22306),
new google.maps.LatLng(50.46306,9.065)];
var polyclassc16 = new google.maps.Polyline({
  							path: sectorclassc16,
  							map: GoogleMap,
  							strokeColor: "#21A6FA",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorclassc17 = [
  new google.maps.LatLng(50.26583,8.03889),
  new google.maps.LatLng(50.46306,9.065),
  new google.maps.LatLng(50.37472,9.22306),
  new google.maps.LatLng(50.31167,8.95444),
  new google.maps.LatLng(50.35972,8.88111),
  new google.maps.LatLng(50.14667,7.99889),
new google.maps.LatLng(50.26583,8.03889)];
var polyclassc17 = new google.maps.Polyline({
  							path: sectorclassc17,
  							map: GoogleMap,
  							strokeColor: "#21A6FA",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorclassc18 = [
  new google.maps.LatLng(51.3225,6.97639),
  new google.maps.LatLng(51.34944,7.03444),
  new google.maps.LatLng(51.43222,6.93528),
  new google.maps.LatLng(51.40528,6.87806),
new google.maps.LatLng(51.3225,6.97639)];
var polyclassc18 = new google.maps.Polyline({
  							path: sectorclassc18,
  							map: GoogleMap,
  							strokeColor: "#21A6FA",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorclassc19 = [
  new google.maps.LatLng(50.77944,7.03389),
  new google.maps.LatLng(50.86167,6.97306),
  new google.maps.LatLng(50.83806,6.885),
  new google.maps.LatLng(50.82556,6.83861),
  new google.maps.LatLng(50.77222,6.86694),
  new google.maps.LatLng(50.76111,6.97361),
new google.maps.LatLng(50.77944,7.03389)];
var polyclassc19 = new google.maps.Polyline({
  							path: sectorclassc19,
  							map: GoogleMap,
  							strokeColor: "#21A6FA",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorclassc20 = [
  new google.maps.LatLng(51.27861,6.33),
  new google.maps.LatLng(51.55528,7.04917),
  new google.maps.LatLng(51.335,7.25472),
  new google.maps.LatLng(51.07083,6.67028),
  new google.maps.LatLng(51.11583,6.38444),
new google.maps.LatLng(51.27861,6.33)];
var polyclassc20 = new google.maps.Polyline({
  							path: sectorclassc20,
  							map: GoogleMap,
  							strokeColor: "#21A6FA",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorclassc21 = [
  new google.maps.LatLng(50.62056,7.21222),
  new google.maps.LatLng(50.77944,7.03389),
  new google.maps.LatLng(50.86167,6.97306),
  new google.maps.LatLng(50.94889,6.91417),
  new google.maps.LatLng(50.93,6.82306),
  new google.maps.LatLng(50.89361,6.69444),
  new google.maps.LatLng(50.93333,6.66667),
  new google.maps.LatLng(50.97694,6.70722),
  new google.maps.LatLng(51.0875,6.95444),
  new google.maps.LatLng(51.09778,7.19028),
  new google.maps.LatLng(50.98333,7.4775),
  new google.maps.LatLng(50.93806,7.51083),
  new google.maps.LatLng(50.67222,7.53056),
new google.maps.LatLng(50.62056,7.21222)];
var polyclassc21 = new google.maps.Polyline({
  							path: sectorclassc21,
  							map: GoogleMap,
  							strokeColor: "#21A6FA",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorclassc22 = [
  new google.maps.LatLng(50.80361,6.75694),
  new google.maps.LatLng(50.82556,6.83861),
  new google.maps.LatLng(50.77222,6.86694),
  new google.maps.LatLng(50.76111,6.97361),
  new google.maps.LatLng(50.72167,6.84389),
  new google.maps.LatLng(50.74167,6.8),
new google.maps.LatLng(50.80361,6.75694)];
var polyclassc22 = new google.maps.Polyline({
  							path: sectorclassc22,
  							map: GoogleMap,
  							strokeColor: "#21A6FA",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorclassc23 = [
  new google.maps.LatLng(50.93,6.82306),
  new google.maps.LatLng(50.83806,6.885),
  new google.maps.LatLng(50.80361,6.75694),
  new google.maps.LatLng(50.89361,6.69444),
new google.maps.LatLng(50.93,6.82306)];
var polyclassc23 = new google.maps.Polyline({
  							path: sectorclassc23,
  							map: GoogleMap,
  							strokeColor: "#21A6FA",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorclassc24 = [
  new google.maps.LatLng(51.27861,6.33),
  new google.maps.LatLng(51.35139,6.38306),
  new google.maps.LatLng(51.64667,7.1475),
  new google.maps.LatLng(51.51667,7.30556),
  new google.maps.LatLng(51.42389,7.34333),
  new google.maps.LatLng(51.39056,7.37917),
  new google.maps.LatLng(51.335,7.25472),
  new google.maps.LatLng(51.55528,7.04917),
new google.maps.LatLng(51.27861,6.33)];
var polyclassc24 = new google.maps.Polyline({
  							path: sectorclassc24,
  							map: GoogleMap,
  							strokeColor: "#21A6FA",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorclassc25 = [
  new google.maps.LatLng(50.685,7.615),
  new google.maps.LatLng(50.67222,7.53056),
  new google.maps.LatLng(50.93806,7.51083),
  new google.maps.LatLng(50.98333,7.4775),
  new google.maps.LatLng(51.09778,7.19028),
  new google.maps.LatLng(51.10361,7.33167),
  new google.maps.LatLng(51.00778,7.56167),
  new google.maps.LatLng(50.9625,7.59472),
new google.maps.LatLng(50.685,7.615)];
var polyclassc25 = new google.maps.Polyline({
  							path: sectorclassc25,
  							map: GoogleMap,
  							strokeColor: "#21A6FA",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorclassc26 = [
  new google.maps.LatLng(51.11583,6.38444),
  new google.maps.LatLng(51.07083,6.67028),
  new google.maps.LatLng(51.00278,6.52194),
  new google.maps.LatLng(51.00278,6.42222),
new google.maps.LatLng(51.11583,6.38444)];
var polyclassc26 = new google.maps.Polyline({
  							path: sectorclassc26,
  							map: GoogleMap,
  							strokeColor: "#21A6FA",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorclassc27 = [
  new google.maps.LatLng(50.72167,6.84389),
  new google.maps.LatLng(50.77944,7.03389),
  new google.maps.LatLng(50.62056,7.21222),
  new google.maps.LatLng(50.60167,7.10528),
new google.maps.LatLng(50.72167,6.84389)];
var polyclassc27 = new google.maps.Polyline({
  							path: sectorclassc27,
  							map: GoogleMap,
  							strokeColor: "#21A6FA",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorclassc28 = [
  new google.maps.LatLng(51.33333,6.23194),
  new google.maps.LatLng(51.36278,6.2575),
  new google.maps.LatLng(51.65556,7.01417),
  new google.maps.LatLng(51.64667,7.1475),
  new google.maps.LatLng(51.35139,6.38306),
  new google.maps.LatLng(51.27861,6.33),
  new google.maps.LatLng(51.00278,6.42222),
  new google.maps.LatLng(51.00278,6.33167),
new google.maps.LatLng(51.33333,6.23194)];
var polyclassc28 = new google.maps.Polyline({
  							path: sectorclassc28,
  							map: GoogleMap,
  							strokeColor: "#21A6FA",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorclassc29 = [
  new google.maps.LatLng(51.28889,7.15167),
  new google.maps.LatLng(51.39056,7.37917),
  new google.maps.LatLng(51.31306,7.4625),
  new google.maps.LatLng(51.26,7.34028),
new google.maps.LatLng(51.28889,7.15167)];
var polyclassc29 = new google.maps.Polyline({
  							path: sectorclassc29,
  							map: GoogleMap,
  							strokeColor: "#21A6FA",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorclassc30 = [
  new google.maps.LatLng(51.10361,7.33167),
  new google.maps.LatLng(51.11028,7.4975),
  new google.maps.LatLng(51.03861,7.66778),
  new google.maps.LatLng(50.99333,7.70194),
  new google.maps.LatLng(50.65,7.71667),
  new google.maps.LatLng(50.54972,7.44111),
  new google.maps.LatLng(50.59306,7.055),
  new google.maps.LatLng(50.63611,6.87278),
  new google.maps.LatLng(50.74167,6.8),
  new google.maps.LatLng(50.60167,7.10528),
  new google.maps.LatLng(50.62056,7.21222),
  new google.maps.LatLng(50.67222,7.53056),
  new google.maps.LatLng(50.685,7.615),
  new google.maps.LatLng(50.9625,7.59472),
  new google.maps.LatLng(51.00778,7.56167),
new google.maps.LatLng(51.10361,7.33167)];
var polyclassc30 = new google.maps.Polyline({
  							path: sectorclassc30,
  							map: GoogleMap,
  							strokeColor: "#21A6FA",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorclassc31 = [
  new google.maps.LatLng(50.93,6.82306),
  new google.maps.LatLng(50.94889,6.91417),
  new google.maps.LatLng(50.86167,6.97306),
  new google.maps.LatLng(50.83806,6.885),
new google.maps.LatLng(50.93,6.82306)];
var polyclassc31 = new google.maps.Polyline({
  							path: sectorclassc31,
  							map: GoogleMap,
  							strokeColor: "#21A6FA",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorclassc32 = [
  new google.maps.LatLng(51.36278,6.2575),
  new google.maps.LatLng(51.44917,6.33333),
  new google.maps.LatLng(51.75972,7.13833),
  new google.maps.LatLng(51.58778,7.52278),
  new google.maps.LatLng(51.30611,7.68111),
  new google.maps.LatLng(51.31306,7.4625),
  new google.maps.LatLng(51.42389,7.34333),
  new google.maps.LatLng(51.51667,7.30556),
  new google.maps.LatLng(51.64667,7.1475),
  new google.maps.LatLng(51.65556,7.01417),
new google.maps.LatLng(51.36278,6.2575)];
var polyclassc32 = new google.maps.Polyline({
  							path: sectorclassc32,
  							map: GoogleMap,
  							strokeColor: "#21A6FA",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorclassc33 = [
  new google.maps.LatLng(51.00278,6.33167),
  new google.maps.LatLng(51.00278,6.52194),
  new google.maps.LatLng(51.28889,7.15167),
  new google.maps.LatLng(51.26,7.34028),
  new google.maps.LatLng(51.31306,7.4625),
  new google.maps.LatLng(51.11028,7.4975),
  new google.maps.LatLng(51.0875,6.95444),
  new google.maps.LatLng(50.97694,6.70722),
  new google.maps.LatLng(50.93333,6.66667),
  new google.maps.LatLng(50.63611,6.87278),
  new google.maps.LatLng(50.66944,6.73056),
  new google.maps.LatLng(50.94444,6.35),
new google.maps.LatLng(51.00278,6.33167)];
var polyclassc33 = new google.maps.Polyline({
  							path: sectorclassc33,
  							map: GoogleMap,
  							strokeColor: "#21A6FA",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorclassc34 = [
  new google.maps.LatLng(51.11028,7.4975),
  new google.maps.LatLng(51.11972,7.75083),
  new google.maps.LatLng(51.01917,7.82389),
  new google.maps.LatLng(50.71694,7.88778),
  new google.maps.LatLng(50.65,7.71667),
  new google.maps.LatLng(50.99333,7.70194),
  new google.maps.LatLng(51.03861,7.66778),
new google.maps.LatLng(51.11028,7.4975)];
var polyclassc34 = new google.maps.Polyline({
  							path: sectorclassc34,
  							map: GoogleMap,
  							strokeColor: "#21A6FA",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorclassc35 = [
  new google.maps.LatLng(51.31306,7.4625),
  new google.maps.LatLng(51.30611,7.68111),
  new google.maps.LatLng(51.29028,7.69),
  new google.maps.LatLng(51.03333,7.90083),
  new google.maps.LatLng(50.74556,7.96111),
  new google.maps.LatLng(50.71694,7.88778),
  new google.maps.LatLng(51.01917,7.82389),
  new google.maps.LatLng(51.11972,7.75083),
  new google.maps.LatLng(51.11028,7.4975),
new google.maps.LatLng(51.31306,7.4625)];
var polyclassc35 = new google.maps.Polyline({
  							path: sectorclassc35,
  							map: GoogleMap,
  							strokeColor: "#21A6FA",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorclassc36 = [
  new google.maps.LatLng(51.325,6.44972),
  new google.maps.LatLng(51.25917,6.56833),
  new google.maps.LatLng(51.25389,6.55806),
  new google.maps.LatLng(51.17083,6.65694),
  new google.maps.LatLng(51.1375,6.56722),
  new google.maps.LatLng(51.23,6.37917),
  new google.maps.LatLng(51.26583,6.37),
new google.maps.LatLng(51.325,6.44972)];
var polyclassc36 = new google.maps.Polyline({
  							path: sectorclassc36,
  							map: GoogleMap,
  							strokeColor: "#21A6FA",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorclassc37 = [
  new google.maps.LatLng(48.89639,9.48694),
              new google.maps.LatLng(48.89639,9.48694)];
              var polyclassc37 = new google.maps.Polyline({
  							path: sectorclassc37,
  							map: GoogleMap,
  							strokeColor: "#21A6FA",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var sectorclassc38 = [
  new google.maps.LatLng(48.64833,9.62361),
new google.maps.LatLng(48.57472,9.42222),
  new google.maps.LatLng(48.49528,9.00556),
              new google.maps.LatLng(48.49528,9.00556)];
              var polyclassc38 = new google.maps.Polyline({
  							path: sectorclassc38,
  							map: GoogleMap,
  							strokeColor: "#21A6FA",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var sectorclassc39 = [ new google.maps.LatLng(48.78111,8.88194), new google.maps.LatLng(48.89639,9.48694) ];
              var polyclassc39 = new google.maps.Polyline({
  							path: sectorclassc39,
  							map: GoogleMap,
  							strokeColor: "#21A6FA",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  
              
var sectorclassc40 = [
  new google.maps.LatLng(53.54583,9.54528),
              new google.maps.LatLng(53.54583,9.54528)];
              var polyclassc40 = new google.maps.Polyline({
  							path: sectorclassc40,
  							map: GoogleMap,
  							strokeColor: "#21A6FA",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var sectorclassc41 = [
  new google.maps.LatLng(53.385,9.77944),
new google.maps.LatLng(53.40222,9.6925),
  new google.maps.LatLng(53.48611,9.58278),
new google.maps.LatLng(53.54583,9.54528)];
var polyclassc41 = new google.maps.Polyline({
  							path: sectorclassc41,
  							map: GoogleMap,
  							strokeColor: "#21A6FA",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorclassc42 = [
  new google.maps.LatLng(49.64444,10.79806),
  new google.maps.LatLng(49.58361,11.41333),
              new google.maps.LatLng(49.58361,11.41333)];
              var polyclassc42 = new google.maps.Polyline({
  							path: sectorclassc42,
  							map: GoogleMap,
  							strokeColor: "#21A6FA",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var sectorclassc43 = [
  new google.maps.LatLng(49.355,11.35944),
new google.maps.LatLng(49.41389,10.74667),
              new google.maps.LatLng(49.41389,10.74667)];
              var polyclassc43 = new google.maps.Polyline({
  							path: sectorclassc43,
  							map: GoogleMap,
  							strokeColor: "#21A6FA",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var sectorclassc44 = [ new google.maps.LatLng(49.64444,10.79806), new google.maps.LatLng(49.64444,10.79806) ];
              var polyclassc44 = new google.maps.Polyline({
  							path: sectorclassc44,
  							map: GoogleMap,
  							strokeColor: "#21A6FA",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  
              
var sectorclassc45 = [
  new google.maps.LatLng(52.61944,9.29861),
  new google.maps.LatLng(52.6025,10.08806),
              new google.maps.LatLng(52.6025,10.08806)];
              var polyclassc45 = new google.maps.Polyline({
  							path: sectorclassc45,
  							map: GoogleMap,
  							strokeColor: "#21A6FA",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var sectorclassc46 = [
  new google.maps.LatLng(52.28639,10.04861),
new google.maps.LatLng(52.29861,9.5),
  new google.maps.LatLng(52.3025,9.30167),
              new google.maps.LatLng(52.3025,9.30167)];
              var polyclassc46 = new google.maps.Polyline({
  							path: sectorclassc46,
  							map: GoogleMap,
  							strokeColor: "#21A6FA",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var sectorclassc47 = [ new google.maps.LatLng(52.61944,9.29861), new google.maps.LatLng(52.61944,9.29861) ];
              var polyclassc47 = new google.maps.Polyline({
  							path: sectorclassc47,
  							map: GoogleMap,
  							strokeColor: "#21A6FA",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  
              
var sectorclassc48 = [
  new google.maps.LatLng(47.69306,8.64194),
  new google.maps.LatLng(47.535,8.74139),
              new google.maps.LatLng(47.535,8.74139)];
              var polyclassc48 = new google.maps.Polyline({
  							path: sectorclassc48,
  							map: GoogleMap,
  							strokeColor: "#21A6FA",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var sectorclassc49 = [
  new google.maps.LatLng(47.46139,8.33),
new google.maps.LatLng(47.44694,8.2975),
  new google.maps.LatLng(47.64861,8.20667),
  new google.maps.LatLng(47.67306,8.27667),
  new google.maps.LatLng(47.69222,8.46389),
  new google.maps.LatLng(47.6775,8.53583),
new google.maps.LatLng(47.69306,8.64194)];
var polyclassc49 = new google.maps.Polyline({
  							path: sectorclassc49,
  							map: GoogleMap,
  							strokeColor: "#21A6FA",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorclassc50 = [
  new google.maps.LatLng(47.69306,8.64194),
  new google.maps.LatLng(47.77361,8.59139),
  new google.maps.LatLng(47.76778,8.41861),
  new google.maps.LatLng(47.68139,8.19167),
  new google.maps.LatLng(47.64861,8.20667),
  new google.maps.LatLng(47.67306,8.27667),
  new google.maps.LatLng(47.69222,8.46389),
  new google.maps.LatLng(47.6775,8.53583),
new google.maps.LatLng(47.69306,8.64194)];
var polyclassc50 = new google.maps.Polyline({
  							path: sectorclassc50,
  							map: GoogleMap,
  							strokeColor: "#21A6FA",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorclassc51 = [
  new google.maps.LatLng(47.69306,8.64194),
  new google.maps.LatLng(47.595,8.70361),
  new google.maps.LatLng(47.59222,8.81778),
  new google.maps.LatLng(47.54389,8.92),
  new google.maps.LatLng(47.78194,8.87),
  new google.maps.LatLng(47.77361,8.59139),
new google.maps.LatLng(47.69306,8.64194)];
var polyclassc51 = new google.maps.Polyline({
  							path: sectorclassc51,
  							map: GoogleMap,
  							strokeColor: "#21A6FA",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorclassc52 = [
  new google.maps.LatLng(47.76778,8.41861),
  new google.maps.LatLng(47.68139,8.19167),
  new google.maps.LatLng(47.44694,8.2975),
  new google.maps.LatLng(47.39778,8.18833),
  new google.maps.LatLng(47.28917,8.34194),
  new google.maps.LatLng(47.24528,8.22972),
  new google.maps.LatLng(47.37083,8.08222),
  new google.maps.LatLng(47.51,8),
  new google.maps.LatLng(47.64278,8),
  new google.maps.LatLng(47.70417,8.18139),
  new google.maps.LatLng(47.7625,8.2625),
new google.maps.LatLng(47.76778,8.41861)];
var polyclassc52 = new google.maps.Polyline({
  							path: sectorclassc52,
  							map: GoogleMap,
  							strokeColor: "#21A6FA",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorclassc53 = [
  new google.maps.LatLng(47.51,8),
  new google.maps.LatLng(47.37083,8.08222),
  new google.maps.LatLng(47.24528,8.22972),
  new google.maps.LatLng(47.14861,7.98222),
  new google.maps.LatLng(47.32,7.85861),
  new google.maps.LatLng(47.43111,7.77806),
  new google.maps.LatLng(47.54,7.69889),
  new google.maps.LatLng(47.64278,8),
new google.maps.LatLng(47.51,8)];
var polyclassc53 = new google.maps.Polyline({
  							path: sectorclassc53,
  							map: GoogleMap,
  							strokeColor: "#21A6FA",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorclassc54 = [
  new google.maps.LatLng(47.8625,8.775),
  new google.maps.LatLng(47.76778,8.41861),
  new google.maps.LatLng(47.7625,8.2625),
  new google.maps.LatLng(47.86611,8.40722),
new google.maps.LatLng(47.8625,8.775)];
var polyclassc54 = new google.maps.Polyline({
  							path: sectorclassc54,
  							map: GoogleMap,
  							strokeColor: "#21A6FA",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorclassc55 = [
  new google.maps.LatLng(47.8625,8.775),
  new google.maps.LatLng(47.78194,8.87),
  new google.maps.LatLng(47.77361,8.59139),
  new google.maps.LatLng(47.76778,8.41861),
new google.maps.LatLng(47.8625,8.775)];
var polyclassc55 = new google.maps.Polyline({
  							path: sectorclassc55,
  							map: GoogleMap,
  							strokeColor: "#21A6FA",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorclassc56 = [
  new google.maps.LatLng(47.75639,9.00889),
  new google.maps.LatLng(47.73833,9.23222),
  new google.maps.LatLng(47.58917,9.23222),
  new google.maps.LatLng(47.52417,9.18389),
  new google.maps.LatLng(47.37111,9.17889),
  new google.maps.LatLng(47.34694,9.08111),
  new google.maps.LatLng(47.27333,9.04556),
  new google.maps.LatLng(47.25528,8.9725),
  new google.maps.LatLng(47.26028,8.91778),
  new google.maps.LatLng(47.35222,8.94389),
  new google.maps.LatLng(47.37778,9.05639),
  new google.maps.LatLng(47.53194,9.08167),
  new google.maps.LatLng(47.53806,9),
  new google.maps.LatLng(47.54389,8.92),
  new google.maps.LatLng(47.78194,8.87),
new google.maps.LatLng(47.75639,9.00889)];
var polyclassc56 = new google.maps.Polyline({
  							path: sectorclassc56,
  							map: GoogleMap,
  							strokeColor: "#21A6FA",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorclassc57 = [
  new google.maps.LatLng(47.72222,9.42722),
  new google.maps.LatLng(47.73833,9.23222),
  new google.maps.LatLng(47.58917,9.23222),
  new google.maps.LatLng(47.58667,9.45361),
new google.maps.LatLng(47.72222,9.42722)];
var polyclassc57 = new google.maps.Polyline({
  							path: sectorclassc57,
  							map: GoogleMap,
  							strokeColor: "#21A6FA",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorclassc58 = [
  new google.maps.LatLng(53.92194,9.5625),
  new google.maps.LatLng(53.99472,10.22806),
              new google.maps.LatLng(53.99472,10.22806)];
              var polyclassc58 = new google.maps.Polyline({
  							path: sectorclassc58,
  							map: GoogleMap,
  							strokeColor: "#21A6FA",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var sectorclassc59 = [
  new google.maps.LatLng(53.34472,10.41139),
new google.maps.LatLng(53.27583,9.77972),
              new google.maps.LatLng(53.27583,9.77972)];
              var polyclassc59 = new google.maps.Polyline({
  							path: sectorclassc59,
  							map: GoogleMap,
  							strokeColor: "#21A6FA",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var sectorclassc60 = [ new google.maps.LatLng(53.92194,9.5625), new google.maps.LatLng(53.92194,9.5625) ];
              var polyclassc60 = new google.maps.Polyline({
  							path: sectorclassc60,
  							map: GoogleMap,
  							strokeColor: "#21A6FA",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  
              
var sectorclassc61 = [
  new google.maps.LatLng(52.62167,9.17417),
  new google.maps.LatLng(52.59944,10.2125),
              new google.maps.LatLng(52.59944,10.2125)];
              var polyclassc61 = new google.maps.Polyline({
  							path: sectorclassc61,
  							map: GoogleMap,
  							strokeColor: "#21A6FA",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var sectorclassc62 = [
  new google.maps.LatLng(52.2025,10.06889),
new google.maps.LatLng(52.22056,9.27056),
              new google.maps.LatLng(52.22056,9.27056)];
              var polyclassc62 = new google.maps.Polyline({
  							path: sectorclassc62,
  							map: GoogleMap,
  							strokeColor: "#21A6FA",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var sectorclassc63 = [ new google.maps.LatLng(52.62167,9.17417), new google.maps.LatLng(52.62167,9.17417) ];
              var polyclassc63 = new google.maps.Polyline({
  							path: sectorclassc63,
  							map: GoogleMap,
  							strokeColor: "#21A6FA",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  
              
var sectorclassc64 = [
  new google.maps.LatLng(49.74306,10.81),
  new google.maps.LatLng(49.68167,11.44528),
              new google.maps.LatLng(49.68167,11.44528)];
              var polyclassc64 = new google.maps.Polyline({
  							path: sectorclassc64,
  							map: GoogleMap,
  							strokeColor: "#21A6FA",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var sectorclassc65 = [
  new google.maps.LatLng(49.25389,11.34167),
new google.maps.LatLng(49.31472,10.71778),
              new google.maps.LatLng(49.31472,10.71778)];
              var polyclassc65 = new google.maps.Polyline({
  							path: sectorclassc65,
  							map: GoogleMap,
  							strokeColor: "#21A6FA",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var sectorclassc66 = [ new google.maps.LatLng(49.74306,10.81), new google.maps.LatLng(49.74306,10.81) ];
              var polyclassc66 = new google.maps.Polyline({
  							path: sectorclassc66,
  							map: GoogleMap,
  							strokeColor: "#21A6FA",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  
              
var sectorclassc67 = [
  new google.maps.LatLng(52.31444,12.75),
  new google.maps.LatLng(52.10083,13),
  new google.maps.LatLng(52.10694,13.75972),
  new google.maps.LatLng(52.21667,14.12083),
  new google.maps.LatLng(52.38056,14.20972),
              new google.maps.LatLng(52.38056,14.20972)];
              var polyclassc67 = new google.maps.Polyline({
  							path: sectorclassc67,
  							map: GoogleMap,
  							strokeColor: "#21A6FA",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var sectorclassc68 = [
  new google.maps.LatLng(52.65056,14.05417),
new google.maps.LatLng(52.85,13.67083),
  new google.maps.LatLng(52.79222,12.76694),
  new google.maps.LatLng(52.72694,12.67056),
              new google.maps.LatLng(52.72694,12.67056)];
              var polyclassc68 = new google.maps.Polyline({
  							path: sectorclassc68,
  							map: GoogleMap,
  							strokeColor: "#21A6FA",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var sectorclassc69 = [ new google.maps.LatLng(52.31444,12.75), new google.maps.LatLng(52.31444,12.75) ];
              var polyclassc69 = new google.maps.Polyline({
  							path: sectorclassc69,
  							map: GoogleMap,
  							strokeColor: "#21A6FA",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  
              
var sectorclassc70 = [
  new google.maps.LatLng(52.66667,12.8375),
              new google.maps.LatLng(52.66667,12.8375)];
              var polyclassc70 = new google.maps.Polyline({
  							path: sectorclassc70,
  							map: GoogleMap,
  							strokeColor: "#21A6FA",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var sectorclassc71 = [
  new google.maps.LatLng(52.39139,12.89361),
new google.maps.LatLng(52.16667,13.16361),
  new google.maps.LatLng(52.16667,13.58333),
  new google.maps.LatLng(52.21639,13.92111),
              new google.maps.LatLng(52.21639,13.92111)];
              var polyclassc71 = new google.maps.Polyline({
  							path: sectorclassc71,
  							map: GoogleMap,
  							strokeColor: "#21A6FA",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var sectorclassc72 = [
  new google.maps.LatLng(52.57389,13.90972),
new google.maps.LatLng(52.7475,13.66528),
              new google.maps.LatLng(52.7475,13.66528)];
              var polyclassc72 = new google.maps.Polyline({
  							path: sectorclassc72,
  							map: GoogleMap,
  							strokeColor: "#21A6FA",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var sectorclassc73 = [
  new google.maps.LatLng(52.80056,13.56611),
new google.maps.LatLng(52.75,12.975),
new google.maps.LatLng(52.66667,12.8375)];
var polyclassc73 = new google.maps.Polyline({
  							path: sectorclassc73,
  							map: GoogleMap,
  							strokeColor: "#21A6FA",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorclassc74 = [
  new google.maps.LatLng(52.47972,12.44806),
  new google.maps.LatLng(52.39694,12.49611),
  new google.maps.LatLng(52.31833,12.55472),
  new google.maps.LatLng(52.18639,12.69694),
  new google.maps.LatLng(51.99917,13.07083),
  new google.maps.LatLng(52.03333,13.78333),
  new google.maps.LatLng(52.1675,14.25306),
  new google.maps.LatLng(52.32,14.39194),
              new google.maps.LatLng(52.32,14.39194)];
              var polyclassc74 = new google.maps.Polyline({
  							path: sectorclassc74,
  							map: GoogleMap,
  							strokeColor: "#21A6FA",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var sectorclassc75 = [
  new google.maps.LatLng(52.715,14.21528),
new google.maps.LatLng(52.90889,13.89667),
  new google.maps.LatLng(52.86944,12.68056),
  new google.maps.LatLng(52.76667,12.50833),
              new google.maps.LatLng(52.76667,12.50833)];
              var polyclassc75 = new google.maps.Polyline({
  							path: sectorclassc75,
  							map: GoogleMap,
  							strokeColor: "#21A6FA",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var sectorclassc76 = [ new google.maps.LatLng(52.47972,12.44806), new google.maps.LatLng(52.47972,12.44806) ];
              var polyclassc76 = new google.maps.Polyline({
  							path: sectorclassc76,
  							map: GoogleMap,
  							strokeColor: "#21A6FA",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  
              
var sectorclassc77 = [
  new google.maps.LatLng(51.9175,13.00167),
  new google.maps.LatLng(51.9175,13.29111),
  new google.maps.LatLng(52.03333,13.78333),
  new google.maps.LatLng(52.1675,14.25306),
  new google.maps.LatLng(52.32,14.39194),
              new google.maps.LatLng(52.32,14.39194)];
              var polyclassc77 = new google.maps.Polyline({
  							path: sectorclassc77,
  							map: GoogleMap,
  							strokeColor: "#21A6FA",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var sectorclassc78 = [
  new google.maps.LatLng(52.715,14.21528),
new google.maps.LatLng(52.90889,13.89667),
  new google.maps.LatLng(52.86944,12.68056),
  new google.maps.LatLng(52.86472,12.56),
  new google.maps.LatLng(52.81833,12.40694),
              new google.maps.LatLng(52.81833,12.40694)];
              var polyclassc78 = new google.maps.Polyline({
  							path: sectorclassc78,
  							map: GoogleMap,
  							strokeColor: "#21A6FA",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var sectorclassc79 = [
  new google.maps.LatLng(52.34778,12.37667),
new google.maps.LatLng(52.15,12.67972),
new google.maps.LatLng(51.9175,13.00167)];
var polyclassc79 = new google.maps.Polyline({
  							path: sectorclassc79,
  							map: GoogleMap,
  							strokeColor: "#21A6FA",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorclassc80 = [
  new google.maps.LatLng(48.18,11.19194),
  new google.maps.LatLng(48.27639,12.42472),
              new google.maps.LatLng(48.27639,12.42472)];
              var polyclassc80 = new google.maps.Polyline({
  							path: sectorclassc80,
  							map: GoogleMap,
  							strokeColor: "#21A6FA",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var sectorclassc81 = [
  new google.maps.LatLng(48.19167,12.3875),
new google.maps.LatLng(48.105,11.25583),
              new google.maps.LatLng(48.105,11.25583)];
              var polyclassc81 = new google.maps.Polyline({
  							path: sectorclassc81,
  							map: GoogleMap,
  							strokeColor: "#21A6FA",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var sectorclassc82 = [ new google.maps.LatLng(48.18,11.19194), new google.maps.LatLng(48.18,11.19194) ];
              var polyclassc82 = new google.maps.Polyline({
  							path: sectorclassc82,
  							map: GoogleMap,
  							strokeColor: "#21A6FA",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  
              
var sectorclassc83 = [
  new google.maps.LatLng(48.65611,11.03611),
  new google.maps.LatLng(48.75111,12.25889),
  new google.maps.LatLng(48.6875,12.51056),
  new google.maps.LatLng(48.30083,12.65639),
              new google.maps.LatLng(48.30083,12.65639)];
              var polyclassc83 = new google.maps.Polyline({
  							path: sectorclassc83,
  							map: GoogleMap,
  							strokeColor: "#21A6FA",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var sectorclassc84 = [
  new google.maps.LatLng(48.05028,12.53),
new google.maps.LatLng(47.94444,11.16667),
              new google.maps.LatLng(47.94444,11.16667)];
              var polyclassc84 = new google.maps.Polyline({
  							path: sectorclassc84,
  							map: GoogleMap,
  							strokeColor: "#21A6FA",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var sectorclassc85 = [
  new google.maps.LatLng(48.10194,11),
new google.maps.LatLng(48.36667,11),
  new google.maps.LatLng(48.41361,10.91583),
              new google.maps.LatLng(48.41361,10.91583)];
              var polyclassc85 = new google.maps.Polyline({
  							path: sectorclassc85,
  							map: GoogleMap,
  							strokeColor: "#21A6FA",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var sectorclassc86 = [ new google.maps.LatLng(48.65611,11.03611), new google.maps.LatLng(48.65611,11.03611) ];
              var polyclassc86 = new google.maps.Polyline({
  							path: sectorclassc86,
  							map: GoogleMap,
  							strokeColor: "#21A6FA",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  
              
        
drawedrsCircle(11.78611,48.35389,25.923957797316,"#21A6FA",1,66,100);
drawedrsCircle(11.78611,48.35389,25.920254437571,"#21A6FA",1,246,280);
drawedrsCircle(11.78611,48.35389,25.927097139214,"#21A6FA",1,55,66);
drawedrsCircle(11.78611,48.35389,25.907340922904,"#21A6FA",1,280,292);
drawedrsCircle(11.78611,48.35389,29.944780764169,"#21A6FA",1,50,117);
drawedrsCircle(11.78611,48.35389,29.943790863254,"#21A6FA",1,230,297);
drawedrsCircle(9.21083,48.68861,16.567198252367,"#21A6FA",1,41,98);
drawedrsCircle(9.21083,48.68861,14.172865616913,"#21A6FA",1,215,293);
drawedrsCircle(9.99528,53.63694,16.930385889745,"#21A6FA",1,251,207);
drawedrsCircle(11.07917,49.49972,13.94825215975,"#21A6FA",1,69,128);
drawedrsCircle(11.07917,49.49972,13.951478734005,"#21A6FA",1,248,309);
drawedrsCircle(9.68472,52.46167,16.972240391757,"#21A6FA",1,60,128);
drawedrsCircle(9.68472,52.46167,16.96892483249,"#21A6FA",1,236,304);
drawedrsCircle(8.55056,47.46,8.9483983924384,"#21A6FA",1,271,60);
drawedrsCircle(9.99528,53.63694,22.993413133429,"#21A6FA",1,21,140);
drawedrsCircle(9.99528,53.63694,22.991953829212,"#21A6FA",1,200,318);
drawedrsCircle(9.68472,52.46167,20.960350060995,"#21A6FA",1,67,138);
drawedrsCircle(9.68472,52.46167,20.968500282565,"#21A6FA",1,227,297);
drawedrsCircle(11.07917,49.49972,17.940941254366,"#21A6FA",1,52,145);
drawedrsCircle(11.07917,49.49972,17.949899001362,"#21A6FA",1,232,324);
drawedrsCircle(13.555,52.39028,23.980720204398,"#21A6FA",1,49,91);
drawedrsCircle(13.2675,52.55917,23.947930315762,"#21A6FA",1,232,295);
drawedrsCircle(13.2675,52.55917,16.939626524695,"#21A6FA",1,234,293);
drawedrsCircle(13.555,52.39028,17.006270790601,"#21A6FA",1,49,128);
drawedrsCircle(13.31139,52.56361,16.957970388895,"#21A6FA",1,33,49);
drawedrsCircle(13.555,52.39028,30.955337430056,"#21A6FA",1,51,97);
drawedrsCircle(13.2675,52.55917,30.298528926134,"#21A6FA",1,261,295);
drawedrsCircle(13.555,52.39028,30.955337430056,"#21A6FA",1,51,97);
drawedrsCircle(13.2675,52.55917,34.943179637974,"#21A6FA",1,249,297);
drawedrsCircle(11.78611,48.35389,25.899645766234,"#21A6FA",1,100,112);
drawedrsCircle(11.78611,48.35389,25.924292187911,"#21A6FA",1,235,246);
drawedrsCircle(11.78611,48.35389,34.859178767515,"#21A6FA",1,95,121);
drawedrsCircle(11.78611,48.35389,34.90202794815,"#21A6FA",1,225,245);
drawedrsCircle(11.78611,48.35389,34.859735258226,"#21A6FA",1,276,302);

}
