/*Framework de base Jquery like*/
let $ = function (arg) {
    return (arg.substr(0, 1) == '#') ? document.querySelector(arg) : document.querySelectorAll(arg);
};

let character = function(event){
    let x = event.clientX;
    let y = event.clientY;

var newGuy = document.createElement('bomberman');
newGuy.style.position = 'absolute';
newGuy.style.left = x;
newGuy.style.top = y;
newGuy.style.width = '5px';
newGuy.style.height = '5px';
newGuy.style.backgroundColor = 'red';

$('Whoisit').append(newGuy);

}
window.onload = function()
{
    
    canvas.width = 200;
    canvas.height = 200;

    let myInterval = setInterval(animate, 1000/30);

    let tailleMini = 10;
    let tailleMax = canvas.width;
    let tailleActuelle = tailleMini+1;
    let xPos = 0;
    let yPos = 0;
    let vitesse = 1;

    function animate()
    {
	context.clearRect(0, 0, canvas.width, canvas.height);
		
       
        xPos = (canvas.width/2)-(tailleActuelle/2);
        yPos = xPos;
     
        context.fillRect(xPos, yPos, tailleActuelle, tailleActuelle);

        if(tailleActuelle >= tailleMax || tailleActuelle <= tailleMini)
        {
            vitesse *= -1;
        }

        tailleActuelle += vitesse;
    } 
}