package com.example.lab10.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value = "/")
public class MultiversoController {

    @GetMapping(value = "/personajes")
    public String personajes(){
        return "parte1/personajes";
    }

    @GetMapping(value="/practicantes")
    public String practicantes(){
        return "parte3/practicantes";
    }


}
