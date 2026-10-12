import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  const { email, password, name } = await request.json();

  const passwordhash = await bcrypt.hash(password, 10);

  const result = await sql`
    INSERT INTO users (email, passwordhash, name)
    VALUES (${email}, ${passwordhash}, ${name})
    RETURNING id, email, name;
  `;

  return NextResponse.json(result.rows[0], { status: 201 });
}
