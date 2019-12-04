module.exports = function(sequelize, DataTypes) {
    
    const TicketMaster = sequelize.define("TicketMaster", {

        section_number: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isNumeric: true,
                min: 1,
                max: 4
            }
        },
        row_number: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isNumeric: true,
                min: 1,
                max: 20
            }
        },
        seat_number: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isNumeric: true,
                min: 1,
                max: 30
            }
        },
        purchased: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        price: {
            type: DataTypes.DECIMAL(6, 2),
            allowNull: false
        },
        user_name: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                isEmail: true
            }
        }

    }, {
        // don't add s to table name
        freezeTableName: true,
        // don't add updatedAt and createdAt columns
        timestamps: false
    });

    return TicketMaster;
  };
  