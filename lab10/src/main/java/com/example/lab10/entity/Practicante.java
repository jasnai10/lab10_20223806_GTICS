package com.example.lab10.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "practicantes")
public class Practicante {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "nombre")
    private String nombre;

    @Column(name = "carrera")
    private String carrera;

    @Column(name = "universidad")
    private String universidad;

    @Column(name = "email")
    private String email;

    @Column(name = "pais")
    private String pais;

    @Column(name = "estado")
    private String estado;
}