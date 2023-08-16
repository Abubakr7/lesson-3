export interface ITodo {
  id: number;
  title: string;
  complete: boolean;
}

export interface ITodoRequest {
  title: string;
  complete: boolean;
}

export interface ITodoProps {
  todo: ITodo;
  onDelete: () => void;
  onComplete: (complete: boolean) => void;
  onEditModal: () => void;
}
