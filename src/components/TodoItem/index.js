import Component from '../common/component';
import './index.css';

let todoItemName = `todoItem-${Math.round(Math.random() * 100000000)}`;
let todoItemIdx = 0;

class TodoItem extends Component {
	/**
	 * 생성자 함수.
	 * @param {*} text: 버튼 라벨
	 */
	constructor({ id, title, completed }) {
		super({ unique: todoItemName + ++todoItemIdx });
		this.id = id;
		this.title = title;
		this.completed = completed;
	}

	mounted() {
		super.mounted();
		this.addEvent();
	}

	addEvent() {
		this.$el.addEventListener('click', () => {
			// alert(this.index);
			// console.log('test');
			// this.$el.outerHTML = this.render();
			// this.mounted();
		});
	}

	render() {
		return `<div unique-name=${this.unique} class="todo-item${this.completed ? ' done' : ''}">
        ${this.id} ${this.title} ${this.completed ? '완료' : '미완료'}
    </div>`;
	}
	destroy() {}
}

export default TodoItem;
