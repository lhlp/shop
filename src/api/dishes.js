import request from '../utils/request'
import API from './contants'

export const getDishesDetail = (id)=>request({
    url:API.API_DETAIL+"/"+id
})

