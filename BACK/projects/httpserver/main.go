package main

import (
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"net/http"
	"os"

	"gorm.io/gorm"
)


func enableCors(w *http.ResponseWriter) {
	(*w).Header().Set("Access-Control-Allow-Origin", "*")
	}

	type Response struct {
		Message string `json:"message"`
	}

func getRoot(w http.ResponseWriter, r *http.Request) {
	enableCors(&w);
	response := Response{
		Message: "Hello, this is a sample JSON response!",
	}

	// Convert the response to JSON
	jsonResponse, err := json.Marshal(response)
	if err != nil {
		http.Error(w, "Internal Server Error", http.StatusInternalServerError)
		return
	}

	// Set the content type header to JSON
	w.Header().Set("Content-Type", "application/json")

	// Write the JSON response
	w.Write(jsonResponse)
}

func getHello(w http.ResponseWriter, r *http.Request) {
	enableCors(&w);
	fmt.Printf("got /hello request\n")
	io.WriteString(w, "Hello, HTTP!\n")
}

type User struct {
	gorm.Model
	Email    string
	Username string
}


// func goDataBase(w http.ResponseWriter, r *http.Request) {
// 	Paul := User{
// 		Email: "paultham7@gmail.com",
// 		Username: "Admin",
// 	}

// 	db.Create(&Paul)

// 	json.NewEncoder(w).Encode(Paul)
// 	fmt.Println("Fields Added", Paul)
// }


func main() {

	http.HandleFunc("/", getHello)
	// http.HandleFunc("/hello", goDataBase)

	err := http.ListenAndServe(":3333", nil)
	if errors.Is(err, http.ErrServerClosed) {
		  fmt.Printf("server closed\n")
	  } else if err != nil {
		  fmt.Printf("error starting server: %s\n", err)
		  os.Exit(1)
	  }
	  


}

