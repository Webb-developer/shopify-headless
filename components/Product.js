import React, { useState } from "react";
import styled from 'styled-components'

const ProductStyle = styled.div`
  background: palevioletred;
  padding: 20px;
`

function Product(props) {

  const [variantImage, setVariantImage] = useState(
    props.product.images.edges[0].node
  );
  const [variant, setVariant] = useState(props.product.variants.edges[0].node);

  return (
    <ProductStyle>
      {props.product.images.edges.length ? (
        <img
          src={variantImage.src}
          alt={`${props.product.title} product shot`}
        />
      ) : null}
      <h2>{props.product.title}</h2>
      <strong>${variant.price}</strong>
    </ProductStyle>
  );
}

export default Product;
