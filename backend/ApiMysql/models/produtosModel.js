module.exports = () => {

    this.getProdutos = (connection, callback) => {
        connection.query(
            'SELECT * FROM produtos;', callback
             );
    };
   return this;
}
