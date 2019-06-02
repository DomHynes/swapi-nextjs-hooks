import { ClientContext } from "graphql-hooks";
import App, { Container } from "next/app";
import React from "react";
import client from '../graphql';

class MyApp extends App {
  private props;

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
      <ClientContext.Provider value={client}>
          <Component {...pageProps} />
      </ClientContext.Provider>
      </Container>
    );
  }
}

export default MyApp
