import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const query = gql`
  query query {
    shop {
      name
      description
      products(first: 20) {
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
        edges {
          node {
            id
            title
            options {
              id
              name
              values
            }
            variants(first: 250) {
              pageInfo {
                hasNextPage
                hasPreviousPage
              }
              edges {
                node {
                  id
                  title
                  selectedOptions {
                    name
                    value
                  }
                  image {
                    src
                  }
                  price
                }
              }
            }
            images(first: 250) {
              pageInfo {
                hasNextPage
                hasPreviousPage
              }
              edges {
                node {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`;

function Layout({ children }) {
  const { loading: shopLoading, error: shopError, data: shopData } = useQuery(
    query
  );

  if (shopLoading) {
    return <p>Loading ...</p>;
  }

  if (shopError) {
    return <p>{shopError.message}</p>;
  }

  return (
    <div className="Layout">
      <header>header</header>
      {children}
      <footer>footer</footer>
    </div>
  );
}

export default Layout;
