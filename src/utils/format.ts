export const formatDate = (date: string | Date): string => {
  const d = new Date(date);
  return d.toLocaleDateString("es-NI", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

export const formatTime = (minutes: number): string => {
  if (minutes < 60) return `${minutes} min`;
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return mins > 0 ? `${hours}h ${mins}min` : `${hours}h`;
};

export const truncate = (text: string, length: number): string => {
  if (text.length <= length) return text;
  return text.substring(0, length) + "...";
};
