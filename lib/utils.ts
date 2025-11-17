export type ClassValue =
  | string
  | number
  | false
  | null
  | undefined
  | ClassDictionary
  | ClassArray;

type ClassDictionary = { [id: string]: boolean | undefined | null };
type ClassArray = ClassValue[];

function toValue(value: ClassValue): string {
  if (typeof value === "string" || typeof value === "number") {
    return String(value);
  }

  if (Array.isArray(value)) {
    return value.map(toValue).filter(Boolean).join(" ");
  }

  if (value && typeof value === "object") {
    return Object.entries(value)
      .filter(([, enabled]) => Boolean(enabled))
      .map(([className]) => className)
      .join(" ");
  }

  return "";
}

export function cn(...inputs: ClassValue[]): string {
  return inputs.map(toValue).filter(Boolean).join(" ");
}




