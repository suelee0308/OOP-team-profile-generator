function generateCSS() {
    return `
    .jumbotron {
        background-color: rgb(0, 0, 160);
        color: white;
    }
    
    .card-deck {
        margin: 0 auto;
        justify-content: center;
    }
    
    .card-header {
        background-color: blue;
        font-size: 25px;
        color: white;
    }
    
    .sub {
        font-size: 20px;
    }
    `
}

module.exports = generateCSS;