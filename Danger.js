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
function drawdanger() {

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
