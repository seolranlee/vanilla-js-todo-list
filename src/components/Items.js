import Component from '../core/Component';

export default class Items extends Component {
	setup() {
		this.$state = { items: ['item1', 'item2'] };
	}
	template() {
		const { items } = this.$state;
		return `
			<ul>
				${items.map((item, key) => `<li>${item} <button class="deleteBtn" data-index="${key}">삭제</button></li>`).join('')}
			</ul>
			<button class="addBtn">추가</button>
		`;
	}
	// 불편함 1. render를 실행할 때 마다 이벤트가 새로 등록된다
	setEvent() {
		// 추가
		this.$target.querySelector('.addBtn').addEventListener('click', () => {
			const { items } = this.$state;
			this.setState({ items: [...items, `item${items.length + 1}`] });
		});

		// 삭제
		// 불편함 2. 반복적인 요소에 대해 각각 이벤트를 등록해야 한다
		this.$target.querySelectorAll('.deleteBtn').forEach(deleteBtn =>
			deleteBtn.addEventListener('click', ({ target }) => {
				const items = [...this.$state.items];
				items.splice(target.dataset.index, 1);
				this.setState({ items });
			})
		);
	}
}
