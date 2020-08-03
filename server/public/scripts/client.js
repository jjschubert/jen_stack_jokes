console.log('client.js sourced');

$(document).ready(onReady);

function onReady() {
    console.log('DOM ready');
    $('#addJokeButton').on('click', submitJoke);
    getJokes();
}

function submitJoke() {
    console.log('in submitJokes');
    let newJoke = {
        whoseJoke: $('#whoseJokeIn').val(),
        jokeQuestion: $('#questionIn').val(),
        punchLine: $('#punchlineIn').val(),
    }
    console.log(newJoke);

    $.ajax({
        method: 'POST',
        url: '/jokes',
        data: newJoke,
    }).then(function (response) {
        console.log(response);
        getJokes();
    })
}

function getJokes() {
    $.ajax({
        url: '/jokes',
        method: "GET"
    }).then(function (response) {
        $('#outputDiv').empty();
        for (let i = 0; i < response.length; i++) {
            console.log(response);
            $('#outputDiv').append(
                `<p class='joke'>${response[i].jokeQuestion} ${response[i].punchLine} </p>
                <p class="author">- submitted by ${response[i].whoseJoke}</p>`
            );
        }
    }
    )
}

// whoseJoke: "Danny",
//     // jokeQuestion: "Why do scuba divers fall backwards out of boats?",
//     // punchLine: