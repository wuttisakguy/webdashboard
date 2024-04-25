export const randomcolour=() => {
    const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  // Convert RGB values to hexadecimal format
  const hexColor = '#' + r.toString(16).padStart(2, '0') +
                         g.toString(16).padStart(2, '0') +
                         b.toString(16).padStart(2, '0');

  return hexColor;
}