package main

import (
	"log"
	"net/http"

	"github.com/plan-IT-travel/travelapp/api/controllers"
	"github.com/plan-IT-travel/travelapp/api/routes"
	"github.com/plan-IT-travel/travelapp/store"
)

func main() {
	err := store.InitDB()
	if err != nil {
		log.Fatalf("Error initializing database: %v", err)
	}

	db := controllers.NewDBService()

	r := routes.InitializeRouter(db)

	log.Fatal(http.ListenAndServe(":3000", r))
}
