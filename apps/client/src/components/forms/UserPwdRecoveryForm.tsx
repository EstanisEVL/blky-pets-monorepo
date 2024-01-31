import { ReactEventHandler, useState } from "react";
import FormLink from "./links/FormLink";
import ButtonIndex from "../buttons/ButtonIndex";
import FormInput from "./inputs/FormInput";
import Title from "../presentation/Title";
import toast from "react-hot-toast";

type UserPwdRecoveryFormPropsType = {
  handleUserLogin: ReactEventHandler;
  handleUserSignup: ReactEventHandler;
};

const UserPwdRecoveryForm = ({
  handleUserLogin,
  handleUserSignup,
}: UserPwdRecoveryFormPropsType) => {
  const URL: string = String(import.meta.env.VITE_API_URL);
  const INITIAL_USER_STATE = {
    email: "",
  };
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [userInfo, setUserInfo] = useState(INITIAL_USER_STATE);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    fetch(`${URL}/auth/password/new`, {
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
        } else if (data.statusCode === 404) {
          setError(data.message);
        } else {
          toast.success(
            "Please check your email address to continue with the password recovery process."
          );

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
      case "email":
        setUserInfo({ ...userInfo, email: e.target.value });
        break;
    }
  };

  return (
    <div className='w-full sm:min-w-[500px] sm:max-w-md'>
      <Title text={"Reset password"} />

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
              message={"Enter your email to reset password."}
            />
          </div>

          {error && (
            <div className='flex justify-center my-4'>
              <p className='text-red-500'>{error}</p>
            </div>
          )}

          <div className='flex justify-center mt-10'>
            <ButtonIndex.EnterBtn text={"Reset password"} />
          </div>
        </form>
      )}

      <div className='flex flex-col items-end gap-2 mt-6'>
        <FormLink
          text={"Already have an account? "}
          btnText={"Log in"}
          handleClick={handleUserLogin}
        />
        <FormLink
          text={"No account? "}
          btnText={"Create one"}
          handleClick={handleUserSignup}
        />
      </div>
    </div>
  );
};

export default UserPwdRecoveryForm;
