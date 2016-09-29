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
function drawctr() {


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
