const REGIONS = {
  Dubai: {
    label: 'Dubai',
    offset: 14400,
    photoLink: 'https://unsplash.com/photos/jG3I8b5iyHI',
    position: [25.1, 55.2],
    latlng: [51.5287718, -0.2416808]
  },
  London: {
    label: 'London',
    offset: 0,
    photoLink: 'https://unsplash.com/photos/Oja2ty_9ZLM',
    position: [33, 48.3],
    latlng: [51.5287718, -0.2416808]
  },
  Moscow: {
    label: 'Moscow',
    offset: 10800,
    photoLink: 'https://unsplash.com/photos/jaH3QF46gAY',
    position: [32.5, 57.3],
    latlng: [55.5815245, 36.8251335]
  },
  NewYork: {
    label: 'New York',
    offset: -18000,
    photoLink: 'https://unsplash.com/photos/UnI8AGe1634',
    position: [40, 30],
    latlng: [40.6976637, -74.1197644]
  },
  RioDeJaneiro: {
    label: 'Rio de Janeiro',
    offset: -10800,
    photoLink: 'https://unsplash.com/photos/OkiDIla7K8Q',
    position: [71, 37],
    latlng: [-22.54, -43.11]
  },
  Shanghai: {
    label: 'Shanghai',
    offset: 28800,
    photoLink: 'https://unsplash.com/photos/uKyzXEc2k_s',
    position: [45, 78.7],
    latlng: [31.2246325, 121.1965671]
  },
  Tokyo: {
    label: 'Tokyo',
    offset: 32400,
    photoLink: 'https://unsplash.com/photos/CudNrzbsyZw',
    position: [42.7, 83.4],
    latlng: [35.6693863, 139.6012968]
  }
}

// const WEB_ROOT = '/bitbucket/clockscape/dst/';
const _location = location.pathname
const WEB_ROOT = _location.substring(0, _location.lastIndexOf('/')) + '/'

const TIME_API_URL = 'https://ntp-a1.nict.go.jp/cgi-bin/json'
const DEFAULT_REGION = 'Tokyo'

export default {
  DEFAULT_REGION,
  REGIONS,
  WEB_ROOT,
  TIME_API_URL
}
