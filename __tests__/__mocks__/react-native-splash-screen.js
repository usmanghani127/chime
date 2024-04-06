export default {
  show: jest.fn().mockImplementation(() => {
    console.log('Show splash screen');
  }),
  hide: jest.fn().mockImplementation(() => {
    console.log('Hide splash screen');
  }),
};
