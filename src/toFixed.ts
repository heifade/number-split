export function toFixed(value: number | string, fractionDigits: number = 2) {
  let nv: number = 0;

  if (value === null || value === undefined) {
    nv = 0;
  } else if (typeof value === "string") {
    nv = Number(value);
    if (isNaN(nv)) {
      nv = 0;
    }
  } else if (typeof value === "number") {
    nv = value;
  } else {
    nv = 0;
  }

  return nv.toFixed(fractionDigits);
}
