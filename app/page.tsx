import prisma from "@/lib/prisma";
import AddProductForm from "@/app/components/AddProductForm";
import ProductCard from "@/app/components/ProductCard";

export default async function HomePage() {
  const products = await prisma.product.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Product Management</h1>
      <AddProductForm />
      <div className="space-y-4 mt-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
