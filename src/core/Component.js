export default class Component {
	$target;
	$state;
	constructor($target) {
		this.$target = $target;
		this.setup();
		this.setEvent(); // constructor에서 한 번만 실행한다.
		this.render();
	}
	setup() {}
	template() {
		return '';
	}
	render() {
		this.$target.innerHTML = this.template();
	}
	setEvent() {}
	setState(newState) {
		this.$state = { ...this.$state, ...newState };
		this.render();
	}
}
