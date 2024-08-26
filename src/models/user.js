module.exports = (Sequelize, DataTypes)=>{
    return Sequelize.define('user', {
        id:{
            type: DataTypes.STRING, 
            primarykey: true, 
            allowNull: false,
            unique: 'id'
        },
        userId:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: 'userId'
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: 'email'
        },
        userName:{
            type: DataTypes.STRING,
            allowNull: false
        },
        userAge:{
            type: DataTypes.STRING,
            allowNull: false
        }
    },{
        tableName: 'user',
        timestamps: true
    });
}