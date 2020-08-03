console.log('client.js sourced');

$(document).ready(onReady);

function onReady() {
    console.log('DOM ready');
    getJokes();
}

function getJokes() {
    $.ajax({
        url: '/jokes',
        method: "GET"
    }).then(function (response) {
        for (let i = 0; i < response.length; i++) {
            let joke = response[i];
            console.log(joke);
            $('#displayJokes').empty();
            $('#displayJokes').append(
                `<li>${joke.jokeQuestion} ${joke.punchLine} - submitted by ${joke.whoseJoke}</li>`
            );
        }
    }
    )
}

// whoseJoke: "Danny",
//     // jokeQuestion: "Why do scuba divers fall backwards out of boats?",
//     // punchLine: