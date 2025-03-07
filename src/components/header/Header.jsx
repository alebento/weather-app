import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/authSlice";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/login");
  };

  return (
    <header>
      <h2>🌍 Previsão do Tempo</h2>
      <nav style={{gap: 8}}>
        <Link className="nav-button" to="/">🏠 Início</Link>
        {token ? (
          <Link className="nav-button" onClick={handleLogout}>🚪 Sair</Link>
        ) : (
          <>
            <Link className="nav-button" to="/login">🔑 Login</Link>
            <Link className="nav-button" to="/register">📝 Registrar</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
