import constants from '@js/utils/constants'

// data for pre-loading.
const defaultDate = new Date();
const defaultUnixTime = defaultDate.getTime();

const state = {
  region: constants.DEFAULT_REGION,
  datetime: defaultUnixTime,
  currentUnixTime: defaultUnixTime,
  initServerUnixTime: defaultUnixTime,
  initDeviceUnixTime: defaultUnixTime,
};

export default state;
