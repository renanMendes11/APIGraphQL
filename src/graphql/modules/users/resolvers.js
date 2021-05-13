import User from '../../../models/User';

export default {
    Query: {
        usuarios: () => User.find(),
        getUsuarioById: (_, {id}) => User.findById(id),
        getUsuarioByNome: (_, {nome}) => User.find(nome),
        getUsuarioByEmail: (_, {email}) => User.find(email),
        getUsuarioByIdade: (_, {idade}) => User.find(idade),
        getUsuarioByAtivado: (_, {ativado}) => User.find(ativado)
    },
    Mutation: {
        createUser: (_, {data}) => User.create(data),
        updateUser: (_, {id, data}) => User.findByIdAndUpdate(id, data, {new: true}), 
        deleteUser: async (_, {id}) => !!(await User.findByIdAndDelete(id)) // !! força que o retorno seja um boolean
    },
}