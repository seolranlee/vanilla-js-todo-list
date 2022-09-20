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
		// addEvent: 이벤트 버블링 추상화
		this.addEvent('click', '.addBtn', () => {
			const { items } = this.$state;
			this.setState({ items: [...items, `item${items.length + 1}`] });
		});
		this.addEvent('click', '.deleteBtn', ({ target }) => {
			const items = [...this.$state.items];
			items.splice(target.dataset.index, 1);
			this.setState({ items });
		});
	}
}
