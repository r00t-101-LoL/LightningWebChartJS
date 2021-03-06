import CartesianCategoryAxis from 'c/cartesianCategoryAxis';

const TEST_DATA_PROPERTIES = [
  ChartOptionMock('tickLabels', 'foo', {
    yAxes: [{ ticks: { labels: 'foo' } }]
  })
];

describe('c-cartesian-category-axis', () => {
  testAttribute(CartesianCategoryAxis, TEST_DATA_PROPERTIES);
});
