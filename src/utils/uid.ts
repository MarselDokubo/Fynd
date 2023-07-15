export function uid() {
  return (performance.now().toString(36) + Math.random().toString).replace(
    /\./g,
    ""
  );
}
