var EARTH_RADIUS = 6371

/**
 * @return {number}
 */
var ConvertDegreesToRadians = function(degrees) {
  return degrees * Math.PI / 180;
}

/**
 * @return {number}
 */
var HaverSin = function(theta) {
  var v = Math.sin(theta / 2);
  return v * v;
}

module.exports = function (pois) {
  var lng_1 = ConvertDegreesToRadians(pois[0][0])
  var lat_1 = ConvertDegreesToRadians(pois[0][1])
  var lng_2 = ConvertDegreesToRadians(pois[1][0])
  var lat_2 = ConvertDegreesToRadians(pois[1][1])

  var v_lng = Math.abs(lng_1-lng_2)
  var v_lat = Math.abs(lat_1-lat_2)

  //h is the great circle distance in radians, great circle就是一个球体上的切面，它的圆心即是球心的一个周长最大的圆。
  let h = HaverSin(v_lat) + Math.cos(lat_1) * Math.cos(lat_2) * HaverSin(v_lng);
  return 2 * EARTH_RADIUS * Math.asin(Math.sqrt(h));
}
