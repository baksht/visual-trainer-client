export type PromiseControlsType<T> = {
  resolve(result: T): void;
  reject(e: Error): void;
};

export type PromiseControllerType<T> = Promise<T> & PromiseControlsType<T>;

export function createManagedPromise<T>(): {
  promise: Promise<T>;
  resolve: (result: T) => void;
  reject: (e: Error) => void;
} {
  let resolve: (result: T) => void = null!;
  let reject: (error: unknown) => void = null!;

  const promise = new Promise<T>((_resolve, _reject) => {
    resolve = _resolve;
    reject = _reject;
  });

  return { promise, resolve, reject };
}

export function createPromiseController<T>(): PromiseControllerType<T> {
  const data = createManagedPromise<T>();

  const { resolve, reject } = data;
  const promise = data.promise as PromiseControllerType<T>;

  promise.resolve = resolve;
  promise.reject = reject;

  return promise;
}
