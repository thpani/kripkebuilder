var fs = require('fs'),
  Q = require('q'),
  resemble = require('resemble').resemble;

function doAsyncDownloads(arr, cb) {
  return arr
  .reduce(function(soFar, elem) {
    return soFar.then(function() { return download(elem.formula, elem.image); });
  }, Q())
  .then(function() { if (cb !== undefined) cb() });
}

var download = function(formula, image) {
  element(by.buttonText(formula)).click();

  var filename = '/tmp/graph.png';

  if (fs.existsSync(filename)) {
    fs.unlinkSync(filename);
  }

  var deferred = Q.defer();

  element(by.css('.cy')).evaluate("cy.style().selector('node').style({ 'font-family': 'Liberation Sans' }).update()");
  element(by.css('.cy')).evaluate('savePng()').then(function() {

    browser.driver.wait(function() {
      return fs.existsSync(filename);
    }, 30000).then(function() {
      fs.renameSync(filename, '/tmp/'+image);

      try {
        fs.accessSync('test/e2e/screenshots/'+image, fs.R_OK);

        resemble('/tmp/'+image)
        .compareTo('test/e2e/screenshots/'+image)
        .onComplete(function(result){
          expect(result.misMatchPercentage).toBe('0.00', "Image for '" + formula + "' differed by " + result.misMatchPercentage + "%");
          deferred.resolve();
        });
      } catch (e) {
        expect(false).toBe(true, "Comarison screenshot for '"+image+"' is missing");

        deferred.resolve();
      }
    });
  });

  return deferred.promise;
};

beforeEach(function() {
  var width = 1024;
  var height = 768;
  browser.driver.manage().window().setSize(width, height);

  browser.get('http://localhost:8080/sat.html');
});

describe('kripke builder homepage', function() {
  it('should deliver correct results for 2015-12-04', function(done) {
    element(by.buttonText('Samples')).click();
    element(by.linkText('2015-12-04')).click()
    .then(function() {
      doAsyncDownloads([
        {formula: 'G(b)', image: '2015-12-04_1.png'},
        {formula: 'X(c)', image: '2015-12-04_2.png'},
        {formula: 'AX(a & b & c)', image: '2015-12-04_3.png'},
        {formula: 'EF(a & b & c)', image: '2015-12-04_4.png'}
      ], done);
    });
  });

  it('should deliver correct results for 2015-10-16', function(done) {
    element(by.buttonText('Samples')).click();
    element(by.linkText('2015-10-16')).click()
    .then(function() {
      doAsyncDownloads([
        {formula: 'G(c)', image: '2015-10-16_1.png'},
        {formula: 'X(a & c)', image: '2015-10-16_2.png'},
        {formula: 'AG(a)', image: '2015-10-16_3.png'},
        {formula: 'EF(a)', image: '2015-10-16_4.png'}
      ], done);
    });
  });
});
