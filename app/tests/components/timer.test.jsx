var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer', () => {

	it('should exist', () => {
		expect(Timer).toExist();
	});

	describe('handleSetTimer', () => {

		it('should set state to started and count up', (done) => {
			var timer = TestUtils.renderIntoDocument(<Timer/>);
			timer.handleStatusChange('started');
			expect(timer.state.count).toBe(0);

			setTimeout(() => {
				expect(timer.state.timerStatus).toBe('started');
				expect(timer.state.count).toBe(1);
				done();
			}, 1001);
		});

		it('should pause timer when paused', (done) => {
			var timer = TestUtils.renderIntoDocument(<Timer/>);
			timer.setState({count: 10});
			timer.handleStatusChange('started');
			timer.handleStatusChange('paused');

			setTimeout(() => {
				expect(timer.state.count).toBe(10);
				done();
			}, 1001);
		});

		it('should set count to zero on clear', (done) => {
			var timer = TestUtils.renderIntoDocument(<Timer/>);
			timer.setState({count: 10});
			timer.handleStatusChange('started');
			timer.handleStatusChange('stopped');

			setTimeout(() => {
				expect(timer.state.timerStatus).toBe('stopped');
				expect(timer.state.count).toBe(0);
				done();
			}, 1001);
		});
	});
});