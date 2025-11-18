// src/app/routes.tsx

export const ROUTES = {
  HOME: "/",

  RESEARCH: "/research",
  AGENT_STACK: "/agentstack",
  PRODUCTS: "/products",
  LAUNCHPAD: "/launchpad",
  ABOUT: "/about",

  TERMS: "/terms",
  PRIVACY: "/privacy",
  LICENSING: "/licensing",
} as const;

export type RouteKey = keyof typeof ROUTES;

