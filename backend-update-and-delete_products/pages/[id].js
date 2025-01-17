import { useState } from "react";
import useSWR from "swr";
import { useRouter } from "next/router";
import styled from "styled-components";
import StyledLink from "@/components/Link/";
import Comments from "@/components/Comments";
import ProductForm from "@/components/ProductForm";
import StyledButton from "@/components/Button";

export default function Product() {
  const [showEditForm, setShowEditForm] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading, mutate } = useSWR(`/api/products/${id}`);

  async function handleEditProduct(productData) {
    const response = await fetch(`api/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });

    if (response.ok) {
      mutate();
      setShowEditForm(false);
    }
  }

  async function handleDeleteProduct() {
    const response = await fetch(`api/products/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      router.push("/");
    }
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <ProductCard>
      <h2>{data.name}</h2>
      <p>Description: {data.description}</p>
      <p>
        Price: {data.price} {data.currency}
      </p>
      <p>Reviews:</p>
      <ul>
        {data.reviews.map((review) => (
          <li key={review._id}>
            <strong>{review.title}</strong>: {review.text} <br />
            Rating: {review.rating} ⭐
          </li>
        ))}
      </ul>
      <StyledButton onClick={() => setShowEditForm(!showEditForm)}>
        EDIT
      </StyledButton>
      <StyledButton onClick={handleDeleteProduct}>DELETE</StyledButton>
      {showEditForm && (
        <ProductForm
          onSubmit={handleEditProduct}
          nameValue={data.name}
          descriptionValue={data.description}
          priceValue={data.price}
          currencyValue={data.currency}
          isEditMode={true}
        />
      )}
      <StyledLink href="/">Back to all</StyledLink>
    </ProductCard>
  );
}

const ProductCard = styled.article`
  padding: 0.5rem 1rem;
  box-shadow: 0px 1px 5px -2px var(--color-granite);
`;
