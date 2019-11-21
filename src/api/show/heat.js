import { isEmpty } from 'lodash'
import request from 'utils/request'
import { getIntervalTime } from 'utils/datetime'
import { searchPlace } from 'api/common'

const getHeatData = async query => {
  let placeResult = []
  if (query.placeKeyword && !isEmpty(query.placeKeyword)) {
    const response = await searchPlace(query.placeKeyword)
    if (!isEmpty(response.body)) {
      placeResult = response.body.map((e: any) => e.id)
    }
  }
  return request.get(
    '/api/flow/search',
    {
      fromTime: getIntervalTime(-60 * 15, query.toTime),
      toTime: query.toTime,
      placeIdList: query.serviceCodeList.concat(placeResult).join(','),
      policeCodeList: query.policeCodeList.join(','),
      placeType: query.type,
      orgCodeList: query.orgCodeList ? query.orgCodeList.join(',') : '',
      durationType: query.durationType,
    },
    '获取数据失败',
    '获取数据成功',
  )
}
export { getHeatData }