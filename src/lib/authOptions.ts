import { NextAuthOptions, User } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import prisma from './prisma';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { compare } from 'bcrypt';
import useUser from '@/helpers/hooks/useUser';

declare module 'next-auth' {
  interface User {
    role?: string;
  }
}

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        console.log('🚀 ~ authorize ~ credentials:', credentials);
        if (!credentials?.email || !credentials.password) {
          return null;
        }

        const user = await prisma.users.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user) {
          return null;
        }

        const isPasswordValid = await compare(
          credentials.password,
          user.password
        );

        if (!isPasswordValid) {
          return null;
        }

        useUser.setState({ user })

        return {
          // ...user,
          // id: user.id.toString(),
          id: user.id + '',
          email: user.email,
          name: user.name,
          role: user.role,
          // randomKey: 'Hey cool',
        };
      },
    }),
  ],
  callbacks: {
    session: ({ session, user, token }) => {
      console.log('Session Callback', { session,user, token });
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          role: token.role,
          // randomKey: token.randomKey,
        },
      };
    },
    jwt: ({ token, user, account, profile, isNewUser }) => {
      // console.log('JWT Callback', { token, user, account, profile, isNewUser });
      if (user) {
        const u = user as unknown as any;
        return {
          ...token,
          id: u.id,
          role: u.role,
          // randomKey: u.randomKey,
        };
      }
      return token;
    },
    // signIn: ({ user, account, profile, email, credentials }) => {
    //   console.log('Sign In Callback', { user, account, profile, email, credentials });
    //   // const { setUser } = useUser.setState();
    //   useUser.setState({ user });
    //   // if (user.role === 'admin') {
    //   //   return '/ap/dashboard';
    //   // }
    //   // return '/';
    //   return true;
    // }
  },
  // jwt: {
  //   secret: process.env.JWT_SECRET,
  // },
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: '/login',
  },
};
