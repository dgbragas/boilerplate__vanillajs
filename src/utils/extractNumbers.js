export default function extractNumbers(string) {
  return string ? string.replace(/\D/g, '') : string;
}
