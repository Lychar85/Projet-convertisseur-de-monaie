let url = "http://data.fixer.io/api/latest?access_key=79af7a686b44494bf73c2e471f90927d&base=EUR&symbolsGBP,JPY,EUR,USD";

function recupvaleur () {
    $.ajax({
        url: url,
        type: "GET",
        success: function(res,status,req) {
            //console.log(res.rates)
            var rates = res.rates;
            var amount = document.getElementById('fromamount').value;
            //console.log(amount);
            var from = document.getElementById('from').value;
            var to = document.getElementById('to').value;
            var result = amount * rates[to] / rates[from];
            //console.log(result);
            document.getElementById('tomamount').value = result.toFixed()
        }
     })
}
