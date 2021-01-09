// export type Todo = {
//   text: string;
//   complete: boolean;
// }

// naming this file -> types.d.ts, so that we don't need to write import statement everytime we use the type 
// !!! no export here
type Todo = {
  text: string;
  complete: boolean;
}

type Toggle = (Todo) => void;

type Add = (todoText: string) => void;