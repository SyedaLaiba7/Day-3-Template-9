import { client } from "@/sanity/lib/client";
import ShopItemClient from "@/components/ShopItemClient/ShopItemClient";

// Define the Product type
type Product = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  originalPrice?: number;
};

// Fetch the data from Sanity
const getData = async (): Promise<Product[]> => {
  const query = `*[_type == "food"]{
    _id,
    name,
    price,
    "imageUrl": image.asset->url
  }`;

  const fetchData = await client.fetch<{
    _id: string;
    name: string;
    price: number;
    imageUrl: string;
  }[]>(query);

  return fetchData.map((item) => ({
    id: item._id,
    name: item.name,
    price: item.price,
    imageUrl: item.imageUrl,
  }));
};

// Server Component to fetch product by id
const ShopItemServer = async ({ params }: { params:Promise< { id: string }> }) => {
 

  const productId = (await params)?.id; // Accessing dynamic route parameter

  if (!productId) {
    return <div>Invalid product ID</div>;
  }

  // Fetching all products
  const products = await getData();
  const product = products.find((prod) => prod.id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  // Render the product details page
  return <ShopItemClient product={product} />;
};

export default ShopItemServer;
