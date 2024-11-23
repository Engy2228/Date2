const convertMsToDays = (ms) => Math.round(ms / 1000 / 60 / 60 /24)
const getDaysBeforeBirthday = (nextBirthdayDate) => {
  if (!(date instanceof Date)) {
    return 'Первый параметр должен быть экземпляром класса Date!'
  }
  const nextBirthdayDateMs = nextBirthdayDate.getTime()
  const currentDateMs = Date.now()

  return convertMsToDays(nextBirthdayDateMs - currentDateMs)
}

console.log(getDaysBeforeBirthday(new Date(2025, 1, 24)))