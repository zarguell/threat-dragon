import { Env } from './Env.js';

class GithubEnv extends Env {
    constructor () {
        super('Github');
    }

    get prefix () {
        return 'GITHUB_';
    }

    get properties () {
        return [
            { key: 'CLIENT_ID', required: true },
            { key: 'CLIENT_SECRET', required: true },
            { key: 'SCOPE', required: false }
        ];
    }
}

export default GithubEnv;
