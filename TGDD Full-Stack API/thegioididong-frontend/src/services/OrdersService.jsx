import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/infos";

class OrdersService {
  CreateInfos(info) {
    return axios.post(EMPLOYEE_API_BASE_URL, info);
  }
  ListOrder(userid){
    return axios.get("http://localhost:8080/list_order"+'/'+userid);
}
ListOrderDetail(id_order){
    return axios.get("http://localhost:8080/list_order/list_product"+'/'+id_order);
}
updateOrder(order, orderId) {
  return axios.put("http://localhost:8080/admin/order" + '/' + orderId, order);
}
//lay-tat-ca-don-hang
getAllOrder(page){
  return axios.get("http://localhost:8080/allorder?page="+page);
}
//get-info-user-by-id
getInfoUserById(idor){
  return axios.get("http://localhost:8080/admin/info_user"+'/'+idor);
}
}

export default new OrdersService();
