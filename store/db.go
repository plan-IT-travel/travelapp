package store

import (
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/postgres"
)

var db *gorm.DB

func InitDB() error {
	var err error
	db, err = gorm.Open("postgres", "host=localhost user=postgres dbname=planit sslmode=disable")
	return err
}

func GetDB() *gorm.DB {
	return db
}
