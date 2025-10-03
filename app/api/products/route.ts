import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// GET /api/products
export async function GET() {
  const products = await prisma.product.findMany({
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(products);
}

// POST /api/products
export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, description, price } = data;

    const newProduct = await prisma.product.create({
      data: { name, description, price },
    });

    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error creating product" }, { status: 500 });
  }
}
