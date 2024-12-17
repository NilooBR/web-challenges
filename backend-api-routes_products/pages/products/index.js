import useSWR from "swr";
import Link from "next/link";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ProductPage() {
    const { data, error } = useSWR("/api/products", fetcher);

    if (error) return <div>Failed to load</div>;
    if (!data) return <div>Loading...</div>;

    return (
        <div>
            {data.map((product) => (
                <div key={product.id}>
                    <h1>
                        <Link href={`/products/${product.id}`}>
                            {product.name}
                        </Link>
                    </h1>
                    <p>{product.description}</p>
                    <p>{product.price} {product.currency}</p>
                    <p>{product.category}</p>
                </div>
            ))}
        </div>
    );
}