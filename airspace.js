// -*- mode: javascript; indent-tabs-mode: nil; c-basic-offset: 8 -*-
"use strict";

// Define our global variables
var m = new Array;
    var d2r = Math.PI/180;   // degrees to radians
    var r2d = 180/Math.PI;   // radians to degrees
    var Cx = 0;
    var Cy = 0;


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
  							strokeColor: "#D50973",
  							strokeOpacity: 1.0,
  							strokeWeight: lar,
  							geodesic: true
								});

}


//Draw airspaces
function drawedrs() {

if (CTRShow) {

var ctrsector1 = [
  new google.maps.LatLng(53.73861,8.84083),
  new google.maps.LatLng(53.7,8.51111),
  new google.maps.LatLng(53.79861,8.47861),
  new google.maps.LatLng(53.83639,8.80889),
new google.maps.LatLng(53.73861,8.84083)];
var poyctr1 = new google.maps.Polyline({
  							path: ctrsector1,
  							map: GoogleMap,
  							strokeColor: "#D50973",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var ctrsector2 = [
  new google.maps.LatLng(50.04833,8.32417),
  new google.maps.LatLng(50.08972,8.49472),
  new google.maps.LatLng(50.12778,8.65194),
  new google.maps.LatLng(50.12833,8.71361),
  new google.maps.LatLng(50.02778,8.76667),
  new google.maps.LatLng(50.015,8.7125),
  new google.maps.LatLng(49.9875,8.59722),
  new google.maps.LatLng(49.92639,8.59861),
  new google.maps.LatLng(49.91667,8.59861),
  new google.maps.LatLng(49.91528,8.45056),
  new google.maps.LatLng(49.95222,8.45),
  new google.maps.LatLng(49.93722,8.39),
  new google.maps.LatLng(50.00583,8.34806),
new google.maps.LatLng(50.04833,8.32417)];
var poyctr2 = new google.maps.Polyline({
  							path: ctrsector2,
  							map: GoogleMap,
  							strokeColor: "#D50973",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var ctrsector3 = [
  new google.maps.LatLng(51.17083,6.65694),
  new google.maps.LatLng(51.25389,6.55806),
  new google.maps.LatLng(51.25917,6.56833),
              new google.maps.LatLng(51.25917,6.56833)];
              var poyctr3 = new google.maps.Polyline({
  							path: ctrsector3,
  							map: GoogleMap,
  							strokeColor: "#D50973",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var ctrsector4 = [
  new google.maps.LatLng(51.37028,6.80417),
new google.maps.LatLng(51.40528,6.87806),
  new google.maps.LatLng(51.3225,6.97639),
new google.maps.LatLng(51.17083,6.65694)];
var poyctr4 = new google.maps.Polyline({
  							path: ctrsector4,
  							map: GoogleMap,
  							strokeColor: "#D50973",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var ctrsector5 = [
  new google.maps.LatLng(48.35194,12.0375),
  new google.maps.LatLng(48.36222,12.11528),
  new google.maps.LatLng(48.29861,12.13611),
  new google.maps.LatLng(48.28667,12.04861),
new google.maps.LatLng(48.35194,12.0375)];
var poyctr5 = new google.maps.Polyline({
  							path: ctrsector5,
  							map: GoogleMap,
  							strokeColor: "#D50973",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var ctrsector6 = [
  new google.maps.LatLng(52.62694,8.17056),
  new google.maps.LatLng(52.64444,8.49806),
  new google.maps.LatLng(52.545,8.5125),
  new google.maps.LatLng(52.5275,8.185),
new google.maps.LatLng(52.62694,8.17056)];
var poyctr6 = new google.maps.Polyline({
  							path: ctrsector6,
  							map: GoogleMap,
  							strokeColor: "#D50973",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var ctrsector7 = [
  new google.maps.LatLng(49.24389,10.52222),
  new google.maps.LatLng(49.3425,10.49222),
  new google.maps.LatLng(49.37417,10.74389),
  new google.maps.LatLng(49.27583,10.77361),
new google.maps.LatLng(49.24389,10.52222)];
var poyctr7 = new google.maps.Polyline({
  							path: ctrsector7,
  							map: GoogleMap,
  							strokeColor: "#D50973",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var ctrsector8 = [
  new google.maps.LatLng(48.45694,10.75833),
  new google.maps.LatLng(48.52222,11.04444),
  new google.maps.LatLng(48.41111,11.10139),
  new google.maps.LatLng(48.34583,10.81667),
new google.maps.LatLng(48.45694,10.75833)];
var poyctr8 = new google.maps.Polyline({
  							path: ctrsector8,
  							map: GoogleMap,
  							strokeColor: "#D50973",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var ctrsector9 = [
  new google.maps.LatLng(52.37778,10.68611),
  new google.maps.LatLng(52.27778,10.7),
  new google.maps.LatLng(52.2625,10.40139),
  new google.maps.LatLng(52.3625,10.3875),
new google.maps.LatLng(52.37778,10.68611)];
var poyctr9 = new google.maps.Polyline({
  							path: ctrsector9,
  							map: GoogleMap,
  							strokeColor: "#D50973",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var ctrsector10 = [
  new google.maps.LatLng(53.10111,8.975),
  new google.maps.LatLng(52.96889,8.98222),
  new google.maps.LatLng(52.96583,8.79167),
  new google.maps.LatLng(52.99417,8.6),
  new google.maps.LatLng(53.09444,8.59361),
new google.maps.LatLng(53.10111,8.975)];
var poyctr10 = new google.maps.Polyline({
  							path: ctrsector10,
  							map: GoogleMap,
  							strokeColor: "#D50973",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var ctrsector11 = [
  new google.maps.LatLng(50.04778,7.04444),
  new google.maps.LatLng(50.09694,6.90778),
  new google.maps.LatLng(50.30167,7.08333),
  new google.maps.LatLng(50.25278,7.22056),
new google.maps.LatLng(50.04778,7.04444)];
var poyctr11 = new google.maps.Polyline({
  							path: ctrsector11,
  							map: GoogleMap,
  							strokeColor: "#D50973",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var ctrsector12 = [
  new google.maps.LatLng(52.20806,8.94333),
  new google.maps.LatLng(52.30583,8.90611),
  new google.maps.LatLng(52.31333,8.95972),
              new google.maps.LatLng(52.31333,8.95972)];
              var poyctr12 = new google.maps.Polyline({
  							path: ctrsector12,
  							map: GoogleMap,
  							strokeColor: "#D50973",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var ctrsector13 = [
  new google.maps.LatLng(52.34306,9.17),
new google.maps.LatLng(52.34528,9.18639),
              new google.maps.LatLng(52.34528,9.18639)];
              var poyctr13 = new google.maps.Polyline({
  							path: ctrsector13,
  							map: GoogleMap,
  							strokeColor: "#D50973",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var ctrsector14 = [ new google.maps.LatLng(52.2475,9.22361), new google.maps.LatLng(52.20806,8.94333) ];
              var poyctr14 = new google.maps.Polyline({
  							path: ctrsector14,
  							map: GoogleMap,
  							strokeColor: "#D50973",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  
              
var ctrsector15 = [
  new google.maps.LatLng(51.49306,7.37417),
  new google.maps.LatLng(51.63222,7.76972),
  new google.maps.LatLng(51.54778,7.84639),
  new google.maps.LatLng(51.40833,7.45194),
new google.maps.LatLng(51.49306,7.37417)];
var poyctr15 = new google.maps.Polyline({
  							path: ctrsector15,
  							map: GoogleMap,
  							strokeColor: "#D50973",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var ctrsector16 = [
  new google.maps.LatLng(51.06194,13.56556),
  new google.maps.LatLng(51.27111,13.85278),
  new google.maps.LatLng(51.20528,13.97306),
  new google.maps.LatLng(50.99667,13.68583),
new google.maps.LatLng(51.06194,13.56556)];
var poyctr16 = new google.maps.Polyline({
  							path: ctrsector16,
  							map: GoogleMap,
  							strokeColor: "#D50973",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var ctrsector17 = [
  new google.maps.LatLng(51.04333,10.78444),
  new google.maps.LatLng(51.03722,10.86278),
              new google.maps.LatLng(51.03722,10.86278)];
              var poyctr17 = new google.maps.Polyline({
  							path: ctrsector17,
  							map: GoogleMap,
  							strokeColor: "#D50973",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var ctrsector18 = [
  new google.maps.LatLng(51.02083,11.07306),
new google.maps.LatLng(51.01444,11.15111),
  new google.maps.LatLng(50.91528,11.13194),
  new google.maps.LatLng(50.94306,10.76583),
new google.maps.LatLng(51.04333,10.78444)];
var poyctr18 = new google.maps.Polyline({
  							path: ctrsector18,
  							map: GoogleMap,
  							strokeColor: "#D50973",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var ctrsector19 = [
  new google.maps.LatLng(52.86472,9.99361),
  new google.maps.LatLng(52.965,9.98778),
  new google.maps.LatLng(52.9725,10.34833),
  new google.maps.LatLng(52.87278,10.35444),
  new google.maps.LatLng(52.87167,10.29667),
              new google.maps.LatLng(52.87167,10.29667)];
              var poyctr19 = new google.maps.Polyline({
  							path: ctrsector19,
  							map: GoogleMap,
  							strokeColor: "#D50973",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var ctrsector20 = [ new google.maps.LatLng(52.86722,10.07889), new google.maps.LatLng(52.86472,9.99361) ];
              var poyctr20 = new google.maps.Polyline({
  							path: ctrsector20,
  							map: GoogleMap,
  							strokeColor: "#D50973",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  
              
var ctrsector21 = [
  new google.maps.LatLng(47.79556,9.68972),
  new google.maps.LatLng(47.71056,9.76278),
  new google.maps.LatLng(47.58667,9.45361),
  new google.maps.LatLng(47.64444,9.30167),
new google.maps.LatLng(47.79556,9.68972)];
var poyctr21 = new google.maps.Polyline({
  							path: ctrsector21,
  							map: GoogleMap,
  							strokeColor: "#D50973",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var ctrsector22 = [
  new google.maps.LatLng(51.00833,9.44167),
  new google.maps.LatLng(51.10833,9.13889),
  new google.maps.LatLng(51.19722,9.21389),
  new google.maps.LatLng(51.09444,9.51667),
new google.maps.LatLng(51.00833,9.44167)];
var poyctr22 = new google.maps.Polyline({
  							path: ctrsector22,
  							map: GoogleMap,
  							strokeColor: "#D50973",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var ctrsector23 = [
  new google.maps.LatLng(50.98333,5.96056),
  new google.maps.LatLng(50.98306,5.96083),
  new google.maps.LatLng(50.98306,5.96083),
  new google.maps.LatLng(50.98083,5.965),
  new google.maps.LatLng(50.97972,5.96639),
  new google.maps.LatLng(50.97944,5.9675),
  new google.maps.LatLng(50.97944,5.96861),
  new google.maps.LatLng(50.98056,5.97389),
  new google.maps.LatLng(50.98306,5.97944),
  new google.maps.LatLng(50.98333,5.98139),
  new google.maps.LatLng(50.98306,5.98222),
  new google.maps.LatLng(50.98222,5.98417),
  new google.maps.LatLng(50.98333,6.0175),
  new google.maps.LatLng(50.98361,6.01722),
  new google.maps.LatLng(50.98389,6.01861),
  new google.maps.LatLng(50.98333,6.02306),
  new google.maps.LatLng(50.98333,6.02639),
  new google.maps.LatLng(50.98167,6.02694),
  new google.maps.LatLng(50.98139,6.02667),
  new google.maps.LatLng(50.97389,6.02278),
  new google.maps.LatLng(50.97111,6.02111),
  new google.maps.LatLng(50.96889,6.01944),
  new google.maps.LatLng(50.96528,6.01722),
  new google.maps.LatLng(50.9625,6.01528),
  new google.maps.LatLng(50.96028,6.01306),
  new google.maps.LatLng(50.96,6.01056),
  new google.maps.LatLng(50.95944,6.00917),
  new google.maps.LatLng(50.95806,6.00667),
  new google.maps.LatLng(50.95667,6.00528),
  new google.maps.LatLng(50.95417,6.01167),
  new google.maps.LatLng(50.95278,6.01694),
  new google.maps.LatLng(50.94778,6.015),
  new google.maps.LatLng(50.93472,6.01833),
  new google.maps.LatLng(50.93083,6.03861),
  new google.maps.LatLng(50.93083,6.03972),
  new google.maps.LatLng(50.92944,6.04444),
  new google.maps.LatLng(50.92889,6.045),
  new google.maps.LatLng(50.92806,6.04556),
  new google.maps.LatLng(50.92833,6.04722),
  new google.maps.LatLng(50.92944,6.04917),
  new google.maps.LatLng(50.93,6.05083),
  new google.maps.LatLng(50.92722,6.05611),
  new google.maps.LatLng(50.92222,6.05389),
  new google.maps.LatLng(50.92111,6.06194),
  new google.maps.LatLng(50.92194,6.06306),
  new google.maps.LatLng(50.92111,6.06583),
  new google.maps.LatLng(50.92056,6.06806),
  new google.maps.LatLng(50.92306,6.07167),
  new google.maps.LatLng(50.9225,6.0775),
  new google.maps.LatLng(50.92167,6.08222)];
    var poyctr23 = new google.maps.Polyline({
  							path: ctrsector23,
  							map: GoogleMap,
  							strokeColor: "#D50973",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var ctrsector24 = [
    new google.maps.LatLng(50.92167,6.08222),
  new google.maps.LatLng(50.92083,6.08389),
  new google.maps.LatLng(50.91944,6.08694),
  new google.maps.LatLng(50.91861,6.08944),
  new google.maps.LatLng(50.91944,6.09028),
  new google.maps.LatLng(50.92111,6.09361),
  new google.maps.LatLng(50.92083,6.09417),
  new google.maps.LatLng(50.92028,6.09417),
  new google.maps.LatLng(50.91917,6.09361),
  new google.maps.LatLng(50.9175,6.09222),
  new google.maps.LatLng(50.91611,6.08944),
  new google.maps.LatLng(50.91417,6.08694),
  new google.maps.LatLng(50.91306,6.08667),
  new google.maps.LatLng(50.91222,6.08639),
  new google.maps.LatLng(50.91167,6.08444),
  new google.maps.LatLng(50.91,6.22583),
  new google.maps.LatLng(51.01,6.22889),
  new google.maps.LatLng(51.01278,5.96056),
  new google.maps.LatLng(50.98333,5.96056),
new google.maps.LatLng(50.98333,5.96056)];
var poyctr24 = new google.maps.Polyline({
  							path: ctrsector24,
  							map: GoogleMap,
  							strokeColor: "#D50973",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var ctrsector25 = [
  new google.maps.LatLng(49.60194,11.96056),
  new google.maps.LatLng(49.73306,11.80278),
  new google.maps.LatLng(49.79528,11.92444),
  new google.maps.LatLng(49.66333,12.08278),
new google.maps.LatLng(49.60194,11.96056)];
var poyctr25 = new google.maps.Polyline({
  							path: ctrsector25,
  							map: GoogleMap,
  							strokeColor: "#D50973",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var ctrsector26 = [
  new google.maps.LatLng(49.89639,7.12111),
  new google.maps.LatLng(50.05639,7.27667),
  new google.maps.LatLng(50.00333,7.40861),
  new google.maps.LatLng(49.84333,7.2525),
new google.maps.LatLng(49.89639,7.12111)];
var poyctr26 = new google.maps.Polyline({
  							path: ctrsector26,
  							map: GoogleMap,
  							strokeColor: "#D50973",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var ctrsector27 = [
  new google.maps.LatLng(53.54972,9.7075),
  new google.maps.LatLng(53.62222,9.85278),
  new google.maps.LatLng(53.66667,9.86667),
  new google.maps.LatLng(53.78167,9.77306),
  new google.maps.LatLng(53.825,9.91667),
  new google.maps.LatLng(53.70889,10.02167),
  new google.maps.LatLng(53.77861,10.17),
  new google.maps.LatLng(53.70889,10.26472),
  new google.maps.LatLng(53.63611,10.13472),
  new google.maps.LatLng(53.58778,10.11972),
  new google.maps.LatLng(53.54472,10.15417),
  new google.maps.LatLng(53.50056,10.00028),
  new google.maps.LatLng(53.50417,9.9075),
  new google.maps.LatLng(53.46306,9.82056),
new google.maps.LatLng(53.54972,9.7075)];
var poyctr27 = new google.maps.Polyline({
  							path: ctrsector27,
  							map: GoogleMap,
  							strokeColor: "#D50973",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var ctrsector28 = [
  new google.maps.LatLng(52.575,9.38333),
  new google.maps.LatLng(52.49778,9.98778),
  new google.maps.LatLng(52.39778,9.98056),
  new google.maps.LatLng(52.34861,9.425),
new google.maps.LatLng(52.575,9.38333)];
var poyctr28 = new google.maps.Polyline({
  							path: ctrsector28,
  							map: GoogleMap,
  							strokeColor: "#D50973",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var ctrsector29 = [
  new google.maps.LatLng(50.33194,11.61806),
  new google.maps.LatLng(50.34444,11.98333),
  new google.maps.LatLng(50.24444,11.99028),
  new google.maps.LatLng(50.23194,11.62639),
new google.maps.LatLng(50.33194,11.61806)];
var poyctr29 = new google.maps.Polyline({
  							path: ctrsector29,
  							map: GoogleMap,
  							strokeColor: "#D50973",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var ctrsector30 = [
  new google.maps.LatLng(54.34028,9.35417),
  new google.maps.LatLng(54.37917,9.70833),
  new google.maps.LatLng(54.28056,9.72083),
  new google.maps.LatLng(54.24444,9.38472),
new google.maps.LatLng(54.34028,9.35417)];
var poyctr30 = new google.maps.Polyline({
  							path: ctrsector30,
  							map: GoogleMap,
  							strokeColor: "#D50973",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var ctrsector31 = [
  new google.maps.LatLng(51.82444,13.00583),
  new google.maps.LatLng(51.81222,13.3825),
  new google.maps.LatLng(51.71222,13.37389),
  new google.maps.LatLng(51.72444,12.99778),
new google.maps.LatLng(51.82444,13.00583)];
var poyctr31 = new google.maps.Polyline({
  							path: ctrsector31,
  							map: GoogleMap,
  							strokeColor: "#D50973",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var ctrsector32 = [
  new google.maps.LatLng(49.56778,10.42056),
  new google.maps.LatLng(49.49944,10.53278),
  new google.maps.LatLng(49.43861,10.44556),
              new google.maps.LatLng(49.43861,10.44556)];
              var poyctr32 = new google.maps.Polyline({
  							path: ctrsector32,
  							map: GoogleMap,
  							strokeColor: "#D50973",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var ctrsector33 = [ new google.maps.LatLng(49.50694,10.33333), new google.maps.LatLng(49.56778,10.42056) ];
              var poyctr33 = new google.maps.Polyline({
  							path: ctrsector33,
  							map: GoogleMap,
  							strokeColor: "#D50973",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  
              
var ctrsector34 = [
  new google.maps.LatLng(48.78611,11.34722),
  new google.maps.LatLng(48.82222,11.74583),
  new google.maps.LatLng(48.72639,11.8),
  new google.maps.LatLng(48.62917,11.4),
new google.maps.LatLng(48.78611,11.34722)];
var poyctr34 = new google.maps.Polyline({
  							path: ctrsector34,
  							map: GoogleMap,
  							strokeColor: "#D50973",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var ctrsector35 = [
  new google.maps.LatLng(51.48,9.22167),
  new google.maps.LatLng(51.45944,9.60278),
  new google.maps.LatLng(51.36,9.58861),
  new google.maps.LatLng(51.38056,9.20833),
new google.maps.LatLng(51.48,9.22167)];
var poyctr35 = new google.maps.Polyline({
  							path: ctrsector35,
  							map: GoogleMap,
  							strokeColor: "#D50973",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var ctrsector36 = [
  new google.maps.LatLng(51.01722,7.03028),
  new google.maps.LatLng(50.95028,7.12972),
  new google.maps.LatLng(50.94083,7.20583),
  new google.maps.LatLng(50.97528,7.32333),
  new google.maps.LatLng(50.88472,7.39),
  new google.maps.LatLng(50.85139,7.27583),
  new google.maps.LatLng(50.78583,7.3725),
  new google.maps.LatLng(50.72306,7.26556),
  new google.maps.LatLng(50.78694,7.1725),
  new google.maps.LatLng(50.79472,7.08444),
  new google.maps.LatLng(50.77944,7.03389),
  new google.maps.LatLng(50.86167,6.97306),
  new google.maps.LatLng(50.94889,6.91417),
new google.maps.LatLng(51.01722,7.03028)];
var poyctr36 = new google.maps.Polyline({
  							path: ctrsector36,
  							map: GoogleMap,
  							strokeColor: "#D50973",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var ctrsector37 = [
  new google.maps.LatLng(53.98333,12.06944),
  new google.maps.LatLng(53.94167,12.51667),
  new google.maps.LatLng(53.84583,12.48889),
  new google.maps.LatLng(53.88333,12.04444),
new google.maps.LatLng(53.98333,12.06944)];
var poyctr37 = new google.maps.Polyline({
  							path: ctrsector37,
  							map: GoogleMap,
  							strokeColor: "#D50973",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var ctrsector38 = [
  new google.maps.LatLng(51.65139,6.11667),
  new google.maps.LatLng(51.65139,6.11639),
  new google.maps.LatLng(51.65083,6.11722),
  new google.maps.LatLng(51.64694,6.10944),
  new google.maps.LatLng(51.64472,6.11167),
  new google.maps.LatLng(51.64194,6.10806),
  new google.maps.LatLng(51.62972,6.10278),
  new google.maps.LatLng(51.62417,6.1),
  new google.maps.LatLng(51.62083,6.09722),
  new google.maps.LatLng(51.62222,6.09389),
  new google.maps.LatLng(51.6175,6.09444),
  new google.maps.LatLng(51.61528,6.09444),
  new google.maps.LatLng(51.60583,6.09139),
  new google.maps.LatLng(51.59389,6.11722),
  new google.maps.LatLng(51.59361,6.11917),
  new google.maps.LatLng(51.59278,6.12139),
  new google.maps.LatLng(51.58111,6.13056),
  new google.maps.LatLng(51.57417,6.14083),
  new google.maps.LatLng(51.57056,6.14694),
  new google.maps.LatLng(51.56667,6.15694),
  new google.maps.LatLng(51.55417,6.17222),
  new google.maps.LatLng(51.54833,6.31694),
  new google.maps.LatLng(51.64833,6.32306),
  new google.maps.LatLng(51.65139,6.11667),
new google.maps.LatLng(51.65139,6.11667)];
var poyctr38 = new google.maps.Polyline({
  							path: ctrsector38,
  							map: GoogleMap,
  							strokeColor: "#D50973",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var ctrsector39 = [
  new google.maps.LatLng(48.06528,10.67778),
  new google.maps.LatLng(48.13694,10.97639),
  new google.maps.LatLng(48.15,11.03056),
  new google.maps.LatLng(48.05556,11.07),
  new google.maps.LatLng(47.9875,10.76667),
new google.maps.LatLng(48.06528,10.67778)];
var poyctr39 = new google.maps.Polyline({
  							path: ctrsector39,
  							map: GoogleMap,
  							strokeColor: "#D50973",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var ctrsector40 = [
  new google.maps.LatLng(48.16583,10.03167),
  new google.maps.LatLng(48.17472,9.78306),
  new google.maps.LatLng(48.27472,9.79028),
  new google.maps.LatLng(48.26611,10.04056),
new google.maps.LatLng(48.16583,10.03167)];
var poyctr40 = new google.maps.Polyline({
  							path: ctrsector40,
  							map: GoogleMap,
  							strokeColor: "#D50973",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var ctrsector41 = [
  new google.maps.LatLng(48.29889,10.87),
  new google.maps.LatLng(48.25222,11.00167),
  new google.maps.LatLng(48.21806,10.97639),
  new google.maps.LatLng(48.13694,10.97639),
  new google.maps.LatLng(48.06528,10.67778),
new google.maps.LatLng(48.29889,10.87)];
var poyctr41 = new google.maps.Polyline({
  							path: ctrsector41,
  							map: GoogleMap,
  							strokeColor: "#D50973",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var ctrsector42 = [
  new google.maps.LatLng(51.47,11.97833),
  new google.maps.LatLng(51.49333,12.47889),
  new google.maps.LatLng(51.37472,12.4925),
  new google.maps.LatLng(51.35139,11.99306),
new google.maps.LatLng(51.47,11.97833)];
var poyctr42 = new google.maps.Polyline({
  							path: ctrsector42,
  							map: GoogleMap,
  							strokeColor: "#D50973",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var ctrsector43 = [
  new google.maps.LatLng(53.81944,10.53194),
  new google.maps.LatLng(53.8875,10.85139),
  new google.maps.LatLng(53.79444,10.90972),
  new google.maps.LatLng(53.725,10.59306),
new google.maps.LatLng(53.81944,10.53194)];
var poyctr43 = new google.maps.Polyline({
  							path: ctrsector43,
  							map: GoogleMap,
  							strokeColor: "#D50973",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var ctrsector44 = [
  new google.maps.LatLng(48.4275,11.52139),
  new google.maps.LatLng(48.45639,11.87417),
  new google.maps.LatLng(48.43222,11.945),
  new google.maps.LatLng(48.43806,12.02306),
  new google.maps.LatLng(48.35194,12.0375),
  new google.maps.LatLng(48.28667,12.04861),
  new google.maps.LatLng(48.25278,11.81944),
  new google.maps.LatLng(48.24111,11.67778),
  new google.maps.LatLng(48.25472,11.67361),
  new google.maps.LatLng(48.28167,11.64083),
  new google.maps.LatLng(48.27361,11.53583),
  new google.maps.LatLng(48.28667,11.53472),
new google.maps.LatLng(48.4275,11.52139)];
var poyctr44 = new google.maps.Polyline({
  							path: ctrsector44,
  							map: GoogleMap,
  							strokeColor: "#D50973",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var ctrsector45 = [
  new google.maps.LatLng(52.13111,7.41306),
  new google.maps.LatLng(52.23472,7.9),
  new google.maps.LatLng(52.14028,7.95417),
  new google.maps.LatLng(52.11056,7.81444),
              new google.maps.LatLng(52.11056,7.81444)];
              var poyctr45 = new google.maps.Polyline({
  							path: ctrsector45,
  							map: GoogleMap,
  							strokeColor: "#D50973",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var ctrsector46 = [
  new google.maps.LatLng(52.06694,7.61),
new google.maps.LatLng(52.03583,7.46556),
new google.maps.LatLng(52.13111,7.41306)];
var poyctr46 = new google.maps.Polyline({
  							path: ctrsector46,
  							map: GoogleMap,
  							strokeColor: "#D50973",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var ctrsector47 = [
  new google.maps.LatLng(48.76111,11.0625),
  new google.maps.LatLng(48.78611,11.34722),
  new google.maps.LatLng(48.62917,11.4),
  new google.maps.LatLng(48.6625,11.06389),
new google.maps.LatLng(48.76111,11.0625)];
var poyctr47 = new google.maps.Polyline({
  							path: ctrsector47,
  							map: GoogleMap,
  							strokeColor: "#D50973",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var ctrsector48 = [
  new google.maps.LatLng(49.41583,9.80194),
  new google.maps.LatLng(49.46444,10.07361),
  new google.maps.LatLng(49.36806,10.11444),
  new google.maps.LatLng(49.31944,9.8425),
new google.maps.LatLng(49.41583,9.80194)];
var poyctr48 = new google.maps.Polyline({
  							path: ctrsector48,
  							map: GoogleMap,
  							strokeColor: "#D50973",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var ctrsector49 = [
  new google.maps.LatLng(50.74667,6.54611),
  new google.maps.LatLng(50.83417,6.48583),
  new google.maps.LatLng(50.93,6.82306),
  new google.maps.LatLng(50.83806,6.885),
new google.maps.LatLng(50.74667,6.54611)];
var poyctr49 = new google.maps.Polyline({
  							path: ctrsector49,
  							map: GoogleMap,
  							strokeColor: "#D50973",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var ctrsector50 = [
  new google.maps.LatLng(49.57417,10.81861),
  new google.maps.LatLng(49.55806,10.98778),
              new google.maps.LatLng(49.55806,10.98778)];
              var poyctr50 = new google.maps.Polyline({
  							path: ctrsector50,
  							map: GoogleMap,
  							strokeColor: "#D50973",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var ctrsector51 = [
  new google.maps.LatLng(49.53778,11.19278),
new google.maps.LatLng(49.52056,11.36694),
  new google.maps.LatLng(49.42194,11.34306),
  new google.maps.LatLng(49.43944,11.16722),
              new google.maps.LatLng(49.43944,11.16722)];
              var poyctr51 = new google.maps.Polyline({
  							path: ctrsector51,
  							map: GoogleMap,
  							strokeColor: "#D50973",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var ctrsector52 = [
  new google.maps.LatLng(49.45889,10.96778),
new google.maps.LatLng(49.47528,10.79806),
new google.maps.LatLng(49.57417,10.81861)];
var poyctr52 = new google.maps.Polyline({
  							path: ctrsector52,
  							map: GoogleMap,
  							strokeColor: "#D50973",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var ctrsector53 = [
  new google.maps.LatLng(48.18444,11.3225),
  new google.maps.LatLng(48.11694,11.43056),
  new google.maps.LatLng(47.97889,11.24417),
  new google.maps.LatLng(48.04583,11.135),
new google.maps.LatLng(48.18444,11.3225)];
var poyctr53 = new google.maps.Polyline({
  							path: ctrsector53,
  							map: GoogleMap,
  							strokeColor: "#D50973",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var ctrsector54 = [
  new google.maps.LatLng(51.58222,8.38806),
  new google.maps.LatLng(51.72917,8.75139),
  new google.maps.LatLng(51.64528,8.83889),
  new google.maps.LatLng(51.49833,8.47583),
new google.maps.LatLng(51.58222,8.38806)];
var poyctr54 = new google.maps.Polyline({
  							path: ctrsector54,
  							map: GoogleMap,
  							strokeColor: "#D50973",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var ctrsector55 = [
  new google.maps.LatLng(49.49861,7.41667),
  new google.maps.LatLng(49.50972,7.77639),
  new google.maps.LatLng(49.39306,7.78472),
  new google.maps.LatLng(49.38194,7.42639),
new google.maps.LatLng(49.49861,7.41667)];
var poyctr55 = new google.maps.Polyline({
  							path: ctrsector55,
  							map: GoogleMap,
  							strokeColor: "#D50973",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var ctrsector56 = [
  new google.maps.LatLng(52.33333,7.2925),
  new google.maps.LatLng(52.35139,7.52389),
  new google.maps.LatLng(52.23722,7.52444),
  new google.maps.LatLng(52.24444,7.31694),
              new google.maps.LatLng(52.24444,7.31694)];
              var poyctr56 = new google.maps.Polyline({
  							path: ctrsector56,
  							map: GoogleMap,
  							strokeColor: "#D50973",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var ctrsector57 = [ new google.maps.LatLng(52.33333,7.2925), new google.maps.LatLng(52.33333,7.2925) ];
              var poyctr57 = new google.maps.Polyline({
  							path: ctrsector57,
  							map: GoogleMap,
  							strokeColor: "#D50973",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  
              
var ctrsector58 = [
  new google.maps.LatLng(49.25972,6.92778),
  new google.maps.LatLng(49.27222,7.28472),
  new google.maps.LatLng(49.18611,7.29194),
  new google.maps.LatLng(49.17139,7.27889),
  new google.maps.LatLng(49.16278,7.03194),
  new google.maps.LatLng(49.22444,6.93083),
new google.maps.LatLng(49.25972,6.92778)];
var poyctr58 = new google.maps.Polyline({
  							path: ctrsector58,
  							map: GoogleMap,
  							strokeColor: "#D50973",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var ctrsector59 = [
  new google.maps.LatLng(54.43194,9.32361),
  new google.maps.LatLng(54.575,9.6125),
  new google.maps.LatLng(54.46944,9.69583),
  new google.maps.LatLng(54.37917,9.70833),
  new google.maps.LatLng(54.34028,9.35417),
new google.maps.LatLng(54.43194,9.32361)];
var poyctr59 = new google.maps.Polyline({
  							path: ctrsector59,
  							map: GoogleMap,
  							strokeColor: "#D50973",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var ctrsector60 = [
  new google.maps.LatLng(50.09306,6.73194),
  new google.maps.LatLng(49.99944,6.87889),
  new google.maps.LatLng(49.84972,6.64944),
  new google.maps.LatLng(49.92222,6.53639),
  new google.maps.LatLng(49.95444,6.60722),
  new google.maps.LatLng(49.98694,6.56917),
new google.maps.LatLng(50.09306,6.73194)];
var poyctr60 = new google.maps.Polyline({
  							path: ctrsector60,
  							map: GoogleMap,
  							strokeColor: "#D50973",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var ctrsector61 = [
  new google.maps.LatLng(48.59667,9.005),
  new google.maps.LatLng(48.69278,8.96361),
  new google.maps.LatLng(48.78528,9.45056),
  new google.maps.LatLng(48.68917,9.49222),
new google.maps.LatLng(48.59667,9.005)];
var poyctr61 = new google.maps.Polyline({
  							path: ctrsector61,
  							map: GoogleMap,
  							strokeColor: "#D50973",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var ctrsector62 = [
  new google.maps.LatLng(54.95778,8.17833),
  new google.maps.LatLng(55.01583,8.31944),
  new google.maps.LatLng(54.99639,8.34361),
              new google.maps.LatLng(54.99639,8.34361)];
              var poyctr62 = new google.maps.Polyline({
  							path: ctrsector62,
  							map: GoogleMap,
  							strokeColor: "#D50973",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var ctrsector63 = [
  new google.maps.LatLng(54.88639,8.47972),
new google.maps.LatLng(54.865,8.50611),
  new google.maps.LatLng(54.80722,8.36556),
new google.maps.LatLng(54.95778,8.17833)];
var poyctr63 = new google.maps.Polyline({
  							path: ctrsector63,
  							map: GoogleMap,
  							strokeColor: "#D50973",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var ctrsector64 = [
  new google.maps.LatLng(50.06111,8.12889),
  new google.maps.LatLng(50.14278,8.46389),
  new google.maps.LatLng(50.08972,8.49472),
  new google.maps.LatLng(50.04833,8.32417),
  new google.maps.LatLng(50.00583,8.34806),
  new google.maps.LatLng(49.96722,8.1825),
new google.maps.LatLng(50.06111,8.12889)];
var poyctr64 = new google.maps.Polyline({
  							path: ctrsector64,
  							map: GoogleMap,
  							strokeColor: "#D50973",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var ctrsector65 = [
  new google.maps.LatLng(53.50056,10.00028),
  new google.maps.LatLng(53.54472,10.15417),
  new google.maps.LatLng(53.5,10.18972),
  new google.maps.LatLng(53.45611,10.03611),
new google.maps.LatLng(53.50056,10.00028)];
var poyctr65 = new google.maps.Polyline({
  							path: ctrsector65,
  							map: GoogleMap,
  							strokeColor: "#D50973",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var ctrsector66 = [
  new google.maps.LatLng(51.325,6.44972),
  new google.maps.LatLng(51.25917,6.56833),
  new google.maps.LatLng(51.25389,6.55806),
  new google.maps.LatLng(51.17083,6.65694),
  new google.maps.LatLng(51.1375,6.56722),
  new google.maps.LatLng(51.23,6.37917),
  new google.maps.LatLng(51.26583,6.37),
new google.maps.LatLng(51.325,6.44972)];
var poyctr66 = new google.maps.Polyline({
  							path: ctrsector66,
  							map: GoogleMap,
  							strokeColor: "#D50973",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var ctrsector67 = [
  new google.maps.LatLng(52.575,9.38333),
  new google.maps.LatLng(52.47778,9.22778),
  new google.maps.LatLng(52.40139,9.25),
  new google.maps.LatLng(52.34861,9.425),
new google.maps.LatLng(52.575,9.38333)];
var poyctr67 = new google.maps.Polyline({
  							path: ctrsector67,
  							map: GoogleMap,
  							strokeColor: "#D50973",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var ctrsector68 = [
  new google.maps.LatLng(48.87306,8.12611),
  new google.maps.LatLng(48.83444,8.22139),
  new google.maps.LatLng(48.67361,8.07083),
  new google.maps.LatLng(48.71861,7.95972),
new google.maps.LatLng(48.87306,8.12611)];
var poyctr68 = new google.maps.Polyline({
  							path: ctrsector68,
  							map: GoogleMap,
  							strokeColor: "#D50973",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var ctrsector69 = [
  new google.maps.LatLng(53.95556,14.01389),
  new google.maps.LatLng(53.85833,13.96806),
  new google.maps.LatLng(53.81111,14.25556),
  new google.maps.LatLng(53.83667,14.23556),
  new google.maps.LatLng(53.8425,14.23333),
  new google.maps.LatLng(53.86472,14.21278),
  new google.maps.LatLng(53.88056,14.21333),
  new google.maps.LatLng(53.88472,14.21361),
  new google.maps.LatLng(53.89028,14.21306),
  new google.maps.LatLng(53.89389,14.21278),
  new google.maps.LatLng(53.90222,14.20861),
  new google.maps.LatLng(53.91028,14.19639),
  new google.maps.LatLng(53.915,14.1825),
  new google.maps.LatLng(53.91639,14.20639),
  new google.maps.LatLng(53.92222,14.21667),
  new google.maps.LatLng(53.95556,14.01389),
new google.maps.LatLng(53.95556,14.01389)];
var poyctr69 = new google.maps.Polyline({
  							path: ctrsector69,
  							map: GoogleMap,
  							strokeColor: "#D50973",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var ctrsector70 = [
  new google.maps.LatLng(53.43139,11.5975),
  new google.maps.LatLng(53.51611,11.90139),
  new google.maps.LatLng(53.42556,11.97278),
  new google.maps.LatLng(53.34083,11.66861),
new google.maps.LatLng(53.43139,11.5975)];
var poyctr70 = new google.maps.Polyline({
  							path: ctrsector70,
  							map: GoogleMap,
  							strokeColor: "#D50973",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var ctrsector71 = [
  new google.maps.LatLng(49.52722,8.38167),
  new google.maps.LatLng(49.51806,8.65167),
  new google.maps.LatLng(49.41806,8.64333),
  new google.maps.LatLng(49.42722,8.37444),
new google.maps.LatLng(49.52722,8.38167)];
var poyctr71 = new google.maps.Polyline({
  							path: ctrsector71,
  							map: GoogleMap,
  							strokeColor: "#D50973",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var ctrsector72 = [
  new google.maps.LatLng(49.9875,8.59722),
  new google.maps.LatLng(50.015,8.7125),
  new google.maps.LatLng(49.92639,8.71528),
  new google.maps.LatLng(49.92639,8.59861),
new google.maps.LatLng(49.9875,8.59722)];
var poyctr72 = new google.maps.Polyline({
  							path: ctrsector72,
  							map: GoogleMap,
  							strokeColor: "#D50973",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var ctrsector73 = [
  new google.maps.LatLng(51.03361,5.87722),
  new google.maps.LatLng(51.01306,5.92778),
  new google.maps.LatLng(51.01278,5.96056),
  new google.maps.LatLng(50.98333,5.96056),
new google.maps.LatLng(51.03361,5.87722)];
var poyctr73 = new google.maps.Polyline({
  							path: ctrsector73,
  							map: GoogleMap,
  							strokeColor: "#D50973",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var ctrsector74 = [
  new google.maps.LatLng(49.13472,7.315),
  new google.maps.LatLng(49.15389,7.26361),
  new google.maps.LatLng(49.31694,7.40694),
  new google.maps.LatLng(49.26722,7.53972),
  new google.maps.LatLng(49.16917,7.45333),
new google.maps.LatLng(49.13472,7.315)];
var poyctr74 = new google.maps.Polyline({
  							path: ctrsector74,
  							map: GoogleMap,
  							strokeColor: "#D50973",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var ctrsector75 = [
  new google.maps.LatLng(52.65639,10.17111),
  new google.maps.LatLng(52.55806,10.19694),
  new google.maps.LatLng(52.53667,9.98139),
              new google.maps.LatLng(52.53667,9.98139)];
              var poyctr75 = new google.maps.Polyline({
  							path: ctrsector75,
  							map: GoogleMap,
  							strokeColor: "#D50973",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var ctrsector76 = [ new google.maps.LatLng(52.635,9.955), new google.maps.LatLng(52.65639,10.17111) ];
              var poyctr76 = new google.maps.Polyline({
  							path: ctrsector76,
  							map: GoogleMap,
  							strokeColor: "#D50973",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  
              
var ctrsector77 = [
  new google.maps.LatLng(48.08333,12.75556),
  new google.maps.LatLng(47.775,12.93333),
  new google.maps.LatLng(47.91667,12.79722),
new google.maps.LatLng(48.08333,12.75556)];
var poyctr77 = new google.maps.Polyline({
  							path: ctrsector77,
  							map: GoogleMap,
  							strokeColor: "#D50973",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var ctrsector78 = [
  new google.maps.LatLng(48.65639,7.87306),
              new google.maps.LatLng(48.65639,7.87306)];
              var poyctr78 = new google.maps.Polyline({
  							path: ctrsector78,
  							map: GoogleMap,
  							strokeColor: "#D50973",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});  

var ctrsector79 = [
  new google.maps.LatLng(48.61389,7.91083),
new google.maps.LatLng(48.57306,7.80222),
new google.maps.LatLng(48.65639,7.87306)];
var poyctr79 = new google.maps.Polyline({
  							path: ctrsector79,
  							map: GoogleMap,
  							strokeColor: "#D50973",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var ctrsector80 = [
  new google.maps.LatLng(53.58,7.48889),
  new google.maps.LatLng(53.62333,7.83194),
  new google.maps.LatLng(53.5225,7.8675),
  new google.maps.LatLng(53.47917,7.52528),
new google.maps.LatLng(53.58,7.48889)];
var poyctr80 = new google.maps.Polyline({
  							path: ctrsector80,
  							map: GoogleMap,
  							strokeColor: "#D50973",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var ctrsector81 = [
  new google.maps.LatLng(48.36361,7.73778),
  new google.maps.LatLng(48.47917,7.83111),
  new google.maps.LatLng(48.43194,7.96389),
  new google.maps.LatLng(48.26139,7.82639),
  new google.maps.LatLng(48.30667,7.6975),
new google.maps.LatLng(48.36361,7.73778)];
var poyctr81 = new google.maps.Polyline({
  							path: ctrsector81,
  							map: GoogleMap,
  							strokeColor: "#D50973",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var ctrsector82 = [
  new google.maps.LatLng(52.58222,12.98417),
  new google.maps.LatLng(52.63667,13.55139),
  new google.maps.LatLng(52.58611,13.56472),
  new google.maps.LatLng(52.54194,13.64972),
  new google.maps.LatLng(52.48139,13.01139),
new google.maps.LatLng(52.58222,12.98417)];
var poyctr82 = new google.maps.Polyline({
  							path: ctrsector82,
  							map: GoogleMap,
  							strokeColor: "#D50973",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var ctrsector83 = [
  new google.maps.LatLng(52.35972,13.20056),
  new google.maps.LatLng(52.48139,13.01139),
  new google.maps.LatLng(52.54194,13.64972),
  new google.maps.LatLng(52.48917,13.75111),
  new google.maps.LatLng(52.39139,13.81194),
  new google.maps.LatLng(52.26306,13.2625),
new google.maps.LatLng(52.35972,13.20056)];
var poyctr83 = new google.maps.Polyline({
  							path: ctrsector83,
  							map: GoogleMap,
  							strokeColor: "#D50973",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var ctrsector84 = [
  new google.maps.LatLng(47.97278,10.05333),
  new google.maps.LatLng(48.08861,10.34222),
  new google.maps.LatLng(48.00306,10.41889),
  new google.maps.LatLng(47.88694,10.12972),
new google.maps.LatLng(47.97278,10.05333)];
var poyctr84 = new google.maps.Polyline({
  							path: ctrsector84,
  							map: GoogleMap,
  							strokeColor: "#D50973",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var ctrsector85 = [
  new google.maps.LatLng(53.48611,9.58278),
  new google.maps.LatLng(53.54972,9.7075),
  new google.maps.LatLng(53.46306,9.82056),
  new google.maps.LatLng(53.40222,9.6925),
new google.maps.LatLng(53.48611,9.58278)];
var poyctr85 = new google.maps.Polyline({
  							path: ctrsector85,
  							map: GoogleMap,
  							strokeColor: "#D50973",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var ctrsector86 = [
  new google.maps.LatLng(51.88083,11.22556),
  new google.maps.LatLng(51.92583,11.55028),
  new google.maps.LatLng(51.82833,11.58528),
  new google.maps.LatLng(51.78333,11.26111),
new google.maps.LatLng(51.88083,11.22556)];
var poyctr86 = new google.maps.Polyline({
  							path: ctrsector86,
  							map: GoogleMap,
  							strokeColor: "#D50973",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var ctrsector87 = [
  new google.maps.LatLng(48.29833,7.82583),
  new google.maps.LatLng(48.2925,7.85139),
  new google.maps.LatLng(48.26139,7.82639),
  new google.maps.LatLng(48.2675,7.80944),
new google.maps.LatLng(48.29833,7.82583)];
var poyctr87 = new google.maps.Polyline({
  							path: ctrsector87,
  							map: GoogleMap,
  							strokeColor: "#D50973",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var ctrsector88 = [
  new google.maps.LatLng(48.44722,7.92056),
  new google.maps.LatLng(48.43194,7.96389),
  new google.maps.LatLng(48.42278,7.95639),
  new google.maps.LatLng(48.42833,7.91056),
new google.maps.LatLng(48.44722,7.92056)];
var poyctr88 = new google.maps.Polyline({
  							path: ctrsector88,
  							map: GoogleMap,
  							strokeColor: "#D50973",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var ctrsector89 = [
  new google.maps.LatLng(51.70889,8.70028),
  new google.maps.LatLng(51.72944,8.75139),
  new google.maps.LatLng(51.64556,8.83889),
  new google.maps.LatLng(51.62472,8.7875),
new google.maps.LatLng(51.70889,8.70028)];
var poyctr89 = new google.maps.Polyline({
  							path: ctrsector89,
  							map: GoogleMap,
  							strokeColor: "#D50973",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
       
drawedrsCircle(6.75444,51.25778,6.9878685078253,"#D50973",1,271,15);
drawedrsCircle(9.08333,52.27917,4.9768617758107,"#D50973",1,294,40);
drawedrsCircle(9.20278,52.29611,3.0104786034058,"#D50973",1,348,165);
drawedrsCircle(10.95806,50.97972,4.9835415497099,"#D50973",1,314,60);
drawedrsCircle(10.185,52.92,4.9740446291328,"#D50973",1,126,231);
drawedrsCircle(10.38944,49.47278,2.9986947495582,"#D50973",1,133,313);
drawedrsCircle(7.68556,52.13611,4.9884686938184,"#D50973",1,108,214);
drawedrsCircle(11.07917,49.49972,4.9914239460829,"#D50973",1,315,63);
drawedrsCircle(11.07917,49.49972,4.986215416439,"#D50973",1,136,241);
drawedrsCircle(7.33972,52.2925,3.0021262548472,"#D50973",1,196,325);
drawedrsCircle(8.34333,54.91333,4.983055909353,"#D50973",1,0,109);
drawedrsCircle(9.96833,52.58583,2.9874867232562,"#D50973",1,171,351);
drawedrsCircle(7.57194,48.50528,15.000566060191,"#D50973",1,53,64);

}

if (WaveShow) {
 
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

if (RestrictShow) {	

var sectorrestrict1 = [
  new google.maps.LatLng(50.11667,9.80556),
  new google.maps.LatLng(50.11667,9.93333),
  new google.maps.LatLng(50.03333,9.93333),
  new google.maps.LatLng(50.03333,9.80556),
new google.maps.LatLng(50.11667,9.80556)];
var poyrestrict1 = new google.maps.Polyline({
  							path: sectorrestrict1,
  							map: GoogleMap,
  							strokeColor: "#1CD874",
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
  							strokeColor: "#1CD874",
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
  							strokeColor: "#1CD874",
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
  							strokeColor: "#1CD874",
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
  							strokeColor: "#1CD874",
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
  							strokeColor: "#1CD874",
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
  							strokeColor: "#1CD874",
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
  							strokeColor: "#1CD874",
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
  							strokeColor: "#1CD874",
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
  							strokeColor: "#1CD874",
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
  							strokeColor: "#1CD874",
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
  							strokeColor: "#1CD874",
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
  							strokeColor: "#1CD874",
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
  							strokeColor: "#1CD874",
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
  							strokeColor: "#1CD874",
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
  							strokeColor: "#1CD874",
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
  							strokeColor: "#1CD874",
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
  							strokeColor: "#1CD874",
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
  							strokeColor: "#1CD874",
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
  							strokeColor: "#1CD874",
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
  							strokeColor: "#1CD874",
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
  							strokeColor: "#1CD874",
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
  							strokeColor: "#1CD874",
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
  							strokeColor: "#1CD874",
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
  							strokeColor: "#1CD874",
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
  							strokeColor: "#1CD874",
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
  							strokeColor: "#1CD874",
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
  							strokeColor: "#1CD874",
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
  							strokeColor: "#1CD874",
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
  							strokeColor: "#1CD874",
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
  							strokeColor: "#1CD874",
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
  							strokeColor: "#1CD874",
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
  							strokeColor: "#1CD874",
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
  							strokeColor: "#1CD874",
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
  							strokeColor: "#1CD874",
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
  							strokeColor: "#1CD874",
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
  							strokeColor: "#1CD874",
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
  							strokeColor: "#1CD874",
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
  							strokeColor: "#1CD874",
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
  							strokeColor: "#1CD874",
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
  							strokeColor: "#1CD874",
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
  							strokeColor: "#1CD874",
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
  							strokeColor: "#1CD874",
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
  							strokeColor: "#1CD874",
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
  							strokeColor: "#1CD874",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var sectorrestrict46 = [
  new google.maps.LatLng(52.71806,7.06361),
  new google.maps.LatLng(52.68333,7.25278),
  new google.maps.LatLng(52.49194,7.29667),
              new google.maps.LatLng(52.49194,7.29667)];
              var poyrestrict46 = new google.maps.Polyline({
  							path: sectorrestrict46,
  							map: GoogleMap,
  							strokeColor: "#1CD874",
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
  							strokeColor: "#1CD874",
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
  							strokeColor: "#1CD874",
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
  							strokeColor: "#1CD874",
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
  							strokeColor: "#1CD874",
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
  							strokeColor: "#1CD874",
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
  							strokeColor: "#1CD874",
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
  							strokeColor: "#1CD874",
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
  							strokeColor: "#1CD874",
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
  							strokeColor: "#1CD874",
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
  							strokeColor: "#1CD874",
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
  							strokeColor: "#1CD874",
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
  							strokeColor: "#1CD874",
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
  							strokeColor: "#1CD874",
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
  							strokeColor: "#1CD874",
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
  							strokeColor: "#1CD874",
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
  							strokeColor: "#1CD874",
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
  							strokeColor: "#1CD874",
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
  							strokeColor: "#1CD874",
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
  							strokeColor: "#1CD874",
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
  							strokeColor: "#1CD874",
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
  							strokeColor: "#1CD874",
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
  							strokeColor: "#1CD874",
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
  							strokeColor: "#1CD874",
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
  							strokeColor: "#1CD874",
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
  							strokeColor: "#1CD874",
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
  							strokeColor: "#1CD874",
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
  							strokeColor: "#1CD874",
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
  							strokeColor: "#1CD874",
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
  							strokeColor: "#1CD874",
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
  							strokeColor: "#1CD874",
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
  							strokeColor: "#1CD874",
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
  							strokeColor: "#1CD874",
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
  							strokeColor: "#1CD874",
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
  							strokeColor: "#1CD874",
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
  							strokeColor: "#1CD874",
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
  							strokeColor: "#1CD874",
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
  							strokeColor: "#1CD874",
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
  							strokeColor: "#1CD874",
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
  							strokeColor: "#1CD874",
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
  							strokeColor: "#1CD874",
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
  							strokeColor: "#1CD874",
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
  							strokeColor: "#1CD874",
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
  							strokeColor: "#1CD874",
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
  							strokeColor: "#1CD874",
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
  							strokeColor: "#1CD874",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
  
drawedrsCircle(9.37778,49.2875,1.0,"#1CD874",1,0,360);
drawedrsCircle(7.16667,51.80833,2.5,"#1CD874",1,0,360);
drawedrsCircle(12.87667,49.14667,1.35,"#1CD874",1,0,360);
drawedrsCircle(11.8,48.75,6.9885123594219,"#1CD874",1,341,55);
drawedrsCircle(9.92417,54.33333,1.3,"#1CD874",1,0,360);
drawedrsCircle(9.195,50.68083,2.0,"#1CD874",1,0,360);
drawedrsCircle(6.41667,50.9,2.0,"#1CD874",1,0,360);
drawedrsCircle(8.43389,49.09833,2.0,"#1CD874",1,0,360);
drawedrsCircle(11.8,48.75,7.0,"#1CD874",1,0,360);
drawedrsCircle(7.2,52.43333,5.0,"#1CD874",1,0,360);
drawedrsCircle(7.2,52.43333,4.9849439535548,"#1CD874",1,270,45);
drawedrsCircle(10.30556,50.96528,1.0,"#1CD874",1,0,360);
drawedrsCircle(11.27944,48.08639,0.8,"#1CD874",1,0,360);
drawedrsCircle(11.20833,48.56972,1.7,"#1CD874",1,0,360);
drawedrsCircle(13.40667,52.10333,1.5,"#1CD874",1,0,360);
drawedrsCircle(7.6125,49.23833,1.0,"#1CD874",1,0,360);
drawedrsCircle(11.67444,48.26861,0.8,"#1CD874",1,0,360);
drawedrsCircle(10.41944,53.40694,1.1,"#1CD874",1,0,360);
drawedrsCircle(13.12944,52.41056,2.0052090633166,"#1CD874",1,172,92);
drawedrsCircle(8.41556,49.70944,0.8,"#1CD874",1,0,360);
drawedrsCircle(9.345,53.85222,0.8,"#1CD874",1,0,360);
drawedrsCircle(9.20306,53.8925,0.8,"#1CD874",1,0,360);
drawedrsCircle(7.32111,52.47194,0.8,"#1CD874",1,0,360);
drawedrsCircle(10.18417,49.98389,0.8,"#1CD874",1,0,360);
drawedrsCircle(9.41139,52.03639,0.8,"#1CD874",1,0,360);
drawedrsCircle(10.40278,48.515,0.8,"#1CD874",1,0,360);
drawedrsCircle(12.29722,48.60722,0.8,"#1CD874",1,0,360);
drawedrsCircle(9.1725,49.04028,0.8,"#1CD874",1,0,360);
drawedrsCircle(9.07611,49.36472,0.8,"#1CD874",1,0,360);
drawedrsCircle(8.43806,49.25417,0.8,"#1CD874",1,0,360);
drawedrsCircle(8.47778,53.42917,0.8,"#1CD874",1,0,360);
drawedrsCircle(13.37611,52.51861,3.0,"#1CD874",1,0,360);
drawedrsCircle(11.8,48.75,6.9836003940029,"#1CD874",1,230,284);
drawedrsCircle(13.10111,52.9725,1.5,"#1CD874",1,0,360);

}

if (DangerShow) {

var dangersector1 = [
  new google.maps.LatLng(55,6.5),
  new google.maps.LatLng(55,7.72222),
  new google.maps.LatLng(53.72222,6.88333),
  new google.maps.LatLng(53.66667,6.5),
new google.maps.LatLng(55,6.5)];
var polydanger1 = new google.maps.Polyline({
  							path: dangersector1,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var dangersector2 = [
  new google.maps.LatLng(55,7.72222),
  new google.maps.LatLng(55,8),
  new google.maps.LatLng(55.06667,8.33333),
  new google.maps.LatLng(54.93333,8.21667),
  new google.maps.LatLng(54.73333,8.18333),
  new google.maps.LatLng(54.65,8.2),
  new google.maps.LatLng(54.13333,8.56667),
  new google.maps.LatLng(53.88333,8.16667),
  new google.maps.LatLng(53.82778,7.63333),
  new google.maps.LatLng(53.72222,6.88333),
new google.maps.LatLng(55,7.72222)];
var polydanger2 = new google.maps.Polyline({
  							path: dangersector2,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var dangersector3 = [
  new google.maps.LatLng(54.56667,10.58333),
  new google.maps.LatLng(54.56667,10.88333),
  new google.maps.LatLng(54.54222,10.88333),
  new google.maps.LatLng(54.51083,10.65333),
  new google.maps.LatLng(54.54417,10.52694),
new google.maps.LatLng(54.56667,10.58333)];
var polydanger3 = new google.maps.Polyline({
  							path: dangersector3,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var dangersector4 = [
  new google.maps.LatLng(54.56667,10.88333),
  new google.maps.LatLng(54.56667,10.98333),
  new google.maps.LatLng(54.49583,10.98333),
  new google.maps.LatLng(54.43333,10.88333),
new google.maps.LatLng(54.56667,10.88333)];
var polydanger4 = new google.maps.Polyline({
  							path: dangersector4,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var dangersector5 = [
  new google.maps.LatLng(54.75,10.15667),
  new google.maps.LatLng(54.75,10.30333),
  new google.maps.LatLng(54.64444,10.42),
  new google.maps.LatLng(54.59917,10.58333),
  new google.maps.LatLng(54.56667,10.58333),
  new google.maps.LatLng(54.54417,10.52694),
  new google.maps.LatLng(54.59306,10.34),
new google.maps.LatLng(54.75,10.15667)];
var polydanger5 = new google.maps.Polyline({
  							path: dangersector5,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var dangersector6 = [
  new google.maps.LatLng(54.91722,8.03472),
  new google.maps.LatLng(54.80444,8.19528),
  new google.maps.LatLng(54.73333,8.18333),
  new google.maps.LatLng(54.65,8.2),
  new google.maps.LatLng(54.49528,8.31028),
  new google.maps.LatLng(54.27222,7.88333),
  new google.maps.LatLng(54.25833,7.56667),
new google.maps.LatLng(54.91722,8.03472)];
var polydanger6 = new google.maps.Polyline({
  							path: dangersector6,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var dangersector7 = [
  new google.maps.LatLng(54.66667,6.5),
  new google.maps.LatLng(54.66667,7),
  new google.maps.LatLng(54.25,7),
  new google.maps.LatLng(54.25,6.5),
new google.maps.LatLng(54.66667,6.5)];
var polydanger7 = new google.maps.Polyline({
  							path: dangersector7,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var dangersector8 = [
  new google.maps.LatLng(55,6.5),
  new google.maps.LatLng(55,7.25),
  new google.maps.LatLng(55.16667,7.33333),
  new google.maps.LatLng(55.16667,7.83333),
  new google.maps.LatLng(55,7.72361),
  new google.maps.LatLng(54.25,7.22667),
  new google.maps.LatLng(54.25,7),
  new google.maps.LatLng(54.66667,7),
  new google.maps.LatLng(54.66667,6.5),
new google.maps.LatLng(55,6.5)];
var polydanger8 = new google.maps.Polyline({
  							path: dangersector8,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var dangersector9 = [
  new google.maps.LatLng(54.66667,14.32472),
  new google.maps.LatLng(54.33333,14.28139),
  new google.maps.LatLng(54.33333,14.09167),
  new google.maps.LatLng(54.63056,13.85833),
  new google.maps.LatLng(54.66667,13.95833),
new google.maps.LatLng(54.66667,14.32472)];
var polydanger9 = new google.maps.Polyline({
  							path: dangersector9,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var dangersector10 = [
  new google.maps.LatLng(54.33333,14.28139),
  new google.maps.LatLng(54.16667,14.25972),
  new google.maps.LatLng(54.16667,13.91667),
  new google.maps.LatLng(54.61667,13.83333),
  new google.maps.LatLng(54.63056,13.85833),
  new google.maps.LatLng(54.33333,14.09167),
new google.maps.LatLng(54.33333,14.28139)];
var polydanger10 = new google.maps.Polyline({
  							path: dangersector10,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var dangersector11 = [
  new google.maps.LatLng(54.91667,14.3575),
  new google.maps.LatLng(54.66667,14.32472),
  new google.maps.LatLng(54.66667,13.95833),
  new google.maps.LatLng(54.63056,13.85833),
  new google.maps.LatLng(54.61667,13.83333),
  new google.maps.LatLng(54.91667,13.75),
new google.maps.LatLng(54.91667,14.3575)];
var polydanger11 = new google.maps.Polyline({
  							path: dangersector11,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
var dangersector12 = [
  new google.maps.LatLng(55.06667,8.33333),
  new google.maps.LatLng(54.93333,8.21667),
  new google.maps.LatLng(54.80444,8.19528),
  new google.maps.LatLng(54.91722,8.03472),
  new google.maps.LatLng(55.02222,8.11028),
new google.maps.LatLng(55.06667,8.33333)];
var polydanger12 = new google.maps.Polyline({
  							path: dangersector12,
  							map: GoogleMap,
  							strokeColor: "#FA2165",
  							strokeOpacity: 1.0,
  							strokeWeight: 1,
  							geodesic: true
								});   
				
}

if (ClassCShow) {

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

if (ClassDShow) { 	

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

}

