import React from "react";
import Header from "./components/header/Header";
import Login from "./components/content/Login";
import Footer from "./components/footer/Footer";
import loginIllustration from "../static/illustrations/login.svg";

export default function LoginPage() {
  return (
    <>
      <Header />
      <Login illustration={loginIllustration} />
      <Footer />
    </>
  );
}
