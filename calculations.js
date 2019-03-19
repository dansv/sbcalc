let scores = []
let ratings = []
$.ajax({
  url: "data/users.json",
  dataType: "json",
  success: function(response) {
    $.each(response, function(key, val) {
      console.log("key: " + key)
      console.log("val: " + val)
    });
  }
})
