import { Button, Stack, TextField, Typography } from "@mui/material";
import {
  appStateAtom,
  setLoggedUser,
  setLoggedUserAtom,
} from "../../state/state";
import {
  fetchUserByUsernameAndPassword,
  postNewUser,
} from "../../api/queries/quieries";

import FullScreenColorContainer from "../../containers/FullScreenColorContainer";
import React from "react";
import { useAtom } from "jotai";
import { useForm } from "../../components/hooks/useForm";
import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
  const [registration, setRegistration] = React.useState(false);
  const [, setLoggedUser] = useAtom(setLoggedUserAtom);
  const navigate = useNavigate();
  const { values, handleChange } = useForm({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleLogin = async () => {
    fetchUserByUsernameAndPassword(values.username, values.password)
      .then((user) => {
        setLoggedUser({ name: user.username, id: user.id });
        navigate("/main");
      })
      .catch((err) => {
        alert("Špatné přihlašovácí údaje!");
      });
  };

  const handleRegistrations = () => {
    if (values.username === "") {
      alert("Jméno nemůže být prázdné");
      return;
    }
    if (values.password === "") {
      alert("Heslo nemůže být prázdné");
      return;
    }
    if (values.password !== values.confirmPassword) {
      alert("Hesla se neshodují");
      return;
    }

    postNewUser(values.username, values.password)
      .then((msg) => {
        toggleRegistration();
        return;
      })
      .catch((err) => {
        alert("Uživatelské jméno již existuje");
      });
  };

  const toggleRegistration = () => {
    setRegistration(!registration);
  };

  return (
    <FullScreenColorContainer color={"background.main"}>
      <Stack alignItems={"center"} paddingY={7} gap={7}>
        <img src={"girlWithSunflowers.png"} alt={"girlWithSunflowers"} />
        <Stack gap={2}>
          <Typography textAlign={"center"} variant="h5">
            {registration ? "SignIn" : "LogIn"}
          </Typography>
          <TextField
            label={"Username"}
            value={values.username}
            onChange={handleChange("username")}
          />
          <TextField
            label={"Password"}
            type="password"
            value={values.password}
            onChange={handleChange("password")}
          />
          {registration && (
            <TextField
              label={"Confirm password"}
              type="password"
              value={values.confirmPassword}
              onChange={handleChange("confirmPassword")}
            />
          )}
          <Button
            variant="contained"
            onClick={registration ? handleRegistrations : handleLogin}
          >
            {registration ? "SignIn" : "LogIn"}
          </Button>
          <Button onClick={toggleRegistration}>
            {registration ? "Back to login" : "Create an account"}
          </Button>
        </Stack>
      </Stack>
    </FullScreenColorContainer>
  );
};

export default LoginScreen;
