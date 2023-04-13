import React, { useEffect } from "react";
import TabBox from "./TabBox";
import Settings from "./Settings";
import squares from "../assets/img/squares.png";
import Profil from "./Profil";
import api from "../api/api";
import { useAuth } from "../useAuth";
import { useNavigate, useParams } from "react-router-dom";
import { AxiosError } from "axios";
import { useProfileImage } from "../hooks/useProfileImage";
import Control from "./Control";



function ProfilComp() {
  const { login } = useParams();
  const nav = useNavigate();
  const { user, loading } = useAuth();
  const [name, setName] = React.useState<string>("");
  const setProfilImage = useProfileImage((state) => state.setImage);
  const profileImage = useProfileImage((state) => state.image);
  const [options, setOptions] = React.useState<any>([]);
  const[xp, setXp] = React.useState<number>(0);
  const[level, setLevel] = React.useState<number>(0);


  useEffect(() => {
    if (loading) return;
    if (!user) return;
    setOptions([
      { name: "Profil", content: <Profil /> },
    ]);
    console.log(user);
    let param = login;
    if (login == null) {
      param = user.login;
    }
    api
      .get("/profile/" + param + "/info")
      .then((res) => {
        console.log(res.data);
        setName(res.data.login);
        if (res.data.avatar_url.startsWith("http")) {
          setProfilImage(res.data.avatar_url);
        } else {
          setProfilImage(process.env.REACT_APP_API_URL as string + 'static' + res.data.avatar_url);
        }
        setXp(res.data.exp)
      })
      .catch((err: AxiosError) => {
        if (err.response) {
          if (err.response.status === 404) nav("/404", { replace: true });
        }
      });
  }, [loading, user]);



  useEffect(() => {
    if (loading) return;
    if(!user) return;
    if (login == null) {
      setOptions([
        { name: "Profil", content: <Profil /> },
        { name: "Settings", content: <Settings /> },
      ]);
    }
    else {
      setOptions([
        { name: "Profil", content: <Profil /> },
        { name: "Control", content: <Control />}
      ]);
    }
  }, [name, login, loading, user]);



  const color: string = "pink";
  return (
    <div className="pattern-background pink-pattern">
      <TabBox
        options={options}
        tabcolor={color}
        imgbtn={false}
        title={name}
        avatar={profileImage}
      />
    </div>
  );
}

export default ProfilComp;
