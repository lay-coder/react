import request from "utils/request"

const getPlaceDataList = query => {
  return request.get(
    '/api/place/summary/list2',
    {
      keyword: query.placeKeyword.join(','),
      serviceType: query.servicetype,
      policeCodes: query.policeList.join(','),
      orgCodes: query.firmList.join(','),
      areaIds: query.areaList.join(','),
      auditState: query.auditState,
      operateState: query.operateState,
      onlineTime: (new Date().getTime() / 1000).toFixed(0),
    },
    '获取场所数据失败',
  )
}

export { getPlaceDataList }