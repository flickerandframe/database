document.addEventListener("DOMContentLoaded", function() {
    // Function to get query parameter value by name
    function getQueryParam(name) {
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(window.location.href);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }

    // Get the 'amount' query parameter value
    var firstname = getQueryParam('f');
    var id = getQueryParam('i');
    var note = getQueryParam('n');
    // Update the content of the div with id 'amount' and the Venmo link
    if(firstname !== null && id !== null && note !== null) {

        
        // Update the Venmo link (This example assumes you have a specific URL format for Venmo payments)
        // Note: As of my last update, Venmo does not officially support direct payment links via URL parameters for web integration.
        // You will need to replace this with your actual payment URL or mechanism.

        var name = document.getElementById('name');
        if (name) {
            var nameobj = document.getElementById('name');
            nameobj.innerHTML = "Hello, " + firstname + "!"
        }
        var noted = document.getElementById('note');
        if (noted) {
            var noteobj = document.getElementById('note');
            noteobj.innerHTML = note + "<br><br> These images will remain on this website for 30 days. They will also be saved to a log which can be reuploaded to the web for an additional 7 days per request.<br><br> Here are some highlight photos!"
        }

        var image = document.getElementById('previews1');
        if (image) {
            image.src = "images/" + firstname + "/prev1.png"
        }
        var image = document.getElementById('previews2');
        if (image) {
            image.src = "images/" + firstname + "/prev2.png"
        }
        var image = document.getElementById('previews3');
        if (image) {
            image.src = "images/" + firstname + "/prev3.png"
        }
        var image = document.getElementById('previews4');
        if (image) {
            image.src = "images/" + firstname + "/prev4.png"
        }
        var image = document.getElementById('previews5');
        if (image) {
            image.src = "images/" + firstname + "/prev5.png"
        }
        var image = document.getElementById('previews6');
        if (image) {
            image.src = "images/" + firstname + "/prev6.png"
        }
        var image = document.getElementById('previews7');
        if (image) {
            image.src = "images/" + firstname + "/prev7.png"
        }
        var image = document.getElementById('previews8');
        if (image) {
            image.src = "images/" + firstname + "/prev8.png"
        }
        var image = document.getElementById('previews9');
        if (image) {
            image.src = "images/" + firstname + "/prev9.png"
        }
        var image = document.getElementById('previews10');
        if (image) {
            image.src = "images/" + firstname + "/prev10.png"
        }
        var image = document.getElementById('previews11');
        if (image) {
            image.src = "images/" + firstname + "/prev11.png"
        }
        var image = document.getElementById('previews12');
        if (image) {
            image.src = "images/" + firstname + "/prev12.png"
        }

        var image = document.getElementById('zip');
            if (image) {
                image.href = "images/" + firstname + "/zip.zip"
        }


    } else {
        window.location.href = 'https://flickerandframe.com'
    }
});
