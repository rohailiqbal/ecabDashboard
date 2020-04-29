jQuery(document).ready(function() {
	'use strict';

	Morris.Donut({
		element: "donut_chart",
		data: [{
			label: 'Today',
			value: 20
		}, {
			label: 'This Week',
			value: 25
		}, {
			label: 'This Month',
			value: 55
		}],
		colors: ['rgb(233, 30, 99)', 'rgb(0, 188, 212)', 'rgb(255, 152, 0)'],
		formatter: function (y) {
			return y + '%'
		}
	});
});


