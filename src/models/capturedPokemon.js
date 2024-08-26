module.exports = (Sequelize, Datatypes)=>{
    return Sequelize.define('capturedPokemon',{
        id: {
        type: Datatypes.STRING, 
        primarykey: true,
        autoIncrement: true
        },
        idPokemon:{
            type: Datatypes.STRING,
            references:{
                models:'pokemon',
                key: 'id'
            }
        },
        userId:{
            type: Datatypes.STRING,
            references: {
                models: 'user', 
                key:'id'
            }
        }
    },{
        tableName: 'capturedPokemon',
        timestamps: true
    });
}