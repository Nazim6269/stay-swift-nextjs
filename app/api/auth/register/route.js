import { userModel } from '@/models/usersModels';
import { connectMongo } from '@/services/connectMongo';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';

export const POST = async (request) => {
  const { fname, lname, email, password } = await request.json();
  try {
    await connectMongo();

    const hashedPass = await bcrypt.hash(password, 10);
    const newUser = { name: `${fname} ${lname}`, email, password: hashedPass };
    await userModel.create(newUser);

    return new NextResponse('User created successfully', {
      status: 201,
    });
  } catch (error) {
    return new NextResponse(error.message, {
      status: 500,
    });
  }
};
