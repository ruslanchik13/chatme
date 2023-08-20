import {Route, Routes} from "react-router-dom";
import {AccountPageAsync, EditPageAsync} from "@/modules/Settings/pages";

const Router = () => {
  return (
    <Routes>
      <Route path={'/profile'} element={<EditPageAsync/>}/>
      <Route path={'/account'} element={<AccountPageAsync/>}/>
    </Routes>
  );
};

export default Router;