import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.hygraph.com/v2/cl7bzk0z33yrw01ufa9yf68lo/master',
  cache: new InMemoryCache()
})