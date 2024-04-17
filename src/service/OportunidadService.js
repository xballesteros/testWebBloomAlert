import axios from 'axios';

export class OportunidadService {
    getOportunidades() {
        return axios.get('assets/data/mockData.json').then((res) => res.data.data);
    }
}
