module.exports = function(sequelize, DataTypes) {

    const FaceValue = sequelize.define("FaceValue", {

        // want 3 columns for this table
        // no null values allowed for all columns

        // section_number column with data type integer

        // row_number column with data type integer

        // price column that can accept decimal numbers reflecting dollar amounts up to $9999.99

    }, {
        // options clause: 

        // don't add s to table name

        // don't add updatedAt and createdAt default columns

    });

    return FaceValue;
  };
  