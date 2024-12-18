function formatDateWithAMPM(date: Date): string {
  const day = date.getDate().toString().padStart(2, "0");
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();

  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12;

  return `${day} ${month} ${year} ${hours
    .toString()
    .padStart(2, "0")}:${minutes} ${ampm}`;
}

export {formatDateWithAMPM}