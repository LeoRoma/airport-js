'use strict';

describe("Airport", function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

  it("should be able to land a plane", function() {
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });
});
