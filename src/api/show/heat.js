import request from 'utils/request'

const getHeatData = async (heatQuery: Dictionary<any>) => {
  let placeResult = []
  if (heatQuery.placeKeyword && !isEmpty(heatQuery.placeKeyword)) {
    const response = await searchPlace(heatQuery.placeKeyword)
    if (!isEmpty(response.body)) {
      placeResult = response.body.map((e: any) => e.id)
    }
  }
  return request.get(
    '/api/flow/search',
    {
      fromTime: getIntervalTime(-60 * 15, heatQuery.toTime),
      toTime: heatQuery.toTime,
      placeIdList: heatQuery.serviceCodeList.concat(placeResult).join(','),
      policeCodeList: heatQuery.policeCodeList.join(','),
      placeType: heatQuery.type,
      orgCodeList: heatQuery.orgCodeList ? heatQuery.orgCodeList.join(',') : '',
      durationType: heatQuery.durationType,
    },
    '获取数据失败',
  )
}