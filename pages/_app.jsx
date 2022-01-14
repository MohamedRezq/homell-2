import "../style/index.css";
import React from "react";
import NextApp from "next/app";
import withReduxStore from "../lib/with-redux-store";
import { Provider } from "react-redux";
import Layout from "components/layout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class App extends NextApp {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

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
    const { Component, pageProps, reduxStore } = this.props;

    return (
      <Provider store={reduxStore}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
      </Provider>
    );
  }
}

export default withReduxStore(App);
