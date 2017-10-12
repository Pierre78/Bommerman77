/*Framework de base Jquery like*/
var $ = function (arg) {
    return (arg.substr(0, 1) == '#') ? document.querySelector(arg) : document.querySelectorAll(arg);
};

var character = function(event){
    var x = event.clientX;
    var y = event.clientY;

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

    var myInterval = setInterval(animate, 1000/30);

    var tailleMini = 10;
    var tailleMax = canvas.width;
    var tailleActuelle = tailleMini+1;
    var xPos = 0;
    var yPos = 0;
    var vitesse = 1;

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