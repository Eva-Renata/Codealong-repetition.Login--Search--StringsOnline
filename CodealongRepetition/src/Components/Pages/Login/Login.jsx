import { Layout } from "../../App/Layout/Layout";
import { useForm } from "react-hook-form";
import { useAuth } from "../../App/Auth/Auth";
import axios from "axios";

// Function Component til login
export const Login = () => {
  // Destructer vars fra useForm hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Destructer vars fra useAuth
  const { loginData, setLoginData } = useAuth();

  // Definerer funktion til at kalde api med form data
  const sendLoginRequest = async (data) => {
    const formData = new FormData();
    formData.append("username", data.username);
    formData.append("password", data.password);
    const result = await axios.post(
      "https://api.mediehuset.net/token",
      formData
    );
    //console.log(result);
    handleSessionData(result.data);
  };

  // Definerer funktion til at håndtere form data til session storage
  const handleSessionData = (data) => {
    if (data) {
      sessionStorage.setItem("token", JSON.stringify(data));
      setLoginData(data);
    }
  };

  // Definerer funktion til log out
  const logOut = () => {
    sessionStorage.removeItem("token");
    setLoginData("");
  };

  return (
    /* Kalder Layout komponent med title og description props */
    <Layout title="Login på StringsOnline" description="Din StringsOnline">
      {/* Vis form hvis loginData er false */}
      {!loginData && !loginData.username ? (
        // Sætter onSubmit event med closure function
        // closure function = vi har en funktion som kalder en anden funktion. og den anden kommer til at lukke den første
        <form onSubmit={handleSubmit(sendLoginRequest)}>
          <div>
            {/* Input username med form hook settings */}
            <label htmlFor="username">Brugernavn: </label>
            <input
              type="text"
              id="username"
              placeholder="Indtast brugernavn"
              {...register("username", { required: true })}
            />
            {/* Vis meddelelse hvis der er en fejl */}
            {errors.username && <span>Du skal indtaste dit brugernavn!</span>}
          </div>
          <div>
            {/* Input password med form hook settings */}
            <label htmlFor="password">Adgangskode: </label>
            <input
              type="password"
              id="password"
              placeholder="Indtast adgangskode"
              {...register("password", { required: true })}
            />
            {/* Vis meddelelse hvis der er en fejl */}
            {errors.password && <span>Du skal indtaste din adgangskode!</span>}
          </div>
          <div>
            <button>Send</button>
          </div>
        </form>
      ) : (
        // Vis logindata hvis bruger er logget ind
        <div>
          <p>Du er logget ind som {loginData.username}</p>
          <button onClick={logOut}>Log ud</button>
        </div>
      )}
    </Layout>
  );
};
