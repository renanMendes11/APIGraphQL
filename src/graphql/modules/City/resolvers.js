import City from '../../../models/City';
import State from '../../../models/State';

export default {
    City: {
        estado: (cidade) => State.findById(cidade.estado)
    },
    Query: {
        cidades: () => City.find(),
        getCidadeById: (_, {id}) => City.findById(id),
        getCidadeByNome: (_, {nome}) => City.find(nome),
        getCidadeByPopulacao: (_, {populacao}) => City.find(populacao)
    },
    Mutation: {
        createCity: (_, {data}) => City.create(data),
        updateCity: (_, {id, data}) => City.findOneAndUpdate(id, data, {new: true}), 
        deleteCity: async (_, {id}) => !!(await City.findOneAndDelete(id)) // !! força que o retorno seja um boolean
    },
}