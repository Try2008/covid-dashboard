export type SortDirection = 'asc' | 'desc';

export function sortByColumn<T>(
  array: T[],
  column: keyof T,
  direction: SortDirection,
  customOrder?: Record<string, number>
): T[] {
  const dir = direction === 'asc' ? 1 : -1;
  return [...array].sort((a, b) => {
    const aVal = a[column];
    const bVal = b[column];

    if (customOrder && typeof aVal === 'string' && typeof bVal === 'string') {
      const aRank = customOrder[aVal];
      const bRank = customOrder[bVal];
      if (aRank !== undefined && bRank !== undefined) {
        return (aRank - bRank) * dir;
      }
    }

    if (typeof aVal === 'number' && typeof bVal === 'number') {
      return (aVal - bVal) * dir;
    }

    return String(aVal).localeCompare(String(bVal), 'he') * dir;
  });
}
