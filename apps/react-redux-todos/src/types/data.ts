export type Auth = {
  currentUser: User | null;
  isAuthenticated: boolean;
};

export type Filter = "all" | "completed" | "ongoing";

export type Todo = {
  body: string;
  createdAt: string;
  done: boolean;
  id: string;
  slug: string;
  title: string;
  userId: string;
};

export type User = {
  id: string;
  createdAt: string;
  username: string;
  email: string;
  password: string;
};

export type PrivateOutletContext = Record<"user", User>;
