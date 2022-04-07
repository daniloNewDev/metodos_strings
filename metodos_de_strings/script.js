//Funções e métodos de String - cursosDoMain()

let nome = "Danilo"
    //O método 'length' retorna a quantidade de caracteres da variável:
console.log(nome.length)

//

let bracha = "Baruch HShem"
    //O método 'toLowerCase()' retorna os caracteres da String em caixa baixa:
console.log(bracha.toLowerCase())
console.log(bracha.toUpperCase())

//

let email = "    cursosDoMain     "
    //O método 'trim()' retorna os espaços em branco, indesejados nesse caso, por exemplo um campo de e-mail, ou usuário;
console.log(email.length)
console.log(email.trim())

//

let frase = "Esta é a frase que vamos manipular."
    //O método 'split()' divide uma String em uma lista ordenada de substrings, coloca essas substrings em um Array e retorna um Array;
console.log(frase.split())

let tags = "HTML, PHP, JavaScript, CSS"
    //Aqui o 'split()' retorna Strings separadas dentro de um Array
console.log(tags.split(", "))
    //Aqui foi possível atribuir um Array à uma variável:
let farray = frase.split()
console.log(farray)

//

//O método 'indexOf()' retorna a posição do primeiro caractere dentro da String(Variável na linha 21):
console.log(frase.indexOf("que"))
    //Já o método 'lastIndexOf()' retorna a última posição da primeira letra do valor específico dentro da String:
console.log(frase.lastIndexOf("vamos"))

//

//O método 'concat()' junta duas ou mais Strings(Váriáveis da linha 1 e 25):
console.log(nome.concat(` vai estudar novamente ${tags}.`))

//O método 'slice()' extrai uma parte de uma String antes de retorná-la:
console.log(frase.slice(19, 24))
let frase2 = frase.slice(19, 24)
console.log(frase2)

//O método replace retira uma parte expecífica da String e a substitui por outro atribuído:

let fraseReplaced = frase.replace("vamos", "iremos")
console.log(fraseReplaced)