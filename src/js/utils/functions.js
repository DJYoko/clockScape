import CONSTANTS from "@js/utils/constants";

const functions = {}

functions.getLocalTime = function(region, unixTime) {
  const deviceTimezoneOffset = 60 * new Date().getTimezoneOffset(); // second
  const selectedRegionTimezoneOffset =
    CONSTANTS.REGIONS[region].offset; //second
  const selectedRegionLocalDateTime =
    unixTime +
    (deviceTimezoneOffset + selectedRegionTimezoneOffset) * 1000; // milli second
  return new Date(selectedRegionLocalDateTime);
}
export default functions