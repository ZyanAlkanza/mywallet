export function formatRupiah(value) {
  if (value === null || value === undefined) return '0'

  return Number(value).toLocaleString('id-ID')
}