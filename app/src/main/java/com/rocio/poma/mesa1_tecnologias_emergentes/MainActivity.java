package com.rocio.poma.mesa1_tecnologias_emergentes;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.widget.TextView;

import java.util.Iterator;
import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class MainActivity extends AppCompatActivity {

    NotasAPI notasAPI;
    TextView jsonTextView;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        Retrofit retrofit = new Retrofit.Builder()
                .baseUrl("http://localhost:5000/notas/")
                .addConverterFactory(GsonConverterFactory.create())
                .build();

        notasAPI = retrofit.create(NotasAPI.class);
        jsonTextView=findViewById(R.id.jsonTxtView);

        listar();
    }

    public void listar(){

        Call<List<Notas>> paisesCall = notasAPI.getNotas();

        paisesCall.enqueue(new Callback<List<Notas>>() {
            @Override
            public void onResponse(Call<List<Notas>> call, Response<List<Notas>> response) {
                if (response.isSuccessful()){
                    List<Notas> paisesList=response.body();
                    Iterator<Notas> paisesIt= paisesList.iterator();
                    String notas="";
                    while (paisesIt.hasNext()){
                        Notas nota=paisesIt.next();
                        notas=notas+nota.getMateria()+"\n";
                    }
                    jsonTextView.setText(notas);
                }
            }
            @Override
            public void onFailure(Call<List<Notas>> call, Throwable t) {

            }
        });

    }
}