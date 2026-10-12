const dateFormatter = new Intl.DateTimeFormat("en-IN", {
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

export function formatMonth(date: string): string {
  return dateFormatter.format(new Date(`${date}T00:00:00Z`));
}

export function completedMonthsSince(date: string, now = new Date()): number {
  const start = new Date(`${date}T00:00:00Z`);
  const months =
    (now.getUTCFullYear() - start.getUTCFullYear()) * 12 +
    now.getUTCMonth() -
    start.getUTCMonth();
  return Math.max(0, months - (now.getUTCDate() < start.getUTCDate() ? 1 : 0));
}

export function isConfiguredLink(href: string): boolean {
  return href.length > 0 && href !== "#";
}
