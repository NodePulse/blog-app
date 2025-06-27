import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BLog from "./pages/BLog";
import Layout from "./pages/admin/Layout";
import Dashboard from "./pages/admin/Dashboard";
import AddBlog from "./pages/admin/AddBlog";
import ListBlog from "./pages/admin/ListBlog";
import Comments from "./pages/admin/Comments";
import Login from "./components/admin/Login";
import "quill/dist/quill.snow.css";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:id" element={<BLog />} />
          <Route path="/admin" element={true ? <Layout /> : <Login />}>
            <Route index element={<Dashboard />} />
            <Route path="add-blog" element={<AddBlog />} />
            <Route path="blogs" element={<ListBlog />} />
            <Route path="comments" element={<Comments />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
