import Component from '../common/component';

let buttonName = `button-${Math.round(Math.random() * 100000000)}`;
let buttonIdx = 0;

class Button extends Component {
	/**
	 * 생성자 함수.
	 * @param {*} text: 버튼 라벨
	 */
	constructor({ text, index }) {
		super({ unique: buttonName + ++buttonIdx });
		this.text = text;
		this.index = index;
	}

	mounted() {
		super.mounted();
		this.addEvent();
	}

	addEvent() {
		this.$el.addEventListener('click', () => {
			alert(this.index);
			// console.log('test');
			// this.$el.outerHTML = this.render();
			// this.mounted();
		});
	}

	render() {
		return `<button unique-name=${this.unique}>
        ${this.text}
    </button>`;
	}
	destroy() {}
}

export default Button;
