import axios from "axios";
class AdminService {






    async addImage(imageData) {
        return axios.post(`http://localhost:8080/admin/addimage`, imageData
        , {
            onUploadProgress: progressEvent => {
                console.log("Uploading : " + ((progressEvent.loaded / progressEvent.total) * 100).toString() + "%")
            }
        });
    }
    async addProductImage(imageData, productId, type) {
        const response = await axios.post(`http://localhost:8080/admin/add-product-image/${productId}`, imageData, {
            onUploadProgress: progressEvent => {
                console.log("Uploading : " + ((progressEvent.loaded / progressEvent.total) * 100).toString() + "%")
            },
            params: {
                type
            }
        });
    }








    //    PRODUCT_START
    getAllAdminProducts(page) {
        return axios.get("http://localhost:8080/admin/all-product?page=" + page);
    }
 CreateProduct(product) {
        return axios.post("http://localhost:8080/admin/addProduct", product);
    }
    updateproducts(product, id) {
        return axios.put(
          "http://localhost:8080/admin/product/" + id,
          product
        );
      }
      updateimages(productimages,id) {
        return axios.put(
          "http://localhost:8080/admin/product-images/"+id,
          productimages
        );
      }
      deleteProduct(productId) {
        return axios.delete("http://localhost:8080/admin/product" + '/' + productId);
    }


    getAllAdminTinTuc(page) {
        return axios.get("http://localhost:8080/admin/all-tintuc?page=" + page);
    }
    CreateTintuc(tintuc) {
        return axios.post("http://localhost:8080/admin/addTintuc", tintuc);
    }
    updateTintuc(tintuc, tintucId) {
        return axios.put("http://localhost:8080/admin/tintuc" + '/' + tintucId, tintuc);
    }
    deleteTintuc(tintucId) {
        return axios.delete("http://localhost:8080/admin/tintuc" + '/' + tintucId);
    }


  //    ORDER
    getAdminOrders(page){
        return axios.get("http://localhost:8080/admin/all-orders?page=" + page);
      }




    CreateUser(user) {
        return axios.post("http://localhost:8080/admin/addUser", user);
    }
    updateUser(user, userId) {
        return axios.put("http://localhost:8080/admin/user" + '/' + userId, user);
    }
      deleteUser(userId) {
        return axios.delete("http://localhost:8080/admin/user" + '/' + userId);
    }
    getAdminUsers(page){
        return axios.get("http://localhost:8080/admin/all-users?page=" + page);
    }
    getUserById(userId) {
        return axios.get("http://localhost:8080/admin/user" + '/' + userId);
    }





  

    getAllAdminCategorys(page) {
        return axios.get("http://localhost:8080/admin/all-categorys?page=" + page);
    }
    CreateCategory(category) {
        return axios.post("http://localhost:8080/admin/addCategory", category);
    }
    updateCategory(category, categoryId) {
        return axios.put("http://localhost:8080/admin/category" + '/' + categoryId, category);
    }
    deleteCategory(categoryId) {
        return axios.delete("http://localhost:8080/admin/category" + '/' + categoryId);
    }
    getCategoryById(categoryId) {
        return axios.get("http://localhost:8080/admin/category" + '/' + categoryId);
    }




    getAllProductNoPaginiton() {
        return axios.get("http://localhost:8080/productall");
      }

  ListOrderDetail(id_order){
    return axios.get("http://localhost:8080/list_order/list_product"+'/'+id_order);
}
}
export default new AdminService();