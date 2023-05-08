import gql from 'graphql-tag';

export const exampleQuery = gql`
query {
  exampleLambda (exampleStringInput:"gahhhh")
}
`;