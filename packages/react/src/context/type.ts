export type RawContextState = {
  count: number;
};

export type ContextState = RawContextState & {
  doubleCount: number;
};
