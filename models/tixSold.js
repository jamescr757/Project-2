module.exports = function(sequelize, DataTypes) {
    
    const TixSold = sequelize.define("TixSold", {

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
        ticket_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        purchased: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        },
        price: {
            type: DataTypes.DECIMAL(6, 2),
            allowNull: false
        },
        user_name: {
            type: DataTypes.STRING,
            defaultValue: "Master"
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
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

    return TixSold;
  };
  