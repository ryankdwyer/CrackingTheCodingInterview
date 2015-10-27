function MyQueue () {
	this.holder = [];
	this.queue = [];
	this.enqueue = function (element) {
		while (this.queue.length) {
			this.holder.push(this.queue.pop());
		}
		this.holder.push(element);
		this.queue = [];
		while (this.holder.length) {
			this.queue.push(this.holder.pop());
		}
	};
	this.dequeue = function () {
		return this.queue.pop();
	};
}