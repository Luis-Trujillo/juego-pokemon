module.exports = (sequelize, DataTypes)=>{
    return Sequelize.define('pokemon',{
        id: {
            type: DataTypes.STRING,
            primarykey: true, 
            allowNull: false,
            unique: 'id'
        }, 
        nombre: {
            type: DataTypes.STRING,
            allowNull: false, 
            unique: 'nombre'
        },
        tipo:{
            type: DataTypes.STRING,
            allowNull: false
        },
        poder:{
            type: DataTypes.STRING,
            allowNull: false
        }
    },{
        tableName: 'pokemon',
        timestamps:true
    });
}