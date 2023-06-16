import fetch from "cross-fetch";
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import {CreateGermTrayDocument, SignalType, WheresChuckDocument} from "../../operations";


export const createGermTrayEffect = () => {

    const client = new ApolloClient({
        link: new HttpLink({ uri: "http://127.0.0.1:8080/graphql", fetch }),
        cache: new InMemoryCache(),
    });


    client.query({
            query: CreateGermTrayDocument,
            variables:
                {
                    xidInput: "0xDEADBEEF2",
                    sitesInput: [
                        {
                            signal:
                                {
                                    signalDate: "2023-05-10T23:13:56Z",
                                    signalType: SignalType.Germinate
                                }
                        }
                    ]
                },
        })
        .then(({ data }) => {
            console.log(data)
        });

}
