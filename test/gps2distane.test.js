const expect = require('chai').expect;
const gps2distance = require('../index')

const range = 0.1

// 测试case
const cases = [
  {
    name: '距离计算',
    in: [[116.433,39.941],[116.345,39.967]],
    out:8.1
  }
]

describe('gps2distance', function () {

  cases.forEach(item => {
    it(item.name, function () {
      console.log(gps2distance(item.in))
      expect(gps2distance(item.in)).to.above(item.out-range).and.below(item.out+range)
    })
  })

})
