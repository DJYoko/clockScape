const REGIONS = {
  // Sydney, Australia
  Sydney: {
    label: 'Sydney',
    offset: 36000,
    photoLink:
      {day: 'https://unsplash.com/photos/7Zb7kUyQg1E',
        night: 'https://unsplash.com/photos/ZXlfq5mExMs'
      },
    position: [75.7, 86.4],
    latlng: [-33.865143, 151.209900]
  },
  Tokyo: {
    label: 'Tokyo',
    offset: 32400,
    photoLink:
      {day: 'https://unsplash.com/photos/CudNrzbsyZw',
        night: 'https://unsplash.com/photos/plX7xeNb3Yo'
      },
    position: [42.7, 83.4],
    latlng: [35.6693863, 139.6012968]
  },
  Shanghai: {
    label: 'Shanghai',
    offset: 28800,
    photoLink:
      {day: 'https://unsplash.com/photos/uKyzXEc2k_s',
        night: 'https://unsplash.com/photos/5h_dMuX_7RE'
      },
    position: [45, 78.7],
    latlng: [31.2246325, 121.1965671]
  },
  Dubai: {
    label: 'Dubai',
    offset: 14400,
    photoLink:
      {day: 'https://unsplash.com/photos/jG3I8b5iyHI',
        night: 'https://unsplash.com/photos/Sa6Nimow-_Y'
      },
    position: [47.1, 62.2],
    latlng: [25.266667,55.333333]
  },
  Moscow: {
    label: 'Moscow',
    offset: 10800,
    photoLink:
      {day: 'https://unsplash.com/photos/jaH3QF46gAY',
        night: 'https://unsplash.com/photos/64TrBkpfhho'
      },
    position: [32.5, 57.3],
    latlng: [55.5815245, 36.8251335]
  },
  Paris: {
    label: 'Paris',
    offset: 3600,
    photoLink:
      {day: 'https://unsplash.com/photos/nnzkZNYWHaU',
        night: 'https://unsplash.com/photos/milUxSbp4_A'
      },
    position: [35, 49.3],
    latlng: [48.864716, 2.349014]
  },
  London: {
    label: 'London',
    offset: 0,
    photoLink:
      {day: 'https://unsplash.com/photos/Oja2ty_9ZLM',
        night: 'https://unsplash.com/photos/3l1sjp562qQ'
      },
    position: [33, 48.3],
    latlng: [51.5287718, -0.2416808]
  },
  RioDeJaneiro: {
    label: 'Rio de Janeiro',
    offset: -10800,
    photoLink:
      {day: 'https://unsplash.com/photos/OkiDIla7K8Q',
        night: 'https://unsplash.com/photos/tEd_Hty9R9c'
      },
    position: [71, 37],
    latlng: [-22.54, -43.11]
  },
  NewYork: {
    label: 'New York',
    offset: -18000,
    photoLink:
      {day: 'https://unsplash.com/photos/UnI8AGe1634',
        night: 'https://unsplash.com/photos/CR0E20Of7yU'
      },
    position: [40, 30],
    latlng: [40.6976637, -74.1197644]
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
