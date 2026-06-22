const USE_API = true; // Mude para false para usar JSON local
const API_URL = 'http://localhost:3000/api';
const LOCAL_JSON = './data.json';

async function _get(endpoint) {
    if (USE_API) {
        // Modo API real
        const response = await fetch(`${API_URL}${endpoint}`);
        
        if (!response.ok) {
            throw new Error(`Erro na API ${endpoint}: ${response.status}`);
        }
        
        return await response.json();
    } else {
        // Modo JSON local (seu código original)
        const response = await fetch(LOCAL_JSON);
        
        if (!response.ok) {
            throw new Error(`Erro ao buscar ${endpoint}: status ${response.status}`);
        }
        
        const data = await response.json();
        
        const rotas = {
            '/jogos': data.games,
            '/times': data.teams,
            '/competidores': data.competitors,
            '/confrontos': data.matches,
        };
        
        return rotas[endpoint] ?? [];
    }
}

// Suas funções permanecem IGUAIS
async function getJogos() {
    return _get('/jogos');
}

async function getTimes() {
    return _get('/times');
}

async function getCompetidores() {
    return _get('/competidores');
}

async function getConfrontos() {
    return _get('/confrontos');
}