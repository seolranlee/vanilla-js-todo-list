import Items from './components/Items';

class App {
	constructor() {
		const $app = document.querySelector('#app');
		new Items($app);
	}
}

new App();
