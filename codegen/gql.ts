/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\nmutation AddGreatSitesForSeeing($name: String!) {\n\taddSite (input:{\n\t\tocupant: {\n\t\t\txid: $name,\n\t\t\tcropName: $name,\n\t\t\trepeater: false,\n\t\t\tnutrientType: \"nitrogen\",\n\t\t}\n\t}) {\n\t\tsite {\n\t\t\tid\n\t\t\tocupant {id, nutrientType, xid, cropName}\n\t\t}\n\t}\n}\n": types.AddGreatSitesForSeeingDocument,
    "\nquery ExampleQuery {\n  exampleLambda (exampleStringInput:\"gahhhh\")\n}\n": types.ExampleQueryDocument,
    "\nquery WheresChuck {\n\tquerySite {\n\t\tid\n\t\tocupant {\n\t\t\txid\n\t\t}\n\t}\n}": types.WheresChuckDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nmutation AddGreatSitesForSeeing($name: String!) {\n\taddSite (input:{\n\t\tocupant: {\n\t\t\txid: $name,\n\t\t\tcropName: $name,\n\t\t\trepeater: false,\n\t\t\tnutrientType: \"nitrogen\",\n\t\t}\n\t}) {\n\t\tsite {\n\t\t\tid\n\t\t\tocupant {id, nutrientType, xid, cropName}\n\t\t}\n\t}\n}\n"): (typeof documents)["\nmutation AddGreatSitesForSeeing($name: String!) {\n\taddSite (input:{\n\t\tocupant: {\n\t\t\txid: $name,\n\t\t\tcropName: $name,\n\t\t\trepeater: false,\n\t\t\tnutrientType: \"nitrogen\",\n\t\t}\n\t}) {\n\t\tsite {\n\t\t\tid\n\t\t\tocupant {id, nutrientType, xid, cropName}\n\t\t}\n\t}\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery ExampleQuery {\n  exampleLambda (exampleStringInput:\"gahhhh\")\n}\n"): (typeof documents)["\nquery ExampleQuery {\n  exampleLambda (exampleStringInput:\"gahhhh\")\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery WheresChuck {\n\tquerySite {\n\t\tid\n\t\tocupant {\n\t\t\txid\n\t\t}\n\t}\n}"): (typeof documents)["\nquery WheresChuck {\n\tquerySite {\n\t\tid\n\t\tocupant {\n\t\t\txid\n\t\t}\n\t}\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;