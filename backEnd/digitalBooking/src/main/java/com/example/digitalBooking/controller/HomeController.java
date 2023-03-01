package com.example.digitalBooking.controller;



import jakarta.servlet.http.HttpServletRequest;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;


@AllArgsConstructor
@CrossOrigin
@RestController
@RequestMapping("/home")
public class HomeController {
    @GetMapping("/home")
    public String home(HttpServletRequest request) { //*temporal hasta unir con Front*//
        UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl("http://127.0.0.1:5173/");
        return "redirect:" + builder.toUriString();
    }

}
