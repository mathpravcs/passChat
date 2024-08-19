import React from "react";
import { Helmet } from "react-helmet-async";

const Title = ({
  title = "Chat Pass",
  description = "Esse é o chatPass, para te ajudar a se conectar",
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default Title;
