import request from '@/utils/request'

export function getArticle(params) {
  return request({
    url: '/article',
    method: 'get',
    params
  })
}

export function postArticle(params) {
  return request({
    url: '/article',
    method: 'post',
    params
  })
}
