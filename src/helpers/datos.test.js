import { fetchPoints, fetchWelcome } from "./datos";

it('fetch points from server', async () => {
    const res = await fetchPoints()
    const result = await res
    expect(typeof result).toBe('object')
    expect(result).not.toBeNull()
    expect(result.rectangle1).toHaveLength(4)
    expect(result.rectangle2).toHaveLength(4)
    expect(result.triangle).toHaveLength(3)
})

it('return welcome message string', async () => {
    const res = await fetchWelcome('test')
    const result = await res
    expect(typeof result).toBe('object')
    expect(typeof result.welcome).toBe('string')
    expect(result.welcome).toContain('test')
})