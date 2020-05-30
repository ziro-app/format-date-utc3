const test = require('ava')
const { formatDateUTC } = require('./index')

test('1', t => {
    const valueToTest = false
    const calculated = t.throws(() => formatDateUTC(valueToTest)).message
    const expected = 'formatDateUTC expects a Date instance'
	t.is(calculated, expected)
})
test('2', t => {
    const valueToTest = null
    const calculated = t.throws(() => formatDateUTC(valueToTest)).message
    const expected = 'formatDateUTC expects a Date instance'
    t.is(calculated, expected)
})
test('3', t => {
    const valueToTest = undefined
    const calculated = t.throws(() => formatDateUTC(valueToTest)).message
    const expected = 'formatDateUTC expects a Date instance'
    t.is(calculated, expected)
})
test('4', t => {
    const valueToTest = 0
    const calculated = t.throws(() => formatDateUTC(valueToTest)).message
    const expected = 'formatDateUTC expects a Date instance'
    t.is(calculated, expected)
})
test('5', t => {
    const valueToTest = -0
    const calculated = t.throws(() => formatDateUTC(valueToTest)).message
    const expected = 'formatDateUTC expects a Date instance'
    t.is(calculated, expected)
})
test('6', t => {
    const valueToTest = 0n
    const calculated = t.throws(() => formatDateUTC(valueToTest)).message
    const expected = 'formatDateUTC expects a Date instance'
    t.is(calculated, expected)
})
test('7', t => {
    const valueToTest = NaN
    const calculated = t.throws(() => formatDateUTC(valueToTest)).message
    const expected = 'formatDateUTC expects a Date instance'
    t.is(calculated, expected)
})
test('8', t => {
    const valueToTest = ''
    const calculated = t.throws(() => formatDateUTC(valueToTest)).message
    const expected = 'formatDateUTC expects a Date instance'
    t.is(calculated, expected)
})
test('9', t => {
    const valueToTest = {}
    const calculated = t.throws(() => formatDateUTC(valueToTest)).message
    const expected = 'formatDateUTC expects a Date instance'
    t.is(calculated, expected)
})
test('10', t => {
    const valueToTest = { test: 1 }
    const calculated = t.throws(() => formatDateUTC(valueToTest)).message
    const expected = 'formatDateUTC expects a Date instance'
    t.is(calculated, expected)
})
test('11', t => {
    const valueToTest = { test: 'test' }
    const calculated = t.throws(() => formatDateUTC(valueToTest)).message
    const expected = 'formatDateUTC expects a Date instance'
    t.is(calculated, expected)
})
test('12', t => {
    const valueToTest = 'Test'
    const calculated = t.throws(() => formatDateUTC(valueToTest)).message
    const expected = 'formatDateUTC expects a Date instance'
    t.is(calculated, expected)
})
test('13', t => {
    const valueToTest = 1
    const calculated = t.throws(() => formatDateUTC(valueToTest)).message
    const expected = 'formatDateUTC expects a Date instance'
    t.is(calculated, expected)
})
test('14', t => {
    const valueToTest = 1.3
    const calculated = t.throws(() => formatDateUTC(valueToTest)).message
    const expected = 'formatDateUTC expects a Date instance'
    t.is(calculated, expected)
})
test('15', t => {
    const valueToTest = true
    const calculated = t.throws(() => formatDateUTC(valueToTest)).message
    const expected = 'formatDateUTC expects a Date instance'
    t.is(calculated, expected)
})
test('16', t => {
    const valueToTest = () => {}
    const calculated = t.throws(() => formatDateUTC(valueToTest)).message
    const expected = 'formatDateUTC expects a Date instance'
    t.is(calculated, expected)
})
test('17', t => {
    const valueToTest = []
    const calculated = t.throws(() => formatDateUTC(valueToTest)).message
    const expected = 'formatDateUTC expects a Date instance'
    t.deepEqual(calculated, expected)
})
test('18', t => {
    const valueToTest = ['1']
    const calculated = t.throws(() => formatDateUTC(valueToTest)).message
    const expected = 'formatDateUTC expects a Date instance'
    t.deepEqual(calculated, expected)
})
test('19', t => {
    const valueToTest = ['1','2']
    const calculated = t.throws(() => formatDateUTC(valueToTest)).message
    const expected = 'formatDateUTC expects a Date instance'
    t.deepEqual(calculated, expected)
})
test('20', t => {
    const valueToTest = new Date('1995-12-17T03:24:00')
    const calculated = formatDateUTC(valueToTest)
    const expected = '17/12/1995 11:24:00'
    t.deepEqual(calculated, expected)
})
test('21', t => {
    const valueToTest = new Date('December 17, 1995 03:24:00')
    const calculated = formatDateUTC(valueToTest)
    const expected = '17/12/1995 11:24:00'
    t.deepEqual(calculated, expected)
})
test('22', t => {
    const valueToTest = new Date('December 1, 1995 03:24:00')
    const calculated = formatDateUTC(valueToTest)
    const expected = '01/12/1995 11:24:00'
    t.deepEqual(calculated, expected)
})
test('23', t => {
    const valueToTest = new Date('December 1, 2020 03:24:00')
    const calculated = formatDateUTC(valueToTest)
    const expected = '01/12/2020 11:24:00'
    t.deepEqual(calculated, expected)
})
test('24', t => {
    const valueToTest = 'December 1, 2020 03:24:00'
    const calculated = t.throws(() => formatDateUTC(valueToTest)).message
    const expected = 'formatDateUTC expects a Date instance'
    t.deepEqual(calculated, expected)
})
test('25', t => {
    const valueToTest = new Date('December 1, 2020')
    const calculated = formatDateUTC(valueToTest)
    const expected = '01/12/2020 08:00:00'
    t.deepEqual(calculated, expected)
})
test('26', t => {
    const valueToTest = new Date('')
    const calculated = t.throws(() => formatDateUTC(valueToTest)).message
    const expected = 'formatDateUTC expects a Date instance'
    t.deepEqual(calculated, expected)
})
test('27', t => {
    const valueToTest = new Date('hukh')
    const calculated = t.throws(() => formatDateUTC(valueToTest)).message
    const expected = 'formatDateUTC expects a Date instance'
    t.deepEqual(calculated, expected)
})
test('28', t => {
    const valueToTest = new Date(1374)
    const calculated = formatDateUTC(valueToTest)
    const expected = '01/12/1970 00:00:01'
    t.deepEqual(calculated, expected)
})
test('29', t => {
    const valueToTest = new Date('1374') // WATCH FOR THIS CASE, VALID DATE INSTANCE BUT NOT VALID DATE
    const calculated = formatDateUTC(valueToTest)
    const expected = '01/12/1374 00:00:00'
    t.deepEqual(calculated, expected)
})