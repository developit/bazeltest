import _ from "lodash-es";

export function shouldBe42() {
	let a = [40, 2];
	if (true) {
		a.push(5);
	}
	return _.sum(a);
}
