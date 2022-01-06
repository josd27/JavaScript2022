
//JAVA
public class Persona{
    private String _nombre;
    private String _apellido;
    private int _edad;


    public getNombre(){
        return this._nombre;
    }

    public setNombre(String nombre){
        this._nombre= nombre;
    }
}

Persona p = new Persona();
p.setNombre("Jose");