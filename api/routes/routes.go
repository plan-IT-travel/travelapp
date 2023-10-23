package routes

import (
	"net/http"

	"github.com/gorilla/mux"
	"github.com/plan-IT-travel/travelapp/api/controllers"
)

func InitializeRouter(db *controllers.DBService) *mux.Router {
	r := mux.NewRouter()
	r.HandleFunc("/api/itinerary/{groupid:[0-9]+}", func(w http.ResponseWriter, r *http.Request) {
		// First must validate user
		db.GetItineraries(w, r)
	}).Methods(http.MethodGet)

	r.HandleFunc("/api/itinerary", func(w http.ResponseWriter, r *http.Request) {
		// First must validate user
		db.AddItinerary(w, r)
	}).Methods(http.MethodPost)

	r.HandleFunc("/api/itinerary/{id:[0-9]+}", func(w http.ResponseWriter, r *http.Request) {
		// first must validate user
		db.DeleteItinerary(w, r)
	}).Methods(http.MethodDelete)
	return r
}
