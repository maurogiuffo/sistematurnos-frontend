import App from "next/app";
import ProfessionalsProvider from '../context/professionalsContext';

const MyApp = (props) => {

  const { Component, pageProps } = props;

  return (
    <ProfessionalsProvider>
      <Component {...pageProps} />
    </ProfessionalsProvider>
  );
};

export default MyApp;