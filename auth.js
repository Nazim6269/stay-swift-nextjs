import { MongoDBAdapter } from '@auth/mongodb-adapter';
import NextAuth from 'next-auth';
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

const authOptions = {
  adapter: MongoDBAdapter(mongoClientPromise, {
    databaseName: environmentSecret,
  }),
  providers: [
    GithubProvider({
      clientId: githubId,
      clientSecret: githubSecret,
    }),

    GoogleProvider({
      clientId: googleId,
      clientSecret: googleSecret,
    }),
  ],
};

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth(authOptions);
