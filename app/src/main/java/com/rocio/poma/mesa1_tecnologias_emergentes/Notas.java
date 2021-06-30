package com.rocio.poma.mesa1_tecnologias_emergentes;

public class Notas {
    String materia;
    String nota;

    public Notas(String materia, String nota) {
        this.materia = materia;
        this.nota = nota;
    }

    public String getMateria() {
        return materia;
    }

    public void setMateria(String materia) {
        this.materia = materia;
    }

    public String getNota() {
        return nota;
    }

    public void setNota(String nota) {
        this.nota = nota;
    }
}
