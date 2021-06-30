package com.rocio.poma.mesa1_tecnologias_emergentes;

import java.util.List;

import retrofit2.Call;
import retrofit2.http.GET;

public interface NotasAPI {
    @GET("listar")
    Call<List<Notas>> getNotas();
}
