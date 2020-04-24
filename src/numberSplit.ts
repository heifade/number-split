/**
 * 数字切分。如：千分位
 * @param value 值
 * @param length 切分长度
 */
export function numberSplit(value: string | number, length: number = 3): string {
  if (value === null || value === undefined) {
    return "0";
  }
  const strValue = (String(value) || "").trim();
  if (strValue === "0" || strValue === "-0" || value === "") {
    return "0";
  }

  if (length < 1) {
    return value as any;
  }

  const aboveZero = !strValue.startsWith("-"); // 大于0 为 true
  const str = aboveZero ? strValue : strValue.substr(1); // 去掉前面的 "-";
  const [v1, v2] = str.split(".");
  const v1Str = v1Split(v1, length);

  if (v2) {
    return `${!aboveZero ? "-" : ""}${v1Str}${"."}${v2Split(v2, length)}`;
  }

  return `${!aboveZero ? "-" : ""}${v1Str}`;
}

/**
 * "12345678" => "12.345.678"
 * @param v
 * @param length
 */
function v1Split(v: string, length: number) {
  const rvl = v.split("").reverse(); // ['8','7','6','5','4','3','2','1']
  const list: string[] = [];
  for (let i = 0; i < rvl.length; i += length) {
    list.unshift(
      rvl
        .slice(i, i + length)
        .reverse()
        .join("")
    );
  }
  return list.join(",");
}

/**
 * "12345678" => "123.456.78"
 * @param v
 * @param length
 */
function v2Split(v: string, length: number) {
  const rvl = v.split("");
  const list: string[] = [];
  for (let i = 0; i < rvl.length; i += length) {
    list.push(rvl.slice(i, i + length).join(""));
  }
  return list.join(",");
}
