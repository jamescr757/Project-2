module.exports = function(sequelize, DataTypes) {
    
    const TixSold = sequelize.define("TixSold", {

        // should be 8 columns by the end of this model construction
        // no null values for all columns


        // section_number column
        // data type integer
        // validate that the entry is a number and is between 1 and 4

        
        // row_number column
        // data type integer
        // validate that the entry is a number and is between 1 and 20


        // seat_number column
        // data type integer
        // validate that the entry is a number and is between 1 and 30


        // ticket_id column
        // data type integer
        // unique value


        // sold column
        // data type boolean
        // default value is true


        // price column
        // same definition as FaceValue Table
        // data type - decimal number up to $9999.99


        // user_name
        // data type string
        // default value "Master"


        // email column
        // default value "app@gmail.com"
        // validate to make sure entry has email format

    }, {
        // options clause: 

        // don't add s to table name

        // don't add updatedAt and createdAt columns

    });

    return TixSold;
  };
  