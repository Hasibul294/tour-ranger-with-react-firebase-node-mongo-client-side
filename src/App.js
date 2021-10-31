import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router";
import AuthProvider from "./context/AuthProvider";
import NotFound from "./pages/NotFound/NotFound";
import Header from "./pages/Shared/Header";
import Home from "./pages/Home/Home/Home";
import Footer from "./pages/Shared/Footer";
import Login from "./pages/Login/Login/Login";
import Register from "./pages/Register/Register";
import Packages from "./pages/Home/Packages/Packages";
import PrivateRoute from "./pages/Login/PrivateRoute/PrivateRoute";
import BookPackage from "./pages/BookPackage/BookPackage";
import AddPackage from "./pages/AddPackage/AddPackage";
import MyOrders from "./pages/MyOrders/MyOrders";
import ManageOrder from "./pages/ManageOrder/ManageOrder";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/package">
              <Packages></Packages>
            </Route>
            <PrivateRoute exact path="/packages/:id">
              <BookPackage></BookPackage>
            </PrivateRoute>
            <PrivateRoute exact path="/addNewPackage">
              <AddPackage></AddPackage>
            </PrivateRoute>
            <PrivateRoute exact path="/myOrder">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute exact path="/manageOrder">
              <ManageOrder></ManageOrder>
            </PrivateRoute>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
