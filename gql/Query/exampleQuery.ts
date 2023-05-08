import gql from 'graphql-tag';

export const exampleQuery = gql`
query ExampleQuery {
  exampleLambda (exampleStringInput:"gahhhh")
}
`;