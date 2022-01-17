import "../style/index.css";
import React from "react";
import NextApp from "next/app";
import withReduxStore from "../lib/with-redux-store";
import { Provider } from "react-redux";
import Layout from "./components/layout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SessionProvider } from "next-auth/react";

class App extends NextApp {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = { };

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return {
      pageProps,
    };
  }
  componentDidMount() {
    import("bootstrap/dist/js/bootstrap");
  }
  render() {
    const { Component, pageProps:{session, ...pageProps}, reduxStore } = this.props;

    return (
      <Provider store={reduxStore}>
        <SessionProvider session={session}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SessionProvider>
      </Provider>
    );
  }
}

export default withReduxStore(App);
