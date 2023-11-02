import "./App.css";
import { Home } from "./pages/home/home";
import { Route, Routes } from "react-router-dom";
import { AppLayout } from "./components/applayout/applayout";
import { Roster } from "./pages/roster";
import { Guard } from "./admin/components/guard";
import { Admin } from "./pages/admin";
import React from "react";
import { useAppDispatch } from "./store";
import { setUserInformations } from "./set-user-informations";
import { supabase } from "./supabase";

export default function App() {
  // const user = useAppSelector((state: RootState) => state.data.user);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    supabase.auth.onAuthStateChange(async (event, session) => {
      let response;
      if (event !== "SIGNED_OUT") {
        response = await supabase
          .from("admin")
          .select("*")
          .eq("email", session?.user.email)
          .single();
      }

      const isAdmin =
        response?.data?.email.includes(session?.user?.email) || false;

      dispatch(
        setUserInformations({
          user: session?.user || null,
          isAdmin: isAdmin,
        })
      );
    });
  }, []);

  // React.useEffect(() => {
  //   user && console.log(user);
  // }, [user]);

  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/roster" element={<Roster />} />
        <Route
          path="/admin"
          element={
            <Guard>
              <Admin />
            </Guard>
          }
        />
      </Routes>
    </AppLayout>
  );
}
