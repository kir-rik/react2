import DataProvider from './DataProvider.js';

it('returns array', () => {
  expect(DataProvider.getStaticTableData()).toEqual(expect.arrayContaining([]));
});