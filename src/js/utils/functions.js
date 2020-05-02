import constants from "@js/utils/constants";

const functions = {}

functions.getLocalTime = function(region, unixTime) {
  const deviceTimezoneOffset = 60 * new Date().getTimezoneOffset(); // second
  const selectedRegionTimezoneOffset =
    constants.REGIONS[region].offset; //second
  const selectedRegionLocalDateTime =
    unixTime +
    (deviceTimezoneOffset + selectedRegionTimezoneOffset) * 1000; // milli second
  return new Date(selectedRegionLocalDateTime);
}

functions.getDayOrNight = function(datetime) {
  return (datetime.getHours() < 6 || 18 <= datetime.getHours()) ? 'night' : 'day'
}
export default functions