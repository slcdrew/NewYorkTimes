
// $(".form-search").on("click", function(event) {
//     event.preventDefault();
//     clear();
//     var queryURL = buildQueryURL();
// });

// $(".start-clear").on("click", clear);

   var query = "Utah";
//    var startDate = "19000101"
   var endDate  = "20180828"


   function start () {
    var startDate = document.createElement("INPUT");
    startDate.setAttribute("type", "date");
    startDate.setAttribute("value", "19000101");
    console.log(startDate);
   }

   start();

   var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

   url += '?' + $.param({
   'api-key': "38e0db81b58648e593163a849484dbfb",
 'q': query,
 'begin_date':startDate,
 'end_date': endDate
   });

   console.log(url);

   $.ajax({
       url: url,
       method: 'GET',
   }).done(function(result) {
       console.log(result.response.docs);

       console.log(result.response.docs[0]);

       console.log(result.response.docs[0].headline.main);

       console.log(result.response.docs[0].byline.original);

       console.log(result.response.docs[0].snippet);

       console.log(result.response.docs[0].pub_date);

       console.log(result.response.docs[0].web_url);

       // console.log()
   })


   $(".start-search").on("click", function(event){
    console.log("search");
});

$(".start-clear").on("click", function(event){
    console.log("clear");
});