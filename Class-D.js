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
function drawclassd() {

var sectorclassD1 = [
  new google.maps.LatLng(51.10944,13.38139),
  new google.maps.LatLng(51.37861,13.75028),
              new google.maps.LatLng(51.37861,13.75028)];
              var polyclassD1 = new google.maps.Polyline({
  							path: sectorclassD1,
  							map: GoogleMap,
  							strokeColor: "#0D5B8C",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var sectorclassD2 = [
  new google.maps.LatLng(51.23667,14.12639),
new google.maps.LatLng(50.99028,13.78583),
  new google.maps.LatLng(50.92389,13.55972),
              new google.maps.LatLng(50.92389,13.55972)];
              var polyclassD2 = new google.maps.Polyline({
  							path: sectorclassD2,
  							map: GoogleMap,
  							strokeColor: "#0D5B8C",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var sectorclassD3 = [ new google.maps.LatLng(51.10944,13.38139), new google.maps.LatLng(51.10944,13.38139) ];
              var polyclassD3 = new google.maps.Polyline({
  							path: sectorclassD3,
  							map: GoogleMap,
  							strokeColor: "#0D5B8C",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  
              
var sectorclassD4 = [
  new google.maps.LatLng(48.41333,8.83556),
              new google.maps.LatLng(48.41333,8.83556)];
              var polyclassD4 = new google.maps.Polyline({
  							path: sectorclassD4,
  							map: GoogleMap,
  							strokeColor: "#0D5B8C",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var sectorclassD5 = [
  new google.maps.LatLng(48.87083,8.72139),
new google.maps.LatLng(48.96111,9.18694),
  new google.maps.LatLng(49.00139,9.64194),
              new google.maps.LatLng(49.00139,9.64194)];
              var polyclassD5 = new google.maps.Polyline({
  							path: sectorclassD5,
  							map: GoogleMap,
  							strokeColor: "#0D5B8C",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var sectorclassD6 = [
  new google.maps.LatLng(48.65944,9.84778),
new google.maps.LatLng(48.60917,9.7325),
              new google.maps.LatLng(48.60917,9.7325)];
              var polyclassD6 = new google.maps.Polyline({
  							path: sectorclassD6,
  							map: GoogleMap,
  							strokeColor: "#0D5B8C",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var sectorclassD7 = [
  new google.maps.LatLng(48.96306,9.55111),
new google.maps.LatLng(48.81944,8.7975),
              new google.maps.LatLng(48.81944,8.7975)];
              var polyclassD7 = new google.maps.Polyline({
  							path: sectorclassD7,
  							map: GoogleMap,
  							strokeColor: "#0D5B8C",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var sectorclassD8 = [ new google.maps.LatLng(48.41472,9.01528), new google.maps.LatLng(48.41333,8.83556) ];
              var polyclassD8 = new google.maps.Polyline({
  							path: sectorclassD8,
  							map: GoogleMap,
  							strokeColor: "#0D5B8C",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  
              
var sectorclassD9 = [
  new google.maps.LatLng(48.81944,8.7975),
  new google.maps.LatLng(48.96306,9.55111),
              new google.maps.LatLng(48.96306,9.55111)];
              var polyclassD9 = new google.maps.Polyline({
  							path: sectorclassD9,
  							map: GoogleMap,
  							strokeColor: "#0D5B8C",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var sectorclassD10 = [
  new google.maps.LatLng(48.60917,9.7325),
new google.maps.LatLng(48.5625,9.62556),
  new google.maps.LatLng(48.41472,9.01528),
              new google.maps.LatLng(48.41472,9.01528)];
              var polyclassD10 = new google.maps.Polyline({
  							path: sectorclassD10,
  							map: GoogleMap,
  							strokeColor: "#0D5B8C",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var sectorclassD11 = [ new google.maps.LatLng(48.81944,8.7975), new google.maps.LatLng(48.81944,8.7975) ];
              var polyclassD11 = new google.maps.Polyline({
  							path: sectorclassD11,
  							map: GoogleMap,
  							strokeColor: "#0D5B8C",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  
              
var sectorclassD12 = [
  new google.maps.LatLng(48.78111,8.88194),
  new google.maps.LatLng(48.89639,9.48694),
              new google.maps.LatLng(48.89639,9.48694)];
              var polyclassD12 = new google.maps.Polyline({
  							path: sectorclassD12,
  							map: GoogleMap,
  							strokeColor: "#0D5B8C",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var sectorclassD13 = [
  new google.maps.LatLng(48.64833,9.62361),
new google.maps.LatLng(48.57472,9.42222),
  new google.maps.LatLng(48.49528,9.00556),
              new google.maps.LatLng(48.49528,9.00556)];
              var polyclassD13 = new google.maps.Polyline({
  							path: sectorclassD13,
  							map: GoogleMap,
  							strokeColor: "#0D5B8C",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var sectorclassD14 = [ new google.maps.LatLng(48.78111,8.88194), new google.maps.LatLng(48.78111,8.88194) ];
              var polyclassD14 = new google.maps.Polyline({
  							path: sectorclassD14,
  							map: GoogleMap,
  							strokeColor: "#0D5B8C",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  
              
var sectorclassD15 = [
  new google.maps.LatLng(53.10111,8.975),
  new google.maps.LatLng(53.10278,9.07917),
  new google.maps.LatLng(52.97028,9.08444),
  new google.maps.LatLng(52.96889,8.98222),
new google.maps.LatLng(53.10111,8.975)];
var polyclassD15 = new google.maps.Polyline({
  							path: sectorclassD15,
  							map: GoogleMap,
  							strokeColor: "#0D5B8C",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorclassD16 = [
  new google.maps.LatLng(53.09278,8.5125),
  new google.maps.LatLng(53.09444,8.59361),
  new google.maps.LatLng(52.99417,8.6),
  new google.maps.LatLng(52.9925,8.51389),
new google.maps.LatLng(53.09278,8.5125)];
var polyclassD16 = new google.maps.Polyline({
  							path: sectorclassD16,
  							map: GoogleMap,
  							strokeColor: "#0D5B8C",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorclassD17 = [
  new google.maps.LatLng(53.13389,8.39611),
  new google.maps.LatLng(53.15472,9.15472),
              new google.maps.LatLng(53.15472,9.15472)];
              var polyclassD17 = new google.maps.Polyline({
  							path: sectorclassD17,
  							map: GoogleMap,
  							strokeColor: "#0D5B8C",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var sectorclassD18 = [
  new google.maps.LatLng(52.95583,9.16833),
new google.maps.LatLng(52.935,8.41278),
              new google.maps.LatLng(52.935,8.41278)];
              var polyclassD18 = new google.maps.Polyline({
  							path: sectorclassD18,
  							map: GoogleMap,
  							strokeColor: "#0D5B8C",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var sectorclassD19 = [ new google.maps.LatLng(53.13389,8.39611), new google.maps.LatLng(53.13389,8.39611) ];
              var polyclassD19 = new google.maps.Polyline({
  							path: sectorclassD19,
  							map: GoogleMap,
  							strokeColor: "#0D5B8C",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  
              
var sectorclassD20 = [
  new google.maps.LatLng(53.185,8.44),
  new google.maps.LatLng(53.20333,9.10306),
              new google.maps.LatLng(53.20333,9.10306)];
              var polyclassD20 = new google.maps.Polyline({
  							path: sectorclassD20,
  							map: GoogleMap,
  							strokeColor: "#0D5B8C",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var sectorclassD21 = [
  new google.maps.LatLng(53.15472,9.15472),
new google.maps.LatLng(53.13389,8.39611),
              new google.maps.LatLng(53.13389,8.39611)];
              var polyclassD21 = new google.maps.Polyline({
  							path: sectorclassD21,
  							map: GoogleMap,
  							strokeColor: "#0D5B8C",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var sectorclassD22 = [ new google.maps.LatLng(53.185,8.44), new google.maps.LatLng(53.185,8.44) ];
              var polyclassD22 = new google.maps.Polyline({
  							path: sectorclassD22,
  							map: GoogleMap,
  							strokeColor: "#0D5B8C",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  
              
var sectorclassD23 = [
  new google.maps.LatLng(52.935,8.41278),
  new google.maps.LatLng(52.95583,9.16833),
              new google.maps.LatLng(52.95583,9.16833)];
              var polyclassD23 = new google.maps.Polyline({
  							path: sectorclassD23,
  							map: GoogleMap,
  							strokeColor: "#0D5B8C",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var sectorclassD24 = [
  new google.maps.LatLng(52.90472,9.12361),
new google.maps.LatLng(52.88667,8.465),
              new google.maps.LatLng(52.88667,8.465)];
              var polyclassD24 = new google.maps.Polyline({
  							path: sectorclassD24,
  							map: GoogleMap,
  							strokeColor: "#0D5B8C",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var sectorclassD25 = [ new google.maps.LatLng(52.935,8.41278), new google.maps.LatLng(52.935,8.41278) ];
              var polyclassD25 = new google.maps.Polyline({
  							path: sectorclassD25,
  							map: GoogleMap,
  							strokeColor: "#0D5B8C",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  
              
var sectorclassD26 = [
  new google.maps.LatLng(53.90139,9.38056),
  new google.maps.LatLng(53.92194,9.5625),
  new google.maps.LatLng(53.99472,10.22806),
  new google.maps.LatLng(54.01389,10.41056),
              new google.maps.LatLng(54.01389,10.41056)];
              var polyclassD26 = new google.maps.Polyline({
  							path: sectorclassD26,
  							map: GoogleMap,
  							strokeColor: "#0D5B8C",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var sectorclassD27 = [
  new google.maps.LatLng(53.36306,10.59444),
new google.maps.LatLng(53.34472,10.41139),
  new google.maps.LatLng(53.27583,9.77972),
  new google.maps.LatLng(53.25528,9.59583),
              new google.maps.LatLng(53.25528,9.59583)];
              var polyclassD27 = new google.maps.Polyline({
  							path: sectorclassD27,
  							map: GoogleMap,
  							strokeColor: "#0D5B8C",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var sectorclassD28 = [ new google.maps.LatLng(53.90139,9.38056), new google.maps.LatLng(53.90139,9.38056) ];
              var polyclassD28 = new google.maps.Polyline({
  							path: sectorclassD28,
  							map: GoogleMap,
  							strokeColor: "#0D5B8C",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  
              
var sectorclassD29 = [
  new google.maps.LatLng(51.52528,11.73333),
  new google.maps.LatLng(51.52972,11.8225),
              new google.maps.LatLng(51.52972,11.8225)];
              var polyclassD29 = new google.maps.Polyline({
  							path: sectorclassD29,
  							map: GoogleMap,
  							strokeColor: "#0D5B8C",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var sectorclassD30 = [
  new google.maps.LatLng(51.2775,11.84861),
new google.maps.LatLng(51.27306,11.76111),
              new google.maps.LatLng(51.27306,11.76111)];
              var polyclassD30 = new google.maps.Polyline({
  							path: sectorclassD30,
  							map: GoogleMap,
  							strokeColor: "#0D5B8C",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var sectorclassD31 = [ new google.maps.LatLng(51.52528,11.73333), new google.maps.LatLng(51.52528,11.73333) ];
              var polyclassD31 = new google.maps.Polyline({
  							path: sectorclassD31,
  							map: GoogleMap,
  							strokeColor: "#0D5B8C",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  
              
var sectorclassD32 = [
  new google.maps.LatLng(51.52972,11.8225),
  new google.maps.LatLng(51.55583,12.38583),
  new google.maps.LatLng(51.56694,12.63694),
              new google.maps.LatLng(51.56694,12.63694)];
              var polyclassD32 = new google.maps.Polyline({
  							path: sectorclassD32,
  							map: GoogleMap,
  							strokeColor: "#0D5B8C",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var sectorclassD33 = [
  new google.maps.LatLng(51.315,12.64861),
new google.maps.LatLng(51.30472,12.41333),
  new google.maps.LatLng(51.28111,11.92056),
  new google.maps.LatLng(51.2775,11.84861),
              new google.maps.LatLng(51.2775,11.84861)];
              var polyclassD33 = new google.maps.Polyline({
  							path: sectorclassD33,
  							map: GoogleMap,
  							strokeColor: "#0D5B8C",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var sectorclassD34 = [ new google.maps.LatLng(51.52972,11.8225), new google.maps.LatLng(51.52972,11.8225) ];
              var polyclassD34 = new google.maps.Polyline({
  							path: sectorclassD34,
  							map: GoogleMap,
  							strokeColor: "#0D5B8C",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  
              
var sectorclassD35 = [
  new google.maps.LatLng(52.62167,9.17417),
  new google.maps.LatLng(52.59944,10.2125),
              new google.maps.LatLng(52.59944,10.2125)];
              var polyclassD35 = new google.maps.Polyline({
  							path: sectorclassD35,
  							map: GoogleMap,
  							strokeColor: "#0D5B8C",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var sectorclassD36 = [
  new google.maps.LatLng(52.2025,10.06889),
new google.maps.LatLng(52.22056,9.27056),
              new google.maps.LatLng(52.22056,9.27056)];
              var polyclassD36 = new google.maps.Polyline({
  							path: sectorclassD36,
  							map: GoogleMap,
  							strokeColor: "#0D5B8C",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var sectorclassD37 = [ new google.maps.LatLng(52.62167,9.17417), new google.maps.LatLng(52.62167,9.17417) ];
              var polyclassD37 = new google.maps.Polyline({
  							path: sectorclassD37,
  							map: GoogleMap,
  							strokeColor: "#0D5B8C",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  
              
var sectorclassD38 = [
  new google.maps.LatLng(51.01306,13.25056),
  new google.maps.LatLng(51.47472,13.88361),
              new google.maps.LatLng(51.47472,13.88361)];
              var polyclassD38 = new google.maps.Polyline({
  							path: sectorclassD38,
  							map: GoogleMap,
  							strokeColor: "#0D5B8C",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var sectorclassD39 = [
  new google.maps.LatLng(51.25167,14.29056),
new google.maps.LatLng(51.03389,13.98778),
  new google.maps.LatLng(50.82944,13.49722),
              new google.maps.LatLng(50.82944,13.49722)];
              var polyclassD39 = new google.maps.Polyline({
  							path: sectorclassD39,
  							map: GoogleMap,
  							strokeColor: "#0D5B8C",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var sectorclassD40 = [ new google.maps.LatLng(51.01306,13.25056), new google.maps.LatLng(51.01306,13.25056) ];
              var polyclassD40 = new google.maps.Polyline({
  							path: sectorclassD40,
  							map: GoogleMap,
  							strokeColor: "#0D5B8C",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  
              
var sectorclassD41 = [
  new google.maps.LatLng(51.52972,11.8225),
  new google.maps.LatLng(51.58222,11.88694),
  new google.maps.LatLng(51.60222,12.30528),
  new google.maps.LatLng(51.55583,12.38583),
new google.maps.LatLng(51.52972,11.8225)];
var polyclassD41 = new google.maps.Polyline({
  							path: sectorclassD41,
  							map: GoogleMap,
  							strokeColor: "#0D5B8C",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorclassD42 = [
  new google.maps.LatLng(48.02639,12.54972),
  new google.maps.LatLng(48.12778,12.76056),
  new google.maps.LatLng(48.08333,12.75556),
  new google.maps.LatLng(47.94306,12.79056),
  new google.maps.LatLng(47.92472,12.65833),
new google.maps.LatLng(48.02639,12.54972)];
var polyclassD42 = new google.maps.Polyline({
  							path: sectorclassD42,
  							map: GoogleMap,
  							strokeColor: "#0D5B8C",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorclassD43 = [
  new google.maps.LatLng(48.08333,12.75556),
  new google.maps.LatLng(47.95917,12.90583),
  new google.maps.LatLng(47.94306,12.79056),
new google.maps.LatLng(48.08333,12.75556)];
var polyclassD43 = new google.maps.Polyline({
  							path: sectorclassD43,
  							map: GoogleMap,
  							strokeColor: "#0D5B8C",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorclassD44 = [
  new google.maps.LatLng(47.92472,12.65833),
  new google.maps.LatLng(47.94306,12.79056),
  new google.maps.LatLng(47.91667,12.79722),
  new google.maps.LatLng(47.80583,12.90444),
  new google.maps.LatLng(47.87167,12.715),
new google.maps.LatLng(47.92472,12.65833)];
var polyclassD44 = new google.maps.Polyline({
  							path: sectorclassD44,
  							map: GoogleMap,
  							strokeColor: "#0D5B8C",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorclassD45 = [
  new google.maps.LatLng(51.55889,8.29583),
  new google.maps.LatLng(51.63861,8.38972),
  new google.maps.LatLng(51.75833,8.68583),
  new google.maps.LatLng(51.75833,8.88111),
  new google.maps.LatLng(51.65667,8.98667),
  new google.maps.LatLng(51.645,8.98667),
  new google.maps.LatLng(51.43472,8.46861),
  new google.maps.LatLng(51.43361,8.41611),
  new google.maps.LatLng(51.54917,8.29472),
new google.maps.LatLng(51.55889,8.29583)];
var polyclassD45 = new google.maps.Polyline({
  							path: sectorclassD45,
  							map: GoogleMap,
  							strokeColor: "#0D5B8C",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorclassD46 = [
  new google.maps.LatLng(51.51667,7.30556),
  new google.maps.LatLng(51.49306,7.37417),
  new google.maps.LatLng(51.40833,7.45194),
  new google.maps.LatLng(51.31306,7.4625),
  new google.maps.LatLng(51.42389,7.34333),
new google.maps.LatLng(51.51667,7.30556)];
var polyclassD46 = new google.maps.Polyline({
  							path: sectorclassD46,
  							map: GoogleMap,
  							strokeColor: "#0D5B8C",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorclassD47 = [
  new google.maps.LatLng(51.51667,7.30556),
  new google.maps.LatLng(51.66806,7.76389),
  new google.maps.LatLng(51.68333,7.89444),
  new google.maps.LatLng(51.58083,7.96278),
  new google.maps.LatLng(51.49583,7.99667),
  new google.maps.LatLng(51.46194,7.84972),
  new google.maps.LatLng(51.48167,7.77972),
  new google.maps.LatLng(51.4375,7.63167),
  new google.maps.LatLng(51.37417,7.63444),
  new google.maps.LatLng(51.31306,7.4625),
  new google.maps.LatLng(51.40833,7.45194),
  new google.maps.LatLng(51.49306,7.37417),
new google.maps.LatLng(51.51667,7.30556)];
var polyclassD47 = new google.maps.Polyline({
  							path: sectorclassD47,
  							map: GoogleMap,
  							strokeColor: "#0D5B8C",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorclassD48 = [
  new google.maps.LatLng(52.11333,7.33),
  new google.maps.LatLng(52.24167,7.93417),
  new google.maps.LatLng(52.21528,8.02333),
  new google.maps.LatLng(52.1125,8.0825),
  new google.maps.LatLng(51.88417,7.50722),
  new google.maps.LatLng(52,7.3825),
new google.maps.LatLng(52.11333,7.33)];
var polyclassD48 = new google.maps.Polyline({
  							path: sectorclassD48,
  							map: GoogleMap,
  							strokeColor: "#0D5B8C",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorclassD49 = [
  new google.maps.LatLng(47.94306,12.79056),
  new google.maps.LatLng(47.95917,12.90583),
  new google.maps.LatLng(47.76667,12.94639),
  new google.maps.LatLng(47.775,12.93333),
  new google.maps.LatLng(47.91667,12.79722),
new google.maps.LatLng(47.94306,12.79056)];
var polyclassD49 = new google.maps.Polyline({
  							path: sectorclassD49,
  							map: GoogleMap,
  							strokeColor: "#0D5B8C",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorclassD50 = [
  new google.maps.LatLng(47.83639,7.56083),
  new google.maps.LatLng(47.74361,7.63333),
  new google.maps.LatLng(47.66778,7.60667),
  new google.maps.LatLng(47.76833,7.53194),
new google.maps.LatLng(47.83639,7.56083)];
var polyclassD50 = new google.maps.Polyline({
  							path: sectorclassD50,
  							map: GoogleMap,
  							strokeColor: "#0D5B8C",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorclassD51 = [
  new google.maps.LatLng(47.74361,7.63333),
  new google.maps.LatLng(47.58667,7.75528),
  new google.maps.LatLng(47.56083,7.76),
  new google.maps.LatLng(47.54139,7.7025),
  new google.maps.LatLng(47.66778,7.60667),
new google.maps.LatLng(47.74361,7.63333)];
var polyclassD51 = new google.maps.Polyline({
  							path: sectorclassD51,
  							map: GoogleMap,
  							strokeColor: "#0D5B8C",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorclassD52 = [
  new google.maps.LatLng(47.93611,7.58889),
  new google.maps.LatLng(47.83333,7.66667),
  new google.maps.LatLng(47.68889,7.75),
  new google.maps.LatLng(47.58667,7.75528),
  new google.maps.LatLng(47.74361,7.63333),
  new google.maps.LatLng(47.83639,7.56083),
new google.maps.LatLng(47.93611,7.58889)];
var polyclassD52 = new google.maps.Polyline({
  							path: sectorclassD52,
  							map: GoogleMap,
  							strokeColor: "#0D5B8C",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorclassD53 = [
  new google.maps.LatLng(47.76667,7.53333),
  new google.maps.LatLng(47.53611,7.70556),
new google.maps.LatLng(47.76667,7.53333)];
var polyclassD53 = new google.maps.Polyline({
  							path: sectorclassD53,
  							map: GoogleMap,
  							strokeColor: "#0D5B8C",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorclassD54 = [
  new google.maps.LatLng(50.05639,7.27667),
  new google.maps.LatLng(50.09861,7.31806),
  new google.maps.LatLng(50.04556,7.45),
  new google.maps.LatLng(50.00333,7.40861),
new google.maps.LatLng(50.05639,7.27667)];
var polyclassD54 = new google.maps.Polyline({
  							path: sectorclassD54,
  							map: GoogleMap,
  							strokeColor: "#0D5B8C",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorclassD55 = [
  new google.maps.LatLng(49.85389,7.08),
  new google.maps.LatLng(49.89639,7.12111),
  new google.maps.LatLng(49.84333,7.2525),
  new google.maps.LatLng(49.80111,7.21139),
new google.maps.LatLng(49.85389,7.08)];
var polyclassD55 = new google.maps.Polyline({
  							path: sectorclassD55,
  							map: GoogleMap,
  							strokeColor: "#0D5B8C",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorclassD56 = [
  new google.maps.LatLng(49.89639,7.12111),
  new google.maps.LatLng(50.05639,7.27667),
  new google.maps.LatLng(50.00333,7.40861),
  new google.maps.LatLng(49.84333,7.2525),
new google.maps.LatLng(49.89639,7.12111)];
var polyclassD56 = new google.maps.Polyline({
  							path: sectorclassD56,
  							map: GoogleMap,
  							strokeColor: "#0D5B8C",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorclassD57 = [
  new google.maps.LatLng(50.09861,7.31806),
  new google.maps.LatLng(50.15472,7.37278),
  new google.maps.LatLng(50.10139,7.505),
  new google.maps.LatLng(50.04556,7.45),
new google.maps.LatLng(50.09861,7.31806)];
var polyclassD57 = new google.maps.Polyline({
  							path: sectorclassD57,
  							map: GoogleMap,
  							strokeColor: "#0D5B8C",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorclassD58 = [
  new google.maps.LatLng(49.79778,7.02583),
  new google.maps.LatLng(49.85389,7.08),
  new google.maps.LatLng(49.80111,7.21139),
  new google.maps.LatLng(49.745,7.15722),
new google.maps.LatLng(49.79778,7.02583)];
var polyclassD58 = new google.maps.Polyline({
  							path: sectorclassD58,
  							map: GoogleMap,
  							strokeColor: "#0D5B8C",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorclassD59 = [
  new google.maps.LatLng(51.56694,12.63694),
  new google.maps.LatLng(51.57083,12.72417),
              new google.maps.LatLng(51.57083,12.72417)];
              var polyclassD59 = new google.maps.Polyline({
  							path: sectorclassD59,
  							map: GoogleMap,
  							strokeColor: "#0D5B8C",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var sectorclassD60 = [
  new google.maps.LatLng(51.31889,12.73861),
new google.maps.LatLng(51.315,12.64861),
              new google.maps.LatLng(51.315,12.64861)];
              var polyclassD60 = new google.maps.Polyline({
  							path: sectorclassD60,
  							map: GoogleMap,
  							strokeColor: "#0D5B8C",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var sectorclassD61 = [ new google.maps.LatLng(51.56694,12.63694), new google.maps.LatLng(51.56694,12.63694) ];
              var polyclassD61 = new google.maps.Polyline({
  							path: sectorclassD61,
  							map: GoogleMap,
  							strokeColor: "#0D5B8C",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  
              
var sectorclassD62 = [
  new google.maps.LatLng(51.28111,11.92056),
  new google.maps.LatLng(51.30472,12.41333),
  new google.maps.LatLng(51.25167,12.335),
  new google.maps.LatLng(51.23583,11.99944),
new google.maps.LatLng(51.28111,11.92056)];
var polyclassD62 = new google.maps.Polyline({
  							path: sectorclassD62,
  							map: GoogleMap,
  							strokeColor: "#0D5B8C",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorclassD63 = [
  new google.maps.LatLng(51.51778,11.58194),
  new google.maps.LatLng(51.52528,11.73333),
              new google.maps.LatLng(51.52528,11.73333)];
              var polyclassD63 = new google.maps.Polyline({
  							path: sectorclassD63,
  							map: GoogleMap,
  							strokeColor: "#0D5B8C",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var sectorclassD64 = [
  new google.maps.LatLng(51.27306,11.76111),
new google.maps.LatLng(51.26528,11.61194),
              new google.maps.LatLng(51.26528,11.61194)];
              var polyclassD64 = new google.maps.Polyline({
  							path: sectorclassD64,
  							map: GoogleMap,
  							strokeColor: "#0D5B8C",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var sectorclassD65 = [ new google.maps.LatLng(51.51778,11.58194), new google.maps.LatLng(51.51778,11.58194) ];
              var polyclassD65 = new google.maps.Polyline({
  							path: sectorclassD65,
  							map: GoogleMap,
  							strokeColor: "#0D5B8C",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  
              
var sectorclassD66 = [
  new google.maps.LatLng(51.57083,12.72417),
  new google.maps.LatLng(51.57444,12.80917),
              new google.maps.LatLng(51.57444,12.80917)];
              var polyclassD66 = new google.maps.Polyline({
  							path: sectorclassD66,
  							map: GoogleMap,
  							strokeColor: "#0D5B8C",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var sectorclassD67 = [
  new google.maps.LatLng(51.32278,12.82528),
new google.maps.LatLng(51.31889,12.73861),
              new google.maps.LatLng(51.31889,12.73861)];
              var polyclassD67 = new google.maps.Polyline({
  							path: sectorclassD67,
  							map: GoogleMap,
  							strokeColor: "#0D5B8C",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var sectorclassD68 = [ new google.maps.LatLng(51.57083,12.72417), new google.maps.LatLng(51.57083,12.72417) ];
              var polyclassD68 = new google.maps.Polyline({
  							path: sectorclassD68,
  							map: GoogleMap,
  							strokeColor: "#0D5B8C",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  
              
var sectorclassD69 = [
  new google.maps.LatLng(51.58222,11.88694),
  new google.maps.LatLng(51.63556,11.95222),
  new google.maps.LatLng(51.64861,12.225),
  new google.maps.LatLng(51.60222,12.30528),
new google.maps.LatLng(51.58222,11.88694)];
var polyclassD69 = new google.maps.Polyline({
  							path: sectorclassD69,
  							map: GoogleMap,
  							strokeColor: "#0D5B8C",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorclassD70 = [
  new google.maps.LatLng(51.23583,11.99944),
  new google.maps.LatLng(51.25167,12.335),
  new google.maps.LatLng(51.19833,12.25639),
  new google.maps.LatLng(51.18972,12.07889),
new google.maps.LatLng(51.23583,11.99944)];
var polyclassD70 = new google.maps.Polyline({
  							path: sectorclassD70,
  							map: GoogleMap,
  							strokeColor: "#0D5B8C",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorclassD71 = [
  new google.maps.LatLng(48.4125,8.72861),
              new google.maps.LatLng(48.4125,8.72861)];
              var polyclassD71 = new google.maps.Polyline({
  							path: sectorclassD71,
  							map: GoogleMap,
  							strokeColor: "#0D5B8C",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var sectorclassD72 = [
  new google.maps.LatLng(48.8025,8.595),
new google.maps.LatLng(48.87083,8.72139),
              new google.maps.LatLng(48.87083,8.72139)];
              var polyclassD72 = new google.maps.Polyline({
  							path: sectorclassD72,
  							map: GoogleMap,
  							strokeColor: "#0D5B8C",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var sectorclassD73 = [ new google.maps.LatLng(48.41333,8.83556), new google.maps.LatLng(48.4125,8.72861) ];
              var polyclassD73 = new google.maps.Polyline({
  							path: sectorclassD73,
  							map: GoogleMap,
  							strokeColor: "#0D5B8C",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  
              
var sectorclassD74 = [
  new google.maps.LatLng(48.87083,8.72139),
              new google.maps.LatLng(48.87083,8.72139)];
              var polyclassD74 = new google.maps.Polyline({
  							path: sectorclassD74,
  							map: GoogleMap,
  							strokeColor: "#0D5B8C",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var sectorclassD75 = [
  new google.maps.LatLng(48.95861,8.82444),
new google.maps.LatLng(48.96111,9.18694),
new google.maps.LatLng(48.87083,8.72139)];
var polyclassD75 = new google.maps.Polyline({
  							path: sectorclassD75,
  							map: GoogleMap,
  							strokeColor: "#0D5B8C",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorclassD76 = [
  new google.maps.LatLng(49.00139,9.64194),
  new google.maps.LatLng(49.01111,9.75222),
              new google.maps.LatLng(49.01111,9.75222)];
              var polyclassD76 = new google.maps.Polyline({
  							path: sectorclassD76,
  							map: GoogleMap,
  							strokeColor: "#0D5B8C",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var sectorclassD77 = [
  new google.maps.LatLng(48.63083,9.93194),
new google.maps.LatLng(48.49639,9.63917),
  new google.maps.LatLng(48.41639,9.26056),
  new google.maps.LatLng(48.41472,9.01528),
  new google.maps.LatLng(48.5625,9.62556),
  new google.maps.LatLng(48.65944,9.84778),
              new google.maps.LatLng(48.65944,9.84778)];
              var polyclassD77 = new google.maps.Polyline({
  							path: sectorclassD77,
  							map: GoogleMap,
  							strokeColor: "#0D5B8C",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var sectorclassD78 = [ new google.maps.LatLng(49.00139,9.64194), new google.maps.LatLng(49.00139,9.64194) ];
              var polyclassD78 = new google.maps.Polyline({
  							path: sectorclassD78,
  							map: GoogleMap,
  							strokeColor: "#0D5B8C",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  
              
var sectorclassD79 = [
  new google.maps.LatLng(53.46417,9.42056),
  new google.maps.LatLng(53.54583,9.54528),
  new google.maps.LatLng(53.48611,9.58278),
  new google.maps.LatLng(53.40222,9.6925),
  new google.maps.LatLng(53.385,9.77944),
  new google.maps.LatLng(53.33306,9.60333),
              new google.maps.LatLng(53.33306,9.60333)];
              var polyclassD79 = new google.maps.Polyline({
  							path: sectorclassD79,
  							map: GoogleMap,
  							strokeColor: "#0D5B8C",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var sectorclassD80 = [ new google.maps.LatLng(53.46417,9.42056), new google.maps.LatLng(53.46417,9.42056) ];
              var polyclassD80 = new google.maps.Polyline({
  							path: sectorclassD80,
  							map: GoogleMap,
  							strokeColor: "#0D5B8C",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  
              
var sectorclassD81 = [
  new google.maps.LatLng(48.91611,8.16056),
  new google.maps.LatLng(48.87583,8.26028),
  new google.maps.LatLng(48.83444,8.22139),
  new google.maps.LatLng(48.87306,8.12611),
new google.maps.LatLng(48.91611,8.16056)];
var polyclassD81 = new google.maps.Polyline({
  							path: sectorclassD81,
  							map: GoogleMap,
  							strokeColor: "#0D5B8C",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorclassD82 = [
  new google.maps.LatLng(48.71861,7.95972),
  new google.maps.LatLng(48.67361,8.07083),
  new google.maps.LatLng(48.63028,8.03056),
  new google.maps.LatLng(48.67917,7.91083),
new google.maps.LatLng(48.71861,7.95972)];
var polyclassD82 = new google.maps.Polyline({
  							path: sectorclassD82,
  							map: GoogleMap,
  							strokeColor: "#0D5B8C",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorclassD83 = [
  new google.maps.LatLng(48.87306,8.12611),
  new google.maps.LatLng(48.83444,8.22139),
  new google.maps.LatLng(48.67361,8.07083),
  new google.maps.LatLng(48.71861,7.95972),
new google.maps.LatLng(48.87306,8.12611)];
var polyclassD83 = new google.maps.Polyline({
  							path: sectorclassD83,
  							map: GoogleMap,
  							strokeColor: "#0D5B8C",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorclassD84 = [
  new google.maps.LatLng(48.95972,8.20306),
  new google.maps.LatLng(48.91972,8.30167),
  new google.maps.LatLng(48.87583,8.26028),
  new google.maps.LatLng(48.91611,8.16056),
new google.maps.LatLng(48.95972,8.20306)];
var polyclassD84 = new google.maps.Polyline({
  							path: sectorclassD84,
  							map: GoogleMap,
  							strokeColor: "#0D5B8C",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorclassD85 = [
  new google.maps.LatLng(48.67917,7.91083),
  new google.maps.LatLng(48.63028,8.03056),
  new google.maps.LatLng(48.58611,7.98944),
  new google.maps.LatLng(48.61389,7.91083),
  new google.maps.LatLng(48.58278,7.82778),
  new google.maps.LatLng(48.57306,7.80194),
new google.maps.LatLng(48.67917,7.91083)];
var polyclassD85 = new google.maps.Polyline({
  							path: sectorclassD85,
  							map: GoogleMap,
  							strokeColor: "#0D5B8C",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorclassD86 = [
  new google.maps.LatLng(48.97861,8.17806),
  new google.maps.LatLng(49.08333,8.27722),
  new google.maps.LatLng(49.08333,8.36667),
  new google.maps.LatLng(48.99778,8.44333),
  new google.maps.LatLng(48.91667,8.43611),
  new google.maps.LatLng(48.91972,8.30167),
  new google.maps.LatLng(48.95972,8.20306),
new google.maps.LatLng(48.97861,8.17806)];
var polyclassD86 = new google.maps.Polyline({
  							path: sectorclassD86,
  							map: GoogleMap,
  							strokeColor: "#0D5B8C",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorclassD87 = [
  new google.maps.LatLng(48.61389,7.91083),
  new google.maps.LatLng(48.58611,7.98944),
  new google.maps.LatLng(48.54833,7.95444),
  new google.maps.LatLng(48.58278,7.82778),
new google.maps.LatLng(48.61389,7.91083)];
var polyclassD87 = new google.maps.Polyline({
  							path: sectorclassD87,
  							map: GoogleMap,
  							strokeColor: "#0D5B8C",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorclassD88 = [
  new google.maps.LatLng(48.67361,8.07083),
  new google.maps.LatLng(48.61083,8.09611),
  new google.maps.LatLng(48.5425,8.02611),
  new google.maps.LatLng(48.54833,7.95444),
  new google.maps.LatLng(48.58611,7.98944),
  new google.maps.LatLng(48.63028,8.03056),
new google.maps.LatLng(48.67361,8.07083)];
var polyclassD88 = new google.maps.Polyline({
  							path: sectorclassD88,
  							map: GoogleMap,
  							strokeColor: "#0D5B8C",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorclassD89 = [
  new google.maps.LatLng(50.93,6.82306),
  new google.maps.LatLng(50.94889,6.91417),
  new google.maps.LatLng(50.86167,6.97306),
  new google.maps.LatLng(50.83806,6.885),
new google.maps.LatLng(50.93,6.82306)];
var polyclassD89 = new google.maps.Polyline({
  							path: sectorclassD89,
  							map: GoogleMap,
  							strokeColor: "#0D5B8C",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
        
drawedrsCircle(13.78056,51.1425,14.210568835544,"#0D5B8C",1,355,66);
drawedrsCircle(13.75722,51.12556,14.209992085195,"#0D5B8C",1,212,266);
drawedrsCircle(9.21083,48.68861,22.245036843476,"#0D5B8C",1,222,300);
drawedrsCircle(9.21083,48.68861,25.334175443031,"#0D5B8C",1,42,94);
drawedrsCircle(9.21083,48.68861,21.218951025101,"#0D5B8C",1,39,103);
drawedrsCircle(9.21083,48.68861,18.135008043881,"#0D5B8C",1,205,296);
drawedrsCircle(9.21083,48.68861,21.253965565666,"#0D5B8C",1,39,103);
drawedrsCircle(9.21083,48.68861,18.174230538897,"#0D5B8C",1,205,296);
drawedrsCircle(9.21083,48.68861,16.567198252367,"#0D5B8C",1,41,98);
drawedrsCircle(9.21083,48.68861,14.172865616913,"#0D5B8C",1,215,293);
drawedrsCircle(8.78306,53.04556,14.903517503169,"#0D5B8C",1,64,111);
drawedrsCircle(8.78306,53.04556,14.926573936315,"#0D5B8C",1,244,291);
drawedrsCircle(8.78306,53.04556,14.909867645284,"#0D5B8C",1,50,64);
drawedrsCircle(8.78306,53.04556,14.914857199008,"#0D5B8C",1,291,304);
drawedrsCircle(8.78306,53.04556,14.915216466984,"#0D5B8C",1,111,124);
drawedrsCircle(8.78306,53.04556,14.931278668263,"#0D5B8C",1,230,244);
drawedrsCircle(9.99528,53.63694,26.975165679513,"#0D5B8C",1,33,127);
drawedrsCircle(9.99528,53.63694,26.981072597116,"#0D5B8C",1,212,306);
drawedrsCircle(12.20972,51.41806,15.945079820816,"#0D5B8C",1,238,295);
drawedrsCircle(12.20972,51.41806,18.928165986375,"#0D5B8C",1,243,290);
drawedrsCircle(12.2675,51.43361,15.948259446099,"#0D5B8C",1,60,116);
drawedrsCircle(12.20972,51.41806,15.943785581872,"#0D5B8C",1,238,295);
drawedrsCircle(9.68472,52.46167,20.960350060995,"#0D5B8C",1,67,138);
drawedrsCircle(9.68472,52.46167,20.968500282565,"#0D5B8C",1,227,297);
drawedrsCircle(13.78056,51.1425,20.30221781058,"#0D5B8C",1,11,71);
drawedrsCircle(13.75722,51.12556,20.299146783114,"#0D5B8C",1,209,251);
drawedrsCircle(12.2675,51.43361,18.937210862337,"#0D5B8C",1,64,111);
drawedrsCircle(12.2675,51.43361,15.947922050791,"#0D5B8C",1,60,116);
drawedrsCircle(12.20972,51.41806,18.929082032547,"#0D5B8C",1,243,290);
drawedrsCircle(12.20972,51.41806,24.205033639958,"#0D5B8C",1,248,285);
drawedrsCircle(12.2675,51.43361,21.921331771528,"#0D5B8C",1,67,107);
drawedrsCircle(12.2675,51.43361,18.937047147958,"#0D5B8C",1,64,111);
drawedrsCircle(9.21083,48.68861,25.320483600536,"#0D5B8C",1,229,286);
drawedrsCircle(9.21083,48.68861,22.223627554176,"#0D5B8C",1,222,300);
drawedrsCircle(9.21083,48.68861,22.223627554176,"#0D5B8C",1,300,317);
drawedrsCircle(9.21083,48.68861,28.829308171712,"#0D5B8C",1,48,97);
drawedrsCircle(9.21083,48.68861,25.294031213082,"#0D5B8C",1,42,94);
drawedrsCircle(9.99528,53.63694,22.981065035188,"#0D5B8C",1,218,243);

}

