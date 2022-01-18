const span = document.querySelectorAll('.nom span')[0];
const lettre_c = document.getElementById('c');
const maison = document.getElementById('maison');

span.addEventListener('click', (e) => {
    e.target.classList.add('active');
    e.target.classList.remove('shake');
    var x = lettre_c.getBoundingClientRect();
    var div_secret = "<img id='secret' style='position:absolute; z-index: 30; left:" + (x.left-270) +"px; top:" + (x.top-120) +"px; width: 300px; height: 200px;' src='anim_cv.gif' alt=''>";
    maison.innerHTML += div_secret;
    setTimeout(() => {
        e.target.classList.remove('active');
        var secret = document.getElementById("secret");
        secret.parentElement.removeChild(secret);
	}, 3900)
});




