import React from 'react'
export default class Map extends React.Component {
  constructor(prpos) {
    super(prpos)
    this.state = {
      map: {}
    }
  }
  componentDidMount() {
    var map = new window.AMap.Map('container', {
      mapStyle: 'amap://styles/a1d6d07ee1e837f7a6dec11debea7de3',
      zoom: 14,//级别
      zooms: [14, 20],
      center: [121.47495, 31.219963],
      viewMode: '3D'
    })
    this.setState({
      map: map
    })
    console.log(this.state.map)
  }
  render() {
    return (
      <div id="container" style={{ width: '100%', height: '100%' }}></div>
    )
  }
}