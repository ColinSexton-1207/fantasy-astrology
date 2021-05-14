// Fantasy Astrology Horoscope Generator
// Author: Colin Sexton
// Note: This file holds the object-data that will later be used to generate the random horoscope message

const horoscope = {
	_horoscopeFrags: {
		starSign: ['The Merchant', 'The Ship', 'The Key', 'The Sealing Stone', 'The Lover', 'The Ritual', 'The Dragon'],
		signTrait: ['Takes Action, Born to Wealth, Selfish', 'Adventurer, Fearless, Free', 'Focused, Full of Knowledge, Determined', 'Careful, Eccentric, Secretive', 'Kind, Full of Warmth, Loving', 'Sadistic, Conniving, Evil', 'Powerful, Larger than Life, Hotheaded'],
		message: ['Today, your investments will pay off! Have joy!', 'Your journey is about to end, but worry not, for a new one will soon start.', 'Fret not! Your will will unlock your path for tomorrow.', 'It is unwise to lock away your problems. Embrace them, and evolve.', 'Your relationships may look grim today, but open your heart and embrace healing.', 'The secrets your possess will cause more harm than good. Forget them.', 'Be wary of your own ego. Powerful personalities often spark conflict.'],
	},

	get starSign() {
		return this._starSign;
	},
	get signTrait() {
		return this._signTrat;
	},
	get message() {
		return this._message;
	},

	get horoscopeFrags() {
		return {
			starSign: this.starSign,
			signTrait: this.signTrait,
			message: this.message
		};
	},

	// Randomizer function
	randomize(horoscope) {
		const hScope = this._horoscopeFrags(horoscope);
		const randHScopeIndex = Math.floor(Math.random() * hScope.length);
		return hScope[randHScopeIndex];
	},

	// Generate function for randomized variables (will be exported)
	generate() {
		//console.log('test');
		const outSign = this.randomize('starSign');
		const outTrait = this.randomize('signTrait');
		const outMessage = this.randomize('message');
		return outSign + ' ' + outTrait + ' ' + outMessage;
	}
}

module.exports = horoscope.generate; // Exports the generate function with desired output
