import gql from "graphql-tag";

const ADD_SITE = gql`
mutation AddGreatSitesForSeeing($name: String!) {
	addSite (input:{
		ocupant: {
			xid: $name,
			cropName: $name,
			repeater: false,
			nutrientType: "nitrogen",
		}
	}) {
		site {
			id
			ocupant {id, nutrientType, xid, cropName}
		}
	}
}
`;