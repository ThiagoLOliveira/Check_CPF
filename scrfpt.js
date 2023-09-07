//Validador de CPF

//Cpf base, e limpar os sinais de `.` e `-`
let cpfBase = `24034870926`
const cpfLimpo = cpfBase.replace(/\D+/g, '')
const cpfArray = Array.from(cpfLimpo)

//Remover os dois ultimos digitos do cpf
const cpfRemoveFim = cpfArray.slice(0, -2)

//Função de checagem de digitos
function checaCpf() {
    //Conta primeiro digito
    function primeiroNumber() {
        n1 = 10
        let guardar = []
        for (let i in cpfRemoveFim) {
            const conta = cpfRemoveFim[i] * n1
            n1--
            guardar.push(conta)
        }
        const somaTotal = guardar.reduce((ac, valor) => ac += valor, 0)
        const firstNumero = 11 - (somaTotal % 11)

        //Verifica se o numero for maior que 9, caso verdadeiro sera adiciona o 0
        if (firstNumero > 9) {
            const copiaCpf = [...cpfRemoveFim, 0]
            return copiaCpf
        } else {
            const copiaCpf = [...cpfRemoveFim, firstNumero]
            return copiaCpf
        }
    }

    //Checagem do segundo digito
    function secondNumber() {
        const cpfCheck = primeiroNumber()
        n2 = 11
        let guardar = []
        for (let i in primeiroNumber()) {
            const conta = primeiroNumber()[i] * n2
            n2--
            guardar.push(conta)
        }
        const somaTotal = guardar.reduce((ac, valor) => ac += valor, 0)
        const secondNumber = 11 - (somaTotal % 11)

        //Verifica se o numero for maior que 9, caso verdadeiro sera adiciona o 0
        if (secondNumber > 9) {
            const copiaCpf = [...cpfCheck, 0]
            return copiaCpf
        } else {
            const copiaCpf = [...cpfCheck, secondNumber]
            return copiaCpf
        }
    }

    const stringArray = secondNumber().toString()
    const stringArray2 = cpfArray.toString()

    if (stringArray === stringArray2) return console.log(`Seu CPF é valido`) 
    else return console.log(`Seu CPF é invalido`)
}
checaCpf()