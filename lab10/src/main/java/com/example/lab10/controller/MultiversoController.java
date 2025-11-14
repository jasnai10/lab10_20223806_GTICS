package com.example.lab10.controller;

import com.example.lab10.entity.Practicante;
import com.example.lab10.repository.PracticanteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@Controller
@RequestMapping(value = "/")
public class MultiversoController {
    @Autowired
    private PracticanteRepository practicanteRepository;

    @GetMapping(value = "/personajes")
    public String personajes(){
        return "parte1/personajes";
    }

    @GetMapping(value="/practicantes")
    public String practicantes(){
        return "parte3/practicantes";
    }

    @ResponseBody
    @GetMapping(value = "/api/practicante")
    public List<Practicante> listaPracticantes(){
        return practicanteRepository.findAll();
    }

    @ResponseBody
    @PostMapping(value = "/api/practicante")
    public ResponseEntity<HashMap<String, Object>> addPracticante(@RequestBody Practicante practicante,
                                                                  @RequestParam(value = "fetchId", required = false) boolean fetchId){
        HashMap<String, Object> response = new HashMap<>();

        practicanteRepository.save(practicante);

        if (fetchId){
            response.put("id",practicante.getId());
        }
        response.put("estado", "creado");
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }
}