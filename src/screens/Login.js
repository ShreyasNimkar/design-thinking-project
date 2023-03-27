import React from "react";
import { useState, useEffect } from "react";
import "../data/login/login.json";
const Login = () => {
  let [usernames, setUsernames] = useState([
    {
      username: "shreyas",
      password: "password",
    },
    {
      username: "shreyas",
      password: "password",
    },
    {
      username: "shreyas",
      password: "password",
    },
    {
      username: "shreyas",
      password: "password",
    },
  ]);
  const [password, setPassword] = useState([]);

  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setpasswordInput] = useState("");
  const submitHandler = () => {
    const newUsernames = [
      ...usernames,
      { username: usernameInput, password: passwordInput },
    ];
    setUsernames(newUsernames);
    setUsernameInput("");
    setpasswordInput("");
  };

  useEffect(() => {}, []);

  return (
    <div className="h-screen w-full">
      <div className="flex justify-around items-center">
        <div className="w-1/2 h-full">asd</div>
        <div className="w-1/2 h-full">
          <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
              <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Please Register
                  </h1>
                  <div className="space-y-4 md:space-y-6">
                    <div>
                      <label
                        htmlFor="usernameInput"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Username
                      </label>
                      <input
                        type="usernameInput"
                        name="usernameInput"
                        id="usernameInput"
                        value={usernameInput}
                        onChange={(el) => {
                          setUsernameInput(el.target.value);
                        }}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="username"
                        required=""
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="passwordInput"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Password
                      </label>
                      <input
                        type="passwordInput"
                        name="passwordInput"
                        id="passwordInput"
                        placeholder="••••••••"
                        value={passwordInput}
                        onChange={(el) => {
                          setpasswordInput(el.target.value);
                        }}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required=""
                      />
                    </div>

                    <button
                      className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      onClick={() => {
                        submitHandler();
                      }}
                    >
                      Sign in
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Login;
