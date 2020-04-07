import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/article',
    method: 'get',
    params
  })
}
export function removeArticle(id) {
  return request({
    url: '/article',
    method: 'delete',
    params: {
      id
    }
  })
}
