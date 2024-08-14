import { MongoDBAdapter } from '@auth/mongodb-adapter';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import {
  environmentSecret,
  githubId,
  githubSecret,
  googleId,
  googleSecret,
} from './ secret';
import mongoClientPromise from './lib/client';
import { userModel } from './models/usersModels';

const authOptions = {
  adapter: MongoDBAdapter(mongoClientPromise, {
    databaseName: environmentSecret,
  }),
  session: {
    strategy: 'jwt',
  },
  providers: [
    GithubProvider({
      clientId: githubId,
      clientSecret: githubSecret,
    }),

    GoogleProvider({
      clientId: googleId,
      clientSecret: googleSecret,
    }),

    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },

      async authorize(credentials) {
        if (!credentials) return null;

        try {
          const user = await userModel.findOne({ email: credentials.email });
          if (user) {
            const isMatchPass = user.password === credentials.password;

            if (isMatchPass) {
              return user;
            } else {
              throw new Error('Invalid User or Password');
            }
          } else {
            throw new Error('Invalid User or Password');
          }
        } catch (error) {
          throw new Error('user not found');
        }
      },
    }),
  ],
};

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth(authOptions);
