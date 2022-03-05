var fn = function ( param1, param2 ) {
    console.info( this, param1, param2 );
}
 
var newFn = fn.bind( console, 'jose',"quezada" );
 
fn( 'Hello', 'World' );
newFn( 'Goodbye', 'Lenin' );