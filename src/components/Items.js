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
		// 이벤트 버블링으로 처리
		this.$target.addEventListener('click', ({ target }) => {
			const items = [...this.$state.items];

			if (target.classList.contains('addBtn')) {
				this.setState({ items: [...items, `item${items.length + 1}`] });
			}

			if (target.classList.contains('deleteBtn')) {
				items.splice(target.dataset.index, 1);
				this.setState({ items });
			}
		});
	}
}
