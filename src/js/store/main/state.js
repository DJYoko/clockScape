import constants from '@js/utils/constants'

// data for pre-loading.
const defaultDate = new Date();
const defaultUnixtime = defaultDate.getTime();

const state = {
  region: constants.DEFAULT_REGION,
  datetime: defaultUnixtime,
  currentUnixtime: defaultUnixtime,
  initServerUnixtime: defaultUnixtime,
  initDeviceUnixTime: defaultUnixtime,
};

export default state;
