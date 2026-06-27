export function formatTanggal(value) {
  if (!value) return '-'

  const date = new Date(value)

  return date.toLocaleDateString('id-ID', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  })
}

export function formatToISO(dateStr) {
  if (!dateStr) return null

  const [day, month, year] = dateStr.split("/")

  const date = new Date(
    Number(year),
    Number(month) - 1,
    Number(day)
  )

  if (
    date.getFullYear() !== Number(year) ||
    date.getMonth() !== Number(month) - 1 ||
    date.getDate() !== Number(day)
  ) {
    return null
  }

  return date.toISOString()
}