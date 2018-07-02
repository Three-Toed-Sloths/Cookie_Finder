var Nightmare = require("nightmare");


describe("CookieFinder", function() {
    // The default tests in mocha is 2 seconds.
    // Extending it to 30 seconds to have time to load the pages
    
  
    it("should navigate to the signup page after clicking the getstarted button", function(done) {
      // ID for the login button.
      return Nightmare({
          show: true
        })
        .goto("https://cookie-seller-app.herokuapp.com/about")
        .click("button")
        .wait(3000)
        // Evaluate the title
        .evaluate(function() {
          return window.location.href;
        })
        .end()
        // Asset the title is as expected
        .then(function(url) {
          expect(url).toEqual("https://cookie-seller-app.herokuapp.com/signup");
          done();
        });
    }, 30000);

})