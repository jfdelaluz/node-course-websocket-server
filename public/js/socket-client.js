// HTML References
const lblOnline = document.querySelector( '#lblOnline' );
const lblOffline = document.querySelector( '#lblOffline' );
const txtMessage = document.querySelector( '#txtMessage' );
const btnSend = document.querySelector( '#btnSend' );

const socket = io();

socket.on( 'connect', () => {
  lblOffline.style.display = 'none';
  lblOnline.style.display = '';
});

socket.on( 'disconnect', () => {
  lblOnline.style.display = 'none';
  lblOffline.style.display = '';
});

socket.on( 'server-message', payload => {
  console.log( payload );
});

btnSend.addEventListener( 'click', () => {
  if ( txtMessage.value !== '' ) {
    const payload = {
      id: 'ABC123',
      date: new Date().getTime(),
      msg: txtMessage.value,
    };

    socket.emit( 'client-message', payload, ( resp ) => {
      console.log( 'From server', resp );
    });
  }
});
