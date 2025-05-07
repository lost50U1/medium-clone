export function dateFormatter(date, options) {
  if (!date) return "";

  const parsedDate = new Date(date);

  if (isNaN(parsedDate.getTime())) {
    console.warn("Invalid date provided:", date);
    return "";
  }

  const defaultOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const finalOptions = options
    ? { ...defaultOptions, ...options }
    : defaultOptions;

  return parsedDate.toLocaleDateString("en-US", finalOptions);
}
