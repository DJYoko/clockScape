# clockScape
a simple demo of Vue/Vuex/Vue Router.

## demo
[https://djyoko.github.io/clockScape/](https://djyoko.github.io/clockScape/)

----------

### overview
- PWA: this web app is available for `added to a Home screen`. (both of iOS / Android)
- get Unixtime from NICT (Japan's National Research and Development Agency) API.
- sync Vue store has 'unixtime' & 'region' state.
- URL sync to REGION. (handled by Vue Router).
- component  `just show`  Clocks & images of regions selected.

### build command
`npm run build:dev` / `npm run build:prod`

### framework & libraries
- [Vue](https://vuejs.org/)
- [Vuex](https://vuex.vuejs.org/)
- [Vue Router](https://router.vuejs.org/)
- [Bootstrap](https://getbootstrap.com/)

### global timezone info & API
- timezone & offset list [https://www.epochconverter.com/timezones](https://www.epochconverter.com/timezones)
- NICT [https://www.nict.go.jp/](https://www.nict.go.jp/)

### visual materials
- photos [unsplach.com](https://unsplash.com/)
- world map [https://freevectormaps.com](https://freevectormaps.com/world-maps/WRLD-EPS-02-4001)
