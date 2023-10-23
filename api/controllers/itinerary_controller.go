package controllers

import (
	"encoding/json"
	"log"
	"net/http"
	"strconv"

	"github.com/go-playground/validator/v10"
	"github.com/gorilla/mux"
	"github.com/plan-IT-travel/travelapp/api/models"
)

func (db *DBService) GetItineraries(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	params := mux.Vars(r)
	id, err := strconv.Atoi(params["groupid"])
	if err != nil {
		http.Error(w, "Invalid Group ID", http.StatusBadRequest)
		return
	}
	var query models.ItineraryItem
	query.GroupID = id

	var itineraries []models.ItineraryItem

	if err := db.DB.Find(&itineraries, query).Error; err != nil {
		log.Printf("GetItineraries Error Fetching: %v", err)
		http.Error(w, "Internal server error", http.StatusInternalServerError)
		return
	}
	json.NewEncoder(w).Encode(itineraries)
}

func (db *DBService) AddItinerary(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	var itinerary models.ItineraryItem
	err := json.NewDecoder(r.Body).Decode(&itinerary)

	if err != nil {
		log.Printf("AddItinerary Error: %v", err)
		http.Error(w, "Add Itinerary Error with request body", http.StatusBadRequest)
		return
	}
	defer r.Body.Close()

	validate := validator.New()
	err = validate.Struct(itinerary)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	// Add to database
	result := db.DB.Create(&itinerary)
	if result.Error != nil {
		log.Printf("AddItinerary Error Writing to database: %v", result)
		http.Error(w, "Error Writing to Database", http.StatusInternalServerError)
		return
	}

	w.WriteHeader(http.StatusCreated)

	err = json.NewEncoder(w).Encode(itinerary)
	if err != nil {
		log.Printf("AddItinerary Error creating return json: %v", result)
		http.Error(w, "Add Itinerary Error with return json", http.StatusInternalServerError)
		return
	}
}

func (db *DBService) UpdateItinerary(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	var itinerary models.ItineraryItem
	err := json.NewDecoder(r.Body).Decode(&itinerary)

	if err != nil {
		log.Printf("AddItinerary Error: %v", err)
		http.Error(w, "Add Itinerary Error with request body", http.StatusBadRequest)
		return
	}
	defer r.Body.Close()

	validate := validator.New()
	err = validate.Struct(itinerary)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	// Update database
	result := db.DB.Update(&itinerary, itinerary.ID)

	if result.Error != nil {
		log.Printf("UpdateItinerary Error Writing to database: %v", result)
		http.Error(w, "Error updating database", http.StatusInternalServerError)
		return
	}

	w.WriteHeader(http.StatusCreated)

}

func (db *DBService) DeleteItinerary(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	id, err := strconv.Atoi(params["id"])
	if err != nil {
		http.Error(w, "Invalid ID", http.StatusBadRequest)
		return
	}

	result := db.DB.Delete(&models.ItineraryItem{}, id)
	if result.Error != nil {
		log.Printf("DeleteItinerary Error Could not delete from database: %v", result)
		http.Error(w, "Could not delete from database", http.StatusInternalServerError)
		return
	}

	w.WriteHeader(http.StatusNoContent)

}
