import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

type RouteParams = { params: { id: string } };

// GET /api/products/[id]
export async function GET(req: Request, { params }: RouteParams) {
  const id = parseInt(params.id, 10);
  const product = await prisma.product.findUnique({ where: { id } });
  if (!product) return NextResponse.json({ message: "Not found" }, { status: 404 });
  return NextResponse.json(product);
}

// PATCH /api/products/[id]
export async function PATCH(req: Request, { params }: RouteParams) {
  const id = parseInt(params.id, 10);
  try {
    const data = await req.json();
    const updatedProduct = await prisma.product.update({ where: { id }, data });
    return NextResponse.json(updatedProduct);
  } catch {
    return NextResponse.json({ message: "Error updating" }, { status: 500 });
  }
}

// DELETE /api/products/[id]
export async function DELETE(req: Request, { params }: RouteParams) {
  const id = parseInt(params.id, 10);
  try {
    await prisma.product.delete({ where: { id } });
    return new NextResponse(null, { status: 204 });
  } catch {
    return NextResponse.json({ message: "Error deleting" }, { status: 500 });
  }
}
