import axios from 'axios';

const   PRODUCTS_API_BASE_URL = "http://localhost:8080/";
const EMPLOYEE_API_BASE_URL_SEARCH = "http://localhost:8080/search?keyword=";
class Service {
    
    


    getAllSP(){
        return axios.get(PRODUCTS_API_BASE_URL+"products");
    }
    getCategorys(){
        return axios.get(PRODUCTS_API_BASE_URL+"categorys");
    }
    getCategorysByid(id){
        return axios.get(PRODUCTS_API_BASE_URL+'categorys/'+id);
    }

    getProdyctsLAPTOP(){
        return axios.get(PRODUCTS_API_BASE_URL+"laptop");
    }
    getProdyctsTenLAPTOP(){
        return axios.get(PRODUCTS_API_BASE_URL+"tenlaptop");
    }
    getProdyctsLAPTOPHot(){
        return axios.get(PRODUCTS_API_BASE_URL+"laptop-noibat");
    }
    getProdyctsPhoneHot(){
        return axios.get(PRODUCTS_API_BASE_URL+"phone-noibat");
    }
    getProdyctsPhone(){
        return axios.get(PRODUCTS_API_BASE_URL+"phone");
    }
    getProdyctsTenPhone(){
        return axios.get(PRODUCTS_API_BASE_URL+"tenphone");
    }
    getProdyctsPHUKIEN(){
        return axios.get(PRODUCTS_API_BASE_URL+"phukien");
    }
    getProdyctsTenPHUKIEN(){
        return axios.get(PRODUCTS_API_BASE_URL+"tenphukien");
    }
    getProductsSale(){
        return axios.get(PRODUCTS_API_BASE_URL+"sale");
    }
    getSpCu(){
        return axios.get(PRODUCTS_API_BASE_URL+"sanphamcu");
    }
    getProdyctsTABLETHot(){
        return axios.get(PRODUCTS_API_BASE_URL+"tablet-noibat");
    }
    getProdyctsTABLET(){
        return axios.get(PRODUCTS_API_BASE_URL+"tablet");
    }
    getProdyctsTenTABLET(){
        return axios.get(PRODUCTS_API_BASE_URL+"tentablet");
    }
    getWatch(){
        return axios.get(PRODUCTS_API_BASE_URL+"donghothoitrang");
    }
    getProdyctsTenWatch(){
        return axios.get(PRODUCTS_API_BASE_URL+"tendonghothoitrang");
    }
    getWatchVip(){
        return axios.get(PRODUCTS_API_BASE_URL+"donghothongminh");
    }
    getProdyctsTenWatchVip(){
        return axios.get(PRODUCTS_API_BASE_URL+"tendonghothongminh");
    }
    getSaleSlides(){
        return axios.get(PRODUCTS_API_BASE_URL+"saleslides");
    }
    getSlides(){
        return axios.get(PRODUCTS_API_BASE_URL+"slides");
    }
    getTinTuc(){
        return axios.get(PRODUCTS_API_BASE_URL+"tintuc");
    }
    getTinTucChinh(){
        return axios.get(PRODUCTS_API_BASE_URL+"tinchinh");
    }
    
    getTinGame(){
        return axios.get(PRODUCTS_API_BASE_URL+"tingame");
    }
    getYoutube(){
        return axios.get(PRODUCTS_API_BASE_URL+"ytbrivew");
    }
    getProductsById(id){
        return axios.get(PRODUCTS_API_BASE_URL + 'products/' + id);
    }
    getTintucsById(id){
        return axios.get(PRODUCTS_API_BASE_URL + 'tin-tuc/' + id);
    }
    getTinTucLienQuan(id){
        return axios.get(PRODUCTS_API_BASE_URL + 'tin-tuc-lien-quan/' + id);
    }
    getProductsDetailImgById(id){
        return axios.get(PRODUCTS_API_BASE_URL + 'products/images/' + id);
    }
    getProductsDetailId(id){
        return axios.get(PRODUCTS_API_BASE_URL + 'thongsokythuat/' + id);
    }
    getPhuKienLienQuan(id){
        return axios.get(PRODUCTS_API_BASE_URL + 'phu-kien-lien-quan/' + id);
    }
    getSanPhamLienQuan(id){
        return axios.get(PRODUCTS_API_BASE_URL + 'san-pham-cung-loai/' + id);
    }
    getSearch(keyword) {
        return axios.get(PRODUCTS_API_BASE_URL + '?keyword=' + keyword);
      }
      getSearch(keyword) {
        return axios.get(PRODUCTS_API_BASE_URL + 'search', {
          params: {
            keyword
          }
        });
      }
      getHotBestInPageOrther(page) {
        return axios.get("bestinpageorther?page=" + page);
      }
      getHotNewInPageOrther(page) {
        return axios.get("newinpageorther?page=" + page);
      }
}

export default new Service()