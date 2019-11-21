import request from "utils/request"

const searchPlace = keyList => {
  return request.get(
    '/api/common/place-search',
    { keyword: keyList.join(',') },
    '场所查询失败',
  )
}
export { searchPlace }