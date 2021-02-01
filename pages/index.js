import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import Product from "../components/Product";
import Layout from "../components/Layout";

function Home() {
  const query = gql`
    query query {
      shop {
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

  const { loading, error, data } = useQuery(query);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <Layout>
      <div className="Home">
        <div className="Products">
          {data.shop.products.edges.map((product) => (
            <Product key={product.node.id.toString()} product={product.node} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Home;
