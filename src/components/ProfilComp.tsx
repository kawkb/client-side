import React, { useEffect } from "react";
import TabBox from "./TabBox";
import Settings from "./Settings";
import squares from "../assets/img/squares.png";
import Profil from "./Profil";
import api from "../api/api";
import { useAuth } from "../useAuth";
import { useNavigate, useParams } from "react-router-dom";
import { AxiosError } from "axios";

function ProfilComp() {
  const { login } = useParams();
  const nav = useNavigate();
  const { user, loading } = useAuth();
  const [name, setName] = React.useState<string>("");
  const [avatari, setAvatari] = React.useState<string>("");
  const [options, setOptions] = React.useState<any>([]);
  const[xp, setXp] = React.useState<number>(0);
  useEffect(() => {
    if (loading) return;
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
        setAvatari(res.data.avatar_url)
        setXp(res.data.exp)
      })
      .catch((err: AxiosError) => {
        if (err.response) {
          if (err.response.status === 404) nav("/404", { replace: true });
        }
      });
    // api.post('/profile/update/login', {
    //   login: user.login,
    // });
  }, [loading]);

  useEffect(() => {
    if (loading) return;
    console.log(user.login, name)
    if (user.login === name) {

      setOptions([
        { name: "Profil", content: <Profil /> },
        { name: "Settings", content: <Settings /> },
      ]);
    }
  }, [name, login, loading]);



  const color: string = "pink";
  return (
    <div className="pattern-background pink-pattern">
      <TabBox
        options={options}
        tabcolor={color}
        imgbtn={false}
        title={name}
        avatar={avatari}
      />
    </div>
  );
}

export default ProfilComp;
