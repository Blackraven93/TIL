const outer = () => {
  const inner = () => {
    let a = 5;
    console.log(a)
  }
  inner()
}

outer()

const fn = (arg) => {
  let outer = "Visible"
  let innerFn = () => {
    console.log(outer)
    console.log(arg)
  }
  return innerFn
}

const testFn = fn(10)
testFn()

const tap = (value) =>
  (fn) => (
    typeof fn === 'function' && fn(value),
    console.log(value)
  )


tap("fun")((it) => console.log("value is ", it))