module.exports = (Sequelize, DataTypes)=>{
    return Sequelize.define('pokemon',{
        pokemoId: {
            type: DataTypes.INT,
            primarykey: true, 
            allowNull: false,
            unique: 'id'
        }, 
        pokemonName: {
            type: DataTypes.STRING,
            allowNull: false, 
            unique: 'pokemonName'
        },
        pokemonType:{
            type: DataTypes.STRING,
            allowNull: false
        },
        pokemonPower:{
            type: DataTypes.STRING,
            allowNull: false
        }
    },{
        tableName: 'pokemon',
        timestamps:true
    });
}