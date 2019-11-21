import React from 'react'
export default class Map extends React.Component {
  map: Object
  componentDidMount() {
    this.map = new window.AMap.Map('map-container', {
      mapStyle: 'amap://styles/a1d6d07ee1e837f7a6dec11debea7de3',
      zoom: 14,//级别
      zooms: [14, 20],
      center: [121.47495, 31.219963],
      viewMode: '2D',
      animateEnable: false,
      isHotspot: false,
      jogEnable: false
    })
  }
  get instance() {
    return this.map
  }
  render() {
    return (
      <div id="map-container" style={{ width: '100%', height: '100%' }}></div>
    )
  }
}