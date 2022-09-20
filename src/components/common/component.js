/**
 *
 * @description 인스타그램 라이브러리 컴포넌트 클래스들이 공용적으로 쓰는 컴포넌트 클래스
 */

class Component {
	/**
	 * 생성자 함수.
	 * @param {*} unique: 각 컴포넌트 안의 요소들을 선택하기 위해 유니크하게 쓰이는 unique name. 중복되어선 안된다.
	 * @description: 인스턴스를 만들때 unique name을 받아 컴포넌트와 DOM을 매칭시켜준다.
	 */
	constructor({ unique }) {
		this.$el = null;
		this.unique = unique;
	}
	render() {}

	/**
	 *
	 * @description: 인스턴스에서 받아온 유니크네임을 받아 el와 연결시켜준다.
	 */
	mounted() {
		this.$el = document.querySelector(`[unique-name="${this.unique}"]`);
	}
	destory() {}
}

export default Component;
