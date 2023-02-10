package com.family.gati.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class FamilyNotiDto {
    private int id;
    private String name;
    private String from;
    private String to;

}
