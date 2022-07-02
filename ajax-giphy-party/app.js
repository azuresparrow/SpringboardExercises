const $gifs = $("#gifs");
const search = $("#search");

function appendGif(result){
    console.log(result);
    let $newDiv = $("<div>", {class:"col-md-4 col-12 mb-4"});
    let $newGif = $("<img>", {src: result.data[Math.floor(Math.random()*result.data.length)].images.original.url});
    $newDiv.append($newGif);
    $gifs.append($newDiv);
}

$('#form').on("submit", async (e) => {
    e.preventDefault();
    let searchVal = search.val();
    console.log(searchVal);
    search.val("");
    const res = await axios.get("http://api.giphy.com/v1/gifs/search", {params: {
        q: searchVal,
        api_key: "WhoZcZ5wHCkFlEpgq7zKtGDjFCLhFOKL"
    }});
    appendGif(res.data);
});

$("#remove").on("click", function() {$gifs.empty()});