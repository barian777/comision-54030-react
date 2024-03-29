import { Routes, Route } from "react-router-dom";
import { Layout } from "../components/layout";
import { routes } from "./routes";
import { NotFound } from "../components/pages/notFound/NotFound";

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {routes.map(({ id, path, Element }) => (
          <Route key={id} path={path} element={<Element />} />
        ))}
      </Route>
      <Route path="*" element={<NotFound/>} />
    </Routes>
  );
};
