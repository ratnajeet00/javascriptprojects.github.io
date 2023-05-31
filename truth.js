function B() {
    fetch("https://api.truthordarebot.xyz/v1/truth")
    .then((res) => res.json())
    .then((json) => {
        document.getElementById("b").innerHTML=json.question
        
    }
    )
}
