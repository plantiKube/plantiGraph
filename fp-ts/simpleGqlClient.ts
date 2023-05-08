import { Client, cacheExchange, fetchExchange } from '@urql/core';

const client = new Client({
    url: 'http://127.0.0.1:8080/graphql',
    exchanges: [cacheExchange, fetchExchange],
});