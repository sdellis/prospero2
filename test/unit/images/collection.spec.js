describe('images/collection', function() {
  beforeEach(function() {
    this.Model = stub();
    this.Collection = proxyquire('../../src/images/collection.js', {
      './model' : this.Model
    });
  });
});
