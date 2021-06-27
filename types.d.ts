export interface ListItem<T> {
  key: string;
  value: T;
}

export type Goal = ListItem<string>;
