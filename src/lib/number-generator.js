const NumberGeneratorState = {
	NotStarted: 'NotStarted',
	WaitingSignal: 'WaitingSignal',
	RecordingNumber: 'RecordingNumber',
	Ended: 'Ended',
}

class NumberGenerator {
	/**
	 * @param {number} n
	 */
	constructor(n) {
		this.state = NumberGeneratorState.NotStarted;
		this.n = n;
		/** @type {number[]} */
		this.numbers = [];
	}
	onSignal() {
		if (this.state == NumberGeneratorState.Ended) {
			throw new Error('cannot call onSignal when generation has ended');
		}
		this.state = NumberGeneratorState.RecordingNumber;
		this.numbers.push(0);
		if (this.numbers.length < this.n) {
			this.state = NumberGeneratorState.WaitingSignal;
		} else {
			this.state = NumberGeneratorState.Ended;
		}
	}
}

export { NumberGeneratorState, NumberGenerator };
