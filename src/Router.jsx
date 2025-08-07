import { BrowserRouter, Routes, Route, Outlet } from "react-router";

// component for layout
import LayoutMain from "./components/layout/LayoutMain.jsx";

// component for pages
import ShoppingApp from "./components/pages/ecommerce/ShoppingApp.jsx";
import SurveyPerokok from "./components/pages/survey/SurveyPerokok.jsx";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutMain />}>
          <Route index element={<ShoppingApp />} />
          <Route path="survey" element={<SurveyPerokok />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
