import "./App.css";
import { Home } from "./pages/home/home";
import { Route, Routes } from "react-router-dom";
import { AppLayout } from "./components/applayout/applayout";
import { Roster } from "./pages/roster";
import { Guard } from "./admin/components/guard";
import { Admin } from "./admin/pages/admin";
import React from "react";
import { useAppDispatch, useAppSelector } from "./redux/store";
import { setUserInformations } from "./redux/user";
import { supabase } from "./supabase";
import { AdminRoster } from "./admin/pages/admin-roster";
import { isApplicationReady } from "./redux/application";

export default function App() {
  const dispatch = useAppDispatch();

  const isAppReady = useAppSelector(({ app }) => app.isApplicationReady);

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

      dispatch(
        isApplicationReady({
          isApplicationReady: true,
        })
      );
    });
  }, [isAppReady]);

  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="roster" element={<Roster />} />

        <Route path="admin">
          <Route
            index
            element={
              <Guard>
                <Admin />
              </Guard>
            }
          />
          <Route
            path="roster"
            element={
              <Guard>
                <AdminRoster />
              </Guard>
            }
          />
        </Route>
      </Routes>
    </AppLayout>
  );
}
