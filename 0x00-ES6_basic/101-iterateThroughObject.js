export default function iterateThroughObject(reportWithIterator) {
  return Object.keys(reportWithIterator).join(' | ');
}
