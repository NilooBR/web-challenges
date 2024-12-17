import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ProductDetailPage() {
    const router = useRouter();
    const { id } = router.query;

    const { data: product, error } = useSWR(`/api/products/${id}`,fetcher);

    if (error) return <div>Failed to load</div>;
    if (!product) return <div>Loading...</div>;

    return (
        <div>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>{product.price} {product.currency}</p>
            <p>{product.category}</p>
        </div>
    );
}