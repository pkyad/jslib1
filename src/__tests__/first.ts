import { classNames } from '../utils/classNames'

describe('className', () => {
	it('test className', () => {
		expect(classNames('ok')).toBe('ok')
		expect(classNames('ok', 'ok')).toBe('ok ok')
	})
})
