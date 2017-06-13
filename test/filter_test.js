describe('Filter: Some', function() {
  var someFilter;
  
  beforeEach(module('filmsApp'));
  beforeEach(inject(function(_Some_) {
    someFilter = _Some_;
  }));
  it('should be able to BLA BLA', function() {
    expect(someFilter(['b','a','c'])).toBe(['a','b','c']);
});