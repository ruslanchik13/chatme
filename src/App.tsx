import {MainPageAsync, SettingsPageAsync} from "@/pages";
import {Route, Routes} from "react-router-dom";
import {Suspense} from "react";
import {FlexWrapper} from "@/UI";
import NavBar from "@/components/NavBar";

function App() {
  return (
    <>
      <FlexWrapper align={"start"} justify={"start"} direction={"row"}>
        <NavBar/>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path={'/'} element={<MainPageAsync/>}/>
            <Route path={'/settings/*'} element={<SettingsPageAsync/>}/>
          </Routes>
        </Suspense>
      </FlexWrapper>
    </>
  );
}

export default App;
