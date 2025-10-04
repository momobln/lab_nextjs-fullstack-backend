import { createProduct } from "@/app/actions";

export default function AddProductForm() {
  return (
    <form
      action={createProduct}
      className="p-4 border rounded-lg mb-8 space-y-4"
    >
      <h2 className="text-xl font-semibold">Add New Product</h2>
      <input
        type="text"
        name="name"
        placeholder="Product Name"
        required
        className="w-full p-2 border rounded"
      />
      <textarea
        name="description"
        placeholder="Product Description"
        className="w-full p-2 border rounded"
      />
      <input
        type="number"
        name="price"
        placeholder="Price"
        required
        step="0.01"
        className="w-full p-2 border rounded"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add Product
      </button>
    </form>
  );
}
