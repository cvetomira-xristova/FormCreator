import React from "react";
import Header from "./components/header/Header";
import MainInfo from "./components/content/MainInfo";
import Footer from "./components/footer/Footer";
import postIllustration from "../static/illustrations/post.svg";
import dataIllustration from "../static/illustrations/data.svg";
import socialIllustration from "../static/illustrations/social.svg";

export default function HomePage() {
  return (
    <>
      <Header />
      <MainInfo
        bgColor="#5858AB"
        textColor="#FFFFFF"
        illustration={postIllustration}
        title="Create different surveys in a matter of seconds for free"
        subtitle="We offer you a simple, yet powerful tool for creating, customizing and saving forms"
        button={true}
        direction="row"
      />
      <MainInfo
        bgColor="#FFFFFF"
        textColor="#000000"
        illustration={socialIllustration}
        title="Share your creations"
        subtitle="Once your form is ready, you can share it with the rest of the world via the share link or by posting it on your social media"
        direction="row-reverse"
      />
      <MainInfo
        bgColor="#FFFFFF"
        textColor="#000000"
        illustration={dataIllustration}
        title="View and analyze results"
        subtitle="After people have filled in your form, you can review the results easily and analyzse the acquired information, which will be neatly displayed in charts"
        direction="row"
      />
      <Footer />
    </>
  );
}
