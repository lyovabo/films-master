describe('Filter: Some', function() {
  var filter;
   beforeEach(angular.mock.module('filmsApp'))
   beforeEach(inject(function(_$filter_){
    filter = _$filter_;
  }));
  it('some tests', function(){
  	var ar = [{'name':'b'},{'name':'z'},{'name':'a'}];
  	var zar = [{'name':'a'},{'name':'b'},{'name':'zs'}];
  	expect(JSON.stringify(filter('Some')(ar))).toBe(JSON.stringify(zar));
  })
});

