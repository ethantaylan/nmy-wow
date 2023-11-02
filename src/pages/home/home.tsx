import React from "react";
import { Banner } from "../../components/banner/banner";
import { News } from "../../components/news/news";
import { supabase } from "../../supabase";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store";
import { setUserInformations } from "../../set-user-informations";

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const logOut = () => {
    dispatch(
      setUserInformations({
        user: null,
        isAdmin: false,
      })
    );
  };

  return (
    <React.Fragment>
      <button className="me-4" onClick={() => navigate("/admin")}>
        Navigate to admin
      </button>
      <button
        className="me-4"
        onClick={async () => {
          supabase.auth.signInWithOAuth({ provider: "discord" });
        }}
      >
        Log in
      </button>

      <button onClick={logOut}>Log out</button>
      <Banner />
      <News />
    </React.Fragment>
  );
};
