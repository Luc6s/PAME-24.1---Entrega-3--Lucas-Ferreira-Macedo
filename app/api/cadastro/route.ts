import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import { prisma } from '/prisma';

export async function POST(req: NextRequest) {
  try {
    const { nome, email, dataNascimento, senha } = await req.json();
    console.log('Recebido:', { nome, email, dataNascimento, senha });

    if (!nome || !email || !dataNascimento || !senha) {
      return NextResponse.json({ error: 'Todos os campos são obrigatórios' }, { status: 400 });
    }

    // Verifica se o email já está em uso
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json({ error: 'Email já está em uso' }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(senha, 10);

    const newUser = await prisma.user.create({
      data: {
        nome,
        email,
        dataNascimento: new Date(dataNascimento),
        senha: hashedPassword,
      },
    });

    console.log('Usuário criado:', newUser);
    return NextResponse.json(newUser, { status: 200 });
  } catch (error) {
    console.error('Erro ao cadastrar usuário:', error);
    return NextResponse.json({ error: 'Erro ao cadastrar usuário' }, { status: 500 });
  }
}
