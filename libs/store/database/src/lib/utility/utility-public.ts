export type Where<T> = {
  [K in keyof T]?: T[K]|Array<T[K]>
};
