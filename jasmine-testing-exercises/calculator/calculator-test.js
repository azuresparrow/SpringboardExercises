
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 40000,
    years: 8,
    rate: 5.8
  };
  expect(calculateMonthlyPayment(values)).toEqual('521.77');
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 40000,
    years: 10,
    rate: 6
  };
  expect(calculateMonthlyPayment(values)).toEqual('444.08');
});