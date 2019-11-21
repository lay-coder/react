import React from 'react'
import Map from '../components/map'
export default class Analysis extends React.Component {
  map = React.createRef()
  render() {
    return (
      <div className='show-container'>
        <Map ref={this.map}></Map>
      </div>
    )
  }
}