const formatterDateLong = new Intl.DateTimeFormat('en-US', {
  dateStyle: 'long'
})

const formatterDateTime = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'numeric',
  year: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
})

type TDate = number | string | Date

// month DD, YYYY
export function formatDateLong(date: TDate) {
  return formatterDateLong.format(new Date(date))
}

// DD-MM-YYYY / HH:mm:ss
export function formatDateTime(date: TDate) {
  return formatterDateTime.format(new Date(date))
    .replaceAll('/', '-')
    .replace(',', ' /')
}
