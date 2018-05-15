import { counter } from '../../../src/store/modules/counter'
const { mutations, getters } = counter

describe('mutations', () => {
  let state

  beforeEach(() => {
    state = { count: 0 }
  })

  test('increment', () => {
    mutations.increment(state)
    expect(state.count).toBe(1)
  })

  test('setCount', () => {
    mutations.setCount(state, 10)
    expect(state.count).toBe(10)
  })
})

describe('getters', () => {

})
