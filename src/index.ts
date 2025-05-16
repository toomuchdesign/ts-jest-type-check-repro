export function hello(hello: string): string {
  // Type check error
  const bar: string = 1;
  return hello;
}
