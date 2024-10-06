const { sayHello } = require('./utils.js')

it('capitalizes things', () => {
    expect(sayHello('poop')).toBe('POOP')
})