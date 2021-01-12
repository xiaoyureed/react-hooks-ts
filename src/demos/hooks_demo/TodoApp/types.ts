export type Todo = {
  id: number;
  text: string;
  complete: boolean;
};

export type Add = (todo: Todo) => void;

export type Remove = (id: number) => void;

export type Toggle = (id: number) => void;