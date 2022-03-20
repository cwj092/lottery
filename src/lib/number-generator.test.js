import {NumberGenerator, NumberGeneratorState} from './number-generator';
import {test,expect} from '@jest/globals';

test('create number generator', () => {
	const g = new NumberGenerator(0);
	expect(g.state).toBe(NumberGeneratorState.NotStarted);
});

test('stop when all number generated', () => {
	const g = new NumberGenerator(2);
	g.onSignal();
	expect(g.state).toBe(NumberGeneratorState.WaitingSignal);
	g.onSignal();
	expect(g.state).toBe(NumberGeneratorState.Ended);
});

test('error when call ended generator onSignal', () => {
	const g = new NumberGenerator(1);
	g.onSignal();
	expect(() => g.onSignal()).toThrowError('cannot call onSignal when generation has ended');
});

