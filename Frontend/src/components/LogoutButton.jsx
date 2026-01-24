import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

export default function LogoutButton() {
    // const navigate = useNavigate();

    const handleLogout = () => {
        // 1️⃣ مسح token و user
        localStorage.removeItem("mvec_token");
        localStorage.removeItem("mvec-user");

        // 2️⃣ redirect للـ Login
        location.replace("/login-signup");
    }

    return (
        <Button
            onClick={handleLogout}
            style={'btn-danger'}>
            <div className="flex gap-2 items-center justify-center">
                Logout
                <i className="fa-solid fa-arrow-right-from-bracket"></i>
            </div>
        </Button>
    );
}
