export interface UseElementSizeResult<T> {
  ref(element: T): void;
  width?: number;
  height?: number;
}
