describe('Filter: Some', function() {
  var filmsApp =  angular.module('filmsApp');
  var filter;
   // beforeEach(angular.module('filmsApp'));
   beforeEach(inject(function(_$filter_){
    filter = $filter;
  }));
  it('should filter the parameters passed', function(){
    expect(filmsApp.name).toBe('filmsApp');
  })
  it('some tests', function(){
  
    return filter.name == 'Some';

  })
});

