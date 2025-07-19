import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1
        className="text-xl font-bold cursor-pointer"
        onClick={() => navigate("/")}
      >
        МойКинотеатр
      </h1>
      <div>
        {token ? (
          <>
            <button
              onClick={() => navigate("/profile")}
              className="mr-4 text-blue-600 hover:underline"
            >
              Профиль
            </button>
            <button
              onClick={handleLogout}
              className="text-red-500 hover:underline"
            >
              Выйти
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => navigate("/login")}
              className="mr-4 text-blue-600 hover:underline"
            >
              Войти
            </button>
            <button
              onClick={() => navigate("/register")}
              className="text-blue-600 hover:underline"
            >
              Регистрация
            </button>
          </>
        )}
      </div>
    </header>
  );
}
