import { counter } from '../../../src/store/modules/counter'
const { mutations, getters } = counter

let state

beforeEach(() => {
  state = { count: 1 }
})

// NOTE ただの関数だからテストは楽
describe('mutations', () => {
  test('increment', () => {
    mutations.increment(state)
    expect(state.count).toBe(2)
  })

  test('addCount', () => {
    mutations.addCount(state, 10)
    expect(state.count).toBe(11)
  })
})

// NOTE mutations と同じくただの関数だから楽にテストできるっす
describe('getters', () => {
  test('countDouble', () => {
    const value = getters.countDouble(state)
    expect(value).toBe(state.count * 2)
  })
})
