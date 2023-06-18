export function useRefNumber(init: number) {
  const value = ref(init)

  function increment(num: number = 1) {
    value.value += num
  }
  function decrement(num: number = 1) {
    value.value -= num
  }

  function setValue(num: number) {
    value.value = num
  }

  return {
    value,
    increment,
    decrement,
    setValue
  }
}
