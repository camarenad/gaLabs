$("#restoreHomes").hide();
$('#addHome').removeClass('btn-danger').addClass('btn-success');
$('h1').addClass('text-center');

var $newLink = $( '<br><br><a id="zillowLink" href="http://www.zillow.com">Visit Zillow.com</a>' );
$('body').append($newLink);
$('#zillowLink').attr('target', '_blank');

console.log($('#zillowLink').attr('href'));


$('#homes tbody').on('click', 'button', function() {
    $("#restoreHomes").fadeIn(2000);
    $(this).closest('tr').fadeOut(2000);
    var row = $(this).closest('tr');
    removedHomes.push(row[0].outerHTML);
    console.log(removedHomes);
});

$('#addHome').on('click', function(evt) {
    addHome();
});

$('#restoreHomes').on('click', function(evt) {
    restoreHomes();
});

var newHomes = [
    {address: "27569 Cedarwood Drive", sf: "2,535", bedrooms: 3, baths: 2.5, price: "$496,500"},
    {address: "316 Annandale Drive", sf: "1,326", bedrooms: 4, baths: 2, price: "$275,000"},
    {address: "251 Grandview Road", sf: "3,800", bedrooms: 3, baths: 2, price: "$699,900"},
    {address: "28571 Manitoba", sf: "2,960", bedrooms: 4, baths: 3.5, price: "$775,000"}
];



function addHome() {
    var homeToAdd = newHomes.shift();
    
    var homeTemplate = `
    <tr>
        <td>${homeToAdd.address}</td>
        <td>${homeToAdd.sf}</td>
        <td>${homeToAdd.bedrooms}</td>
        <td>${homeToAdd.baths}</td>
        <td>${homeToAdd.price}</td>
        <td><button class="btn btn-xs btn-danger">Remove</button></td>
    </tr>
`
    $('tbody').append(homeTemplate);
    if (newHomes.length === 0) {
        $('#addHome').attr('disabled', true);
    }
}

var removedHomes = [];

function restoreHomes() {
    $('tbody').append(removedHomes);
    removedHomes = [];
}
