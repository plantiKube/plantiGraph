import fetch from "cross-fetch";
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import {HelloDavidDocument, WheresChuckDocument} from "../operations";


const client = new ApolloClient({
  link: new HttpLink({ uri: "http://127.0.0.1:8080/graphql", fetch }),
  cache: new InMemoryCache(),
});

client
  .query({
    query: WheresChuckDocument,
    variables: {
    },
  })
  .then(({ data }) => console.log(data.querySite));


client.mutate({
    mutation: HelloDavidDocument,
    variables: {}
})
.then(({ data }) => {
        console.log(data);
        console.log("another line");

    }
);