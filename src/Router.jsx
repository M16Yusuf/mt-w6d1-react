import { BrowserRouter, Routes, Route, Outlet } from "react-router";

// component for layout
import LayoutMain from "./components/layout/LayoutMain.jsx";

// component for pages
import ShoppingApp from "./components/pages/ecommerce/ShoppingApp.jsx";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutMain />}>
          <Route index element={<ShoppingApp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
