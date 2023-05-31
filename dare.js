function A() 
{
    fetch("https://api.truthordarebot.xyz/v1/dare")
    .then((res) => res.json())
    .then((json) => {
        document.getElementById("a").innerHTML =json.question;
    }
    )

}