import State from '../../../models/State';
import Country from '../../../models/Country';

export default {
    State: {
        pais: (estado) => Country.findById(estado.pais)
    },
    Query: {
        estados: () => State.find(),
        getEstadoById: (_, {id}) => State.findById(id),
        getEstadoByNome: (_, {nome}) => State.find(nome),
        getEstadoBySigla: (_, {sigla}) => State.find(sigla),
    },
    Mutation: {
        createState: (_, {data}) => State.create(data),
        updateState: (_, {id, data}) => State.findOneAndUpdate(id, data, {new: true}), 
        deleteState: async (_, {id}) => !!(await State.findOneAndDelete(id)) // !! força que o retorno seja um boolean
    },
}