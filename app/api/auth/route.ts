import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (user && await bcrypt.compare(password, user.senha)) {
      return NextResponse.json({ authenticated: true }, { status: 200 });
    } else {
      return NextResponse.json({ authenticated: false, error: 'Credenciais inválidas' }, { status: 401 });
    }
  } catch (error) {
    return NextResponse.json({ authenticated: false, error: 'Erro ao autenticar usuário' }, { status: 500 });
  }
}
