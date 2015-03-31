describe('images/model', function() {
  beforeEach(function() {
    this.Model = proxyquire('../../src/images/model.js', {});
    this.model = new this.Model();
  });

  describe('#validate', function() {
    beforeEach(function() {
      spy(this.model, 'validate');
    });

    describe('when missing "name" field', function() {
      beforeEach(function() {
        this.attrs = { name: '', link: 'http://library.princeton.edu/sites/all/themes/pul_base/logo.png' };
        this.model.validate(this.attrs);
      });

      it('should return an error', function() {
        expect(this.model.validate).to.have.returned(['Missing "name" field']);
      });
    });

    describe('when missing "link" field', function() {
      beforeEach(function() {
        this.attrs = { name: 'blue', link: '' };
        this.model.validate(this.attrs);
      });

      it('should return an error', function() {
        expect(this.model.validate).to.have.returned(['Missing "link" field']);
      });
    });

    describe('when attributes are valid', function() {
      beforeEach(function() {
        this.attrs = { name: 'Selfie', hex: 'http://library.princeton.edu/sites/all/themes/pul_base/logo.png' };
        this.model.validate(this.attrs);
      });

      it('should return an error', function() {
        expect(this.model.validate).to.have.returned(undefined);
      });
    });
  });
});
