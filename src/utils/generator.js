function generateKey() {
  const rand = (_) => Math.random().toString(36).slice(2);

  return `SUPERHASH-${rand()}${rand()}.toUpperCase()`;
}
export default generateKey;
