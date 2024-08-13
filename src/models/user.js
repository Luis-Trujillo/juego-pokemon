module.exports = (Sequelize, DataTypes)=>{
    return Sequelize.define('user', {
        userId:{
            type: DataTypes.STRING, 
            primarykey: true, 
            allowNull: false,
            unique: 'userId'
        },
        userCedula:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: 'userCedula'
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
        age:{
            type: DataTypes.STRING,
            allowNull: false
        }
    },{
        tableName: 'user',
        timestamps: true
    });
}