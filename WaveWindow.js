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
function drawwave() {

 
var wave1 = [
  new google.maps.LatLng(48.49111,9.19111),
  new google.maps.LatLng(48.56556,9.37278),
  new google.maps.LatLng(48.57472,9.42222),
  new google.maps.LatLng(48.64833,9.62361),
  new google.maps.LatLng(48.67944,9.74639),
              new google.maps.LatLng(48.67944,9.74639)];
              var polywave1 = new google.maps.Polyline({
  							path: wave1,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var wave2 = [
  new google.maps.LatLng(48.60917,9.7325),
new google.maps.LatLng(48.5625,9.62556),
  new google.maps.LatLng(48.44889,9.15389),
new google.maps.LatLng(48.49111,9.19111)];
var polywave2 = new google.maps.Polyline({
  							path: wave2,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var wave3 = [
  new google.maps.LatLng(48.44889,9.15389),
  new google.maps.LatLng(48.5625,9.62556),
  new google.maps.LatLng(48.49639,9.63917),
  new google.maps.LatLng(48.41639,9.26056),
  new google.maps.LatLng(48.41583,9.14222),
new google.maps.LatLng(48.44889,9.15389)];
var polywave3 = new google.maps.Polyline({
  							path: wave3,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var wave4 = [
  new google.maps.LatLng(48.88444,8.78806),
  new google.maps.LatLng(48.81944,8.7975),
              new google.maps.LatLng(48.81944,8.7975)];
              var polywave4 = new google.maps.Polyline({
  							path: wave4,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var wave5 = [
  new google.maps.LatLng(48.41472,9.01528),
new google.maps.LatLng(48.41333,8.83556),
              new google.maps.LatLng(48.41333,8.83556)];
              var polywave5 = new google.maps.Polyline({
  							path: wave5,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var wave6 = [ new google.maps.LatLng(48.87083,8.72139), new google.maps.LatLng(48.88444,8.78806) ];
              var polywave6 = new google.maps.Polyline({
  							path: wave6,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  
              
var wave7 = [
  new google.maps.LatLng(48.9925,9.53639),
  new google.maps.LatLng(49.00139,9.64194),
              new google.maps.LatLng(49.00139,9.64194)];
              var polywave7 = new google.maps.Polyline({
  							path: wave7,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var wave8 = [
  new google.maps.LatLng(48.705,9.84778),
new google.maps.LatLng(48.67944,9.74639),
              new google.maps.LatLng(48.67944,9.74639)];
              var polywave8 = new google.maps.Polyline({
  							path: wave8,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var wave9 = [ new google.maps.LatLng(48.96306,9.55111), new google.maps.LatLng(48.9925,9.53639) ];
              var polywave9 = new google.maps.Polyline({
  							path: wave9,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  
              
var wave10 = [
  new google.maps.LatLng(48.87083,8.72139),
              new google.maps.LatLng(48.87083,8.72139)];
              var polywave10 = new google.maps.Polyline({
  							path: wave10,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var wave11 = [
  new google.maps.LatLng(48.41333,8.83556),
new google.maps.LatLng(48.4125,8.72861),
              new google.maps.LatLng(48.4125,8.72861)];
              var polywave11 = new google.maps.Polyline({
  							path: wave11,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var wave12 = [ new google.maps.LatLng(48.8025,8.595), new google.maps.LatLng(48.87083,8.72139) ];
              var polywave12 = new google.maps.Polyline({
  							path: wave12,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  
              
var wave13 = [
  new google.maps.LatLng(52.09861,7.2625),
  new google.maps.LatLng(52.11333,7.33),
  new google.maps.LatLng(52,7.3825),
  new google.maps.LatLng(51.88417,7.50722),
  new google.maps.LatLng(51.83333,7.57333),
  new google.maps.LatLng(51.83333,7.46028),
  new google.maps.LatLng(52.02139,7.2625),
new google.maps.LatLng(52.09861,7.2625)];
var polywave13 = new google.maps.Polyline({
  							path: wave13,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var wave14 = [
  new google.maps.LatLng(52.27444,8.09083),
  new google.maps.LatLng(52.27083,8.28611),
  new google.maps.LatLng(52.14528,8.28611),
  new google.maps.LatLng(52.09417,8.24389),
  new google.maps.LatLng(52.1125,8.17833),
new google.maps.LatLng(52.27444,8.09083)];
var polywave14 = new google.maps.Polyline({
  							path: wave14,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var wave15 = [
  new google.maps.LatLng(52.24167,7.93417),
  new google.maps.LatLng(52.27444,8.09083),
  new google.maps.LatLng(52.1125,8.17833),
  new google.maps.LatLng(52.1125,8.0825),
  new google.maps.LatLng(52.21528,8.02333),
new google.maps.LatLng(52.24167,7.93417)];
var polywave15 = new google.maps.Polyline({
  							path: wave15,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var wave16 = [
  new google.maps.LatLng(48.56611,11.86583),
  new google.maps.LatLng(48.58139,12.06389),
  new google.maps.LatLng(48.56472,12.05222),
  new google.maps.LatLng(48.50111,12.04944),
  new google.maps.LatLng(48.49389,11.955),
  new google.maps.LatLng(48.48806,11.8825),
new google.maps.LatLng(48.56611,11.86583)];
var polywave16 = new google.maps.Polyline({
  							path: wave16,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var wave17 = [
  new google.maps.LatLng(53.92194,9.5625),
              new google.maps.LatLng(53.92194,9.5625)];
              var polywave17 = new google.maps.Polyline({
  							path: wave17,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var wave18 = [ new google.maps.LatLng(53.99472,10.22806), new google.maps.LatLng(53.92194,9.5625) ];
              var polywave18 = new google.maps.Polyline({
  							path: wave18,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  
              
var wave19 = [
  new google.maps.LatLng(53.27583,9.77972),
  new google.maps.LatLng(53.34472,10.41139),
              new google.maps.LatLng(53.34472,10.41139)];
              var polywave19 = new google.maps.Polyline({
  							path: wave19,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var wave20 = [ new google.maps.LatLng(53.27583,9.77972), new google.maps.LatLng(53.27583,9.77972) ];
              var polywave20 = new google.maps.Polyline({
  							path: wave20,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  
              
var wave21 = [
  new google.maps.LatLng(53.25528,9.59583),
  new google.maps.LatLng(53.27583,9.77972),
              new google.maps.LatLng(53.27583,9.77972)];
              var polywave21 = new google.maps.Polyline({
  							path: wave21,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var wave22 = [
  new google.maps.LatLng(53.34472,10.41139),
new google.maps.LatLng(53.36306,10.59444),
              new google.maps.LatLng(53.36306,10.59444)];
              var polywave22 = new google.maps.Polyline({
  							path: wave22,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var wave23 = [ new google.maps.LatLng(53.25528,9.59583), new google.maps.LatLng(53.25528,9.59583) ];
              var polywave23 = new google.maps.Polyline({
  							path: wave23,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  
              
var wave24 = [
  new google.maps.LatLng(52.32222,8.98639),
  new google.maps.LatLng(52.32222,9.16),
              new google.maps.LatLng(52.32222,9.16)];
              var polywave24 = new google.maps.Polyline({
  							path: wave24,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var wave25 = [
  new google.maps.LatLng(52.22056,9.27056),
new google.maps.LatLng(52.21333,9.58889),
  new google.maps.LatLng(52.11417,9.58889),
  new google.maps.LatLng(52.12194,9.20472),
              new google.maps.LatLng(52.12194,9.20472)];
              var polywave25 = new google.maps.Polyline({
  							path: wave25,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var wave26 = [ new google.maps.LatLng(52.32222,8.98639), new google.maps.LatLng(52.32222,8.98639) ];
              var polywave26 = new google.maps.Polyline({
  							path: wave26,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  
              
var wave27 = [
  new google.maps.LatLng(52.21333,9.58889),
  new google.maps.LatLng(52.2025,10.06889),
  new google.maps.LatLng(52.10111,10.1225),
  new google.maps.LatLng(52.11417,9.58889),
new google.maps.LatLng(52.21333,9.58889)];
var polywave27 = new google.maps.Polyline({
  							path: wave27,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var wave28 = [
  new google.maps.LatLng(51.65,7.48333),
  new google.maps.LatLng(51.68611,7.63333),
  new google.maps.LatLng(51.62778,7.64028),
  new google.maps.LatLng(51.59083,7.53),
new google.maps.LatLng(51.65,7.48333)];
var polywave28 = new google.maps.Polyline({
  							path: wave28,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var wave29 = [
  new google.maps.LatLng(51.46944,7.62444),
  new google.maps.LatLng(51.50222,7.7175),
  new google.maps.LatLng(51.47861,7.76944),
  new google.maps.LatLng(51.43944,7.63833),
new google.maps.LatLng(51.46944,7.62444)];
var polywave29 = new google.maps.Polyline({
  							path: wave29,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var wave30 = [
  new google.maps.LatLng(51.39167,7.71361),
  new google.maps.LatLng(51.4225,7.85278),
  new google.maps.LatLng(51.35306,7.90389),
  new google.maps.LatLng(51.33333,7.82361),
new google.maps.LatLng(51.39167,7.71361)];
var polywave30 = new google.maps.Polyline({
  							path: wave30,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var wave31 = [
  new google.maps.LatLng(49.69861,11.27194),
  new google.maps.LatLng(49.68167,11.44528),
              new google.maps.LatLng(49.68167,11.44528)];
              var polywave31 = new google.maps.Polyline({
  							path: wave31,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var wave32 = [
  new google.maps.LatLng(49.57222,11.52611),
new google.maps.LatLng(49.58361,11.41333),
  new google.maps.LatLng(49.60194,11.22861),
new google.maps.LatLng(49.69861,11.27194)];
var polywave32 = new google.maps.Polyline({
  							path: wave32,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var wave33 = [
  new google.maps.LatLng(49.57222,11.52611),
              new google.maps.LatLng(49.57222,11.52611)];
              var polywave33 = new google.maps.Polyline({
  							path: wave33,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var wave34 = [
  new google.maps.LatLng(49.5,11.53944),
new google.maps.LatLng(49.5,11.43694),
              new google.maps.LatLng(49.5,11.43694)];
              var polywave34 = new google.maps.Polyline({
  							path: wave34,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var wave35 = [ new google.maps.LatLng(49.58361,11.41333), new google.maps.LatLng(49.57222,11.52611) ];
              var polywave35 = new google.maps.Polyline({
  							path: wave35,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  
              
var wave36 = [
  new google.maps.LatLng(52.59944,10.2125),
  new google.maps.LatLng(52.59472,10.38861),
              new google.maps.LatLng(52.59472,10.38861)];
              var polywave36 = new google.maps.Polyline({
  							path: wave36,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var wave37 = [
  new google.maps.LatLng(52.5,10.41806),
new google.maps.LatLng(52.5,10.25472),
              new google.maps.LatLng(52.5,10.25472)];
              var polywave37 = new google.maps.Polyline({
  							path: wave37,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var wave38 = [ new google.maps.LatLng(52.59944,10.2125), new google.maps.LatLng(52.59944,10.2125) ];
              var polywave38 = new google.maps.Polyline({
  							path: wave38,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  
              
var wave39 = [
  new google.maps.LatLng(52.63333,10.18389),
  new google.maps.LatLng(52.62861,10.36917),
              new google.maps.LatLng(52.62861,10.36917)];
              var polywave39 = new google.maps.Polyline({
  							path: wave39,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var wave40 = [
  new google.maps.LatLng(52.59472,10.38861),
new google.maps.LatLng(52.59944,10.2125),
              new google.maps.LatLng(52.59944,10.2125)];
              var polywave40 = new google.maps.Polyline({
  							path: wave40,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var wave41 = [ new google.maps.LatLng(52.63333,10.18389), new google.maps.LatLng(52.63333,10.18389) ];
              var polywave41 = new google.maps.Polyline({
  							path: wave41,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  
              
var wave42 = [
  new google.maps.LatLng(49.41833,11.41417),
  new google.maps.LatLng(49.40889,11.51722),
              new google.maps.LatLng(49.40889,11.51722)];
              var polywave42 = new google.maps.Polyline({
  							path: wave42,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var wave43 = [
  new google.maps.LatLng(49.25389,11.34167),
new google.maps.LatLng(49.25778,11.30333),
  new google.maps.LatLng(49.3275,11.31972),
              new google.maps.LatLng(49.3275,11.31972)];
              var polywave43 = new google.maps.Polyline({
  							path: wave43,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var wave44 = [ new google.maps.LatLng(49.41833,11.41417), new google.maps.LatLng(49.41833,11.41417) ];
              var polywave44 = new google.maps.Polyline({
  							path: wave44,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  
              
var wave45 = [
  new google.maps.LatLng(49.42444,10.63417),
  new google.maps.LatLng(49.41389,10.74667),
  new google.maps.LatLng(49.385,11.04722),
  new google.maps.LatLng(49.28472,11.02611),
  new google.maps.LatLng(49.31472,10.71778),
              new google.maps.LatLng(49.31472,10.71778)];
              var polywave45 = new google.maps.Polyline({
  							path: wave45,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var wave46 = [ new google.maps.LatLng(49.42444,10.63417), new google.maps.LatLng(49.42444,10.63417) ];
              var polywave46 = new google.maps.Polyline({
  							path: wave46,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  
              
var wave47 = [
  new google.maps.LatLng(50.29,7.405),
  new google.maps.LatLng(50.24306,7.52194),
  new google.maps.LatLng(50.115,7.61722),
  new google.maps.LatLng(50.22583,7.3425),
new google.maps.LatLng(50.29,7.405)];
var polywave47 = new google.maps.Polyline({
  							path: wave47,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var wave48 = [
  new google.maps.LatLng(49.77417,6.90417),
  new google.maps.LatLng(49.70333,7.08139),
  new google.maps.LatLng(49.66167,7.00583),
  new google.maps.LatLng(49.7225,6.85444),
new google.maps.LatLng(49.77417,6.90417)];
var polywave48 = new google.maps.Polyline({
  							path: wave48,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var wave49 = [
  new google.maps.LatLng(50.89361,6.69444),
  new google.maps.LatLng(50.93333,6.66667),
  new google.maps.LatLng(50.97694,6.70722),
  new google.maps.LatLng(51.00806,6.77639),
  new google.maps.LatLng(50.94889,6.91417),
  new google.maps.LatLng(50.93,6.82306),
new google.maps.LatLng(50.89361,6.69444)];
var polywave49 = new google.maps.Polyline({
  							path: wave49,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var wave50 = [
  new google.maps.LatLng(47.84722,9.39722),
  new google.maps.LatLng(47.8975,9.53167),
  new google.maps.LatLng(47.89889,9.83472),
  new google.maps.LatLng(47.79972,9.91806),
  new google.maps.LatLng(47.53111,9.92111),
  new google.maps.LatLng(47.56667,9.75),
  new google.maps.LatLng(47.72778,9.81667),
  new google.maps.LatLng(47.85,9.71389),
new google.maps.LatLng(47.84722,9.39722)];
var polywave50 = new google.maps.Polyline({
  							path: wave50,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var wave51 = [
  new google.maps.LatLng(48.92417,8.29111),
  new google.maps.LatLng(49.04306,8.40278),
  new google.maps.LatLng(48.99778,8.44333),
  new google.maps.LatLng(48.91667,8.43611),
  new google.maps.LatLng(48.91972,8.30167),
new google.maps.LatLng(48.92417,8.29111)];
var polywave51 = new google.maps.Polyline({
  							path: wave51,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var wave52 = [
  new google.maps.LatLng(51.44389,13.84139),
  new google.maps.LatLng(51.47472,13.88361),
              new google.maps.LatLng(51.47472,13.88361)];
              var polywave52 = new google.maps.Polyline({
  							path: wave52,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var wave53 = [
  new google.maps.LatLng(51.25167,14.29056),
new google.maps.LatLng(51.23667,14.12639),
              new google.maps.LatLng(51.23667,14.12639)];
              var polywave53 = new google.maps.Polyline({
  							path: wave53,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var wave54 = [ new google.maps.LatLng(51.33944,13.99), new google.maps.LatLng(51.44389,13.84139) ];
              var polywave54 = new google.maps.Polyline({
  							path: wave54,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  
              
var wave55 = [
  new google.maps.LatLng(50.98389,13.77722),
  new google.maps.LatLng(51.23667,14.12639),
  new google.maps.LatLng(51.25167,14.29056),
  new google.maps.LatLng(51.03389,13.98778),
  new google.maps.LatLng(50.97417,13.84444),
  new google.maps.LatLng(50.97833,13.83806),
new google.maps.LatLng(50.98389,13.77722)];
var polywave55 = new google.maps.Polyline({
  							path: wave55,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var wave56 = [
  new google.maps.LatLng(50.72167,6.84389),
  new google.maps.LatLng(50.69389,7.04),
  new google.maps.LatLng(50.62722,7.04972),
new google.maps.LatLng(50.72167,6.84389)];
var polywave56 = new google.maps.Polyline({
  							path: wave56,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var wave57 = [
  new google.maps.LatLng(50.59306,7.055),
  new google.maps.LatLng(50.62722,7.04972),
  new google.maps.LatLng(50.60167,7.10528),
  new google.maps.LatLng(50.62056,7.21222),
  new google.maps.LatLng(50.67222,7.53056),
  new google.maps.LatLng(50.685,7.615),
  new google.maps.LatLng(50.65,7.71667),
  new google.maps.LatLng(50.54972,7.44111),
new google.maps.LatLng(50.59306,7.055)];
var polywave57 = new google.maps.Polyline({
  							path: wave57,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var wave58 = [
  new google.maps.LatLng(51.10361,7.33167),
  new google.maps.LatLng(51.11028,7.4975),
  new google.maps.LatLng(51.03861,7.66778),
  new google.maps.LatLng(50.99333,7.70194),
  new google.maps.LatLng(50.96694,7.70306),
  new google.maps.LatLng(50.9675,7.65833),
  new google.maps.LatLng(51.00778,7.56167),
new google.maps.LatLng(51.10361,7.33167)];
var polywave58 = new google.maps.Polyline({
  							path: wave58,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var wave59 = [
  new google.maps.LatLng(51.11028,7.4975),
  new google.maps.LatLng(51.11972,7.75083),
  new google.maps.LatLng(51.01917,7.82389),
  new google.maps.LatLng(50.965,7.83528),
  new google.maps.LatLng(50.96694,7.70306),
  new google.maps.LatLng(50.99333,7.70194),
  new google.maps.LatLng(51.03861,7.66778),
new google.maps.LatLng(51.11028,7.4975)];
var polywave59 = new google.maps.Polyline({
  							path: wave59,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var wave60 = [
  new google.maps.LatLng(51.00806,6.77639),
  new google.maps.LatLng(51.0875,6.95444),
  new google.maps.LatLng(51.09556,7.13917),
  new google.maps.LatLng(51.03611,7.175),
  new google.maps.LatLng(51.00056,7.05528),
  new google.maps.LatLng(51.01722,7.03028),
  new google.maps.LatLng(50.94889,6.91417),
new google.maps.LatLng(51.00806,6.77639)];
var polywave60 = new google.maps.Polyline({
  							path: wave60,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var wave61 = [
  new google.maps.LatLng(51.13,6.29333),
  new google.maps.LatLng(51.25028,6.25667),
  new google.maps.LatLng(51.27861,6.33),
  new google.maps.LatLng(51.11583,6.38444),
new google.maps.LatLng(51.13,6.29333)];
var polywave61 = new google.maps.Polyline({
  							path: wave61,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var wave62 = [
  new google.maps.LatLng(51.55528,7.04917),
  new google.maps.LatLng(51.57833,6.97),
  new google.maps.LatLng(51.62389,7.08833),
  new google.maps.LatLng(51.60361,7.13972),
  new google.maps.LatLng(51.60472,7.19861),
  new google.maps.LatLng(51.53167,7.28722),
  new google.maps.LatLng(51.51833,7.27722),
  new google.maps.LatLng(51.41694,7.31861),
  new google.maps.LatLng(51.38083,7.3575),
  new google.maps.LatLng(51.335,7.25472),
new google.maps.LatLng(51.55528,7.04917)];
var polywave62 = new google.maps.Polyline({
  							path: wave62,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var wave63 = [
  new google.maps.LatLng(49.71806,11.07444),
  new google.maps.LatLng(49.69861,11.27194),
  new google.maps.LatLng(49.60194,11.22861),
  new google.maps.LatLng(49.62333,11.01667),
new google.maps.LatLng(49.71806,11.07444)];
var polywave63 = new google.maps.Polyline({
  							path: wave63,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var wave64 = [
  new google.maps.LatLng(51.13,6.29333),
  new google.maps.LatLng(51.11583,6.38444),
  new google.maps.LatLng(51.00278,6.42222),
  new google.maps.LatLng(51.00278,6.33167),
new google.maps.LatLng(51.13,6.29333)];
var polywave64 = new google.maps.Polyline({
  							path: wave64,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var wave65 = [
  new google.maps.LatLng(51.11583,6.38444),
  new google.maps.LatLng(51.08528,6.57639),
  new google.maps.LatLng(51.04806,6.62111),
  new google.maps.LatLng(51.00278,6.52194),
  new google.maps.LatLng(51.00278,6.42222),
new google.maps.LatLng(51.11583,6.38444)];
var polywave65 = new google.maps.Polyline({
  							path: wave65,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var wave66 = [
  new google.maps.LatLng(51.55861,7.55972),
  new google.maps.LatLng(51.57917,7.61861),
  new google.maps.LatLng(51.52278,7.62528),
  new google.maps.LatLng(51.51278,7.62972),
  new google.maps.LatLng(51.50833,7.70444),
  new google.maps.LatLng(51.50222,7.7175),
  new google.maps.LatLng(51.46944,7.62444),
  new google.maps.LatLng(51.515,7.60306),
new google.maps.LatLng(51.55861,7.55972)];
var polywave66 = new google.maps.Polyline({
  							path: wave66,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var wave67 = [
  new google.maps.LatLng(49.66167,7.00583),
  new google.maps.LatLng(49.70333,7.08139),
  new google.maps.LatLng(49.84333,7.35111),
  new google.maps.LatLng(49.61306,7.12722),
new google.maps.LatLng(49.66167,7.00583)];
var polywave67 = new google.maps.Polyline({
  							path: wave67,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var wave68 = [
  new google.maps.LatLng(51.59083,7.53),
  new google.maps.LatLng(51.62778,7.64028),
  new google.maps.LatLng(51.59056,7.61722),
  new google.maps.LatLng(51.57917,7.61861),
  new google.maps.LatLng(51.55861,7.55972),
  new google.maps.LatLng(51.57833,7.54),
new google.maps.LatLng(51.59083,7.53)];
var polywave68 = new google.maps.Polyline({
  							path: wave68,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var wave69 = [
  new google.maps.LatLng(51.43944,7.63833),
  new google.maps.LatLng(51.47861,7.76944),
  new google.maps.LatLng(51.44972,7.8325),
  new google.maps.LatLng(51.4225,7.85278),
  new google.maps.LatLng(51.39167,7.71361),
  new google.maps.LatLng(51.42889,7.64333),
new google.maps.LatLng(51.43944,7.63833)];
var polywave69 = new google.maps.Polyline({
  							path: wave69,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var wave70 = [
  new google.maps.LatLng(50.69389,7.04),
  new google.maps.LatLng(50.69639,7.12722),
  new google.maps.LatLng(50.62056,7.21222),
  new google.maps.LatLng(50.60167,7.10528),
  new google.maps.LatLng(50.62722,7.04972),
new google.maps.LatLng(50.69389,7.04)];
var polywave70 = new google.maps.Polyline({
  							path: wave70,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var wave71 = [
  new google.maps.LatLng(50.7075,7.52806),
  new google.maps.LatLng(50.685,7.615),
  new google.maps.LatLng(50.67222,7.53056),
new google.maps.LatLng(50.7075,7.52806)];
var polywave71 = new google.maps.Polyline({
  							path: wave71,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var wave72 = [
  new google.maps.LatLng(50.69639,7.12722),
  new google.maps.LatLng(50.7075,7.52806),
  new google.maps.LatLng(50.67222,7.53056),
  new google.maps.LatLng(50.62056,7.21222),
new google.maps.LatLng(50.69639,7.12722)];
var polywave72 = new google.maps.Polyline({
  							path: wave72,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var wave73 = [
  new google.maps.LatLng(50.74167,6.8),
  new google.maps.LatLng(50.72167,6.84389),
  new google.maps.LatLng(50.62722,7.04972),
  new google.maps.LatLng(50.59306,7.055),
  new google.maps.LatLng(50.63611,6.87278),
new google.maps.LatLng(50.74167,6.8)];
var polywave73 = new google.maps.Polyline({
  							path: wave73,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var wave74 = [
  new google.maps.LatLng(48.67944,9.74639),
  new google.maps.LatLng(48.705,9.84778),
              new google.maps.LatLng(48.705,9.84778)];
              var polywave74 = new google.maps.Polyline({
  							path: wave74,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var wave75 = [
  new google.maps.LatLng(48.65944,9.84778),
new google.maps.LatLng(48.60917,9.7325),
              new google.maps.LatLng(48.60917,9.7325)];
              var polywave75 = new google.maps.Polyline({
  							path: wave75,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var wave76 = [ new google.maps.LatLng(48.67944,9.74639), new google.maps.LatLng(48.67944,9.74639) ];
              var polywave76 = new google.maps.Polyline({
  							path: wave76,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  
              
var wave77 = [
  new google.maps.LatLng(49.57194,11.52639),
  new google.maps.LatLng(49.55806,11.66056),
              new google.maps.LatLng(49.55806,11.66056)];
              var polywave77 = new google.maps.Polyline({
  							path: wave77,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var wave78 = [
  new google.maps.LatLng(49.33083,11.60583),
new google.maps.LatLng(49.34389,11.47167),
              new google.maps.LatLng(49.34389,11.47167)];
              var polywave78 = new google.maps.Polyline({
  							path: wave78,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var wave79 = [ new google.maps.LatLng(49.57194,11.52639), new google.maps.LatLng(49.57194,11.52639) ];
              var polywave79 = new google.maps.Polyline({
  							path: wave79,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  
              
var wave80 = [
  new google.maps.LatLng(49.75833,10.64444),
  new google.maps.LatLng(49.74306,10.81),
              new google.maps.LatLng(49.74306,10.81)];
              var polywave80 = new google.maps.Polyline({
  							path: wave80,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var wave81 = [
  new google.maps.LatLng(49.31472,10.71778),
new google.maps.LatLng(49.33028,10.55306),
              new google.maps.LatLng(49.33028,10.55306)];
              var polywave81 = new google.maps.Polyline({
  							path: wave81,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var wave82 = [ new google.maps.LatLng(49.75833,10.64444), new google.maps.LatLng(49.75833,10.64444) ];
              var polywave82 = new google.maps.Polyline({
  							path: wave82,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  
              
var wave83 = [
  new google.maps.LatLng(51.51778,11.58194),
  new google.maps.LatLng(51.52528,11.73333),
              new google.maps.LatLng(51.52528,11.73333)];
              var polywave83 = new google.maps.Polyline({
  							path: wave83,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var wave84 = [
  new google.maps.LatLng(51.27306,11.76111),
new google.maps.LatLng(51.26528,11.61194),
              new google.maps.LatLng(51.26528,11.61194)];
              var polywave84 = new google.maps.Polyline({
  							path: wave84,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var wave85 = [ new google.maps.LatLng(51.51778,11.58194), new google.maps.LatLng(51.51778,11.58194) ];
              var polywave85 = new google.maps.Polyline({
  							path: wave85,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  
              
var wave86 = [
  new google.maps.LatLng(48.5625,9.62556),
  new google.maps.LatLng(48.65944,9.84778),
              new google.maps.LatLng(48.65944,9.84778)];
              var polywave86 = new google.maps.Polyline({
  							path: wave86,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var wave87 = [
  new google.maps.LatLng(48.705,9.84778),
new google.maps.LatLng(48.71417,9.93722),
              new google.maps.LatLng(48.71417,9.93722)];
              var polywave87 = new google.maps.Polyline({
  							path: wave87,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var wave88 = [
  new google.maps.LatLng(48.63083,9.93194),
new google.maps.LatLng(48.49639,9.63917),
new google.maps.LatLng(48.5625,9.62556)];
var polywave88 = new google.maps.Polyline({
  							path: wave88,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var wave89 = [
  new google.maps.LatLng(49.00139,9.64194),
  new google.maps.LatLng(49.01111,9.75222),
              new google.maps.LatLng(49.01111,9.75222)];
              var polywave89 = new google.maps.Polyline({
  							path: wave89,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var wave90 = [
  new google.maps.LatLng(48.71417,9.93722),
new google.maps.LatLng(48.705,9.84778),
              new google.maps.LatLng(48.705,9.84778)];
              var polywave90 = new google.maps.Polyline({
  							path: wave90,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var wave91 = [ new google.maps.LatLng(49.00139,9.64194), new google.maps.LatLng(49.00139,9.64194) ];
              var polywave91 = new google.maps.Polyline({
  							path: wave91,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  
              
var wave92 = [
  new google.maps.LatLng(48.48806,11.8825),
  new google.maps.LatLng(48.49389,11.955),
  new google.maps.LatLng(48.46278,11.95306),
  new google.maps.LatLng(48.45778,11.89361),
new google.maps.LatLng(48.48806,11.8825)];
var polywave92 = new google.maps.Polyline({
  							path: wave92,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var wave93 = [
  new google.maps.LatLng(48.50611,12.11167),
  new google.maps.LatLng(48.52722,12.38278),
              new google.maps.LatLng(48.52722,12.38278)];
              var polywave93 = new google.maps.Polyline({
  							path: wave93,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var wave94 = [
  new google.maps.LatLng(48.46861,12.41333),
new google.maps.LatLng(48.44944,12.14917),
new google.maps.LatLng(48.50611,12.11167)];
var polywave94 = new google.maps.Polyline({
  							path: wave94,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var wave95 = [
  new google.maps.LatLng(48.58139,12.06389),
  new google.maps.LatLng(48.60111,12.32111),
              new google.maps.LatLng(48.60111,12.32111)];
              var polywave95 = new google.maps.Polyline({
  							path: wave95,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var wave96 = [
  new google.maps.LatLng(48.52722,12.38278),
new google.maps.LatLng(48.50611,12.11167),
  new google.maps.LatLng(48.50111,12.04944),
  new google.maps.LatLng(48.56472,12.05222),
new google.maps.LatLng(48.58139,12.06389)];
var polywave96 = new google.maps.Polyline({
  							path: wave96,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var wave97 = [
  new google.maps.LatLng(48.65556,12.11583),
  new google.maps.LatLng(48.67472,12.36306),
              new google.maps.LatLng(48.67472,12.36306)];
              var polywave97 = new google.maps.Polyline({
  							path: wave97,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var wave98 = [
  new google.maps.LatLng(48.47583,12.51389),
new google.maps.LatLng(48.46861,12.41333),
              new google.maps.LatLng(48.46861,12.41333)];
              var polywave98 = new google.maps.Polyline({
  							path: wave98,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var wave99 = [
  new google.maps.LatLng(48.60111,12.32111),
new google.maps.LatLng(48.58139,12.06389),
new google.maps.LatLng(48.65556,12.11583)];
var polywave99 = new google.maps.Polyline({
  							path: wave99,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var wave100 = [
  new google.maps.LatLng(48.74472,12.17833),
  new google.maps.LatLng(48.75111,12.25889),
  new google.maps.LatLng(48.6875,12.51056),
  new google.maps.LatLng(48.48111,12.58861),
  new google.maps.LatLng(48.47583,12.51389),
              new google.maps.LatLng(48.47583,12.51389)];
              var polywave100 = new google.maps.Polyline({
  							path: wave100,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var wave101 = [
  new google.maps.LatLng(48.67472,12.36306),
new google.maps.LatLng(48.65556,12.11583),
new google.maps.LatLng(48.74472,12.17833)];
var polywave101 = new google.maps.Polyline({
  							path: wave101,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var wave102 = [
  new google.maps.LatLng(51.75833,8.695),
  new google.maps.LatLng(51.75833,8.88111),
  new google.maps.LatLng(51.65667,8.98667),
  new google.maps.LatLng(51.645,8.98667),
  new google.maps.LatLng(51.61417,8.91),
  new google.maps.LatLng(51.64528,8.83889),
  new google.maps.LatLng(51.72917,8.75139),
  new google.maps.LatLng(51.71,8.70361),
new google.maps.LatLng(51.75833,8.695)];
var polywave102 = new google.maps.Polyline({
  							path: wave102,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var wave103 = [
  new google.maps.LatLng(51.645,8.98667),
  new google.maps.LatLng(51.5875,8.98667),
  new google.maps.LatLng(51.5825,8.98222),
  new google.maps.LatLng(51.61417,8.91),
new google.maps.LatLng(51.645,8.98667)];
var polywave103 = new google.maps.Polyline({
  							path: wave103,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var wave104 = [
  new google.maps.LatLng(51.54528,8.21389),
  new google.maps.LatLng(51.58361,8.25861),
  new google.maps.LatLng(51.52917,8.25194),
  new google.maps.LatLng(51.43222,8.35361),
  new google.maps.LatLng(51.43083,8.29139),
  new google.maps.LatLng(51.50889,8.20944),
new google.maps.LatLng(51.54528,8.21389)];
var polywave104 = new google.maps.Polyline({
  							path: wave104,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var wave105 = [
  new google.maps.LatLng(51.58361,8.25861),
  new google.maps.LatLng(51.54917,8.29472),
  new google.maps.LatLng(51.43361,8.41611),
  new google.maps.LatLng(51.43222,8.35361),
  new google.maps.LatLng(51.52917,8.25194),
new google.maps.LatLng(51.58361,8.25861)];
var polywave105 = new google.maps.Polyline({
  							path: wave105,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var wave106 = [
  new google.maps.LatLng(49.66667,7.11667),
  new google.maps.LatLng(49.7,7.28333),
  new google.maps.LatLng(49.70083,7.31417),
  new google.maps.LatLng(49.58333,7.2),
new google.maps.LatLng(49.66667,7.11667)];
var polywave106 = new google.maps.Polyline({
  							path: wave106,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var wave107 = [
  new google.maps.LatLng(51.44917,6.33333),
  new google.maps.LatLng(51.53583,6.55722),
  new google.maps.LatLng(51.47722,6.55306),
  new google.maps.LatLng(51.42417,6.41583),
new google.maps.LatLng(51.44917,6.33333)];
var polywave107 = new google.maps.Polyline({
  							path: wave107,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var wave108 = [
  new google.maps.LatLng(51.48667,14.45333),
  new google.maps.LatLng(51.46111,14.65417),
  new google.maps.LatLng(51.43111,14.65417),
  new google.maps.LatLng(51.43889,14.60722),
  new google.maps.LatLng(51.43611,14.545),
  new google.maps.LatLng(51.42056,14.50944),
  new google.maps.LatLng(51.45,14.50778),
new google.maps.LatLng(51.48667,14.45333)];
var polywave108 = new google.maps.Polyline({
  							path: wave108,
  							map: GoogleMap,
  							strokeColor: "#1C3FD8",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
drawedrsCircle(9.21083,48.68861,21.21969265638,"#1C3FD8",1,91,103);
drawedrsCircle(9.21083,48.68861,18.135008043881,"#1C3FD8",1,205,296);
drawedrsCircle(9.21083,48.68861,22.245036843476,"#1C3FD8",1,222,300);
drawedrsCircle(9.21083,48.68861,25.334175443031,"#1C3FD8",1,42,88);
drawedrsCircle(9.21083,48.68861,21.21969265638,"#1C3FD8",1,39,91);
drawedrsCircle(9.21083,48.68861,22.223627554176,"#1C3FD8",1,222,300);
drawedrsCircle(9.21083,48.68861,25.320483600536,"#1C3FD8",1,229,286);
drawedrsCircle(9.99528,53.63694,22.972084596125,"#1C3FD8",1,318,21);
drawedrsCircle(9.99528,53.63694,22.976746533853,"#1C3FD8",1,140,200);
drawedrsCircle(9.99528,53.63694,22.991953829212,"#1C3FD8",1,140,200);
drawedrsCircle(9.99528,53.63694,26.965295738418,"#1C3FD8",1,127,212);
drawedrsCircle(9.68472,52.46167,20.953262996664,"#1C3FD8",1,227,247);
drawedrsCircle(9.68472,52.46167,26.937485223001,"#1C3FD8",1,221,252);
drawedrsCircle(11.07917,49.49972,17.940941254366,"#1C3FD8",1,52,76);
drawedrsCircle(11.07917,49.49972,17.936449335524,"#1C3FD8",1,76,90);
drawedrsCircle(11.07917,49.49972,13.93967044105,"#1C3FD8",1,69,90);
drawedrsCircle(9.68472,52.46167,26.902048457647,"#1C3FD8",1,72,85);
drawedrsCircle(9.68472,52.46167,20.952913686621,"#1C3FD8",1,67,83);
drawedrsCircle(9.68472,52.46167,26.904966659719,"#1C3FD8",1,68,72);
drawedrsCircle(9.68472,52.46167,20.960350060995,"#1C3FD8",1,60,67);
drawedrsCircle(11.07917,49.49972,17.931476886122,"#1C3FD8",1,108,145);
drawedrsCircle(11.07917,49.49972,13.960795378453,"#1C3FD8",1,110,138);
drawedrsCircle(11.07917,49.49972,17.949899001362,"#1C3FD8",1,232,256);
drawedrsCircle(13.78056,51.1425,20.30221781058,"#1C3FD8",1,11,71);
drawedrsCircle(13.78056,51.1425,14.177641777298,"#1C3FD8",1,34,66);
drawedrsCircle(9.21083,48.68861,25.241169529368,"#1C3FD8",1,88,94);
drawedrsCircle(9.21083,48.68861,21.218951025101,"#1C3FD8",1,91,103);
drawedrsCircle(11.07917,49.49972,22.907957674948,"#1C3FD8",1,81,116);
drawedrsCircle(11.07917,49.49972,17.944789824071,"#1C3FD8",1,76,121);
drawedrsCircle(11.07917,49.49972,17.960139332724,"#1C3FD8",1,232,324);
drawedrsCircle(11.07917,49.49972,22.912480035776,"#1C3FD8",1,244,313);
drawedrsCircle(12.20972,51.41806,18.929082032547,"#1C3FD8",1,243,290);
drawedrsCircle(12.20972,51.41806,24.205033639958,"#1C3FD8",1,248,285);
drawedrsCircle(9.21083,48.68861,25.294031213082,"#1C3FD8",1,88,94);
drawedrsCircle(9.21083,48.68861,28.801867555563,"#1C3FD8",1,87,97);
drawedrsCircle(9.21083,48.68861,28.829308171712,"#1C3FD8",1,48,87);
drawedrsCircle(9.21083,48.68861,25.241169529368,"#1C3FD8",1,42,88);
drawedrsCircle(11.78611,48.35389,25.923957797316,"#1C3FD8",1,66,74);
drawedrsCircle(11.78611,48.35389,25.936231571068,"#1C3FD8",1,55,66);
drawedrsCircle(11.78611,48.35389,29.936561699201,"#1C3FD8",1,50,76);
drawedrsCircle(11.78611,48.35389,25.908151858328,"#1C3FD8",1,55,74);
drawedrsCircle(11.78611,48.35389,29.888816851018,"#1C3FD8",1,50,76);

}
