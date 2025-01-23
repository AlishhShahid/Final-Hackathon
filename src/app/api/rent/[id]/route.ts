// src/app/api/rent/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  const rentalData = await req.json();
  try {
    // Your database or logic here
    return NextResponse.json({ message: 'Car rented successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error object:', error); // Log the full error
    return NextResponse.json(
      { message: 'Failed to rent the car', error: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}
