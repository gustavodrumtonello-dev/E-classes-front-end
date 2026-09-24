// BASE_URL aponta para o JSON local enquanto a API não está integrada.
// Quando a API estiver pronta, basta trocar para: 'http://localhost:3000/api'
const BASE_URL = 'http://localhost:3000/api/';

async function _get(endpoint) {
    try {
        const response = await fetch(`${BASE_URL}${endpoint}`);

        if (!response.ok) {
            throw new Error(`Erro de link ${response.statusText}`);
        }
        console.log(response);
        const data = await response.json();
        return data;
    } catch (error) {
        alert(`tivemos problemas, tente novamente mais tarde. Erro: ${error}`);
    }
}

// Retorna todos os jogos
async function getJogos() {
    return _get('jogos');
}

// Retorna todos os times
async function getTimes() {
    return _get('times');
}

// Retorna todos os competidores
async function getCompetidores() {
    return _get('competidores');
}

// Retorna todos os confrontos
async function getConfrontos() {
    return _get('confrontos');
}