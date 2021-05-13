import Country from '../../../models/Country';

export default {
    Query: {
        paises: () => Country.find(),
        getPaisById: (_, {id}) => Country.findById(id),
        getPaisByNome: (_, {nome}) => Country.find(nome),
        getPaisByCapital: (_, {capital}) => Country.find(capital),
        getPaisBySigla: (_, {sigla}) => Country.find(sigla)
    },
    Mutation: {
        createCountry: (_, {data}) => Country.create(data),
        updateCountry: (_, {id, data}) => Country.findOneAndUpdate(id, data, {new: true}), 
        deleteCountry: async (_, {id}) => !!(await Country.findOneAndDelete(id)) // !! força que o retorno seja um boolean
    },
}