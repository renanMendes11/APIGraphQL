import Country from '../../../models/Country';
import State from '../../../models/State';

export default {
    Query: {
        paises: () => Country.find(),
        getPaisById: (_, {id}) => Country.findById(id),
        getPaisByNome: (_, {nome}) => Country.find(nome),
        getPaisByCapital: (_, {capital}) => Country.find(capital),
        getPaisBySigla: (_, {sigla}) => Country.find(sigla)
    },
    Mutation: {
        createCountry: async (_, {data}) => {
			try {
				const response = await Country.create(data)
				if (data.estados) {
					await data.estados.map(estado => {
						State.create({ pais: response._id, ...estado })
					})
				}
				return { estados: data.estados, ...response._doc }
			} catch (error) {
				throw error
			}
		},
        updateCountry: (_, {id, data}) => Country.findOneAndUpdate(id, data, {new: true}), 
        deleteCountry: async (_, {id}) => !!(await Country.findOneAndDelete(id)) // !! força que o retorno seja um boolean
    },
}