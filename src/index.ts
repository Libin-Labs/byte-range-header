export function formatByteRange(start: number, end: number): string {
  if (!Number.isSafeInteger(start) || !Number.isSafeInteger(end) || start < 0 || end < start)
    throw new RangeError('Expected 0 <= start <= end as safe integers');
  return 'bytes=' + start + '-' + end;
}
