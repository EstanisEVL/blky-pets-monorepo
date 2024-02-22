import { useState } from "react";
import ButtonIndex from "../../presentation/buttons/ButtonIndex";
import FormInput from "../../presentation/inputs/FormInput";
import Title from "../../presentation/Title";

const AdminLoginForm = () => {
  const URL: string = String(import.meta.env.VITE_API_URL);
  const INITIAL_ADMIN_STATE = {
    email: "",
    password: "",
  };

  const [adminInfo, setAdminInfo] = useState(INITIAL_ADMIN_STATE);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    fetch(`${URL}/auth/admin-login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(adminInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.statusCode === 401) {
          setError(data.message);
        } else if (data.statusCode === 404) {
          setError(data.message);
        } else {
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
        setAdminInfo({ ...adminInfo, email: e.target.value });
        break;

      case "password":
        setAdminInfo({ ...adminInfo, password: e.target.value });
        break;
    }
  };

  return (
    <div className='w-full sm:min-w-[500px] sm:max-w-md'>
      <Title text={"Admin login"} />

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
    </div>
  );
};

export default AdminLoginForm;
