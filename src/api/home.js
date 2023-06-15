import request from '../utils/request'
import API from './contants'
/**
 * 搜索商品
 */
export const getSearchGoods = (currentPage,displayCount,searchName,meausId)=>request({
    url:API.API_SEARCH,
    method:'POST',
    data:{
        currentPage,
        displayCount,
        searchName,
        meausId
    }
})

/**
 * 获取首页轮播图
 * @returns 
 */
export const getBanners = (flag)=> request({
    url:API.BANNERS_API+"/"+flag
})
/**
 * 
 * @returns 获取首页的菜单
 */
export const getTabs = ()=>request({
    url:API.API_TABS
})

