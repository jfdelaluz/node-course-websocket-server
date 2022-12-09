const socketController = ( socket ) => {

  console.log( 'Client connected', socket.id );

  socket.on( 'disconnect', () => {
    console.log( 'Client disconnected', socket.id );
  });

  socket.on( 'client-message', ( payload, callback ) => {

    const id = 123456;
    callback( id );

    socket.broadcast.emit( 'server-message', {
      ...payload,
      server_response: `Another client's message`,
    });

  });
};

module.exports = {
  socketController
};
