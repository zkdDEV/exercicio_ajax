
document.addEventListener('DOMContentLoaded', function()
{
    const avatar = document.getElementById("avatar")
    const nome = document.getElementById('nome')
    const nomeArroba = document.getElementById('nomeArroba')
    const repositorios = document.getElementById('respositorios')
    const seguidores = document.getElementById('seguidores')
    const seguindo = document.getElementById('seguindo')
    const linkPerfil = document.getElementById('link-perfil')
    const endPoint = 'https://api.github.com/users/zkdDEV'

    fetch(endPoint).then(function(resposta)
    {
        return resposta.json()
    })
    .then(function(json)
    {
        avatar.src = json.avatar_url
        nome.innerHTML = json.name
        nomeArroba.innerHTML = json.login
        repositorios.innerHTML = json.public_repos
        seguidores.innerHTML = json.followers
        seguindo.innerHTML = json.following
        linkPerfil.href = json.html_url
    })

})