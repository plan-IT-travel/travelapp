package controllers

import (
	"github.com/jinzhu/gorm"
	"github.com/plan-IT-travel/travelapp/store"
)

type DBService struct {
	DB *gorm.DB
}

func NewDBService() *DBService {
	return &DBService{
		DB: store.GetDB(),
	}
}

type ItineraryService struct {
	DB DBService
}
