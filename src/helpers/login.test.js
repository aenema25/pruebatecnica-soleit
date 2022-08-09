import logInCall from './login'

it('complete login request and return key', async () => {
    const res = await logInCall('oscar', '6Xk5Q05%CHuJ')
    const result = await res
    expect(typeof result).toBe('object')
    expect(typeof result.key).toBe('string')
    expect(result).not.toBeNull()
})

it('complete login request and return error message', async () => {
    const res = await logInCall('oscar', '')
    const result = await res
    expect(typeof result).toBe('object')
    expect(typeof result.message).toBe('string')
    expect(result).not.toBeNull()
})