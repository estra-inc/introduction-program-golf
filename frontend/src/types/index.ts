export const AccountType = {
  GUEST: "guest",
  ADMIN: "admin",
} as const;

export type AccountType = (typeof AccountType)[keyof typeof AccountType];