// perf
// obj - 34,506,144 ops/sec ±1.54%
// arr - 32,347,650 ops/sec ±0.97%
// oth - 165,792,729 ops/sec ±1.97%
export function clone<T = any> (o: T): T {
  if (typeof o === 'object' && o !== null && !Array.isArray(o)) {
    // we ignore built-in object
    if (o instanceof Date) return o
    if (o instanceof Set) return o
    if (o instanceof Map) return o
    const tmp: any = {}
    Object.keys(o).forEach(function (k) {
      tmp[k] = clone((o as any)[k])
    })
    return tmp
  } else if (typeof o === 'object' && o !== null && Array.isArray(o)) {
    return (o as never as unknown[]).map(clone) as never as T
  } else {
    return o
  }
}
