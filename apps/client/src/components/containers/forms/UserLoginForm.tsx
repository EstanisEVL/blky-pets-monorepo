import { ReactEventHandler, useEffect, useState } from "react";
import ButtonIndex from "../../presentation/buttons/ButtonIndex";
import FormInput from "../../presentation/inputs/FormInput";
import FormLink from "../../presentation/links/FormLink";
import Title from "../../presentation/Title";
import useUserData from "../../../hooks/useUserData";

type UserLoginFormPropsType = {
  handleUserSignup: ReactEventHandler;
  handleUserPwdRecovery: ReactEventHandler;
};

const UserLoginForm = ({
  handleUserSignup,
  handleUserPwdRecovery,
}: UserLoginFormPropsType) => {
  const URL: string = String(import.meta.env.VITE_API_URL);

  const { loggedIn, setLoggedIn, setAccessToken } = useUserData();

  const INITIAL_USER_STATE = {
    email: "",
    password: "",
  };
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [userInfo, setUserInfo] = useState(INITIAL_USER_STATE);
  const [token, setToken] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    fetch(`${URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.statusCode === 401) {
          setError(data.message);
        } else if (data.statusCode === 404) {
          setError(data.message);
        } else {
          setToken(String(data.access_token));

          setError("");

          if (token !== "") {
            setLoggedIn(true);
          }
        }
      })
      .catch((err) => setError(`Error: ${err}`))
      .finally(() => setLoading(false));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const property = e.target.id;

    switch (property) {
      case "email":
        setUserInfo({ ...userInfo, email: e.target.value });
        break;

      case "password":
        setUserInfo({ ...userInfo, password: e.target.value });
        break;
    }
  };

  useEffect(() => {
    if (!loggedIn) {
      localStorage.clear();
    }

    localStorage.setItem("access_token", String(token));

    setAccessToken(true);
  }, [loggedIn]);

  return (
    <div className='w-full sm:min-w-[500px] sm:max-w-md'>
      <Title text={"User login"} />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col gap-6 mt-6'>
            <FormInput
              label={"Email"}
              input={"email"}
              id={"email"}
              text={"Email"}
              isRequired={true}
              onChange={handleChange}
            />
            <FormInput
              label={"Password"}
              input={"password"}
              id={"password"}
              text={"Password"}
              isRequired={true}
              onChange={handleChange}
            />
          </div>

          {error && (
            <div className='flex justify-center my-4'>
              <p className='text-red-500'>{error}</p>
            </div>
          )}

          <div className='flex justify-center mt-10'>
            <ButtonIndex.EnterBtn text={"Login"} />
          </div>
        </form>
      )}

      <div className='flex flex-col items-end gap-2 mt-6'>
        <FormLink
          text={"No account? "}
          btnText={"Create one"}
          handleClick={handleUserSignup}
        />
        <FormLink
          text={"Forgot your password? "}
          btnText={"Reset it here"}
          handleClick={handleUserPwdRecovery}
        />
      </div>
    </div>
  );
};

export default UserLoginForm;
