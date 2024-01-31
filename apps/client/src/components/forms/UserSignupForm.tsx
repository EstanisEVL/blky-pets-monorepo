import { ReactEventHandler, useState } from "react";
import FormLink from "./links/FormLink";
import FormInput from "./inputs/FormInput";
import ButtonIndex from "../buttons/ButtonIndex";
import Title from "../presentation/Title";

type UserSignupFormPropsType = {
  handleUserLogin: ReactEventHandler;
};

const UserSignupForm = ({ handleUserLogin }: UserSignupFormPropsType) => {
  const URL: string = String(import.meta.env.VITE_API_URL);
  const INITIAL_USER_STATE = {
    first_name: "",
    last_name: "",
    email: "",
    age: "",
    password: "",
  };
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [userInfo, setUserInfo] = useState(INITIAL_USER_STATE);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    fetch(`${URL}/auth/sign-up`, {
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
        if (data.statusCode === 400) {
          setError(data.message);
        } else {
          setError("");
          console.log(data);
        }
      })
      .catch((err) => setError(`Error: ${err}`))
      .finally(() => setLoading(false));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const property = e.target.id;

    switch (property) {
      case "first_name":
        setUserInfo({ ...userInfo, first_name: e.target.value });
        break;
      case "last_name":
        setUserInfo({ ...userInfo, last_name: e.target.value });
        break;
      case "email":
        setUserInfo({ ...userInfo, email: e.target.value });
        break;
      case "age":
        setUserInfo({ ...userInfo, age: e.target.value });
        break;
      case "password":
        setUserInfo({ ...userInfo, password: e.target.value });
        break;
    }
  };

  return (
    <div className='w-full sm:min-w-[500px] sm:max-w-md'>
      <Title text={"Create account"} />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <form className='w-full' onSubmit={handleSubmit}>
          <div className='flex flex-col min-w-sm gap-2 sm:gap-4'>
            <div className='w-full flex justify-between sm:flex-col sm:gap-4'>
              <div className='max-w-40 sm:max-w-full'>
                <FormInput
                  label={"Name"}
                  input={"text"}
                  id={"first_name"}
                  text={"Name"}
                  isRequired={true}
                  onChange={handleChange}
                />
              </div>

              <div className='max-w-40 sm:max-w-full'>
                <FormInput
                  label={"Last name"}
                  input={"text"}
                  id={"last_name"}
                  text={"Last name"}
                  isRequired={true}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className='flex justify-between sm:flex-col sm:gap-4'>
              <div className='max-w-40 sm:max-w-full'>
                <FormInput
                  label={"Email"}
                  input={"email"}
                  id={"email"}
                  text={"Email"}
                  isRequired={true}
                  onChange={handleChange}
                />
              </div>

              <div className='max-w-40 sm:max-w-full'>
                <FormInput
                  label={"Age"}
                  input={"number"}
                  id={"age"}
                  text={"Age"}
                  isRequired={true}
                  onChange={handleChange}
                />
              </div>
            </div>

            <FormInput
              label={"Password"}
              input={"password"}
              id={"password"}
              text={"Password"}
              isRequired={true}
              onChange={handleChange}
              message={
                "Your password must contain at least 8 characters, and at least one lowercase, one uppercase, one number and one special character (@$!%*?&)."
              }
            />

            {error && (
              <div className='flex justify-center my-4'>
                <p className='text-red-500'>{error}</p>
              </div>
            )}
            <div className='flex justify-center'>
              <ButtonIndex.EnterBtn text={"Create account"} />
            </div>
          </div>
        </form>
      )}

      <div className='text-end mt-2 sm:mt-6'>
        <FormLink
          text={"Already have an account? "}
          btnText={"Log in"}
          handleClick={handleUserLogin}
        />
      </div>
    </div>
  );
};

export default UserSignupForm;
