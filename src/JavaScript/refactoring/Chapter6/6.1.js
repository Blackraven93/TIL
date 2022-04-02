// 함수화 하기

const obj = {
  customer : 'raven'
}

const calculateOutstanding = () => {
  return 1_000_000
}

const printBanner = () => {}

const printOwing = invoice => {
  printBanner()
  let outstanding = calculateOutstanding();

  console.log(`고객명: ${invoice.customer}`)
  console.log(`채무액: ${outstanding}`);
}

const refactoring = invoice => {
  const printDetails = (outstanding)  => {
    console.log(`고객명: ${invoice.customer}`)
    console.log(`채무액: ${outstanding}`);  
  }
  
  printBanner()
  let outstanding = calculateOutstanding();
  printDetails(outstanding)

  // 함수 선언으로 하면 하위에 작성 불가
  // function printDetails (outstanding)  {
  //   console.log(`고객명: ${invoice.customer}`)
  //   console.log(`채무액: ${outstanding}`);  
  // }
}

refactoring(obj)
