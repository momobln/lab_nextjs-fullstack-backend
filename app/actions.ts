"use server";

import { revalidatePath } from "next/cache";
import prisma from "@/lib/prisma";

export async function createProduct(formData: FormData) {
  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const price = parseFloat(formData.get("price") as string);

  if (!name || isNaN(price)) return;

  await prisma.product.create({
    data: { name, description, price },
  });

  revalidatePath("/");
}

export async function deleteProduct(id: number) {
  await prisma.product.delete({ where: { id } });
  revalidatePath("/");
}

export async function toggleStockStatus(id: number, inStock: boolean) {
  await prisma.product.update({
    where: { id },
    data: { inStock },
  });
  revalidatePath("/");
}
