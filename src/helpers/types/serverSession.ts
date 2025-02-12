import { DefaultSession } from "next-auth";

export type SessionServerProps = DefaultSession & {
  user: {
    id: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
}