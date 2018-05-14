export const firstPlugin = (store) => {
  store.subscribe((mutation, state) => {
    // NOTE ルートの状態をログる
    // console.log('state in firstPlugin', state)

    // NOTE plugin は直接 state を変更できない
    console.log('mutationType', mutation.type)
    if (typeof mutation.payload !== 'undefined') {
      console.log('mutationPayload', mutation.payload)
    }
  })
}
