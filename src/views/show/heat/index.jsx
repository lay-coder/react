import React from 'react'
import Map from '../components/map'
import { getHeatData } from 'api/show/heat'
import { getIntervalTime } from 'utils/datetime'
import { Button } from 'antd'
import * as hotelIcon from 'assets/icon-place-hotel.png'

const AMap = window.AMap
const AMapUI = window.AMapUI
export default class Heat extends React.Component {
  map = React.createRef()
  mapInstance: Object
  heatMap: Object
  pointMap: Object
  query = {
    fromTime: getIntervalTime(-15 * 60),
    toTime: getIntervalTime(-5 * 60),
    type: '',
    placeKeyword: [],
    serviceCodeList: [],
    policeCodeList: [],
    orgCodeList: [],
    min: null,
    max: null,
    durationType: 1,
  }
  mapData: Object
  componentDidMount() {
    this.mapInstance = this.map.current.instance
    this.getHeatData()
  }
  /**
   * 拉取数据
   */
  async getHeatData() {
    const response = await getHeatData(this.query)
    this.mapData = response.body.realtime
    this.rnederHeat()
    this.changeMapShow()
  }
  /**
   * 渲染热力图
   */
  rnederHeat() {
    const heatData = this.mapData.map(i => ({ lng: i.lng, lat: i.lat, count: i.value }))
    this.mapInstance.plugin(["AMap.Heatmap"], () => {
      this.heatMap = new AMap.Heatmap(this.mapInstance)
      this.heatMap.setDataSet({
        data: heatData,
        max: 3000
      })
    })

  }
  /**
   * 渲染点位图
   */
  renderPoint() {
    this.pointMap = new AMap.LabelsLayer({
      zooms: [3, 20],
      zIndex: 1000,
      // 关闭标注避让，默认为开启，v1.4.15 新增属性
      animation: false,
      // 关闭标注淡入动画，默认为开启，v1.4.15 新增属性
      collision: false
    })
    this.mapInstance.add(this.pointMap)

    const pointData = this.mapData.map(i => {
      return new AMap.LabelMarker({
        position: new AMap.LngLat(i.lng, i.lat),
        icon: new AMap.Icon({
          image: hotelIcon,
          anchor: 'center'
        }),
      })
    })
    this.pointMap.add(pointData)
  }
  /**
   * 切换显示
   * @param witch 0为热力图|1为点图|2为人流图
   */
  changeMapShow(witch = 1) {
    switch (witch) {
      case 0:
        // this.heatMap.setMap(this.mapInstance)
        this.heatMap.show()
        break
      case 1:
        // this.heatMap.setMap(null)
        this.heatMap.hide()
        break
      case 2:
        break
      default:
        break
    }
  }
  render() {
    return (
      <div className='show-container'>
        <Map ref={this.map} />
        <Button onClick={this.changeMapShow.bind(this, 0)}>热力图</Button>
        <Button onClick={this.changeMapShow.bind(this, 1)}>设备点图</Button>
        <Button onClick={this.changeMapShow.bind(this, 2)}>人流趋势图</Button>
      </div>
    )
  }
}