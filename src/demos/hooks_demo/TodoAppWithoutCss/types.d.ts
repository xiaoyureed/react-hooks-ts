// export type Todo = {
//   text: string;
//   complete: boolean;
// }

// naming this file -> types.d.ts, so that we don't need to write import statement everytime we use the type
// 
//  no need to export here
type Todo = {
  text: string;
  complete: boolean;
};

type Toggle = (todo: Todo) => void;

type Add = (todo: string) => void;
