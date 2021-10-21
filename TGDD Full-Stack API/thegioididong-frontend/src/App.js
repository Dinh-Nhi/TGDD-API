
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Home from './pages/Home';
import Detail from './pages/Detail';
import Register from './pages/user/register.component';
import Login from './pages/user/login.component';
import SearchAll from './pages/SearchAll';
import TrangTinTuc from './pages/TrangTinTuc';
import DetailTinTuc from './pages/DetailTinTuc';
import Cart from './pages/shoppingcart/Cart';
import Order from './pages/shoppingcart/Order';
import CategorysId from './pages/CategorysId';
import AdminProducts from './admin/products/AdminProducts';
import AdminTintuc from './admin/tintuc/AdminTintuc';
import AdminCategorys from './admin/categorys/AdminCategorys';
import AddCategorys from './admin/categorys/AddCategorys';
import AddTintuc from './admin/tintuc/AddTintuc';
import AddProducts from './admin/products/AddProducts';
import OrderAdmin from './admin/orderadmin/OrderAdmin';
import UsersAdmin from './admin/users/UsersAdmin';
import AddUsers from './admin/users/AddUsers';
import DetailOrder from './admin/orderadmin/DetailOrder';
import Admin from './admin/Admin';
import OrdersAdmin from './admin/orderadmin/OrdersAdmin';
function App() {
  return (
    <div>
        <Router>
      
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {Home}></Route>
                          <Route path = "/home" component = {Home}></Route>
                          <Route path = "/products/:id" component = {Detail}></Route>
                          <Route path = "/categorys/:id" component = {CategorysId}></Route>
                          <Route path="/login" exact component={Login}></Route>
                          <Route path="/register" exact component={Register}></Route>
                          <Route path="/search/:keyword" component={SearchAll}></Route>
                          <Route path="/tin-tuc" component={TrangTinTuc}></Route>
                          <Route path = "/chi-tiet-tin-tuc/:id" component = {DetailTinTuc}></Route>
                          <Route path = "/gio-hang" component = {Cart}></Route>
                          <Route path = "/order" component = {Order}></Route>
                          <Route path = "/all-product-admin/page=:page" component = {AdminProducts}></Route>
                          <Route path = "/all-tintuc-admin/page=:page" component = {AdminTintuc}></Route>
                          <Route path = "/all-categorys-admin/page=:page" component = {AdminCategorys}></Route>                       
                          <Route path="/admin-add-categorys/:id" exact component={AddCategorys}></Route>
                          <Route path="/admin-add-tintuc/:id" exact component={AddTintuc}></Route>
                          <Route path="/admin-add-products/:id" exact component={AddProducts}></Route>
                          <Route path="/admin-order/page=:page" exact component={OrderAdmin}></Route>
                          <Route path="/order-details/:id" component={DetailOrder}></Route>
                          <Route path="/all-users-admin/page=:page" exact component={UsersAdmin}></Route>
                          <Route path="/admin-add-users/:id" exact component={AddUsers}></Route>
                          <Route path="/admin" exact component={Admin}></Route>
                 </Switch> 
                </div>
             
        </Router>
    </div>
    
  );
}

export default App;
