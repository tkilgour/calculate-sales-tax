var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

var results = {};

function sumArray(Array) {
  total = 0;
  for (var num in Array) {
    total += Array[num];
  }
  return total;
}

function calculateSalesTax(salesData, taxRates) {
  for (var provincialData in salesData) {
    var companyName = salesData[provincialData].name;
    var provincialSalesArray = salesData[provincialData].sales;
    var currentProvinceTaxRate = salesTaxRates[salesData[provincialData].province];
    var provincialSales = sumArray(provincialSalesArray);

    if (results[companyName]) {
      results[companyName].totalSales += provincialSales;
      results[companyName].totalTaxes += provincialSales * currentProvinceTaxRate;
    } else {
      results[companyName] = {};
      results[companyName].totalSales = provincialSales;
      results[companyName].totalTaxes = provincialSales * currentProvinceTaxRate;
    }
  }
  return results;
}


console.log(calculateSalesTax(companySalesData));



// var results = salesTaxReport(companySalesData, salesTaxRates);





/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/
