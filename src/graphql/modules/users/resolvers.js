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
        createUser: async (_, {data}, {pubsub}) => {
            const user = await User.create(data);
            pubsub.publish('USER_ADDED', {
                userAdded: user,
            });
            return user;
        },
        
        updateUser: (_, {id, data}) => User.findByIdAndUpdate(id, data, {new: true}), 
        deleteUser: async (_, {id}) => !!(await User.findByIdAndDelete(id)) // !! força que o retorno seja um boolean
    },
    Subscription: {
        userAdded: {
            subscribe: (obj, args, {pubsub}) => pubsub.asyncIterator('USER_ADDED'),
        }
    }
}