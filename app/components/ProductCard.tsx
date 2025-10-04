"use client";

import type { Product } from "@prisma/client";
import { deleteProduct, toggleStockStatus } from "@/app/actions";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="p-4 border rounded-lg shadow-sm flex justify-between items-center">
      <div>
        <h2
          className={`text-xl font-bold ${
            !product.inStock ? "line-through" : ""
          }`}
        >
          {product.name}
        </h2>
        <p>
          ${product.price.toFixed(2)} -{" "}
          {product.inStock ? "In Stock" : "Out of Stock"}
        </p>
      </div>
      <div className="space-x-2">
        <button
          onClick={() => toggleStockStatus(product.id, !product.inStock)}
          className="bg-yellow-500 text-white px-3 py-1 rounded"
        >
          Toggle Stock
        </button>
        <button
          onClick={() => deleteProduct(product.id)}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
