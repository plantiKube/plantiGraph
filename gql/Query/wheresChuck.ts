import gql from "graphql-tag";

const WHERES_CHUCK = gql`
query WheresChuck {
	querySite {
		id
		ocupant {
			xid
		}
	}
}`;